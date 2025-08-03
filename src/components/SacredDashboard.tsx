import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  RefreshCw,
  Users,
  Droplets,
  Trash2,
  Building2,
  Heart,
  Eye,
  Filter,
  TrendingUp,
  Calendar
} from "lucide-react";
import mahakaleshwarIcon from "@/assets/mahakaleshwar-icon.png";
import trishulIcon from "@/assets/trishul-icon.png";
import omWatermark from "@/assets/om-watermark.png";

const SacredDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sacred Navigation Header */}
      <header className="bg-card border-b border-border sacred-gradient">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={mahakaleshwarIcon} 
                alt="Mahakaleshwar" 
                className="w-10 h-10 animate-divine-pulse"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">SmartMela</h1>
                <p className="text-white/80 text-sm">Simhastha Mela 2028 - Health Monitoring System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-divine-pulse"></div>
                <span className="text-sm">System Online</span>
              </div>
              <div className="text-white/80 text-sm">🕉️ Ujjain Admin</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Sacred Metrics Cards */}
          <Card className="temple-border bg-gradient-to-br from-card to-accent/20 hover:shadow-lg transition-all duration-300 hover:animate-temple-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Complaints</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">47</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span>+2.1% from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card className="temple-border bg-gradient-to-br from-card to-accent/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Incidents</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">12</div>
              <div className="text-xs text-muted-foreground mt-1">Requiring attention</div>
            </CardContent>
          </Card>

          <Card className="temple-border bg-gradient-to-br from-card to-accent/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
              <Clock className="h-4 w-4 text-sacred-water" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sacred-water">18m</div>
              <div className="text-xs text-muted-foreground mt-1">87% faster than manual</div>
            </CardContent>
          </Card>

          <Card className="temple-border bg-gradient-to-br from-card to-accent/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
              <Heart className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">5</div>
              <div className="text-xs text-muted-foreground mt-1">Immediate action required</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sacred Monitoring Map */}
          <Card className="lg:col-span-2 divine-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>🕉️ Live Simhastha Monitoring Map</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </Button>
                  <span className="text-sm text-muted-foreground">Last: 12:15:22 PM</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Sacred Legend */}
              <div className="bg-accent/30 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <img src={trishulIcon} alt="Sacred" className="w-4 h-4" />
                  Simhastha Monitoring Legend
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-blue-500" />
                    <span>Toilets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trash2 className="h-4 w-4 text-orange-500" />
                    <span>Waste Bins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-400" />
                    <span>Water Points</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Medical Units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-sacred-gold rounded-full"></div>
                    <span>Sacred Sites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-sacred-water rounded-full"></div>
                    <span>Holy Ghats</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-3 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>OK - Normal Operation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Warning - Attention Needed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Critical - Immediate Action</span>
                  </div>
                </div>
              </div>

              {/* Sacred Map Visualization */}
              <div className="bg-gradient-to-br from-sacred-water/10 to-sacred-gold/10 h-96 rounded-lg border-2 border-sacred-gold/20 p-4 relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url(${omWatermark})`,
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                {/* Simulated map points */}
                <div className="relative z-10 h-full">
                  {/* Sacred sites */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-sacred-gold rounded-full animate-divine-pulse border-2 border-white shadow-lg"></div>
                  <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-sacred-gold rounded-full animate-divine-pulse border-2 border-white shadow-lg">
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-sacred-gold whitespace-nowrap">🕉️ Mahakal Temple</span>
                  </div>
                  
                  {/* Water points */}
                  <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-sacred-water rounded-full border border-white"></div>
                  <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-sacred-water rounded-full border border-white"></div>
                  
                  {/* Facilities with status indicators */}
                  <div className="absolute top-1/5 left-2/3 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                  <div className="absolute top-3/4 left-1/5 w-3 h-3 bg-yellow-500 rounded-full border border-white animate-pulse"></div>
                  <div className="absolute top-1/2 left-4/5 w-3 h-3 bg-red-500 rounded-full border border-white animate-pulse"></div>
                  
                  {/* Holy Ghats */}
                  <div className="absolute bottom-1/4 left-1/6 w-5 h-3 bg-sacred-water/70 rounded border border-sacred-water"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-5 h-3 bg-sacred-water/70 rounded border border-sacred-water"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sacred Complaints Feed */}
          <Card className="divine-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Live Complaints & Alerts
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                    All Areas
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4" />
                    Newest
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* High Priority */}
              <div className="p-3 border border-red-200 bg-red-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-red-600" />
                    <span className="font-semibold text-red-800">Toilet Overflow</span>
                  </div>
                  <Badge variant="destructive">High</Badge>
                </div>
                <p className="text-sm text-red-700">T-4532 at 95% capacity, overflow imminent</p>
                <div className="flex items-center gap-1 text-xs text-red-600 mt-2">
                  <MapPin className="h-3 w-3" />
                  <span>Ghat Area • 2 min ago</span>
                </div>
              </div>

              {/* Medium Priority */}
              <div className="p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">Water Quality Issue</span>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Medium</Badge>
                </div>
                <p className="text-sm text-yellow-700">Chlorine levels below threshold at W-892</p>
                <div className="flex items-center gap-1 text-xs text-yellow-600 mt-2">
                  <MapPin className="h-3 w-3" />
                  <span>Sector 7 • 8 min ago</span>
                </div>
              </div>

              {/* High Priority */}
              <div className="p-3 border border-red-200 bg-red-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Trash2 className="h-4 w-4 text-red-600" />
                    <span className="font-semibold text-red-800">Bin Collection Needed</span>
                  </div>
                  <Badge variant="destructive">High</Badge>
                </div>
                <p className="text-sm text-red-700">Multiple bins at 85%+ capacity</p>
                <div className="flex items-center gap-1 text-xs text-red-600 mt-2">
                  <MapPin className="h-3 w-3" />
                  <span>Main Market • 12 min ago</span>
                </div>
              </div>

              {/* Low Priority */}
              <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-blue-800">Crowd Management</span>
                  </div>
                  <Badge variant="outline" className="border-blue-300 text-blue-700">Low</Badge>
                </div>
                <p className="text-sm text-blue-700">High density area requiring attention</p>
                <div className="flex items-center gap-1 text-xs text-blue-600 mt-2">
                  <MapPin className="h-3 w-3" />
                  <span>🕉️ Mahakal Temple • 15 min ago</span>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Eye className="h-4 w-4 mr-2" />
                View All Complaints (5)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sacred Performance Section */}
        <Card className="mt-6 divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <img src={trishulIcon} alt="Sacred Performance" className="w-5 h-5" />
              System Performance Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Response Time */}
              <div className="text-center p-4 bg-gradient-to-br from-sacred-water/10 to-transparent rounded-lg">
                <Clock className="h-8 w-8 text-sacred-water mx-auto mb-2" />
                <div className="text-2xl font-bold text-sacred-water">18 minutes</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
                <div className="text-xs text-green-600 mt-1">87% faster than manual</div>
              </div>

              {/* Accuracy */}
              <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-transparent rounded-lg">
                <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
                <div className="text-xs text-green-600 mt-1">29% improvement</div>
              </div>

              {/* Resolution Rate */}
              <div className="text-center p-4 bg-gradient-to-br from-sacred-gold/10 to-transparent rounded-lg">
                <TrendingUp className="h-8 w-8 text-sacred-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-sacred-gold">96%</div>
                <div className="text-sm text-muted-foreground">Resolution Rate</div>
                <div className="text-xs text-green-600 mt-1">24% improvement</div>
              </div>
            </div>

            {/* Infrastructure Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <div className="text-lg font-bold text-foreground">150,847</div>
                <div className="text-sm text-muted-foreground">Total Toilets</div>
                <div className="text-xs text-green-600">89% Operational</div>
              </div>
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <div className="text-lg font-bold text-foreground">45,200</div>
                <div className="text-sm text-muted-foreground">Waste Bins</div>
                <div className="text-xs text-yellow-600">74% Average Fill</div>
              </div>
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <div className="text-lg font-bold text-foreground">8,950</div>
                <div className="text-sm text-muted-foreground">Water Points</div>
                <div className="text-xs text-green-600">95% Quality OK</div>
              </div>
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <div className="text-lg font-bold text-foreground">245</div>
                <div className="text-sm text-muted-foreground">Medical Units</div>
                <div className="text-xs text-green-600">92% Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sacred Footer */}
      <footer className="bg-gradient-to-r from-primary/10 to-sacred-gold/10 border-t border-border mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <img src={trishulIcon} alt="Sacred" className="w-4 h-4 opacity-70" />
              <span>🕉️ हर हर महादेव 🕉️</span>
            </div>
            <div className="flex items-center gap-4">
              <span>AI-Powered Smart Hygiene Dashboard</span>
              <span>•</span>
              <span>Blessed by Mahakaleshwar</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SacredDashboard;