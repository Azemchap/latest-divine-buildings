// React and Next.js imports
import Link from "next/link";


// Icon imports
import { Facebook, Github, Package2, Twitter, } from "lucide-react";


// Asset imports
import { Container, Section } from "./craft";
import NavLink from "./NavLink";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer>
            <Section>
                <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
                    <div className=" flex max-w-md flex-col gap-6">
                        {/* Logo  */}
                        <NavLink path="/" text="Divine Buildings" icon={<Package2 className="h-6 w-6" />} className="font-extrabold mr-auto" />
                        <p>
                            These are a Collections of Next.js, React, Typescript and TailwindCSS
                            components for building Web Apps and Websites.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5 className="font-bold mb-4">Website</h5>
                        <Link href="/">Blog</Link>
                        <Link href="/">Authors</Link>
                        <Link href="/">Categories</Link>
                        <Link href="/studio">Studio</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5 className="font-bold mb-4">Legal</h5>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                        <Link href="/cookie-policy">Cookie Policy</Link>
                    </div>
                </Container>
                <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                            <Github />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Twitter />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Facebook />
                        </Button>
                    </div>
                    <p className="text-muted-foreground">
                        All rights reserved ©{" "}
                        {new Date().getFullYear()}
                    </p>
                </Container>
            </Section>
        </footer>
    );
}
