import React from "react";
import { Link } from "react-router-dom";
import { Subject } from "../types/quiz";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getQuizById } from "@/data/quizzes";

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
    <div className="rounded-xl p-6 card fade-in">
      <div className="flex items-center mb-4 hover-lift">
        <span className="card-icon mr-3 pulse-on-hover">{subject.icon}</span>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          {subject.name}
        </h3>
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        {subject.papers.map((paper) => {
          const mainQuiz = getQuizById(paper.id);
          const subQuizzes = [1, 2, 3].map(num => getQuizById(`${paper.id}-quiz${num}`));
          
          return (
            <AccordionItem key={paper.id} value={paper.id}>
              <AccordionTrigger className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                {paper.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-4 mt-2">
                  <li>
                    <Link 
                      to={paper.path} 
                      className="text-gray-600 hover:text-blue-600 block py-1 transition-colors duration-200 hover-lift"
                    >
                      Full Paper ({mainQuiz?.questions.length || 15} questions)
                    </Link>
                  </li>
                  {subQuizzes.map((quiz, index) => quiz && (
                    <li key={quiz.id}>
                      <Link 
                        to={`${paper.path}/quiz/${index + 1}`} 
                        className="text-gray-600 hover:text-blue-600 block py-1 transition-colors duration-200 hover-lift"
                      >
                        {quiz.title.split(" - ")[1]} ({quiz.questions.length} questions)
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default SubjectCard;
