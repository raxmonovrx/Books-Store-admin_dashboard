"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { BooksList } from "@/components/books-list"
import { OrdersList } from "@/components/orders-list"
import { CustomersList } from "@/components/customers-list"
import { AnalyticsView } from "@/components/analytics-view"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export function BookDashboard() {
  const [activeView, setActiveView] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <AdminSidebar activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-[240px]">
          <AdminSidebar
            activeView={activeView}
            setActiveView={(view) => {
              setActiveView(view)
              setSidebarOpen(false)
            }}
            isMobile={true}
          />
        </SheetContent>
      </Sheet>

      <div className="flex flex-col flex-1">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 md:p-6">
          {activeView === "dashboard" && <DashboardOverview />}
          {activeView === "books" && <BooksList />}
          {activeView === "orders" && <OrdersList />}
          {activeView === "customers" && <CustomersList />}
          {activeView === "analytics" && <AnalyticsView />}
        </main>
      </div>
    </div>
  )
}

