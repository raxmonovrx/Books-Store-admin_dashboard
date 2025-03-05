import { BarChart3, BookOpen, Home, ShoppingCart, Users } from "lucide-react"

interface AdminSidebarProps {
  activeView: string
  setActiveView: (view: string) => void
  isMobile?: boolean
}

export function AdminSidebar({ activeView, setActiveView, isMobile = false }: AdminSidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "books", label: "Books", icon: BookOpen },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "customers", label: "Customers", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ]

  return (
    <div
      className={`bg-sidebar text-sidebar-foreground ${isMobile ? "w-full h-full" : "w-64 border-r h-screen sticky top-0"}`}
    >
      <div className="p-6">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <span>BookStore Admin</span>
        </h1>
      </div>
      <nav className="px-3 py-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  activeView === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

