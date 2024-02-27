import { useState } from "react";
import { arrowRight } from "../assets - Copy/icons";
import { bigShoe1 } from "../assets - Copy/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { statistics, shoes } from "../constants";
import "../index.css";

export default function Hero() {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    const changeShoe = (shoe) => {
        setBigShoeImg(shoe);
    };
    return (
        <div>
            <section
                id="home"
                className="w-full min-h-screen max-container flex xl:flex-row flex-col justify-center gap-10"
            >
                <div className="flex flex-col justify-center items-start w-full relative pt-28 max-xl:padding-x xl:w-2/5">
                    <p className="text-xl font-montserrat text-coral-red">
                        Our Summer collections
                    </p>
                    <h1 className="text-8xl font-palanquin font-bold mt-10 max-sm:text-[72px] max-sm:leading-[82px]">
                        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                            The New Arrival
                        </span>
                        <br />
                        <span className="mt mt-3 text-coral-red inline-block">
                            Nike
                        </span>{" "}
                        Shoes
                    </h1>
                    <p className="font font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                        Discover stylish Nike arrivals, quality comfort, and
                        innovation for your active life.
                    </p>
                    <Button label="Show NOW" iconURL={arrowRight} />
                    <div className="flex justify-start items-start gap-16 mt-20 flex-wrap w-full">
                        {statistics.map((stat) => (
                            <div key={stat.value}>
                                <h1 className="text-4xl font-palanquin font-bold">
                                    {stat.value}
                                </h1>
                                <p className="font-montserrat leading-7 text-slate-gray">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                    <img
                        src={bigShoeImg}
                        alt="big-shoe"
                        width={610}
                        height={500}
                        className="obj object-contain z-10 relative"
                    />
                    <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] max-sm:px-6">
                        {shoes.map((shoe) => (
                            <div key={shoe.bigShoe}>
                                <ShoeCard
                                    imgURL={shoe}
                                    changeBigShoeImg={changeShoe}
                                    bigShoeImag={bigShoeImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            c
        </div>
    );
}
