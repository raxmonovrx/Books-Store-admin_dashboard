import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentOrdersTable() {
  const orders = [
    {
      id: "ORD-001",
      customer: {
        name: "John Smith",
        email: "john@example.com",
        avatar: "/placeholder-user.jpg",
        initials: "JS",
      },
      status: "Shipped",
      date: "2023-11-05",
      total: "$125.99",
    },
    {
      id: "ORD-002",
      customer: {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        avatar: "/placeholder-user.jpg",
        initials: "SJ",
      },
      status: "Processing",
      date: "2023-11-04",
      total: "$89.50",
    },
    {
      id: "ORD-003",
      customer: {
        name: "Michael Brown",
        email: "michael@example.com",
        avatar: "/placeholder-user.jpg",
        initials: "MB",
      },
      status: "Delivered",
      date: "2023-11-03",
      total: "$212.30",
    },
    {
      id: "ORD-004",
      customer: {
        name: "Emily Davis",
        email: "emily@example.com",
        avatar: "/placeholder-user.jpg",
        initials: "ED",
      },
      status: "Pending",
      date: "2023-11-02",
      total: "$45.20",
    },
    {
      id: "ORD-005",
      customer: {
        name: "David Wilson",
        email: "david@example.com",
        avatar: "/placeholder-user.jpg",
        initials: "DW",
      },
      status: "Shipped",
      date: "2023-11-01",
      total: "$178.65",
    },
  ]

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
              <AvatarFallback>{order.customer.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{order.customer.name}</p>
              <p className="text-sm text-muted-foreground">{order.id}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge
              variant={
                order.status === "Delivered"
                  ? "default"
                  : order.status === "Shipped"
                    ? "secondary"
                    : order.status === "Processing"
                      ? "outline"
                      : "destructive"
              }
            >
              {order.status}
            </Badge>
            <div className="text-sm text-right">
              <p className="font-medium">{order.total}</p>
              <p className="text-muted-foreground">{order.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

