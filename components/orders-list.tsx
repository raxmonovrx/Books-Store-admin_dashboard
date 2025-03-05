"use client"
import { ArrowUpDown, ChevronDown, Download, MoreHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OrdersList() {
  const orders = [
    {
      id: "ORD-001",
      customer: "John Smith",
      date: "2023-11-05",
      total: "$125.99",
      items: 3,
      status: "Shipped",
    },
    {
      id: "ORD-002",
      customer: "Sarah Johnson",
      date: "2023-11-04",
      total: "$89.50",
      items: 2,
      status: "Processing",
    },
    {
      id: "ORD-003",
      customer: "Michael Brown",
      date: "2023-11-03",
      total: "$212.30",
      items: 5,
      status: "Delivered",
    },
    {
      id: "ORD-004",
      customer: "Emily Davis",
      date: "2023-11-02",
      total: "$45.20",
      items: 1,
      status: "Pending",
    },
    {
      id: "ORD-005",
      customer: "David Wilson",
      date: "2023-11-01",
      total: "$178.65",
      items: 4,
      status: "Shipped",
    },
    {
      id: "ORD-006",
      customer: "Jessica Taylor",
      date: "2023-10-31",
      total: "$67.25",
      items: 2,
      status: "Delivered",
    },
    {
      id: "ORD-007",
      customer: "Robert Martinez",
      date: "2023-10-30",
      total: "$134.99",
      items: 3,
      status: "Processing",
    },
    {
      id: "ORD-008",
      customer: "Amanda Clark",
      date: "2023-10-29",
      total: "$95.75",
      items: 2,
      status: "Shipped",
    },
    {
      id: "ORD-009",
      customer: "Thomas Anderson",
      date: "2023-10-28",
      total: "$210.50",
      items: 5,
      status: "Delivered",
    },
    {
      id: "ORD-010",
      customer: "Lisa Rodriguez",
      date: "2023-10-27",
      total: "$56.20",
      items: 1,
      status: "Pending",
    },
  ]

  // Mobile card view for orders
  const OrderCard = ({ order }: { order: (typeof orders)[0] }) => (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{order.id}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Update Status</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Cancel Order</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-muted-foreground">Customer:</div>
          <div>{order.customer}</div>

          <div className="text-muted-foreground">Date:</div>
          <div>{order.date}</div>

          <div className="text-muted-foreground">Total:</div>
          <div>{order.total}</div>

          <div className="text-muted-foreground">Items:</div>
          <div>{order.items}</div>

          <div className="text-muted-foreground">Status:</div>
          <div>
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
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Orders</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Export</span>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center w-full sm:max-w-sm">
          <Search className="w-4 h-4 text-muted-foreground absolute ml-3" />
          <Input placeholder="Search orders..." className="pl-9 w-full" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              Status
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Statuses</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Processing</DropdownMenuItem>
            <DropdownMenuItem>Shipped</DropdownMenuItem>
            <DropdownMenuItem>Delivered</DropdownMenuItem>
            <DropdownMenuItem>Cancelled</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile view - cards */}
      <div className="md:hidden">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>

      {/* Desktop view - table */}
      <div className="hidden md:block rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden lg:table-cell">Date</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Total
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="hidden lg:table-cell">Items</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className="hidden lg:table-cell">{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell className="hidden lg:table-cell">{order.items}</TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Update Status</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Cancel Order</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

