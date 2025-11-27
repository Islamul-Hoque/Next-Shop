import ProductFilter from "./ProductFilter";

const AllProductsPage = async () => {
    const res = await fetch("https://next-shop-api-server.vercel.app/all-products");
    const products = await res.json();
    const categories = ["Electronics", "Home & Furniture", "Audio & Music", "Apparel", "Photography", "Accessories"];

    return (
        <div className="py-20 px-6 md:px-16">
            <ProductFilter products={products} categories={categories} />
        </div>
    )
}

export default AllProductsPage;