import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center lg:mt-10">
            <div className="flex flex-col-reverse lg:flex-row lg:gap-32 px-8">
                <Link to="/"><button className=" lg:text-2xl bg-orange-300 p-3  rounded-lg">Please Go back</button></Link>
                <h1 className="text-2xl mb-4  lg:text-5xl font-bold">Ooops! You are may be wrong!</h1>
            </div>

            <div className=" flex justify-center"> <img src="https://i.ibb.co/jbW3HNB/error.jpg" alt="" /></div>
        </div>
    );
};

export default ErrorPage;