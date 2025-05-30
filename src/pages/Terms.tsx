
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <h2>1. Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.
            </p>
            
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials (information or educational content) on Exam Quiz Hub's website for personal, non-commercial use only.
            </p>
            <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on Exam Quiz Hub's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Exam Quiz Hub's website are provided on an 'as is' basis. Exam Quiz Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2>4. Limitations</h2>
            <p>
              In no event shall Exam Quiz Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Exam Quiz Hub's website, even if Exam Quiz Hub or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Exam Quiz Hub's website could include technical, typographical, or photographic errors. Exam Quiz Hub does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
            
            <h2>6. Links</h2>
            <p>
              Exam Quiz Hub has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Exam Quiz Hub of the site. Use of any such linked website is at the user's own risk.
            </p>
            
            <h2>7. Modifications</h2>
            <p>
              Exam Quiz Hub may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
            
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the country and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
