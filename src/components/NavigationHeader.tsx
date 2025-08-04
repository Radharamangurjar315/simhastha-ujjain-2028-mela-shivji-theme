import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Map, 
  BarChart3, 
  MessageSquare, 
  GitCompare,
  Bell,
  Sun,
  Moon
} from "lucide-react";
import mahakaleshwarIcon from "@/assets/mahakaleshwar-icon.png";

interface NavigationHeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const NavigationHeader = ({ 
  activeSection, 
  onSectionChange, 
  isDarkMode, 
  onThemeToggle 
}: NavigationHeaderProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'map', label: 'Live Map', icon: Map },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Report Issue', icon: MessageSquare },
    { id: 'comparison', label: 'Before vs After', icon: GitCompare },
  ];

  return (
    <header className="bg-card border-b border-border sacred-gradient sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <img 
              src={mahakaleshwarIcon} 
              alt="Mahakaleshwar" 
              className="w-10 h-10 animate-divine-pulse"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Trinetra</h1>
              <p className="text-white/80 text-sm">Simhastha Kumbh 2028 - AI-Powered Health and Sanitation Monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-divine-pulse"></div>
              <span className="text-sm">AI System Online</span>
            </div>
            <Badge variant="outline" className="text-white border-white/20">
              <Bell className="w-3 h-3 mr-1" />
              5 Active Alerts
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={onThemeToggle}
              className="text-white border-white/20 hover:bg-white/10"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "outline"}
                size="sm"
                onClick={() => onSectionChange(item.id)}
                className={`gap-2 ${
                  activeSection === item.id 
                    ? "bg-white text-primary shadow-lg" 
                    : "text-white border-white/30 bg-white/5 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default NavigationHeader;
