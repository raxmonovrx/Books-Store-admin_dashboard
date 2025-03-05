"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus, Search } from "lucide-react"
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
import { AddBookDialog } from "@/components/add-book-dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BooksList() {
  const [isAddBookOpen, setIsAddBookOpen] = useState(false)

  const books = [
    {
      id: "B001",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      price: "$15.99",
      stock: 42,
      status: "In Stock",
    },
    {
      id: "B002",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      price: "$12.50",
      stock: 28,
      status: "In Stock",
    },
    {
      id: "B003",
      title: "1984",
      author: "George Orwell",
      category: "Science Fiction",
      price: "$11.99",
      stock: 15,
      status: "Low Stock",
    },
    {
      id: "B004",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      price: "$14.95",
      stock: 37,
      status: "In Stock",
    },
    {
      id: "B005",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      price: "$9.99",
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: "B006",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Fiction",
      price: "$10.99",
      stock: 22,
      status: "In Stock",
    },
    {
      id: "B007",
      title: "Lord of the Flies",
      author: "William Golding",
      category: "Fiction",
      price: "$11.50",
      stock: 18,
      status: "In Stock",
    },
    {
      id: "B008",
      title: "Animal Farm",
      author: "George Orwell",
      category: "Fiction",
      price: "$8.99",
      stock: 5,
      status: "Low Stock",
    },
    {
      id: "B009",
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      price: "$13.99",
      stock: 31,
      status: "In Stock",
    },
    {
      id: "B010",
      title: "Brave New World",
      author: "Aldous Huxley",
      category: "Science Fiction",
      price: "$12.99",
      stock: 0,
      status: "Out of Stock",
    },
  ]

  // Mobile card view for books
  const BookCard = ({ book }: { book: (typeof books)[0] }) => (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{book.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-muted-foreground">ID:</div>
          <div>{book.id}</div>

          <div className="text-muted-foreground">Author:</div>
          <div>{book.author}</div>

          <div className="text-muted-foreground">Category:</div>
          <div>{book.category}</div>

          <div className="text-muted-foreground">Price:</div>
          <div>{book.price}</div>

          <div className="text-muted-foreground">Stock:</div>
          <div>{book.stock}</div>

          <div className="text-muted-foreground">Status:</div>
          <div>
            <Badge
              variant={
                book.status === "In Stock" ? "default" : book.status === "Low Stock" ? "secondary" : "destructive"
              }
            >
              {book.status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Books</h1>
        <Button onClick={() => setIsAddBookOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Add Book</span>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center w-full sm:max-w-sm">
          <Search className="w-4 h-4 text-muted-foreground absolute ml-3" />
          <Input placeholder="Search books..." className="pl-9 w-full" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              Categories
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Categories</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Fiction</DropdownMenuItem>
            <DropdownMenuItem>Science Fiction</DropdownMenuItem>
            <DropdownMenuItem>Fantasy</DropdownMenuItem>
            <DropdownMenuItem>Romance</DropdownMenuItem>
            <DropdownMenuItem>Mystery</DropdownMenuItem>
            <DropdownMenuItem>Non-Fiction</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile view - cards */}
      <div className="md:hidden">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* Desktop view - table */}
      <div className="hidden md:block rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="hidden lg:table-cell">Category</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Price
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="hidden lg:table-cell">
                <div className="flex items-center">
                  Stock
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium">{book.id}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell className="hidden lg:table-cell">{book.category}</TableCell>
                <TableCell>{book.price}</TableCell>
                <TableCell className="hidden lg:table-cell">{book.stock}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      book.status === "In Stock" ? "default" : book.status === "Low Stock" ? "secondary" : "destructive"
                    }
                  >
                    {book.status}
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
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AddBookDialog open={isAddBookOpen} onOpenChange={setIsAddBookOpen} />
    </div>
  )
}

