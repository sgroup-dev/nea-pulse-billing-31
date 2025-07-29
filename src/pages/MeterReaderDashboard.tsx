import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { 
  FileText, 
  Plus, 
  Settings,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sidebarItems = [
  { title: "Add Bills", url: "/meter-reader/add-bills", icon: Plus },
  { title: "Settings", url: "/meter-reader/settings", icon: Settings },
];

export default function MeterReaderDashboard() {
  return (
    <DashboardLayout
      title="Meter Reader Dashboard"
      userRole="Meter Reader"
      userName="Ram Shrestha"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-6">
        {/* Reader Info */}
        <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-l-4 border-l-secondary">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Ram Shrestha</h2>
                <p className="text-sm text-muted-foreground">ID: MR-001 | Area: Thamel-Jyatha</p>
              </div>
              <Badge variant="outline" className="bg-success text-success-foreground">
                Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Bills Added Today"
            value="23"
            icon={FileText}
            variant="success"
          />
          <StatCard
            title="Total Customers"
            value="342"
            icon={Users}
            variant="info"
          />
          <StatCard
            title="This Month"
            value="145"
            icon={CheckCircle}
            trend={{ value: "12", isPositive: true }}
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
            <div className="grid gap-3 md:grid-cols-2">
              <Button size="lg" className="h-16 flex flex-col gap-1">
                <Plus className="h-6 w-6" />
                <span>Add New Bill</span>
              </Button>
              <Button size="lg" variant="outline" className="h-16 flex flex-col gap-1">
                <FileText className="h-6 w-6" />
                <span>View My Bills</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Bills Added */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bills Added</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div>
                    <p className="font-medium">Customer: Gopal Maharjan</p>
                    <p className="text-sm text-muted-foreground">Meter No: 45123789</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">NPR 2,450</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div>
                    <p className="font-medium">Customer: Maya Tamang</p>
                    <p className="text-sm text-muted-foreground">Meter No: 45123790</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">NPR 1,890</p>
                  <p className="text-sm text-muted-foreground">3 hours ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div>
                    <p className="font-medium">Customer: Rajesh Thapa</p>
                    <p className="text-sm text-muted-foreground">Meter No: 45123791</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">NPR 3,120</p>
                  <p className="text-sm text-muted-foreground">4 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-medium">Completed</span>
                </div>
                <p className="text-2xl font-bold text-success">145</p>
                <p className="text-sm text-muted-foreground">Bills this month</p>
              </div>
              <div className="p-4 bg-info/10 rounded-lg border border-info/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-info" />
                  <span className="font-medium">Target</span>
                </div>
                <p className="text-2xl font-bold text-info">150</p>
                <p className="text-sm text-muted-foreground">Monthly target</p>
              </div>
            </div>
            <div className="mt-4 bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">96.7%</span>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: '96.7%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}