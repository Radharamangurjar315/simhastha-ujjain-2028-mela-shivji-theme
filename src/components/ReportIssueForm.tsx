import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Camera, 
  MapPin, 
  Clock, 
  User,
  AlertTriangle,
  CheckCircle,
  Building2,
  Trash2,
  Droplets,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportIssueForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    issueType: "",
    location: "",
    description: "",
    priority: "",
    userRole: "",
    contactInfo: ""
  });

  const issueTypes = [
    { value: "toilet", label: "Toilet/Sanitation", icon: Building2 },
    { value: "waste", label: "Waste Management", icon: Trash2 },
    { value: "water", label: "Water Quality/Supply", icon: Droplets },
    { value: "medical", label: "Medical Emergency", icon: Heart },
    { value: "crowd", label: "Crowd Management", icon: User },
    { value: "infrastructure", label: "Infrastructure", icon: AlertTriangle },
    { value: "other", label: "Other", icon: MessageSquare }
  ];

  const locations = [
    "Ghat Area 1", "Ghat Area 2", "Temple Complex", "Main Market", 
    "Sector 7", "Medical Zone", "Parking Area", "Food Court", "Other"
  ];

  const priorities = [
    { value: "low", label: "Low", color: "bg-blue-100 text-blue-800" },
    { value: "medium", label: "Medium", color: "bg-yellow-100 text-yellow-800" },
    { value: "high", label: "High", color: "bg-orange-100 text-orange-800" },
    { value: "critical", label: "Critical", color: "bg-red-100 text-red-800" }
  ];

  const userRoles = [
    { value: "official", label: "Government Official" },
    { value: "volunteer", label: "Volunteer" },
    { value: "pilgrim", label: "Pilgrim/Visitor" },
    { value: "vendor", label: "Vendor/Contractor" },
    { value: "medical", label: "Medical Staff" },
    { value: "security", label: "Security Personnel" }
  ];

  const recentReports = [
    {
      id: "R-001",
      type: "Toilet Overflow",
      location: "Ghat Area 1",
      priority: "High",
      status: "In Progress",
      time: "10 minutes ago",
      reporter: "Volunteer"
    },
    {
      id: "R-002",
      type: "Water Quality Issue",
      location: "Sector 7",
      priority: "Medium",
      status: "Assigned",
      time: "25 minutes ago",
      reporter: "Official"
    },
    {
      id: "R-003",
      type: "Medical Emergency",
      location: "Temple Complex",
      priority: "Critical",
      status: "Resolved",
      time: "1 hour ago",
      reporter: "Medical Staff"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Report Submitted Successfully",
      description: `Issue reported with ID: R-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}. We'll investigate immediately.`,
      duration: 5000,
    });

    // Reset form
    setFormData({
      issueType: "",
      location: "",
      description: "",
      priority: "",
      userRole: "",
      contactInfo: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Form */}
        <Card className="lg:col-span-2 divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Report Issue or Submit Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Role */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Your Role</Label>
                <RadioGroup 
                  value={formData.userRole} 
                  onValueChange={(value) => setFormData({...formData, userRole: value})}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {userRoles.map((role) => (
                    <div key={role.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={role.value} id={role.value} />
                      <Label htmlFor={role.value} className="text-sm cursor-pointer">
                        {role.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Issue Type */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Issue Type</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {issueTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <Button
                        key={type.value}
                        type="button"
                        variant={formData.issueType === type.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({...formData, issueType: type.value})}
                        className="flex flex-col gap-2 h-16"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-xs">{type.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Location and Priority */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Priority Level</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {priorities.map((priority) => (
                      <Button
                        key={priority.value}
                        type="button"
                        variant={formData.priority === priority.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({...formData, priority: priority.value})}
                        className="justify-center"
                      >
                        {priority.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe the issue in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Information (Optional)</Label>
                <Input
                  id="contact"
                  placeholder="Phone number or email for follow-up"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
                />
              </div>

              {/* Photo Upload Simulation */}
              <div className="space-y-2">
                <Label>Attach Photo (Optional)</Label>
                <Button type="button" variant="outline" className="w-full gap-2">
                  <Camera className="h-4 w-4" />
                  Upload Photo
                </Button>
                <p className="text-xs text-muted-foreground">
                  Photos help us understand and resolve issues faster
                </p>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full" 
                disabled={!formData.issueType || !formData.location || !formData.description}
              >
                Submit Report
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card className="divine-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="p-3 border rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-sm">{report.type}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {report.location}
                    </div>
                  </div>
                  <Badge 
                    variant={report.priority === 'Critical' ? 'destructive' : 
                            report.priority === 'High' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {report.priority}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{report.time}</span>
                  <div className="flex items-center gap-1">
                    {report.status === 'Resolved' ? (
                      <CheckCircle className="h-3 w-3 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 text-yellow-500" />
                    )}
                    <span className={report.status === 'Resolved' ? 'text-green-600' : 'text-yellow-600'}>
                      {report.status}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Reported by: {report.reporter}
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full text-xs">
              View All Reports
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="divine-shadow">
        <CardHeader>
          <CardTitle>Quick Emergency Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="destructive" className="gap-2 h-16 flex-col">
              <Heart className="h-6 w-6" />
              <span className="text-xs">Medical Emergency</span>
            </Button>
            <Button variant="outline" className="gap-2 h-16 flex-col border-orange-300 text-orange-600 hover:bg-orange-50">
              <Building2 className="h-6 w-6" />
              <span className="text-xs">Toilet Overflow</span>
            </Button>
            <Button variant="outline" className="gap-2 h-16 flex-col border-blue-300 text-blue-600 hover:bg-blue-50">
              <Droplets className="h-6 w-6" />
              <span className="text-xs">Water Issue</span>
            </Button>
            <Button variant="outline" className="gap-2 h-16 flex-col border-yellow-300 text-yellow-600 hover:bg-yellow-50">
              <User className="h-6 w-6" />
              <span className="text-xs">Crowd Control</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportIssueForm;