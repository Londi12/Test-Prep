import React, { useState, useEffect, useCallback } from 'react';
import { wcedService } from '@/services/wcedService';
import { SyncStatus } from '@/types/wced';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle, CheckCircle, Trash2 } from 'lucide-react';

const SUBJECTS = [
  'mathematics',
  'physical-science',
  'life-science',
  'accounting',
  'english'
] as const;

type Subject = typeof SUBJECTS[number];

export const WCEDSync: React.FC = () => {
  const [status, setStatus] = useState<SyncStatus>({
    lastSync: new Date(0),
    papersProcessed: 0,
    errors: [],
    inProgress: false
  });

  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [isClearingCache, setIsClearingCache] = useState(false);

  const updateStatus = useCallback(() => {
    setStatus(wcedService.getSyncStatus());
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (status.inProgress) {
      interval = setInterval(updateStatus, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status.inProgress, updateStatus]);

  const handleStartSync = async () => {
    if (selectedSubjects.length === 0) {
      return;
    }

    try {
      await wcedService.startSync(selectedSubjects);
      updateStatus();
    } catch (error: any) {
      console.error('Failed to start sync:', error);
      setStatus(prev => ({
        ...prev,
        errors: [...prev.errors, error.message || 'Failed to start sync']
      }));
    }
  };

  const handleClearCache = async () => {
    setIsClearingCache(true);
    try {
      await wcedService.clearCache();
      setStatus({
        lastSync: new Date(0),
        papersProcessed: 0,
        errors: [],
        inProgress: false
      });
    } catch (error: any) {
      console.error('Failed to clear cache:', error);
      setStatus(prev => ({
        ...prev,
        errors: [...prev.errors, 'Failed to clear cache']
      }));
    } finally {
      setIsClearingCache(false);
    }
  };

  const toggleSubject = (subject: Subject) => {
    setSelectedSubjects(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const progressValue = status.inProgress
    ? (status.papersProcessed / (selectedSubjects.length * 10)) * 100
    : 0;

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">WCED Content Synchronization</h2>
          <p className="text-gray-600 mb-4">
            Synchronize past paper content from the WCED e-Portal. This process respects rate limits
            and may take several minutes to complete. Content is cached for 24 hours.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Select Subjects</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {SUBJECTS.map(subject => (
              <Button
                key={subject}
                variant={selectedSubjects.includes(subject) ? "secondary" : "outline"}
                className="justify-start"
                onClick={() => toggleSubject(subject)}
                disabled={status.inProgress}
              >
                {subject.replace('-', ' ').toUpperCase()}
              </Button>
            ))}
          </div>
        </div>

        {status.inProgress && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sync in progress...</span>
            </div>
            <Progress value={progressValue} />
            <p className="text-sm text-gray-600">
              Processed {status.papersProcessed} papers
              {status.papersProcessed > 0 && ' (cached for 24 hours)'}
            </p>
          </div>
        )}

        {status.errors.length > 0 && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {status.errors.length} errors occurred during sync. Check the console for details.
            </AlertDescription>
          </Alert>
        )}

        {!status.inProgress && status.lastSync.getTime() > 0 && (
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              Last sync completed at {status.lastSync.toLocaleString()}
            </AlertDescription>
          </Alert>
        )}

        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={handleClearCache}
            disabled={status.inProgress || isClearingCache}
          >
            {isClearingCache ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Clearing...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cache
              </>
            )}
          </Button>
          <Button
            onClick={handleStartSync}
            disabled={selectedSubjects.length === 0 || status.inProgress}
            className="min-w-[120px]"
          >
            {status.inProgress ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Syncing...
              </>
            ) : (
              'Start Sync'
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default WCEDSync;