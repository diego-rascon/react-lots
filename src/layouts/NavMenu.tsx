import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";

export default function NavMenu() {
  const routes: { href: string; label: string }[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/explore",
      label: "Explore",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="fixed w-full top-0 h-16">
        {routes.map((route) => (
          <NavigationMenuItem key={route.href}>
            <NavigationMenuLink asChild>
              <NavLink to={route.href}>{route.label}</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
