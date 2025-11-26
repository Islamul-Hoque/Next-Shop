import { FaStar } from "react-icons/fa";

// export default async function ProductDetailsPage(props) {
const ProductDetailsPage = async(props) => {
  const params = await props.params;   // ⬅ main fix
  const { id } = params;

  const res = await fetch(`https://next-shop-api-server.vercel.app/all-products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-10 text-red-600">Product not found.</div>;
  }

  const data = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Name: {data.title}</h1>
    </div>
  );
}

export default ProductDetailsPage;