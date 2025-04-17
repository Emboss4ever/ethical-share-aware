
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ExternalLink, Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const DeepfakeRisks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate("/risks");
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
          Back to All Risks
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
              <h4 className="font-medium text-purple-700">The Emergence of Deepfake Technology: A Review</h4>
              <p className="text-sm text-gray-500 mt-1">By Mika Westerlund</p>
              <p className="mt-2 text-sm">A comprehensive review exploring the development, implications, and potential impacts of deepfake technology.</p>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">Social Media and the Threats against Human Security – Deepfake and Fake News</h4>
              <p className="text-sm text-gray-500 mt-1">Research Publication</p>
              <a 
                href="https://www.ceeol.com/search/chapter-detail?id=919256" 
                className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">AI-Powered Social Engineering: Understanding the Role of Deepfake Technology in Exploiting Human Trust</h4>
              <p className="text-sm text-gray-500 mt-1">By Harrison Blake</p>
              <a 
                href="https://www.researchgate.net/profile/Harrison-Blake-2/publication/388931016_AI-Powered_Social_Engineering_Understanding_the_Role_of_Deepfake_Technology_in_Exploiting_Human_Trust/links/67ad4e5d96e7fb48b9c0b09c/AI-Powered-Social-Engineering-Understanding-the-Role-of-Deepfake-Technology-in-Exploiting-Human-Trust.pdf" 
                className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
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

          <Separator />
          
          <div>
            <h4 className="font-semibold text-gray-900">Deepfake Risks When Sharing Children on Social Media</h4>
            <p className="mt-2">This video explores the potential dangers of sharing your children's photos and videos on social media platforms, and how this content can be misused through deepfake technology.</p>
            <div className="mt-4 border rounded-lg overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <iframe 
                  src="https://www.youtube.com/embed/-r_2a064dWY" 
                  title="Deepfake Risks When Sharing Children on Social Media"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeepfakeRisks;
