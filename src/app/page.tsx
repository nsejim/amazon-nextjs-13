import { Product } from "@/models/product";
import Banner from "./components/Banner";
import ProductsFeed from "./components/ProductsFeed";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=20");
  if (!res.ok) {
      throw new Error("failed to fetch products")
  }
  return res.json()
}

export default async function Home() {

  let products = await fetchProducts() as Product[];
  /*products = products.map(product => {
    return {
      ...product, 
      hasPrime: Math.random() > 0.5
    }
  })*/

  return (
    <div className="bg-gray-100">
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/** Product Feeds */}
        <ProductsFeed products={products} />
        
      </main>
    </div>
  )
}
