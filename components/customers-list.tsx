"use client"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Search, UserPlus } from "lucide-react"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CustomersList() {
  const customers = [
    {
      id: "CUST-001",
      name: "John Smith",
      email: "john@example.com",
      orders: 12,
      spent: "$1,245.89",
      status: "Active",
      joined: "2022-05-15",
      avatar: "/placeholder-user.jpg",
      initials: "JS",
    },
    {
      id: "CUST-002",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      orders: 8,
      spent: "$876.50",
      status: "Active",
      joined: "2022-06-22",
      avatar: "/placeholder-user.jpg",
      initials: "SJ",
    },
    {
      id: "CUST-003",
      name: "Michael Brown",
      email: "michael@example.com",
      orders: 5,
      spent: "$432.30",
      status: "Active",
      joined: "2022-08-10",
      avatar: "/placeholder-user.jpg",
      initials: "MB",
    },
    {
      id: "CUST-004",
      name: "Emily Davis",
      email: "emily@example.com",
      orders: 3,
      spent: "$215.20",
      status: "Inactive",
      joined: "2022-09-05",
      avatar: "/placeholder-user.jpg",
      initials: "ED",
    },
    {
      id: "CUST-005",
      name: "David Wilson",
      email: "david@example.com",
      orders: 7,
      spent: "$678.65",
      status: "Active",
      joined: "2022-07-18",
      avatar: "/placeholder-user.jpg",
      initials: "DW",
    },
    {
      id: "CUST-006",
      name: "Jessica Taylor",
      email: "jessica@example.com",
      orders: 2,
      spent: "$167.25",
      status: "Inactive",
      joined: "2022-10-12",
      avatar: "/placeholder-user.jpg",
      initials: "JT",
    },
    {
      id: "CUST-007",
      name: "Robert Martinez",
      email: "robert@example.com",
      orders: 9,
      spent: "$934.99",
      status: "Active",
      joined: "2022-04-30",
      avatar: "/placeholder-user.jpg",
      initials: "RM",
    },
    {
      id: "CUST-008",
      name: "Amanda Clark",
      email: "amanda@example.com",
      orders: 4,
      spent: "$345.75",
      status: "Active",
      joined: "2022-08-25",
      avatar: "/placeholder-user.jpg",
      initials: "AC",
    },
    {
      id: "CUST-009",
      name: "Thomas Anderson",
      email: "thomas@example.com",
      orders: 6,
      spent: "$510.50",
      status: "Active",
      joined: "2022-06-08",
      avatar: "/placeholder-user.jpg",
      initials: "TA",
    },
    {
      id: "CUST-010",
      name: "Lisa Rodriguez",
      email: "lisa@example.com",
      orders: 1,
      spent: "$56.20",
      status: "Inactive",
      joined: "2022-11-01",
      avatar: "/placeholder-user.jpg",
      initials: "LR",
    },
  ]

  // Mobile card view for customers
  const CustomerCard = ({ customer }: { customer: (typeof customers)[0] }) => (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={customer.avatar} alt={customer.name} />
              <AvatarFallback>{customer.initials}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-lg">{customer.name}</CardTitle>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>View Orders</DropdownMenuItem>
              <DropdownMenuItem>Edit Details</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Delete Customer</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-muted-foreground">ID:</div>
          <div>{customer.id}</div>

          <div className="text-muted-foreground">Email:</div>
          <div className="truncate max-w-[150px]">{customer.email}</div>

          <div className="text-muted-foreground">Orders:</div>
          <div>{customer.orders}</div>

          <div className="text-muted-foreground">Spent:</div>
          <div>{customer.spent}</div>

          <div className="text-muted-foreground">Status:</div>
          <div>
            <Badge variant={customer.status === "Active" ? "default" : "secondary"}>{customer.status}</Badge>
          </div>

          <div className="text-muted-foreground">Joined:</div>
          <div>{customer.joined}</div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Customers</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Add Customer</span>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center w-full sm:max-w-sm">
          <Search className="w-4 h-4 text-muted-foreground absolute ml-3" />
          <Input placeholder="Search customers..." className="pl-9 w-full" />
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
            <DropdownMenuItem>Active</DropdownMenuItem>
            <DropdownMenuItem>Inactive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile view - cards */}
      <div className="md:hidden">
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>

      {/* Desktop view - table */}
      <div className="hidden md:block rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden lg:table-cell">Email</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Orders
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="hidden lg:table-cell">
                <div className="flex items-center">
                  Spent
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden lg:table-cell">Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={customer.avatar} alt={customer.name} />
                      <AvatarFallback>{customer.initials}</AvatarFallback>
                    </Avatar>
                    {customer.name}
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell">{customer.email}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell className="hidden lg:table-cell">{customer.spent}</TableCell>
                <TableCell>
                  <Badge variant={customer.status === "Active" ? "default" : "secondary"}>{customer.status}</Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell">{customer.joined}</TableCell>
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
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>View Orders</DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete Customer</DropdownMenuItem>
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

