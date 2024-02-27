export default function ServiceCard({ service }) {
    return (
        <div className="flex-1 py-16 px-10 shadow-3xl w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px]">
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img
                    src={service.imgURL}
                    alt={service.label}
                    width={24}
                    height={24}
                />
            </div>
            <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
                {service.label}
            </h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
                {service.subtext}
            </p>
        </div>
    );
}
