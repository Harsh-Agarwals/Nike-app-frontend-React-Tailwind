import { shoe8 } from "../assets - Copy/images";
import Button from "../components/Button";

export default function SuperQuality() {
    return (
        <div>
            <section
                id="about-us"
                className="flex justify-between items-center gap-10 w-full max-container max-lg:flex-col"
            >
                <div className="flex flex-1 flex-col">
                    <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
                        We Provide You
                        <span className=" text-coral-red"> Super </span>
                        <span className="text-coral-red"> Quality </span> Shoes
                    </h2>
                    <p className="mt-4 info-text lg:max-w-lg">
                        Ensuring premium comfort and style, our meticulously
                        crafted footwear is designed to elevate your experience,
                        providing you with unmatched quality, innovation, and a
                        touch of elegance.
                    </p>
                    <p className="mt-6 lg:max-w-lg info-text">
                        Our dedication to detail and excellence ensures your
                        satisfaction
                    </p>
                    <div className="mt-11">
                        <Button label="View details" />
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src={shoe8}
                        alt="product detail"
                        width={570}
                        height={522}
                        className="object-contain"
                    />
                </div>
            </section>
        </div>
    );
}
