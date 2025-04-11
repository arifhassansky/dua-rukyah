import Categories from "@/components/Categories";

export default function CategoriesWrapper({
  categories,
  subCategories,
  setSelectedSubcategoryId,
}) {
  return (
    <div className="p-6">
      <Categories
        categories={categories}
        subCategories={subCategories}
        setSelectedSubcategoryId={setSelectedSubcategoryId}
      />
    </div>
  );
}
