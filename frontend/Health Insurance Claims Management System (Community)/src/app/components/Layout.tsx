import { Button } from "./ui/button";
import { cn } from "./ui/utils";

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: string;
  onScreenChange: (screen: string) => void;
}

export function Layout({ children, currentScreen, onScreenChange }: LayoutProps) {
  const navigationItems = [
    { id: 'dashboard', label: 'Claims Dashboard', icon: '📊' },
    { id: 'new-claim', label: 'File New Claim', icon: '📝' },
    { id: 'tracker', label: 'Track Claims', icon: '🔍' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">H+</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900">Health Plus</h1>
                <p className="text-sm text-slate-600">Claims Management System</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-600">John Doe</span>
            <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Navigation */}
        <nav className="mb-6">
          <div className="flex space-x-1 bg-white rounded-lg p-1 border border-slate-200">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={currentScreen === item.id ? "default" : "ghost"}
                onClick={() => onScreenChange(item.id)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-md transition-all",
                  currentScreen === item.id 
                    ? "bg-blue-600 text-white shadow-sm" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}