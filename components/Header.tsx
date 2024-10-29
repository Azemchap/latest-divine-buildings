
import {
    BarChart,
    LayoutDashboard,
    ListOrdered,
    Menu,
    Package2,
    Store,
    User
} from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import NavLink from "./NavLink"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"


export function Header() {
    return (
        <div className="shadow  sticky top-0 z-50">
            <header className="container mx-auto flex h-16 justify-between items-center gap-8 bg-background px-4 md:px-6 ">

                {/* Mobile Menu  */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-8 text-sm font-medium">
                            <NavLink path="/" text="Divine Buildings" icon={<Package2 className="h-6 w-6" />} className="font-extrabold" />
                            <NavLink path="/dashboard" text="Dashboard" icon={<LayoutDashboard />} />
                            <NavLink path="/products" text="Products" icon={<Store />} />
                            <NavLink path="/customers" text="Customers" icon={<User />} />
                            <NavLink path="/orders" text="Orders" icon={<ListOrdered />} />
                            <NavLink path="/analytics" text="Analytics" icon={<BarChart />} />
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Logo  */}
                <NavLink path="/" text="Divine Buildings" icon={<Package2 className="h-6 w-6" />} className="font-extrabold mr-auto" />

                {/* Desktop Menu  */}
                <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-6 md:text-sm lg:gap-8">
                    <div className="hidden lg:inline-flex items-center gap-8">
                        <NavLink path="/dashboard" text="Dashboard" icon={<LayoutDashboard />} />
                        <NavLink path="/products" text="Products" icon={<Store />} />
                        <NavLink path="/customers" text="Customers" icon={<User />} />
                        <NavLink path="/orders" text="Orders" icon={<ListOrdered />} />
                        <NavLink path="/analytics" text="Analytics" icon={<BarChart />} />
                    </div>
                </nav>

                <div className="">
                    <ModeToggle />
                </div>
            </header >
        </div >
    )
}
