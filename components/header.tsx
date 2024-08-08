import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import { WelcomeMsg } from "./welcome-msg";

export function Header() {
  return (
    <header className="lg: bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 pb-36 lg:px-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
        </div>
        <WelcomeMsg />
      </div>
    </header>
  );
}
