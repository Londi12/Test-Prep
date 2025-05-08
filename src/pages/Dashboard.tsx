import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  const { user, quizResults } = useAuth();

  // Group results by subject
  const resultsBySubject = React.useMemo(() => {
    const grouped = quizResults.reduce((acc, result) => {
      if (!acc[result.subject]) {
        acc[result.subject] = [];
      }
      acc[result.subject].push(result);
      return acc;
    }, {} as Record<string, typeof quizResults>);

    // Sort results by date within each subject
    Object.keys(grouped).forEach(subject => {
      grouped[subject].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });

    return grouped;
  }, [quizResults]);

  // Calculate overall statistics
  const stats = React.useMemo(() => {
    if (!quizResults.length) return { avgScore: 0, totalQuizzes: 0, bestSubject: 'N/A' };

    const totalQuizzes = quizResults.length;
    const avgScore = quizResults.reduce((sum, result) => sum + result.percentage, 0) / totalQuizzes;
    
    // Calculate average score per subject
    const subjectScores = Object.entries(resultsBySubject).map(([subject, results]) => ({
      subject,
      avgScore: results.reduce((sum, r) => sum + r.percentage, 0) / results.length
    }));
    
    const bestSubject = subjectScores.sort((a, b) => b.avgScore - a.avgScore)[0]?.subject || 'N/A';

    return { avgScore, totalQuizzes, bestSubject };
  }, [quizResults, resultsBySubject]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.name}!</h1>
          
          {/* Overview Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Average Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{Math.round(stats.avgScore)}%</div>
                <Progress value={stats.avgScore} className="mt-2" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Quizzes Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalQuizzes}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Best Subject
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.bestSubject}</div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Results */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all">All Results</TabsTrigger>
                  {Object.keys(resultsBySubject).map(subject => (
                    <TabsTrigger key={subject} value={subject}>
                      {subject}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="all">
                  <ScrollArea className="h-[400px] w-full">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Quiz</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead className="text-right">Score</TableHead>
                          <TableHead className="text-right">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {quizResults.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                          .map((result, index) => (
                            <TableRow key={index}>
                              <TableCell>{result.quizTitle}</TableCell>
                              <TableCell>{result.subject}</TableCell>
                              <TableCell className="text-right">{result.percentage}%</TableCell>
                              <TableCell className="text-right">
                                {new Date(result.date).toLocaleDateString()}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </TabsContent>

                {Object.entries(resultsBySubject).map(([subject, results]) => (
                  <TabsContent key={subject} value={subject}>
                    <ScrollArea className="h-[400px] w-full">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Quiz</TableHead>
                            <TableHead className="text-right">Score</TableHead>
                            <TableHead className="text-right">Date</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {results.map((result, index) => (
                            <TableRow key={index}>
                              <TableCell>{result.quizTitle}</TableCell>
                              <TableCell className="text-right">{result.percentage}%</TableCell>
                              <TableCell className="text-right">
                                {new Date(result.date).toLocaleDateString()}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
