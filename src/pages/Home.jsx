import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const Home = () => {
    const { name } = useContext(AuthContext)
    return (
        <div>
            <h2 className=" text-center text-5xl font-bold text-green-500">This Home Section {name}</h2>
        </div>
    );
};

export default Home;