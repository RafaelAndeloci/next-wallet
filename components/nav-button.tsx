import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface NavButtonProps {
  href: string;
  label: string;
  isActive: boolean;
}
export function NavButton({ href, isActive, label }: NavButtonProps) {
  return (
    <Button
      asChild
      size={"sm"}
      variant={"outline"}
      className={cn(
        "w-full justify-between border-none font-normal text-white outline-none transition hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0 lg:w-auto",
        isActive ? "bg-white/10 text-white" : "bg-transparent",
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
