import { Bell, ChevronDown, CircleUser, Menu } from "lucide-react";

import type { TopbarData } from "./topbar.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet/sheet";

const Topbar = (props: TopbarData) => {
  const {
    profile,
    routes,
    title = "App",
    notifications = ["Notification 1", "Notification 2", "Notification 3"],
    onRouteClick,
    onSignOut,
    activeRoute,
  } = props;

  const handleSignOut = async () => {
    onSignOut?.();
  };

  const handleRouteClick = (to: string) => {
    onRouteClick?.(to);
  };

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b text-background bg-foreground px-4 md:px-6 z-30">
      <nav className="hidden text-background flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <span>{title}</span>
          <span className="sr-only">{title}</span>
        </div>
        {routes.map((route) => (
          <button
            key={route.label}
            className={`hover:text-background focus:outline-none ${
              activeRoute === route.to
                ? "font-semibold text-background"
                : "text-background/80"
            }`}
            onClick={() => handleRouteClick(route.to)}
            aria-label={`Go to ${route.label}`}
          >
            {route.label}
          </button>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="tertiary" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5 text-neutral-50" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
              <span>App</span>
              <span className="sr-only">App</span>
            </div>
          </SheetHeader>
          <nav className="grid gap-6 text-lg font-medium p-4">
            {props.routes.map((route, key) => (
              <button
                key={key}
                className={`text-left hover:text-background focus:outline-none ${
                  activeRoute === route.to
                    ? "font-semibold text-background"
                    : "text-background/80"
                }`}
                onClick={() => handleRouteClick(route.to)}
                aria-label={`Go to ${route.label}`}
              >
                {route.label}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 ml-auto md:gap-4 lg:gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger className="h-16">
            <Bell />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52" align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((n, idx) => (
              <DropdownMenuItem key={idx}>{n}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 h-16">
            <Avatar>
              <AvatarImage src={profile.profilePic} alt="@shadcn" />
              <AvatarFallback>
                <CircleUser />
              </AvatarFallback>
            </Avatar>
            <p className="text-sm">{profile.name}</p>
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle user menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52" align="end">
            <DropdownMenuLabel className="pt-1.5 pb-2 px-4 text-sm">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="pt-1.5 pb-2 px-4 text-sm"
              onClick={handleSignOut}
            >
              Logout
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <div className="px-4 py-2 text-[10px] text-neutral-300 text-right">
              v0.0.0
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export { Topbar };
