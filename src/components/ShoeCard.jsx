import "../index.css";
export default function ShoeCard({ imgURL, changeBigShoeImg, bigShoeImag }) {
    const checkShoe = () => {
        if (bigShoeImag !== imgURL.bigShoe) {
            changeBigShoeImg(imgURL.bigShoe);
        }
    };
    return (
        <div
            className={`border-2 rounded-xl ${
                bigShoeImag === imgURL.bigShoe
                    ? "border-coral-red"
                    : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={checkShoe}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt={imgURL.bigShoe}
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    );
}
