import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectItem } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function MicroAIAgentBuilder() {
  const [agentName, setAgentName] = useState('');
  const [agentType, setAgentType] = useState('customer_support');
  const [responseStyle, setResponseStyle] = useState('friendly');
  const [trainingData, setTrainingData] = useState('');
  const [previewResponse, setPreviewResponse] = useState('Your Micro AI agent will respond here...');

  const handlePreview = () => {
    setPreviewResponse(
      `Previewing Micro AI response in a ${responseStyle} tone for a ${agentType} agent.`
    );
  };

  return (
    <div className="p-6 space-y-6 bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-800">Micro AI Agent Builder</h1>
      <Card className="border-blue-300">
        <CardContent className="space-y-4">
          <Input
            placeholder="Micro AI Agent Name"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            className="border-blue-300"
          />
          <Select value={agentType} onChange={(e) => setAgentType(e.target.value)} className="border-blue-300">
            <SelectItem value="customer_support">Customer Support Agent</SelectItem>
            <SelectItem value="sales_assistant">Sales Assistant</SelectItem>
            <SelectItem value="booking_agent">Booking Agent</SelectItem>
          </Select>
          <Select value={responseStyle} onChange={(e) => setResponseStyle(e.target.value)} className="border-blue-300">
            <SelectItem value="friendly">Friendly</SelectItem>
            <SelectItem value="formal">Formal</SelectItem>
            <SelectItem value="neutral">Neutral</SelectItem>
          </Select>
          <Textarea
            placeholder="Enter or paste training data (FAQs, scripts, etc.)"
            value={trainingData}
            onChange={(e) => setTrainingData(e.target.value)}
            className="border-blue-300"
          />
          <Button onClick={handlePreview} className="bg-blue-700 hover:bg-blue-800">Preview Micro AI Response</Button>
        </CardContent>
      </Card>
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="deploy">Deploy</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Card className="border-blue-300">
            <CardContent className="p-4 bg-blue-100 rounded-md">
              {previewResponse}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deploy">
          <Card className="border-blue-300">
            <CardContent className="p-4">
              <p>Deploy your customized Micro AI agent to your website, WhatsApp, or via API.</p>
              <Button className="mt-4 bg-blue-700 hover:bg-blue-800">Generate Deployment Code</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
