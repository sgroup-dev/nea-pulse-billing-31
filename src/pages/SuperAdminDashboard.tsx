import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { 
  Building2, 
  Users, 
  FileText, 
  DollarSign, 
  UserPlus, 
  Plus, 
  MapPin,
  CreditCard,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sidebarItems = [
  { title: "Add Demand Type", url: "/superadmin/demand-types", icon: Plus },
  { title: "Add Branch", url: "/superadmin/branches", icon: MapPin },
  { title: "Add Branch Admin", url: "/superadmin/branch-admin", icon: UserPlus },
  { title: "Payment Methods", url: "/superadmin/payment-methods", icon: CreditCard },
];

export default function SuperAdminDashboard() {
  return (
    <DashboardLayout
      title="Super Administrator Dashboard"
      userRole="Super Administrator"
      userName="Admin User"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Branches"
            value="12"
            icon={Building2}
            trend={{ value: "2", isPositive: true }}
            variant="info"
          />
          <StatCard
            title="Total Employees"
            value="148"
            icon={Users}
            trend={{ value: "8", isPositive: true }}
          />
          <StatCard
            title="Bills Paid Today"
            value="1,247"
            icon={FileText}
            trend={{ value: "23", isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Daily Revenue"
            value="NPR 2,45,670"
            icon={DollarSign}
            trend={{ value: "12%", isPositive: true }}
            variant="success"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Total Customers"
            value="15,420"
            icon={Users}
            trend={{ value: "156", isPositive: true }}
          />
          <StatCard
            title="Pending Bills"
            value="324"
            icon={AlertCircle}
            trend={{ value: "12", isPositive: false }}
            variant="warning"
          />
          <StatCard
            title="Monthly Revenue"
            value="NPR 67,89,450"
            icon={DollarSign}
            trend={{ value: "8.5%", isPositive: true }}
            variant="success"
          />
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <Button className="h-12 justify-start" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add New Branch
              </Button>
              <Button className="h-12 justify-start" variant="outline">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Branch Admin
              </Button>
              <Button className="h-12 justify-start" variant="outline">
                <CreditCard className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
              <Button className="h-12 justify-start" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                View Reports
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">New branch admin added - Kathmandu Branch</span>
                </div>
                <span className="text-xs text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-info rounded-full"></div>
                  <span className="text-sm">Payment method updated - eSewa integration</span>
                </div>
                <span className="text-xs text-muted-foreground">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span className="text-sm">High pending bills in Pokhara Branch</span>
                </div>
                <span className="text-xs text-muted-foreground">6 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}