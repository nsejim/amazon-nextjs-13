import { Product } from "@/models/product"
import Image from "next/image"
import { ProductItem } from "./ProductItem"


export default function ProductsFeed({ products }: {
    products: Product[]
}) {
    return (

        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:-mt-52 mx-auto">
            {products
                .slice(0, 4)
                .map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        category={product.category}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    >
                    </ProductItem>
                ))}

            <Image
                className="md:col-span-full w-full"
                src="https://links.papareact.com/dyz"
                width={1000}
                height={200}
                alt=""
            />

            <div className="md:col-span-2">
            {products
                .slice(4, 5)
                .map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        category={product.category}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    >
                    </ProductItem>
                ))}
            </div>
    
            {products
                .slice(5, products.length)
                .map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        category={product.category}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    >
                    </ProductItem>
                ))}
        </div>


    )
}

