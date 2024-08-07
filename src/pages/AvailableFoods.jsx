import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { LuColumns } from "react-icons/lu";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
    
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    // const [foods, setFoods] = useState([]);
    const [sort, setSort] = useState('');

    const [toggle, setToggle] = useState(true)

    const { isLoading, data: foods } = useQuery({
        queryKey: ['foods', search, sort],
        queryFn: async () => {
            return await fetch(`${import.meta.env.VITE_URL}/all-foods?search=${search}&sort=${sort}`)
                .then(res => res.json())
        }
    })



    // useEffect(() => {
    //     const getData = async () => {
    //         // const { data } = await axios(`${import.meta.env.VITE_URL}/allFoods`)
    //         // console.log(data)
    //         // setFoods(data)
    //         const { data } = await axios(
    //             `${import.meta.env.VITE_URL}/all-foods?search=${search}&sort=${sort}`
    //         )
    //         setFoods(data)
    //     }
    //     getData()
    // }, [search, sort])

    if (isLoading) {
        return <div className=" mt-6 flex justify-center"><span className="loading w-20 text-yellow-400 loading-spinner "></span></div>
    }
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
            <h2 className="font-poppins font-medium text-center lg:hidden text-2xl mb-5  mt-5">Available Foods section </h2>

            <Fade cascade duration={2000}>
                <div className=" flex flex-col md:flex-row md:justify-center items-center md:mb-10 lg:mt-24 gap-5 lg:gap-20">
                    <div>
                        <form onSubmit={handleSearchbtn}>
                            <div className='flex p-1 overflow-hidden border border-gray-500 rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                                <input
                                    className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                    type='text'
                                    onChange={e => setSearchText(e.target.value)}
                                    value={searchText}
                                    name='search'
                                    placeholder='Enter Food Name'
                                    aria-label='Enter Food Name'
                                />

                                <button className='px-1 md:px-4 py-3 text-sm font-medium uppercase  btn bg-orange-300 hover:btn-info rounded-md'>
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className=" flex gap-4 items-center md:gap-6 lg:gap-20">
                        <div>
                            <select
                                onChange={e => {
                                    setSort(e.target.value)
                                    // setCurrentPage(1)
                                }}
                                value={sort}
                                name='sort'
                                id='sort'
                                className='border border-gray-500 p-4 rounded-md'
                            >
                                <option value=''>Sort By Expired Date</option>
                                <option value='dsc'>Descending</option>
                                <option value='asc'>Ascending</option>
                            </select>
                        </div>

                        <div className="hidden md:flex">
                            <button data-tip="Layout Three Colums" onClick={() => setToggle(!toggle)} className={" hover:btn-info hover:btn  tooltip " + (!toggle ? 'show' : 'hidden')}>
                                <BsLayoutThreeColumns className="w-[50px] h-10" /></button>

                            <button data-tip="Layout Two Colums" onClick={() => setToggle(!toggle)} className={"tooltip hover:btn-info hover:btn " + (toggle ? 'show' : 'hidden')}>
                                <LuColumns className="w-[50px] h-10" /></button>
                        </div>
                    </div>
                </div>



                {/* all foods Card  */}
                <div className={"grid mt-6 " + (toggle ? 'md:gap-5  md:grid-cols-3' : 'md:grid-cols-2 md:gap-10')}>
                    {
                        foods?.map(food => <div key={food._id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className="w-full" src={food.foodImage} alt={food.foodName} /></figure>
                            <div className="card-body space-y-3">
                                <h2 className="font-poppins font-medium card-title">{food.foodName}</h2>
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
                                        <img className="w-1/6 rounded-full" src={food.donatorImage} alt="Donator Image" />
                                        <p className=" text-xl">{food.donatorName}</p>
                                    </div>
                                    <Link to={`/foodDetails/${food._id}`}>
                                        <button className="btn bg-orange-400  ">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default AvailableFoods;