import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import NavigationHeader from "./NavigationHeader";
import DashboardOverview from "./DashboardOverview";
import LiveMap from "./LiveMap";
import AnalyticsSection from "./AnalyticsSection";
import ReportIssueForm from "./ReportIssueForm";
import BeforeAfterComparison from "./BeforeAfterComparison";
import trishulIcon from "@/assets/trishul-icon.png";
import omWatermark from "@/assets/om-watermark.png";

const SmartMelaApp = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
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
    <div className="min-h-screen bg-background relative">
      {/* Sacred Background Watermark */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${omWatermark})`,
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Navigation Header */}
      <NavigationHeader
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 relative z-10">
        {renderActiveSection()}
      </main>

      {/* Sacred Footer */}
      <footer className="bg-gradient-to-r from-primary/10 to-sacred-gold/10 border-t border-border mt-8 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <img src={trishulIcon} alt="Sacred" className="w-4 h-4 opacity-70" />
              <span>🕉️ हर हर महादेव 🕉️</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center">
              <span>AI-Powered Smart Hygiene Dashboard</span>
              <span className="hidden md:inline">•</span>
              <span>Simhastha Kumbh Mela 2028</span>
              <span className="hidden md:inline">•</span>
              <span>Blessed by Mahakaleshwar</span>
            </div>
            <div className="text-xs opacity-70">
              Developed for the safety and well-being of 50M+ pilgrims
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default SmartMelaApp;