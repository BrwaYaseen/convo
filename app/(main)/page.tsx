import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <UserButton />
      <ModeToggle />
    </div>
  );
}
