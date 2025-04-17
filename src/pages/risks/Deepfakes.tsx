import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ExternalLink, Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DeepfakeRisks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    const state = location.state as { fromQuizResults?: boolean };
    if (state?.fromQuizResults) {
      navigate('/quiz-results');
    } else {
      navigate("/risks");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button 
          variant="ghost" 
          onClick={handleGoBack} 
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Results
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="flex items-center"
        >
          <Home className="mr-2 h-4 w-4" />
          Back to Homepage
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Deepfake Exploitation</CardTitle>
          <CardDescription>
            AI-generated synthetic media can be created using your photos and videos.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Creation of fake compromising content</li>
              <li>Impersonation for scams and fraud</li>
              <li>Reputation damage through synthetic media</li>
              <li>Voice cloning for social engineering</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prevention Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Limit public photos and videos</li>
              <li>Use watermarks on professional content</li>
              <li>Enable face recognition alerts where available</li>
              <li>Monitor your digital presence regularly</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learn More About This Technology</CardTitle>
          <CardDescription>
            Academic research on deepfakes and synthetic media
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">The Creation and Detection of Deepfakes: A Survey</h4>
              <p className="text-sm text-gray-500 mt-1">ACM Computing Surveys (2022)</p>
              <p className="mt-2 text-sm">This comprehensive survey examines the technical aspects of deepfake creation and detection methods, with a focus on machine learning approaches.</p>
              <a href="https://doi.org/10.1145/3509939" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">Ethical and Social Implications of Deepfakes</h4>
              <p className="text-sm text-gray-500 mt-1">Journal of Ethics and Information Technology (2021)</p>
              <p className="mt-2 text-sm">An exploration of the ethical considerations surrounding deepfake technology, examining social impact, privacy concerns, and potential regulatory frameworks.</p>
              <a href="https://doi.org/10.1007/s10676-020-09564-w" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">Deepfakes and Disinformation: Exploring the Impact on Political Discourse</h4>
              <p className="text-sm text-gray-500 mt-1">Journal of Political Communication (2023)</p>
              <p className="mt-2 text-sm">Examines how deepfake technology is changing the landscape of political communications and its implications for democratic processes.</p>
              <a href="https://doi.org/10.1080/10584609.2023.2176301" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>In Real Life</CardTitle>
          <CardDescription>
            Real-world examples and journalistic coverage of deepfakes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">The Tom Cruise TikTok Deepfakes</h4>
            <p className="mt-2">In 2021, a series of highly realistic deepfake videos featuring actor Tom Cruise went viral on TikTok. Created by visual effects artist Chris Ume, these videos demonstrated how convincing deepfake technology had become, sparking widespread discussions about the future implications of such technology.</p>
            <a href="https://www.theverge.com/2021/3/5/22314980/tom-cruise-deepfake-tiktok-videos-ai-impersonator-chris-ume-miles-fisher" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              Read Article <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-gray-900">Journalistic Investigation: When Seeing Isn't Believing</h4>
            <p className="mt-2">The Washington Post explores the implications of deepfake technology for journalism, truth, and public trust, examining specific cases and potential safeguards.</p>
            <a href="https://www.washingtonpost.com/technology/2023/03/21/ai-voice-deepfake-scam/" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              Read Article <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeepfakeRisks;
