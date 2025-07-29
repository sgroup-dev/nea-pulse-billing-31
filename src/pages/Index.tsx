import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Building2, 
  UserCheck, 
  User,
  Zap,
  MapPin
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    id: 'superadmin',
    title: 'Super Administrator',
    description: 'Full system access and management',
    icon: Shield,
    color: 'bg-primary',
    path: '/superadmin',
    features: ['Manage Branches', 'Add Branch Admins', 'System Settings', 'Analytics']
  },
  {
    id: 'branchadmin',
    title: 'Branch Administrator',
    description: 'Manage branch operations and staff',
    icon: Building2,
    color: 'bg-secondary',
    path: '/branch-admin',
    features: ['Manage Customers', 'Add Meter Readers', 'Branch Reports', 'Customer Service']
  },
  {
    id: 'meterreader',
    title: 'Meter Reader',
    description: 'Record meter readings and bill generation',
    icon: UserCheck,
    color: 'bg-info',
    path: '/meter-reader',
    features: ['Add Bills', 'Customer Visits', 'Reading Reports', 'Field Operations']
  },
  {
    id: 'customer',
    title: 'Customer',
    description: 'View bills and payment history',
    icon: User,
    color: 'bg-success',
    path: '/customer',
    features: ['View Bills', 'Payment History', 'Usage Reports', 'Account Settings']
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">NEA Billing System</h1>
              <p className="text-primary-foreground/80 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Nepal Electricity Authority
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Select Your Role</h2>
          <p className="text-muted-foreground">Choose your role to access the appropriate dashboard</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {roles.map((role) => (
            <Card 
              key={role.id} 
              className="relative overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer group"
              onClick={() => navigate(role.path)}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${role.color} rounded-lg flex items-center justify-center mb-4`}>
                  <role.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{role.title}</CardTitle>
                <CardDescription className="text-sm">{role.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {role.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full group-hover:bg-primary/90" 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(role.path);
                  }}
                >
                  Access Dashboard
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-12 text-center">
          <Badge variant="outline" className="mb-4">
            Demo System
          </Badge>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            This is a demo NEA billing system built for academic purposes. 
            All data shown is mock data for demonstration. Each role provides 
            different functionalities as per Nepal Electricity Authority's operational needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
