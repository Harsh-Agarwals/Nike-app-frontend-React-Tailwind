import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

export default function PopularProducts() {
    return (
        <section>
            <div className="flex flex-col gap-5 justify-start">
                <h2 className="text-4xl font-palanquin font-bold">
                    Our <span className="text-coral-red">Popular</span> Products
                </h2>
                <p className="text-slate-gray mt-2 font-montserrat lg:max-w-lg">
                    Experience top-notch quality and style with our sought-after
                    selections. Discover a world of comfort, design, and value
                </p>
            </div>
            <div className="mt mt-16 gap-14 grid grid-cols-1 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <PopularProductCard key={product.name} product={product} />
                ))}
            </div>
        </section>
    );
}
