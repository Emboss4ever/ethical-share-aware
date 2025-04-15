
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Risks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Social Media Privacy Risks</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding potential threats can help you make more informed decisions about your online presence.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link to="/risks/osint" className="no-underline">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="underline">OSINT Exposure</CardTitle>
                  <CardDescription>Information gathering from publicly available sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Your social media presence can be analyzed to extract patterns, habits, and personal details that you didn't realize you were sharing.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/risks/deepfakes" className="no-underline">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="underline">Deepfake Exploitation</CardTitle>
                  <CardDescription>AI-generated synthetic media</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Photos and videos you share can be used to create convincing fake content that appears to show you saying or doing things you never did.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/risks/identity-theft" className="no-underline">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="underline">Identity Theft</CardTitle>
                  <CardDescription>Unauthorized use of personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Details shared across platforms can be pieced together to impersonate you or create fraudulent accounts in your name.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/risks/data-theft" className="no-underline">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="underline">Data Theft</CardTitle>
                  <CardDescription>Unauthorized collection of personal data</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Your social media activity generates valuable data that can be harvested, analyzed, and used without your knowledge or consent.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Risks;
