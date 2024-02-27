import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

export default function CustomerReviews() {
    return (
        <section className="max-container">
            <h3 className="font font-palanquin text-4xl text-center font-bold">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say?
            </h3>
            <p className="m-auto mt-4 max-w-lg text-center info-text">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>

            <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
                {reviews.map((review) => (
                    <ReviewCard key={review.feedback} review={review} />
                ))}
            </div>
        </section>
    );
}
