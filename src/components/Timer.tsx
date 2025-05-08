
import React, { useState, useEffect } from "react";
import { formatTime } from "@/lib/quizHelpers";
import { cn } from "@/lib/utils";
import { Timer as TimerIcon } from "lucide-react";

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
  isPaused: boolean;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp, isPaused }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(initialTime);
  
  useEffect(() => {
    if (isPaused) return;
    
    if (remainingSeconds <= 0) {
      onTimeUp();
      return;
    }
    
    const timer = setInterval(() => {
      setRemainingSeconds(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [remainingSeconds, isPaused, onTimeUp]);
  
  // Calculate percentage for visual feedback
  const percentage = (remainingSeconds / initialTime) * 100;
  
  // Determine color based on remaining time
  let timerColorClass = "text-green-600";
  if (percentage < 50) timerColorClass = "text-yellow-600";
  if (percentage < 20) timerColorClass = "text-red-600";
  
  return (
    <div className={cn("flex items-center font-mono text-lg", timerColorClass)}>
      <TimerIcon className="mr-2 h-5 w-5" />
      <span>{formatTime(remainingSeconds)}</span>
    </div>
  );
};

export default Timer;
