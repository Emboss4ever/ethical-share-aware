
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DataTheftRisks = () => {
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
          <CardTitle>Data Theft</CardTitle>
          <CardDescription>
            Personal information collected from social media can be used without consent.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Unauthorized collection of personal information</li>
              <li>Metadata extraction from photos and posts</li>
              <li>Cross-platform data aggregation</li>
              <li>AI-powered profiling and prediction</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prevention Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Regularly audit privacy settings across platforms</li>
              <li>Use metadata removal tools before sharing photos</li>
              <li>Limit personal information shared in profiles</li>
              <li>Be cautious with third-party applications connected to social accounts</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learn More About This Technology</CardTitle>
          <CardDescription>
            Academic research on data theft and unauthorized data collection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">Identity Theft and Data Breaches: How Stolen Data Circulates on the Dark Web</h4>
              <p className="text-sm text-gray-500 mt-1">SES Journal (2022)</p>
              <p className="mt-2 text-sm">This study examines the lifecycle of stolen data, tracing how personal information is acquired, sold, and utilized on dark web marketplaces following data breaches.</p>
              <a href="https://www.sesjournal.com/index.php/1/article/view/188" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">An Empirical Investigation of the Effects of Individuality on Responses to Data Theft Crimes</h4>
              <p className="text-sm text-gray-500 mt-1">IEEE Transactions on Technology and Society (2020)</p>
              <p className="mt-2 text-sm">Research analyzing how individual differences affect people's responses to data theft incidents, with implications for designing more effective protection measures and educational campaigns.</p>
              <a href="https://ieeexplore.ieee.org/abstract/document/9024216" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
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
            Real-world examples and journalistic coverage of data theft
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">The Cambridge Analytica Scandal</h4>
            <p className="mt-2">In 2018, it was revealed that Cambridge Analytica had harvested the personal data of millions of Facebook users without their consent. The company used this data to build psychological profiles aimed at influencing voter behavior in political campaigns, including the 2016 U.S. presidential election and the UK Brexit referendum.</p>
            <a href="https://www.theguardian.com/technology/2019/mar/17/the-cambridge-analytica-scandal-changed-the-world-but-it-didnt-change-facebook" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              Read Article <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-gray-900">Journalistic Investigation: The Data Brokers Mining Your Information</h4>
            <p className="mt-2">Reuters investigation into how data brokers collect and sell personal information, often without users' knowledge or meaningful consent.</p>
            <a href="https://www.reuters.com/investigates/special-report/usa-data-brokers/" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              Read Article <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataTheftRisks;
