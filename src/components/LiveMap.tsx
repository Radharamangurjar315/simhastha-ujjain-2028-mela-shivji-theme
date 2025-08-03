import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  RefreshCw,
  Building2,
  Trash2,
  Droplets,
  Heart,
  Filter,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import trishulIcon from "@/assets/trishul-icon.png";
import omWatermark from "@/assets/om-watermark.png";

const LiveMap = () => {
  const mapFilters = [
    { value: "all", label: "All Assets" },
    { value: "toilets", label: "Toilets", icon: Building2 },
    { value: "bins", label: "Waste Bins", icon: Trash2 },
    { value: "water", label: "Water Points", icon: Droplets },
    { value: "medical", label: "Medical Units", icon: Heart }
  ];

  const areaFilters = [
    { value: "all", label: "All Areas" },
    { value: "ghat1", label: "Ghat Area 1" },
    { value: "ghat2", label: "Ghat Area 2" },
    { value: "temple", label: "Temple Complex" },
    { value: "market", label: "Main Market" },
    { value: "sector7", label: "Sector 7" }
  ];

  const mapLegend = [
    { icon: Building2, label: "Toilets", color: "text-blue-500" },
    { icon: Trash2, label: "Waste Bins", color: "text-orange-500" },
    { icon: Droplets, label: "Water Points", color: "text-blue-400" },
    { icon: Heart, label: "Medical Units", color: "text-red-500" },
    { label: "Sacred Sites", color: "bg-sacred-gold", isCircle: true },
    { label: "Holy Ghats", color: "bg-sacred-water", isCircle: true }
  ];

  const statusLegend = [
    { label: "OK - Normal Operation", color: "bg-green-500" },
    { label: "Warning - Attention Needed", color: "bg-yellow-500" },
    { label: "Critical - Immediate Action", color: "bg-red-500" }
  ];

  return (
    <div className="space-y-6">
      {/* Map Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            Map Filters & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by ID or location..." className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Area/Sector</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {areaFilters.map((area) => (
                    <SelectItem key={area.value} value={area.value}>
                      {area.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Asset Type</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {mapFilters.map((filter) => (
                    <SelectItem key={filter.value} value={filter.value}>
                      {filter.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status Filter</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="critical">Critical Only</SelectItem>
                  <SelectItem value="warning">Warning Only</SelectItem>
                  <SelectItem value="ok">OK Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Map */}
      <Card className="divine-shadow">
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
              <span className="text-sm text-muted-foreground">Last: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Legend */}
          <div className="bg-accent/30 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <img src={trishulIcon} alt="Sacred" className="w-4 h-4" />
              Simhastha Monitoring Legend
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-3">
              {mapLegend.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon ? (
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                  ) : (
                    <div className={`w-4 h-4 ${item.color} ${item.isCircle ? 'rounded-full' : ''}`}></div>
                  )}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs">
              {statusLegend.map((status, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div className={`w-3 h-3 ${status.color} rounded-full`}></div>
                  <span>{status.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map */}
          <div className="bg-gradient-to-br from-sacred-water/10 to-sacred-gold/10 h-96 rounded-lg border-2 border-sacred-gold/20 p-4 relative overflow-hidden cursor-crosshair">
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url(${omWatermark})`,
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center'
              }}
            ></div>
            
            {/* Interactive Map Points */}
            <div className="relative z-10 h-full">
              {/* Sacred sites */}
              <div 
                className="absolute top-1/4 left-1/3 w-4 h-4 bg-sacred-gold rounded-full animate-divine-pulse border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                title="Sacred Site - Normal Status"
              ></div>
              <div 
                className="absolute top-1/2 left-1/2 w-6 h-6 bg-sacred-gold rounded-full animate-divine-pulse border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                title="🕉️ Mahakal Temple - Normal Status"
              >
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-sacred-gold whitespace-nowrap">
                  🕉️ Mahakal Temple
                </span>
              </div>
              
              {/* Water points */}
              <div 
                className="absolute top-1/3 left-1/4 w-3 h-3 bg-sacred-water rounded-full border border-white cursor-pointer hover:scale-110 transition-transform"
                title="Water Point W-123 - Normal Status - 95% Quality"
              ></div>
              <div 
                className="absolute top-2/3 left-3/4 w-3 h-3 bg-yellow-500 rounded-full border border-white animate-pulse cursor-pointer hover:scale-110 transition-transform"
                title="Water Point W-456 - Warning - Low Chlorine"
              ></div>
              
              {/* Facilities with status indicators */}
              <div 
                className="absolute top-1/5 left-2/3 w-3 h-3 bg-green-500 rounded-full border border-white cursor-pointer hover:scale-110 transition-transform"
                title="Toilet Block T-789 - Normal Operation - 45% Capacity"
              ></div>
              <div 
                className="absolute top-3/4 left-1/5 w-3 h-3 bg-yellow-500 rounded-full border border-white animate-pulse cursor-pointer hover:scale-110 transition-transform"
                title="Toilet Block T-456 - Warning - 85% Capacity"
              ></div>
              <div 
                className="absolute top-1/2 left-4/5 w-3 h-3 bg-red-500 rounded-full border border-white animate-pulse cursor-pointer hover:scale-110 transition-transform"
                title="Toilet Block T-123 - Critical - 95% Capacity - Overflow Risk!"
              ></div>
              
              {/* Medical units */}
              <div 
                className="absolute top-1/6 left-1/2 w-3 h-3 bg-red-500 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform"
                title="Medical Unit M-001 - Available - 5 Beds Free"
              ></div>
              
              {/* Waste bins */}
              <div 
                className="absolute top-2/3 left-1/3 w-3 h-3 bg-orange-500 rounded-full border border-white cursor-pointer hover:scale-110 transition-transform"
                title="Waste Bin B-234 - Normal - 45% Full"
              ></div>
              <div 
                className="absolute bottom-1/5 left-2/3 w-3 h-3 bg-red-500 rounded-full border border-white animate-pulse cursor-pointer hover:scale-110 transition-transform"
                title="Waste Bin Cluster B-567 - Critical - 95% Full - Collection Needed!"
              ></div>
              
              {/* Holy Ghats */}
              <div 
                className="absolute bottom-1/4 left-1/6 w-5 h-3 bg-sacred-water/70 rounded border border-sacred-water cursor-pointer hover:scale-110 transition-transform"
                title="Holy Ghat G-1 - Active - 500 Pilgrims"
              ></div>
              <div 
                className="absolute bottom-1/3 right-1/4 w-5 h-3 bg-sacred-water/70 rounded border border-sacred-water cursor-pointer hover:scale-110 transition-transform"
                title="Holy Ghat G-2 - Active - 750 Pilgrims"
              ></div>
            </div>
          </div>

          {/* Map Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="text-lg font-bold text-green-600">89%</div>
              <div className="text-xs text-muted-foreground">Assets OK</div>
            </div>
            <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <div className="text-lg font-bold text-yellow-600">7%</div>
              <div className="text-xs text-muted-foreground">Warnings</div>
            </div>
            <div className="text-center p-3 bg-red-50 dark:bg-red-950 rounded-lg">
              <div className="text-lg font-bold text-red-600">4%</div>
              <div className="text-xs text-muted-foreground">Critical</div>
            </div>
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-lg font-bold text-blue-600">24/7</div>
              <div className="text-xs text-muted-foreground">Monitoring</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveMap;