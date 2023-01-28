import Head from "next/head";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductsFeed from "./components/ProductsFeed";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
      throw new Error("failed to fetch products")
  }
  return res.json()
}

export default async function Home() {

  const products = await fetchProducts();

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/** Product Feeds */}
        <ProductsFeed products={products} />
        
      </main>
    </div>
  )
}
