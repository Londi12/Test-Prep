// Format time from seconds to MM:SS
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// Get performance level and feedback based on percentage
export const getPerformanceFeedback = (percentage: number): string => {
  if (percentage >= 90) {
    return "Outstanding - Shows excellent understanding";
  } else if (percentage >= 80) {
    return "Very Good - Shows strong understanding";
  } else if (percentage >= 70) {
    return "Good - Shows adequate understanding";
  } else if (percentage >= 60) {
    return "Fair - Needs some improvement";
  } else if (percentage >= 50) {
    return "Needs Work - Review core concepts";
  } else {
    return "Requires Significant Review";
  }
};

// Get subject-specific performance feedback
export const getSubjectFeedback = (subject: string | undefined, percentage: number): string[] => {
  const feedback = [];

  if (!subject) {
    return [
      "Review the topics you found challenging",
      "Practice with similar questions",
      "Take note of common mistakes"
    ];
  }

  // Mathematics feedback
  if (subject.includes('maths')) {
    if (percentage >= 80) {
      feedback.push(
        "Excellent problem-solving skills demonstrated",
        "Keep practicing complex problems",
        "Consider tutoring others to reinforce your understanding"
      );
    } else if (percentage >= 60) {
      feedback.push(
        "Good grasp of basic concepts",
        "Focus on improving problem-solving strategies",
        "Practice more word problems"
      );
    } else {
      feedback.push(
        "Review fundamental mathematical concepts",
        "Work through basic examples step-by-step",
        "Consider seeking additional help"
      );
    }
  }

  // English feedback
  else if (subject.includes('english')) {
    if (percentage >= 80) {
      feedback.push(
        "Strong analytical and comprehension skills",
        "Continue developing critical analysis",
        "Practice more advanced texts"
      );
    } else if (percentage >= 60) {
      feedback.push(
        "Good basic comprehension",
        "Focus on deeper textual analysis",
        "Practice identifying literary devices"
      );
    } else {
      feedback.push(
        "Review reading comprehension strategies",
        "Practice identifying main ideas",
        "Work on understanding context clues"
      );
    }
  }

  // Physical Science feedback
  else if (subject.includes('physical-science')) {
    if (percentage >= 80) {
      feedback.push(
        "Excellent understanding of scientific concepts",
        "Continue exploring practical applications",
        "Try more complex problem scenarios"
      );
    } else if (percentage >= 60) {
      feedback.push(
        "Good grasp of basic principles",
        "Practice more numerical problems",
        "Focus on linking theory to practice"
      );
    } else {
      feedback.push(
        "Review core scientific principles",
        "Focus on understanding key terminology",
        "Practice basic calculations"
      );
    }
  }

  // Life Science feedback
  else if (subject.includes('life-science')) {
    if (percentage >= 80) {
      feedback.push(
        "Strong understanding of biological concepts",
        "Continue exploring real-world applications",
        "Practice complex system interactions"
      );
    } else if (percentage >= 60) {
      feedback.push(
        "Good understanding of basic concepts",
        "Focus on system relationships",
        "Practice diagram interpretations"
      );
    } else {
      feedback.push(
        "Review basic biological principles",
        "Focus on key terminology",
        "Practice process diagrams"
      );
    }
  }

  // Accounting feedback
  else if (subject.includes('accounting')) {
    if (percentage >= 80) {
      feedback.push(
        "Excellent understanding of accounting principles",
        "Practice more complex financial statements",
        "Try advanced problem scenarios"
      );
    } else if (percentage >= 60) {
      feedback.push(
        "Good grasp of basic concepts",
        "Practice more calculations",
        "Review accounting principles"
      );
    } else {
      feedback.push(
        "Review fundamental accounting concepts",
        "Practice basic calculations",
        "Focus on understanding terminology"
      );
    }
  }

  return feedback;
};

// Get topic mastery level
export const getTopicMasteryLevel = (percentage: number): string => {
  if (percentage >= 90) return "Mastered";
  if (percentage >= 80) return "Advanced";
  if (percentage >= 70) return "Proficient";
  if (percentage >= 60) return "Developing";
  if (percentage >= 50) return "Basic";
  return "Needs Review";
};

// Calculate average time per question
export const getAverageTimePerQuestion = (
  timeLimit: number,
  questionsAnswered: number
): string => {
  if (questionsAnswered === 0) return "N/A";
  const avgSeconds = Math.round(timeLimit / questionsAnswered);
  return formatTime(avgSeconds);
};
