import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  GitCompare, 
  Clock, 
  TrendingUp, 
  Users, 
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Brain,
  BarChart3
} from "lucide-react";

const BeforeAfterComparison = () => {
  const [comparisonMode, setComparisonMode] = useState<'slider' | 'side-by-side'>('side-by-side');
  const [sliderValue, setSliderValue] = useState([50]);

  const comparisonData = [
    {
      category: "Response Time",
      before: {
        value: "145 minutes",
        description: "Manual reporting and dispatch",
        color: "text-red-600",
        icon: Clock
      },
      after: {
        value: "18 minutes",
        description: "AI-powered instant detection",
        color: "text-green-600",
        icon: Clock
      },
      improvement: "87% faster"
    },
    {
      category: "Incident Detection",
      before: {
        value: "65% accuracy",
        description: "Manual observation and reports",
        color: "text-red-600",
        icon: AlertTriangle
      },
      after: {
        value: "94% accuracy",
        description: "AI sensors and predictive analytics",
        color: "text-green-600",
        icon: Brain
      },
      improvement: "29% improvement"
    },
    {
      category: "Resolution Rate",
      before: {
        value: "76%",
        description: "Many issues go unresolved",
        color: "text-red-600",
        icon: XCircle
      },
      after: {
        value: "96%",
        description: "Systematic tracking and follow-up",
        color: "text-green-600",
        icon: CheckCircle
      },
      improvement: "20% increase"
    },
    {
      category: "Staff Efficiency",
      before: {
        value: "40%",
        description: "Reactive, fragmented approach",
        color: "text-red-600",
        icon: Users
      },
      after: {
        value: "85%",
        description: "Proactive, coordinated response",
        color: "text-green-600",
        icon: Users
      },
      improvement: "45% increase"
    }
  ];

  const processComparison = {
    before: {
      title: "Manual System Process",
      steps: [
        { step: 1, action: "Pilgrim notices issue", time: "0 min", status: "manual" },
        { step: 2, action: "Finds nearest volunteer/official", time: "15-30 min", status: "delayed" },
        { step: 3, action: "Verbal reporting", time: "35 min", status: "unreliable" },
        { step: 4, action: "Manual communication chain", time: "60 min", status: "slow" },
        { step: 5, action: "Team dispatch", time: "90 min", status: "inefficient" },
        { step: 6, action: "Issue resolution", time: "145 min", status: "delayed" }
      ]
    },
    after: {
      title: "AI-Powered Smart System",
      steps: [
        { step: 1, action: "AI sensors detect anomaly", time: "0 min", status: "instant" },
        { step: 2, action: "Automated alert generation", time: "1 min", status: "fast" },
        { step: 3, action: "Priority classification", time: "2 min", status: "intelligent" },
        { step: 4, action: "Optimal team assignment", time: "5 min", status: "efficient" },
        { step: 5, action: "GPS-guided dispatch", time: "8 min", status: "precise" },
        { step: 6, action: "Issue resolution", time: "18 min", status: "optimized" }
      ]
    }
  };

  const healthImpactData = {
    before: {
      title: "Manual Hygiene Management",
      metrics: [
        { label: "Disease Outbreaks", value: "12 incidents", color: "text-red-600" },
        { label: "Infection Rate", value: "8.5%", color: "text-red-600" },
        { label: "Critical Health Alerts", value: "45 missed", color: "text-red-600" },
        { label: "Public Health Score", value: "6.2/10", color: "text-red-600" }
      ]
    },
    after: {
      title: "AI-Powered Health Monitoring",
      metrics: [
        { label: "Disease Outbreaks", value: "2 incidents", color: "text-green-600" },
        { label: "Infection Rate", value: "2.1%", color: "text-green-600" },
        { label: "Critical Health Alerts", value: "0 missed", color: "text-green-600" },
        { label: "Public Health Score", value: "9.4/10", color: "text-green-600" }
      ]
    }
  };

  return (
    <div className="space-y-6">
      {/* Comparison Mode Toggle */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <GitCompare className="h-5 w-5 text-primary" />
              System Comparison: Manual vs AI-Powered
            </CardTitle>
            <div className="flex gap-2">
              <Button
                variant={comparisonMode === 'side-by-side' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setComparisonMode('side-by-side')}
              >
                Side by Side
              </Button>
              <Button
                variant={comparisonMode === 'slider' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setComparisonMode('slider')}
              >
                Interactive Slider
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Key Metrics Comparison */}
      <Card className="divine-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Key Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comparisonData.map((item, index) => {
              const BeforeIcon = item.before.icon;
              const AfterIcon = item.after.icon;
              return (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold text-center">{item.category}</h3>
                  
                  {/* Before */}
                  <div className="p-3 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BeforeIcon className="h-4 w-4 text-red-600" />
                      <span className="text-xs font-medium text-red-800">Before (Manual)</span>
                    </div>
                    <div className={`text-lg font-bold ${item.before.color}`}>
                      {item.before.value}
                    </div>
                    <div className="text-xs text-red-700">
                      {item.before.description}
                    </div>
                  </div>

                  {/* After */}
                  <div className="p-3 border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AfterIcon className="h-4 w-4 text-green-600" />
                      <span className="text-xs font-medium text-green-800">After (AI-Powered)</span>
                    </div>
                    <div className={`text-lg font-bold ${item.after.color}`}>
                      {item.after.value}
                    </div>
                    <div className="text-xs text-green-700">
                      {item.after.description}
                    </div>
                  </div>

                  {/* Improvement */}
                  <div className="text-center">
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
                      {item.improvement}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Process Flow Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Manual Process */}
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <XCircle className="h-5 w-5" />
              {processComparison.before.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {processComparison.before.steps.map((step) => (
                <div key={step.step} className="flex items-center gap-4 p-3 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-red-800">{step.action}</div>
                    <div className="text-xs text-red-600">Time: {step.time}</div>
                  </div>
                  <Badge variant="outline" className="border-red-300 text-red-700 bg-red-100">
                    {step.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI-Powered Process */}
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              {processComparison.after.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {processComparison.after.steps.map((step) => (
                <div key={step.step} className="flex items-center gap-4 p-3 border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-green-800">{step.action}</div>
                    <div className="text-xs text-green-600">Time: {step.time}</div>
                  </div>
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-100">
                    {step.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Health Impact Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Shield className="h-5 w-5" />
              {healthImpactData.before.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {healthImpactData.before.metrics.map((metric, index) => (
                <div key={index} className="text-center p-3 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg">
                  <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                  <div className="text-xs text-red-700">{metric.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Shield className="h-5 w-5" />
              {healthImpactData.after.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {healthImpactData.after.metrics.map((metric, index) => (
                <div key={index} className="text-center p-3 border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 rounded-lg">
                  <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                  <div className="text-xs text-green-700">{metric.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Card */}
      <Card className="divine-shadow bg-gradient-to-r from-primary/10 to-sacred-gold/10">
        <CardHeader>
          <CardTitle className="text-center">
            🕉️ Simhastha Kumbh 2028: Technology Serving Devotion
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            With AI-powered monitoring, we ensure that millions of pilgrims can focus on their spiritual journey 
            while technology silently safeguards their health and well-being.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg">
              <div className="text-2xl font-bold text-primary">50M+</div>
              <div className="text-sm text-muted-foreground">Pilgrims Protected</div>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <div className="text-2xl font-bold text-sacred-water">24/7</div>
              <div className="text-sm text-muted-foreground">AI Monitoring</div>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <div className="text-2xl font-bold text-sacred-gold">96%</div>
              <div className="text-sm text-muted-foreground">Issue Resolution</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BeforeAfterComparison;