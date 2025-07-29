import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  variant?: 'default' | 'success' | 'warning' | 'info';
}

export function StatCard({ title, value, icon: Icon, trend, variant = 'default' }: StatCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'border-l-4 border-l-success bg-success/5';
      case 'warning':
        return 'border-l-4 border-l-warning bg-warning/5';
      case 'info':
        return 'border-l-4 border-l-info bg-info/5';
      default:
        return 'border-l-4 border-l-primary bg-primary/5';
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case 'success':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'info':
        return 'text-info';
      default:
        return 'text-primary';
    }
  };

  return (
    <Card className={`transition-all duration-200 hover:shadow-md ${getVariantStyles()}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={`h-5 w-5 ${getIconStyles()}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {trend && (
          <p className="text-xs text-muted-foreground">
            <span className={trend.isPositive ? "text-success" : "text-destructive"}>
              {trend.isPositive ? "+" : ""}{trend.value}
            </span>{" "}
            from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}