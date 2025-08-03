import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { BarChart3, TrendingUp, Clock, Users } from "lucide-react";

const AnalyticsSection = () => {
  // Mock data for charts
  const satisfactionData = [
    { name: 'Very Satisfied', value: 35, color: '#10b981' },
    { name: 'Satisfied', value: 28, color: '#22c55e' },
    { name: 'Neutral', value: 20, color: '#fbbf24' },
    { name: 'Unsatisfied', value: 12, color: '#f59e0b' },
    { name: 'Very Unsatisfied', value: 5, color: '#ef4444' }
  ];

  const responseTimeData = [
    { system: 'Manual System', avgTime: 145, color: '#ef4444' },
    { system: 'Smart AI System', avgTime: 18, color: '#10b981' }
  ];

  const incidentTrendsData = [
    { month: 'Jan', manual: 120, ai: 45 },
    { month: 'Feb', manual: 135, ai: 38 },
    { month: 'Mar', manual: 150, ai: 42 },
    { month: 'Apr', manual: 140, ai: 35 },
    { month: 'May', manual: 160, ai: 40 },
    { month: 'Jun', manual: 155, ai: 32 }
  ];

  const areaWiseData = [
    { area: 'Ghat Area 1', incidents: 15, resolved: 14 },
    { area: 'Ghat Area 2', incidents: 12, resolved: 11 },
    { area: 'Temple Complex', incidents: 8, resolved: 8 },
    { area: 'Main Market', incidents: 18, resolved: 16 },
    { area: 'Sector 7', incidents: 10, resolved: 9 },
    { area: 'Medical Zone', incidents: 5, resolved: 5 }
  ];

  const performanceMetrics = [
    {
      title: "Response Time Improvement",
      oldValue: "145 minutes",
      newValue: "18 minutes",
      improvement: "87% faster",
      icon: Clock,
      color: "text-sacred-water"
    },
    {
      title: "Incident Resolution Rate",
      oldValue: "76%",
      newValue: "96%",
      improvement: "20% increase",
      icon: TrendingUp,
      color: "text-sacred-gold"
    },
    {
      title: "System Accuracy",
      oldValue: "65%",
      newValue: "94%",
      improvement: "29% increase",
      icon: BarChart3,
      color: "text-primary"
    },
    {
      title: "Staff Efficiency",
      oldValue: "40%",
      newValue: "85%",
      improvement: "45% increase",
      icon: Users,
      color: "text-green-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Performance Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="temple-border bg-gradient-to-br from-card to-accent/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Old:</span>
                    <span className="font-medium">{metric.oldValue}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">New:</span>
                    <span className={`font-bold ${metric.color}`}>{metric.newValue}</span>
                  </div>
                  <div className="text-xs text-center font-medium text-green-600 bg-green-50 dark:bg-green-950 rounded px-2 py-1">
                    {metric.improvement}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Satisfaction Survey */}
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Pilgrim Satisfaction Survey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {satisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Survey of 10,000+ pilgrims across all areas
              </p>
              <p className="text-xs text-green-600 font-medium">
                63% satisfaction rate (vs 42% manual system)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Response Time Comparison */}
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Response Time: Old vs Smart System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={responseTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="system" />
                  <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`${value} minutes`, 'Response Time']} />
                  <Bar dataKey="avgTime" fill="#8884d8">
                    {responseTimeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Average incident response time comparison
              </p>
              <p className="text-xs text-green-600 font-medium">
                87% improvement with AI-powered system
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Incident Trends */}
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Incident Resolution Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={incidentTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'Incidents', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="manual" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    name="Manual System"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="ai" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    name="AI System"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Monthly incident comparison over 6 months
              </p>
              <p className="text-xs text-green-600 font-medium">
                75% reduction in unresolved incidents
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Area-wise Performance */}
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Area-wise Incident Resolution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={areaWiseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="area" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="incidents" fill="#fbbf24" name="Total Incidents" />
                  <Bar dataKey="resolved" fill="#10b981" name="Resolved" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Incident resolution by area (current week)
              </p>
              <p className="text-xs text-green-600 font-medium">
                96% overall resolution rate
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsSection;