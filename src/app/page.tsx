import { StoreDemo } from "@/components/example/store";
import DarkModeToggle from "@/components/toggles/darkmode";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <StoreDemo />
        <div className="flex items-center gap-4">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
