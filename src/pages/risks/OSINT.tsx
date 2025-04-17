
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const OSINTRisks = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/risks")} 
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
          <CardTitle>OSINT Vulnerabilities</CardTitle>
          <CardDescription>
            Open Source Intelligence (OSINT) involves collecting and analyzing publicly available data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Location tracking through photo metadata and check-ins</li>
              <li>Pattern-of-life analysis revealing daily routines and habits</li>
              <li>Social engineering attacks based on personal information</li>
              <li>Family and friend network mapping for targeted attacks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prevention Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Strip metadata from photos before posting</li>
              <li>Avoid sharing location data in real-time</li>
              <li>Limit personal information in public posts</li>
              <li>Regularly review and update privacy settings</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learn More About This Technology</CardTitle>
          <CardDescription>
            Academic research on OSINT methodologies and implications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">Social Media Intelligence: Opportunities, Limitations, and Ethical Considerations</h4>
              <p className="text-sm text-gray-500 mt-1">Journal of Information Science (2020)</p>
              <p className="mt-2 text-sm">This research examines the ethical considerations of using OSINT techniques for intelligence gathering from social media platforms.</p>
              <a href="https://doi.org/10.1177/0165551519848675" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">OSINT Tools and Methods: A Systematic Review</h4>
              <p className="text-sm text-gray-500 mt-1">Information Security Journal: A Global Perspective (2022)</p>
              <p className="mt-2 text-sm">A comprehensive review of current OSINT methodologies and tools used for digital investigations and security research.</p>
              <a href="https://doi.org/10.1080/19393555.2021.1971289" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">The Ethics of OSINT: Privacy Challenges in the Age of Social Media</h4>
              <p className="text-sm text-gray-500 mt-1">Ethics and Information Technology (2021)</p>
              <p className="mt-2 text-sm">Explores the privacy implications and ethical frameworks needed when applying OSINT techniques to publicly available social media data.</p>
              <a href="https://doi.org/10.1007/s10676-021-09598-8" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
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
            Real-world examples and journalistic coverage of OSINT
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">The Journalist Investigation: Bellingcat and MH17</h4>
            <p className="mt-2">In one of the most well-known applications of OSINT, investigative journalism group Bellingcat used publicly available social media posts, satellite imagery, and other open sources to identify those responsible for shooting down Malaysia Airlines Flight MH17 over Ukraine in 2014.</p>
            <a href="https://www.bellingcat.com/news/uk-and-europe/2019/06/19/identifying-the-separatists-linked-to-the-downing-of-mh17/" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              Read the Article <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-gray-900">Journalistic Coverage: How Open Source Intelligence is Changing Investigative Reporting</h4>
            <p className="mt-2">The New York Times explores how OSINT techniques and digital forensics are transforming investigative journalism and creating a new field of digital verification.</p>
            <a href="https://www.nytimes.com/2022/12/27/magazine/open-source-intelligence-new-york-times.html" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              Read Article <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OSINTRisks;
