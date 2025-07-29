import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { 
  Users, 
  FileText, 
  DollarSign, 
  UserPlus, 
  Settings,
  AlertCircle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sidebarItems = [
  { title: "Add Meter Reader", url: "/branch-admin/meter-readers", icon: UserPlus },
  { title: "Add Customer", url: "/branch-admin/customers", icon: Users },
  { title: "Manage Customers", url: "/branch-admin/manage-customers", icon: Settings },
];

export default function BranchAdminDashboard() {
  return (
    <DashboardLayout
      title="Branch Administrator Dashboard"
      userRole="Branch Administrator"
      userName="Ramesh Sharma"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-6">
        {/* Branch Info */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-l-primary">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Kathmandu Central Branch</h2>
                <p className="text-sm text-muted-foreground">Branch Code: KTM-001</p>
              </div>
              <Badge variant="outline" className="bg-success text-success-foreground">
                Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Customers"
            value="2,847"
            icon={Users}
            trend={{ value: "23", isPositive: true }}
            variant="info"
          />
          <StatCard
            title="Bills Paid (This Month)"
            value="2,156"
            icon={FileText}
            trend={{ value: "156", isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Pending Bills"
            value="691"
            icon={AlertCircle}
            trend={{ value: "8", isPositive: false }}
            variant="warning"
          />
          <StatCard
            title="Total Meter Readers"
            value="12"
            icon={UserPlus}
            trend={{ value: "1", isPositive: true }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <StatCard
            title="Monthly Revenue"
            value="NPR 8,45,320"
            icon={DollarSign}
            trend={{ value: "12.5%", isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Overdue Bills"
            value="127"
            icon={Clock}
            trend={{ value: "5", isPositive: false }}
            variant="warning"
          />
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Branch Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-3">
              <Button className="h-12 justify-start" variant="outline">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Meter Reader
              </Button>
              <Button className="h-12 justify-start" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Register Customer
              </Button>
              <Button className="h-12 justify-start" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                View Branch Reports
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Meter Readers Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Meter Reader Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <span className="text-success font-medium text-sm">RS</span>
                  </div>
                  <div>
                    <p className="font-medium">Ram Shrestha</p>
                    <p className="text-sm text-muted-foreground">ID: MR-001</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">145 bills</p>
                  <p className="text-sm text-success">This month</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-info/20 rounded-full flex items-center justify-center">
                    <span className="text-info font-medium text-sm">SP</span>
                  </div>
                  <div>
                    <p className="font-medium">Sita Poudel</p>
                    <p className="text-sm text-muted-foreground">ID: MR-002</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">132 bills</p>
                  <p className="text-sm text-info">This month</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                    <span className="text-warning font-medium text-sm">HG</span>
                  </div>
                  <div>
                    <p className="font-medium">Hari Gautam</p>
                    <p className="text-sm text-muted-foreground">ID: MR-003</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">98 bills</p>
                  <p className="text-sm text-warning">This month</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}