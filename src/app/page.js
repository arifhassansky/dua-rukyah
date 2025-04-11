import Navbar from "@/components/Navbar";
import SettingsPanel from "@/components/SettingsPanel";
import Sidebar from "@/components/Sidebar";
import CatAndDua from "@/components/CatAndDua";
import db from "@/lib/db";

export default function Home() {
  const categories = db.prepare("SELECT * FROM category").all();
  const subCategories = db.prepare("SELECT * FROM sub_category").all();
  const duas = db.prepare("SELECT * FROM dua").all();

  return (
    <div className="flex">
      <Sidebar />
      <main>
        <Navbar />
        <div className="flex  mt-[35px]">
          <CatAndDua
            categories={categories}
            subCategories={subCategories}
            duas={duas}
          />
          <div>
            <SettingsPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
