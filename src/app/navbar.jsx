import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';

const navtheme = "font-bold group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-green-500 hover:text-white focus:bg-green-600 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-700 data-[state=open]:bg-green-700";
const navthemeMD = "font-bold group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-xs font-medium transition-colors hover:bg-green-500 hover:text-white focus:bg-green-600 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-700 data-[state=open]:bg-green-700";
const navthemeWithPadding = `${navtheme} ml-3`;

export function NavBar() {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            setIsAtBottom(scrolledToBottom);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={isAtBottom ? "md:hidden fixed bottom-0 left-0 right-0 bg-white z-20 -mb-20 text-black" : "md:hidden fixed bottom-0 left-0 right-0 bg-white z-20 text-black"}>
                <div className="flex justify-center items-center py-2 pl-4 text-xs">
                    <NavigationMenu>
                        <NavigationMenuList className="flex space-x-2">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navthemeMD}>
                                        HOME
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={navthemeMD}>
                                        SOBRE NÓS
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/news" legacyBehavior passHref>
                                    <NavigationMenuLink className={navthemeMD}>
                                        NOTÍCIAS
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/download" legacyBehavior passHref>
                                    <NavigationMenuLink className={navthemeMD}>
                                        DOWNLOADS
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="ml-auto mr-2">
                        <Button className="bg-indigo-500 hover:bg-indigo-300 rounded-full p-2 shadow-md">
                            <Link target="_blank" href="https://discord.com/invite/bgl">
                                <div className="flex items-center space-x-1">
                                    <img src="/discord.svg" className="h-4 w-7" alt="Discord Icon" />
                                </div>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Add space at the bottom */}
            {isAtBottom && <div className="md:hidden" style={{ height: "64px" }}></div>}

            {/* Desktop Navbar */}
            <div className="hidden md:block">
                <div className="flex justify-center items-center pt-6">
                    <div className="absolute left-20 pt-5">
                        <img src="/bgl.png" alt="Logo" className="h-52 w-64" />
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList className="flex space-x-2">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navtheme}>
                                        HOME
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={navthemeWithPadding}>
                                        SOBRE NÓS
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/news" legacyBehavior passHref>
                                    <NavigationMenuLink className={navthemeWithPadding}>
                                        NOTÍCIAS
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/download" legacyBehavior passHref>
                                    <NavigationMenuLink className={navthemeWithPadding}>
                                        DOWNLOADS
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex justify-end items-end">
                        <div className="absolute right-20 top-5">
                            <Button className="bg-indigo-500 hover:bg-indigo-300 rounded-full p-6 shadow-md z-12">
                                <Link target="_blank" href="https://discord.com/invite/bgl">
                                    <div className="flex flex-row"><img src="/discord.svg" className="h-6 w-6 z-13" /><span className="font-bold pl-2">DISCORD</span></div>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
