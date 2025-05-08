import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectCard from "@/components/SubjectCard";
import { subjects } from "@/data/subjects";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow" id="subjects">
        <section className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Your Path to Exam Success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into our curated quizzes for English, Mathematics, Accounting,
            Physical Science, and Life Science. Optimized for all devices!
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard key={subject.name} subject={subject} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
