
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ethicalFrameworks } from "@/data/frameworks";
import { cn } from "@/lib/utils";

const EthicalFrameworks = () => {
  const [activeTab, setActiveTab] = useState(ethicalFrameworks[0].id);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ethical Frameworks</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Understanding different ethical approaches can help you make more intentional decisions about what and how you share online.
        </p>
      </div>

      <Tabs 
        defaultValue={ethicalFrameworks[0].id} 
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6 bg-transparent">
          {ethicalFrameworks.map((framework) => (
            <TabsTrigger 
              key={framework.id} 
              value={framework.id}
              className={cn(
                "px-3 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                "transition-all duration-200 hover:bg-muted"
              )}
            >
              {framework.name.split(" ")[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {ethicalFrameworks.map((framework) => (
          <TabsContent 
            key={framework.id} 
            value={framework.id}
            className={cn(
              "animate-fade-in",
              activeTab === framework.id ? "block" : "hidden"
            )}
          >
            <Card className="border-t-4 shadow-md" style={{ borderTopColor: "hsl(var(--primary))" }}>
              <CardHeader>
                <CardTitle className="text-2xl">{framework.name}</CardTitle>
                <CardDescription className="text-base">
                  {framework.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-lg mb-2">Key Principles</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {framework.principles.map((principle, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-5 h-5 bg-primary/10 text-primary rounded-full flex-shrink-0 flex items-center justify-center text-sm mr-2 mt-0.5">
                            {index + 1}
                          </span>
                          <span>{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Social Media Example</h4>
                    <p className="text-muted-foreground bg-muted p-4 rounded-lg">
                      {framework.socialMediaExample}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default EthicalFrameworks;
