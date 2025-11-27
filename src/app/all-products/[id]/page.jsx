import { FaStar } from "react-icons/fa";
import Link from "next/link";

const ProductDetailsPage = async (props) => {
  const params = await props.params;  
  const { id } = params;
  const res = await fetch(`https://next-shop-api-server.vercel.app/all-products/${id}`
)

  const data = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-8 ">
      <h1 className="text-5xl text-center font-extrabold text-gray-900 mb-3"> Product<span className="text-gradient"> Details</span> </h1>
      <Link href="/all-products" className="text-purple-600 font-medium inline-block mb-4">  &larr; Back to Products </Link>

      <div className="card rounded-xl overflow-hidden shadow  transition duration-300 transform  group bg-gray-50 border border-gray-200 ">   
        <div className="w-full h-[18.1rem] md:h-[30.49rem] overflow-hidden "> <img src={data.image}  className=" w-full h-full object-cover transition duration-500 hover:scale-105"  alt={data.title} /> </div>

        <div className="card-body p-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>

            <div className="flex items-center justify-between text-gray-700">
              <p className="text-purple-700 font-extrabold text-2xl"> ${data.price.toFixed(2)} </p>
              <div className="flex items-center text-yellow-500"> <FaStar className="mr-1" /> {data.rating}  </div>
            </div>

            <div className="flex flex-wrap gap-4 text-gray-600 mt-2 text-sm">
              <span><strong>SKU:</strong> {data.sku}</span>
              <span><strong>Category:</strong> {data.category}</span>
              <span><strong>Brand:</strong> {data.brand}</span>
              <span><strong>Stock:</strong> {data.stock}</span>
            </div>

            <p className="text-gray-700">{data.full_description}</p>

            {data.features && data.features.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">Features:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {data.features.map((f, idx) => ( <li key={idx}>{f}</li> ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetailsPage;