import { ReactNode } from "react";
import { 
  SidebarProvider, 
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LucideIcon, Power } from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  userRole: string;
  userName: string;
  sidebarItems: SidebarItem[];
}

function AppSidebar({ sidebarItems, userRole, userName }: { 
  sidebarItems: SidebarItem[]; 
  userRole: string; 
  userName: string; 
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-primary text-primary-foreground">
        <div className="p-4 border-b border-primary-foreground/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-sm">NEA</span>
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-semibold text-sm">NEA Billing</h2>
                <p className="text-xs text-primary-foreground/80">{userRole}</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-primary-foreground/80">
            {!isCollapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-2 p-2 rounded-md transition-colors ${
                          isActive 
                            ? "bg-primary-foreground/20 text-primary-foreground font-medium" 
                            : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-primary-foreground/20">
          <div className="flex items-center gap-2">
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-primary-foreground">{userName}</p>
                <p className="text-xs text-primary-foreground/80">{userRole}</p>
              </div>
            )}
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.location.href = '/'}
            >
              <Power className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

export function DashboardLayout({ children, title, userRole, userName, sidebarItems }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar sidebarItems={sidebarItems} userRole={userRole} userName={userName} />
        
        <main className="flex-1">
          <header className="h-16 border-b bg-card flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold text-foreground">{title}</h1>
            </div>
            <div className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </header>
          
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}