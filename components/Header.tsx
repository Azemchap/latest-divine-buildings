
import {
    Menu,
    Package2
} from "lucide-react"

import NavLink from "./NavLink"

import { ModeToggle } from "./ModeToggle"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"


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
                        <nav className="grid gap-4 text-sm font-medium">
                            <NavLink path="/" text="Divine Buildings" icon={<Package2 className="h-6 w-6" />} className="font-extrabold" />
                            <NavLink path="/category/bungalow" text="Bungalow" />
                            <NavLink path="/category/duplex" text="Duplex" />
                            <NavLink path="/category/condor" text="Condor" />
                            <NavLink path="/category/villa" text="Villa" />
                            <NavLink path="/category/e-Books" text="e-Books" />
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Logo  */}
                <NavLink path="/" text="Divine Buildings" icon={<Package2 className="h-6 w-6" />} className="font-extrabold mr-auto" />

                {/* Desktop Menu  */}
                <nav className="hidden font-medium md:flex md:flex-row md:items-center  md:text-sm gap-4">
                    <div className="hidden lg:inline-flex items-center gap-8">
                        <NavLink path="/category/bungalow" text="Bungalow" />
                        <NavLink path="/category/duplex" text="Duplex" />
                        <NavLink path="/category/condor" text="Condor" />
                        <NavLink path="/category/villa" text="Villa" />
                        <NavLink path="/category/e-Books" text="e-Books" />
                    </div>
                </nav>

                <div className="">
                    <ModeToggle />
                </div>
            </header >
        </div >
    )
}
