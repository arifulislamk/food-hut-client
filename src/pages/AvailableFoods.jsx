import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const [foods, setFoods] = useState([]);
    const [date , setDate] = useState('Accending')
    useEffect(() => {
        const getData = async () => {
            // const { data } = await axios(`${import.meta.env.VITE_URL}/allFoods`)
            // console.log(data)
            // setFoods(data)
            const { data } = await axios(
                `${import.meta.env.VITE_URL}/all-foods?search=${search}&date=${date}`
            )
            setFoods(data)
        }
        getData()
    }, [search,date])

    const handleSearchbtn = e => {
        e.preventDefault();
        console.log('search ok', searchText)
        setSearch(searchText)
    }
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Available Foods</title>
            </Helmet>
            <h2 className="text-center">AvailableFoods section : {foods.length} </h2>
            <div className=" flex justify-center ">
                <div>
                    <form onSubmit={handleSearchbtn}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter Food Name'
                                aria-label='Enter Food Name'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium uppercase  btn btn-info rounded-md'>
                                Search
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>

            {/* all foods Card  */}
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    foods.map(food => <div key={food._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={food.foodImage} alt="Shoes" /></figure>
                        <div className="card-body space-y-3">
                            <h2 className="card-title">{food.foodName}</h2>
                            <p> Quantity : {food.foodQuantity}</p>
                            <p> Pickup : {food.pickupLocation}</p>
                            <p> Expired Date/Time :  {new Date(food.expiredDate).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            })}</p>
                            <p> Additional Notes {food.additionalNotes}</p>

                            <div className="card-actions mt-14 justify-between">
                                <div className=" flex items-center gap-5" >
                                    <img className="w-1/6 rounded-full" src={food.donatorImage} alt="" />
                                    <p className=" text-xl">{food.donatorName}</p>
                                </div>
                                <Link to={`/foodDetails/${food._id}`}>
                                    <button className="btn btn-secondary">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;