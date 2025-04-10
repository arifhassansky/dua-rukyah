import DuaContent from "@/components/DuaContent";
import Navbar from "@/components/Navbar";
import SettingsPanel from "@/components/SettingsPanel";
import Sidebar from "@/components/Sidebar";
import CategoriesWrapper from "@/components/CatrgoriesWrapper";

export default function Home() {
  return (
    <div className="flex mt-10">
      <Sidebar />
      <main>
        <Navbar />
        <div className="flex flex-1">
          <div className="p-6">
            <CategoriesWrapper />
          </div>
          <div className="flex-1 p-6 overflow-y-auto">
            <DuaContent />
          </div>
          <div>
            <SettingsPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
