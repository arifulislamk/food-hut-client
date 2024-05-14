import { Fade } from "react-awesome-reveal";

const Accorodian = () => {
    return (
        <div className="mt-10">
            <Fade cascade duration={2000}>
                <section className="">
                    <div className="container bg-gray-100 flex flex-col justify-center p-4 mx-auto md:p-8 md:py-28 rounded-lg">

                        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32">
                            <details className=" text-xl">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Can I customize my order?</summary>
                                <div className="px-4 pb-4">
                                    <p>Absolutely! We understand that everyone has unique tastes and dietary needs. You can customize your order to your liking, whether it`s adjusting spice levels, swapping ingredients, or accommodating allergies</p>
                                </div>
                            </details>
                            <details className=" text-xl ">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Are your packaging materials eco-friendly?</summary>
                                <div className="px-4 pb-4">
                                    <p>We are committed to sustainability and use eco-friendly packaging materials whenever possible to minimize our environmental footprint and support a healthier planet.</p>
                                </div>
                            </details>
                            <details className=" text-xl">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">How do I place an order??</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>You can easily place an order through our website, mobile app, or by calling our food hut directly. Simply select your items, choose your preferred delivery or pick-up time, and complete your order securely.</p>
                                </div>
                            </details>
                            <details className=" text-xl">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">What type of cuisine do you offer?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>We specialize in [insert cuisine type], offering a diverse range of dishes inspired by traditional recipes and modern twists.</p>
                                </div>
                            </details>
                            <details className=" text-xl">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Do you have options for vegetarians/vegans?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Yes, we have a dedicated selection of vegetarian and vegan dishes crafted with fresh, flavorful ingredients to satisfy all dietary preferences.</p>
                                </div>
                            </details>
                            <details className=" text-xl">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Are your ingredients locally sourced?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>We prioritize sourcing ingredients locally whenever possible to support our community and ensure the freshest, highest quality produce and meats in our dishes.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

            </Fade>
        </div>
    );
};

export default Accorodian;