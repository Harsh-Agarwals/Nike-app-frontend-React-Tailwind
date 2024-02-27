import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

export default function Services() {
    return (
        <section className="max-container flex justify-center gap-4 p-6 sm:gap-9 flex-wrap">
            {services.map((service) => (
                <ServiceCard key={service.label} service={service} />
            ))}
        </section>
    );
}
