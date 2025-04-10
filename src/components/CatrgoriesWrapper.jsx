import db from "@/lib/db";
import Categories from "@/components/Categories";

export default async function CategoriesWrapper() {
  const categories = db.prepare("SELECT * FROM category").all();
  const subCategories = db.prepare("SELECT * FROM sub_category").all();

  return (
    <div className="p-6">
      <Categories categories={categories} subCategories={subCategories} />
    </div>
  );
}
