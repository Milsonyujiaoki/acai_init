import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const kpiData = [
  {
    title: "Total Revenue",
    value: "RM1,24,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last month",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Total Orders",
    value: "1,247",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    description: "vs last month",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-950"
  },
  {
    title: "Inventory Value",
    value: "RM86,420",
    change: "-2.1%",
    trend: "down",
    icon: Package,
    description: "vs last month",
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-950"
  },
  {
    title: "Active Customers",
    value: "2,847",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    description: "vs last month",
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-950"
  }
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi) => (
        <Card key={kpi.title} className="hover:shadow-md transition-all duration-300 hover:border-primary/20 group">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {kpi.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${kpi.bgColor} ${kpi.color} group-hover:scale-105 transition-transform`}>
              <kpi.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-2xl font-semibold" style={{ fontFamily: 'Satoshi' }}>
                {kpi.value}
              </div>
              <div className="flex items-center space-x-1 text-xs">
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={`font-medium ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {kpi.change}
                </span>
                <span className="text-muted-foreground">{kpi.description}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}