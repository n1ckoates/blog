import SidebarLinks from "@/components/SidebarLinks";
import SocialIcons from "@/components/SocialIcons";

export default function Sidebar() {
  return (
    <nav className="z-50 hidden lg:block">
      <div className="sticky top-14 flex flex-col">
        <p className="w-fit text-2xl font-bold tracking-tight">Nick Oates</p>
        <p className="text-muted-foreground mt-1 text-sm">Software Engineer</p>

        <SidebarLinks />

        <div className="border-border mt-5 flex w-48 items-center justify-center border-t pt-4">
          <SocialIcons />
        </div>
      </div>
    </nav>
  );
}
