import Button from "../components/Button";

export default function Subscribe() {
    return (
        <section
            id="contact-us"
            className="max-container flex justify-between items-center max-lg:flex-col gap-10"
        >
            <h3 className="text-4xl lg:max-w-md leading-[68px] font-palanquin font-bold">
                Sign Up for
                <span className="text-coral-red"> Updates </span>& Newsletter
            </h3>
            <div className="flex max-sm:flex-col lg:max-w-[40%] w-full items-center gap-5 p-2.5 rounded-full sm:border sm:border-slate-gray">
                <input
                    type="text"
                    placeholder="subscribe@nike.com"
                    className="input"
                />
                <div className="flex items-center max-sm:w-full max-sm:justify-end">
                    <Button label="Sign Up" fullWidth />
                </div>
            </div>
        </section>
    );
}
