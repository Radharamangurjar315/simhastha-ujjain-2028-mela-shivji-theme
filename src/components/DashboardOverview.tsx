import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  AlertTriangle, 
  Clock, 
  Heart,
  TrendingUp,
  Brain,
  Shield,
  Users
} from "lucide-react";

const DashboardOverview = () => {
  const summaryStats = [
    {
      title: "Total Incidents Today",
      value: "47",
      change: "+2.1%",
      trend: "up",
      icon: Activity,
      color: "text-primary"
    },
    {
      title: "Active Critical Alerts",
      value: "5",
      subtitle: "Immediate action required",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      title: "AI Response Time",
      value: "18m",
      subtitle: "87% faster than manual",
      icon: Clock,
      color: "text-sacred-water"
    },
    {
      title: "System Accuracy",
      value: "94%",
      subtitle: "29% improvement",
      icon: Brain,
      color: "text-sacred-gold"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "Toilet Overflow",
      location: "Ghat Area - T-4532",
      priority: "High",
      time: "2 min ago",
      description: "95% capacity, overflow imminent",
      status: "critical"
    },
    {
      id: 2,
      type: "Water Quality Issue",
      location: "Sector 7 - W-892",
      priority: "Medium",
      time: "8 min ago",
      description: "Chlorine levels below threshold",
      status: "warning"
    },
    {
      id: 3,
      type: "Disease Alert",
      location: "Mahakal Temple Area",
      priority: "High",
      time: "12 min ago",
      description: "Fever cluster detected - 15 cases",
      status: "critical"
    },
    {
      id: 4,
      type: "Bin Collection Needed",
      location: "Main Market",
      priority: "High",
      time: "15 min ago",
      description: "Multiple bins at 85%+ capacity",
      status: "critical"
    }
  ];

  const aiPredictions = [
    {
      title: "Toilet Block 3 Overflow",
      prediction: "Expected in 45 minutes",
      confidence: "92%",
      impact: "High",
      action: "Deploy maintenance team"
    },
    {
      title: "Disease Outbreak Risk",
      prediction: "Potential fever cluster at Sector C",
      confidence: "78%",
      impact: "Critical",
      action: "Increase medical surveillance"
    },
    {
      title: "Water Shortage",
      prediction: "Shortage expected at Ghat 2 in 2 hours",
      confidence: "85%",
      impact: "Medium",
      action: "Prepare water tankers"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="temple-border bg-gradient-to-br from-card to-accent/20 hover:shadow-lg transition-all duration-300 hover:animate-temple-glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                {stat.change && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>{stat.change} from yesterday</span>
                  </div>
                )}
                {stat.subtitle && (
                  <div className="text-xs text-muted-foreground mt-1">{stat.subtitle}</div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Complaints & Alerts */}
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Live Complaints & Critical Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAlerts.map((alert) => (
              <div 
                key={alert.id}
                className={`p-3 border rounded-lg ${
                  alert.status === 'critical' 
                    ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950' 
                    : 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Heart className={`h-4 w-4 ${alert.status === 'critical' ? 'text-red-600' : 'text-yellow-600'}`} />
                    <span className={`font-semibold ${alert.status === 'critical' ? 'text-red-800' : 'text-yellow-800'}`}>
                      {alert.type}
                    </span>
                  </div>
                  <Badge variant={alert.status === 'critical' ? 'destructive' : 'secondary'}>
                    {alert.priority}
                  </Badge>
                </div>
                <p className={`text-sm ${alert.status === 'critical' ? 'text-red-700' : 'text-yellow-700'}`}>
                  {alert.description}
                </p>
                <div className={`flex items-center gap-1 text-xs mt-2 ${alert.status === 'critical' ? 'text-red-600' : 'text-yellow-600'}`}>
                  <span>{alert.location} • {alert.time}</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Complaints & Alerts
            </Button>
          </CardContent>
        </Card>

        {/* AI Predictive Alerts */}
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              AI Predictive Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiPredictions.map((prediction, index) => (
              <div key={index} className="p-4 border border-primary/20 bg-gradient-to-r from-primary/10 to-transparent rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-primary">{prediction.title}</h4>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {prediction.confidence}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{prediction.prediction}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className={`font-medium ${
                    prediction.impact === 'Critical' ? 'text-red-600' : 
                    prediction.impact === 'High' ? 'text-orange-600' : 'text-yellow-600'
                  }`}>
                    Impact: {prediction.impact}
                  </span>
                  <span className="text-muted-foreground">{prediction.action}</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All AI Predictions
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Infrastructure Overview */}
      <Card className="divine-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Infrastructure Status Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-accent/20 rounded-lg">
              <div className="text-2xl font-bold text-foreground">150,847</div>
              <div className="text-sm text-muted-foreground">Total Toilets</div>
              <div className="text-xs text-green-600">89% Operational</div>
            </div>
            <div className="text-center p-4 bg-accent/20 rounded-lg">
              <div className="text-2xl font-bold text-foreground">45,200</div>
              <div className="text-sm text-muted-foreground">Waste Bins</div>
              <div className="text-xs text-yellow-600">74% Average Fill</div>
            </div>
            <div className="text-center p-4 bg-accent/20 rounded-lg">
              <div className="text-2xl font-bold text-foreground">8,950</div>
              <div className="text-sm text-muted-foreground">Water Points</div>
              <div className="text-xs text-green-600">95% Quality OK</div>
            </div>
            <div className="text-center p-4 bg-accent/20 rounded-lg">
              <div className="text-2xl font-bold text-foreground">245</div>
              <div className="text-sm text-muted-foreground">Medical Units</div>
              <div className="text-xs text-green-600">92% Available</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;