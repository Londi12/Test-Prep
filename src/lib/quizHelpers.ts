
/**
 * Formats a time in seconds to a readable format (mm:ss)
 */
export const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  /**
   * Generates a result summary based on quiz performance
   */
  export const getPerformanceFeedback = (percentage: number): string => {
    if (percentage >= 90) return "Excellent! You've mastered this subject!";
    if (percentage >= 80) return "Great job! You have a strong understanding of this material.";
    if (percentage >= 70) return "Good work! You're on the right track.";
    if (percentage >= 60) return "Not bad! With a bit more study, you'll improve your score.";
    if (percentage >= 50) return "You passed, but there's room for improvement.";
    return "Keep studying! You'll do better next time.";
  };
  