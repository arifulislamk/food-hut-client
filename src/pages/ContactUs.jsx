const ContactUs = () => {
    const handlecontact = e => {
        e.preventDefault()
        console.log(e.target.name.value)
    }
    return (
        <div>
            <div className=" text-center">
                <h2 className="font-poppins mb-5 mt-20 text-4xl font-bold  lg:text-5xl">Let`s talk!</h2>
                <div className=" text-3xl font-poppins font-medium">FOOD HUT Official Help Desk</div>
            </div>
            <div className="flex gap-10 justify-center items-center ">
                <div className="flex flex-col justify-center w-1/2 ">
                    <div className="mt-10">
                        <img className=" border rounded-2xl " src="https://i.ibb.co/HPM225Z/THAILAND-22.png" alt="" />
                    </div>
                </div>
                <div className=" w-1/2">
                    <form onSubmit={handlecontact} noValidate="" className="space-y-6">
                        <div>
                            <label htmlFor="name" name='name' className="text-xl" >Full name</label>
                            <input id="name" type="text" placeholder="Your Name" className="border border-gray-500 w-full p-3 rounded" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-xl" >Email</label>
                            <input id="email" type="email" placeholder="Your Email" className="border border-gray-500 w-full p-3 rounded " />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-xl">Message</label>
                            <textarea id="message" rows="3" placeholder="write here" className=" border border-gray-500 w-full p-3 rounded"></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;