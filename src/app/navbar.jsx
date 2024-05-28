import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button"

const navtheme = "font-bold group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-green-500 hover:text-white focus:bg-green-600 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-700 data-[state=open]:bg-green-700";
const navthemeWithPadding = `${navtheme} ml-3`;

export function NavBar() {
    return (
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
                            <div className="flex flex-row"><img src="/discord.svg" className="h-6 w-6 z-13" /><span className=" font-bold pl-2">DISCORD</span></div>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
