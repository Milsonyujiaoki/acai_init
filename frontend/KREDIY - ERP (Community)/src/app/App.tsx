import { useState } from "react"
import { AppSidebar } from "./components/AppSidebar"
import { DashboardHeader } from "./components/DashboardHeader"
import { DashboardContent } from "./components/DashboardContent"
import { SidebarProvider } from "./components/ui/sidebar"

export default function App() {
  const [isMinimized, setIsMinimized] = useState(false)

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar onMinimize={handleMinimize} />
        <main className="flex-1 flex flex-col">
          <DashboardHeader onMinimizeUI={handleMinimize} />
          <DashboardContent />
        </main>
      </div>
    </SidebarProvider>
  )
}