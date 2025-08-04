import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import NavigationHeader from "./NavigationHeader";
import DashboardOverview from "./DashboardOverview";
import LiveMap from "./LiveMap";
import AnalyticsSection from "./AnalyticsSection";
import ReportIssueForm from "./ReportIssueForm";
import BeforeAfterComparison from "./BeforeAfterComparison";
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Info,
  Phone,
  Activity,
  TrendingUp,
  Users,
  Bell
} from "lucide-react";
import trishulIcon from "@/assets/trishul-icon.png";
import omWatermark from "@/assets/om-watermark.png";
import mahakaleshwarIcon from "@/assets/mahakaleshwar-icon.png";
import rudrakshPattern from "@/assets/rudraksha-pattern.png";
import kalashIcon from "@/assets/kalash-icon.png";

const SmartMelaApp = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [complaintFilter, setComplaintFilter] = useState("all");
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  // Mock complaints data with enhanced properties
  const complaints = [
    {
      id: 1,
      title: "Toilet Block 7 Overflow",
      description: "Sewage overflow causing health hazard",
      location: "Sector C - Ghat Area 1",
      timestamp: "2 mins ago",
      priority: "High",
      status: "Open",
      type: "sanitation",
      coordinates: { lat: 23.1765, lng: 75.7885 }
    },
    {
      id: 2,
      title: "Water Quality Issue",
      description: "Contaminated water reported at pump station",
      location: "Main Market Area",
      timestamp: "8 mins ago",
      priority: "High",
      status: "In Progress",
      type: "water",
      coordinates: { lat: 23.1775, lng: 75.7895 }
    },
    {
      id: 3,
      title: "Waste Bin Full",
      description: "Multiple bins overflowing near temple entrance",
      location: "Mahakal Temple Complex",
      timestamp: "15 mins ago",
      priority: "Medium",
      status: "Open",
      type: "waste",
      coordinates: { lat: 23.1825, lng: 75.7685 }
    },
    {
      id: 4,
      title: "Medical Emergency",
      description: "Requires immediate medical attention",
      location: "Sector A - Medical Zone",
      timestamp: "25 mins ago",
      priority: "High",
      status: "Resolved",
      type: "medical",
      coordinates: { lat: 23.1815, lng: 75.7875 }
    },
    {
      id: 5,
      title: "Lighting Issue",
      description: "Street lights not working properly",
      location: "Sector B - Accommodation",
      timestamp: "1 hour ago",
      priority: "Low",
      status: "Open",
      type: "infrastructure",
      coordinates: { lat: 23.1795, lng: 75.7805 }
    }
  ];

  // Summary statistics
  const stats = [
    {
      title: "Total Complaints",
      value: "127",
      change: "+12 today",
      icon: AlertTriangle,
      color: "text-orange-600",
      tooltip: "Total number of complaints received today"
    },
    {
      title: "Open Incidents",
      value: "23",
      change: "-8 resolved",
      icon: Activity,
      color: "text-red-600",
      tooltip: "Active incidents requiring immediate attention"
    },
    {
      title: "Avg Response Time",
      value: "18 min",
      change: "87% faster",
      icon: Clock,
      color: "text-green-600",
      tooltip: "Average time to respond to critical incidents"
    },
    {
      title: "Critical Alerts",
      value: "5",
      change: "Real-time",
      icon: Bell,
      color: "text-red-500",
      tooltip: "High priority alerts requiring immediate action"
    }
  ];

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-500 text-white animate-pulse font-bold";
      case "Medium": return "bg-orange-500 text-white font-bold";
      case "Low": return "bg-green-500 text-white font-bold";
      default: return "bg-gray-500 text-white font-bold";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "sanitation": return "🚽";
      case "water": return "💧";
      case "waste": return "🗑️";
      case "medical": return "🏥";
      case "infrastructure": return "⚡";
      default: return "⚠️";
    }
  };

  const filteredComplaints = complaints.filter(complaint => {
    if (complaintFilter === "all") return true;
    if (complaintFilter === "high") return complaint.priority === "High";
    if (complaintFilter === "open") return complaint.status === "Open";
    return true;
  });

  const renderComplaints = () => (
    <Card className="temple-border bg-white divine-shadow h-fit">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-sacred-navy text-lg font-bold">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            Active Complaints
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Real-time complaints from pilgrims and officials. High priority items are highlighted.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
        </div>
        <div className="flex gap-2 mt-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button 
                  variant={complaintFilter === "all" ? "sacred" : "outline"} 
                  size="sm"
                  onClick={() => setComplaintFilter("all")}
                  className="font-medium"
                >
                  All ({complaints.length})
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>Show all complaints</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button 
                  variant={complaintFilter === "high" ? "sacred" : "outline"} 
                  size="sm"
                  onClick={() => setComplaintFilter("high")}
                  className="font-medium"
                >
                  High Priority ({complaints.filter(c => c.priority === "High").length})
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>Show only high priority complaints requiring immediate action</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button 
                  variant={complaintFilter === "open" ? "sacred" : "outline"} 
                  size="sm"
                  onClick={() => setComplaintFilter("open")}
                  className="font-medium"
                >
                  Open ({complaints.filter(c => c.status === "Open").length})
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>Show only unresolved complaints</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredComplaints.slice(0, 8).map((complaint) => (
            <TooltipProvider key={complaint.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={`flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-all cursor-pointer ${
                    complaint.priority === "High" ? "border-red-200 bg-red-50/50" : "border-gray-200"
                  }`}>
                    <div className="flex items-center gap-3 flex-1">
                      <div className="text-3xl">{getTypeIcon(complaint.type)}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-base">{complaint.title}</h4>
                        <p className="text-sm text-gray-600 font-medium">{complaint.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1 font-medium">
                            <MapPin className="h-3 w-3" />
                            {complaint.location}
                          </span>
                          <span className="flex items-center gap-1 font-medium">
                            <Clock className="h-3 w-3" />
                            {complaint.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`${getPriorityColor(complaint.priority)} px-3 py-1 text-sm min-w-[80px] text-center`}>
                        {complaint.priority}
                      </Badge>
                      {complaint.priority === "High" && (
                        <Phone className="h-4 w-4 text-red-500 animate-bounce" />
                      )}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p><strong>{complaint.title}</strong></p>
                  <p className="text-xs">{complaint.description}</p>
                  <p className="text-xs mt-1">
                    {complaint.priority === "High" ? "⚠️ Requires immediate action - Contact emergency response team" : 
                     complaint.priority === "Medium" ? "⚡ Address within 1 hour" : 
                     "✅ Standard priority - Address within 4 hours"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderActiveSection = () => {
    if (activeSection === 'dashboard') {
      return (
        <div className="space-y-8">
          {/* Summary Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card className="temple-border bg-white divine-shadow cursor-help hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">{stat.title}</p>
                              <p className="text-4xl font-bold text-gray-900 mt-1">{stat.value}</p>
                              <p className="text-sm text-green-600 font-bold mt-1">{stat.change}</p>
                            </div>
                            <Icon className={`h-10 w-10 ${stat.color}`} />
                          </div>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{stat.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>

          {/* Before/After Toggle */}
          <div className="flex justify-center">
            <div className="flex items-center gap-4 p-3 bg-gray-100 rounded-xl shadow-inner">
              <span className={`px-6 py-3 rounded-lg transition-all font-bold ${!showBeforeAfter ? 'bg-white shadow-md text-sacred-navy' : 'text-gray-600'}`}>
                Current AI Dashboard
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                      className="h-12 w-20 bg-sacred-gold hover:bg-sacred-gold/90 text-white font-bold text-lg rounded-lg"
                    >
                      {showBeforeAfter ? '←' : '→'}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle between current AI system and old manual system comparison</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className={`px-6 py-3 rounded-lg transition-all font-bold ${showBeforeAfter ? 'bg-white shadow-md text-sacred-navy' : 'text-gray-600'}`}>
                Before vs After
              </span>
            </div>
          </div>

          {showBeforeAfter ? (
            <BeforeAfterComparison />
          ) : (
            <>
              {/* Main Dashboard Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Live Map - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <LiveMap />
                </div>
                
                {/* Complaints Panel - Takes 1 column */}
                <div>
                  {renderComplaints()}
                </div>
              </div>

              {/* Dashboard Overview */}
              <DashboardOverview />
            </>
          )}
        </div>
      );
    }

    switch (activeSection) {
      case 'map':
        return <LiveMap />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'reports':
        return <ReportIssueForm />;
      case 'comparison':
        return <BeforeAfterComparison />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white relative">
        {/* Sacred Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 opacity-[0.03]">
            <img src={omWatermark} alt="" className="w-40 h-40" />
          </div>
          <div className="absolute top-20 right-20 opacity-[0.03]">
            <img src={trishulIcon} alt="" className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-[0.03]">
            <img src={mahakaleshwarIcon} alt="" className="w-36 h-36" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-[0.03]">
            <img src={rudrakshPattern} alt="" className="w-40 h-40" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
            <img src={omWatermark} alt="" className="w-96 h-96" />
          </div>
        </div>
        
        {/* Navigation Header */}
        <NavigationHeader
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
        />

        {/* Main Content */}
        <main className="container mx-auto px-8 py-8 relative z-10">
          {renderActiveSection()}
        </main>

        {/* Sacred Footer */}
        <footer className="bg-gradient-to-r from-sacred-water/10 to-sacred-gold/10 border-t border-sacred-gold/20 mt-12 relative z-10">
          <div className="container mx-auto px-8 py-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <img src={mahakaleshwarIcon} alt="Mahakaleshwar" className="w-8 h-8" />
                <span className="text-xl font-bold text-sacred-navy">Simhastha Kumbh Mela 2028</span>
                <img src={kalashIcon} alt="Kalash" className="w-8 h-8" />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm text-gray-600">
                <span className="font-medium">AI-Powered Smart Hygiene & Health Monitoring System</span>
                <span className="hidden md:inline text-sacred-gold">•</span>
                <span className="font-medium">Mahakaleshwar Temple, Ujjain</span>
                <span className="hidden md:inline text-sacred-gold">•</span>
                <span className="font-medium">50M+ Pilgrims Protected</span>
              </div>
              <p className="text-sacred-gold font-bold text-lg">🕉️ हर हर महादेव | Har Har Mahadev 🕉️</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-xs text-gray-500 hover:text-sacred-navy">
                      <Info className="h-3 w-3 mr-1" />
                      About Simhastha Kumbh
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm">
                    <div className="space-y-2">
                      <p className="font-bold">Simhastha Kumbh Mela, Ujjain</p>
                      <p>📅 Held every 12 years at the sacred Mahakaleshwar Temple</p>
                      <p>👥 Attracts over 50 million pilgrims from around the world</p>
                      <p>🏛️ 150,000+ sanitation facilities monitored</p>
                      <p>🤖 This AI system provides real-time health & hygiene monitoring for the safety of all devotees</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </TooltipProvider>
  );
};

export default SmartMelaApp;
