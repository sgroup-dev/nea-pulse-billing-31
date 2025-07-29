import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { 
  FileText, 
  Settings,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { title: "Settings", url: "/customer/settings", icon: Settings },
];

export default function CustomerDashboard() {
  return (
    <DashboardLayout
      title="Customer Dashboard"
      userRole="Customer"
      userName="Gopal Maharjan"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-6">
        {/* Customer Info */}
        <Card className="bg-gradient-to-r from-info/10 to-success/10 border-l-4 border-l-info">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Gopal Maharjan</h2>
                <p className="text-sm text-muted-foreground">Customer ID: CUST-12345 | Meter No: 45123789</p>
                <p className="text-sm text-muted-foreground">Address: Thamel, Kathmandu</p>
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
            title="Bills Paid"
            value="8"
            icon={CheckCircle}
            variant="success"
          />
          <StatCard
            title="Pending Bills"
            value="1"
            icon={AlertCircle}
            variant="warning"
          />
          <StatCard
            title="Amount Owed"
            value="NPR 2,450"
            icon={DollarSign}
            variant="warning"
          />
          <StatCard
            title="Total Paid (This Year)"
            value="NPR 18,740"
            icon={DollarSign}
            variant="info"
          />
        </div>

        {/* Current Bill */}
        <Card className="border-l-4 border-l-warning bg-warning/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertCircle className="h-5 w-5" />
              Current Outstanding Bill
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm text-muted-foreground">Bill Month</p>
                <p className="font-semibold">December 2024</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Units Consumed</p>
                <p className="font-semibold">245 kWh</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Amount Due</p>
                <p className="font-semibold text-warning">NPR 2,450</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Due Date</p>
                <p className="font-semibold text-destructive">Jan 15, 2025</p>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full md:w-auto">
                <DollarSign className="h-4 w-4 mr-2" />
                Pay Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Bills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Bills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <div>
                    <p className="font-medium">December 2024</p>
                    <p className="text-sm text-muted-foreground">245 kWh consumed</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-warning">NPR 2,450</p>
                  <Badge variant="outline" className="text-warning border-warning">Pending</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div>
                    <p className="font-medium">November 2024</p>
                    <p className="text-sm text-muted-foreground">198 kWh consumed</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">NPR 1,980</p>
                  <Badge variant="outline" className="text-success border-success">Paid</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div>
                    <p className="font-medium">October 2024</p>
                    <p className="text-sm text-muted-foreground">167 kWh consumed</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">NPR 1,670</p>
                  <Badge variant="outline" className="text-success border-success">Paid</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment History Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-medium">On Time Payments</span>
                </div>
                <p className="text-2xl font-bold text-success">8</p>
                <p className="text-sm text-muted-foreground">This year</p>
              </div>
              <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-warning" />
                  <span className="font-medium">Late Payments</span>
                </div>
                <p className="text-2xl font-bold text-warning">0</p>
                <p className="text-sm text-muted-foreground">This year</p>
              </div>
              <div className="p-4 bg-info/10 rounded-lg border border-info/20">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-info" />
                  <span className="font-medium">Average Bill</span>
                </div>
                <p className="text-2xl font-bold text-info">NPR 2,092</p>
                <p className="text-sm text-muted-foreground">Monthly average</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}