// components/CategoriesWrapper.jsx
import db from "@/lib/db"; // Database connection
import Categories from "@/components/Categories";

export default async function CategoriesWrapper() {
  // Fetch the categories from the database
  const category = db.prepare("SELECT * FROM category").all();
  console.log("Fetched Categories:", category);

  return (
    <div className="p-6">
      {/* Pass the category data as a prop to the Categories component */}
      <Categories category={category} />
    </div>
  );
}
