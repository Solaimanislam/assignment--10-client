import { Link, useLoaderData } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { sortByKey } from "../../JavaScript";
// import { ImOpt } from "react-icons/im";
// import { useTable } from "react-table";


const AllCraft = () => {

    const [sort, setSort] = useState(null);

    const { sorting } = useContext(AuthContext);
    const crafts = useLoaderData();
    console.log(crafts);
    const sortedData = sortByKey(crafts, sort);

   

    crafts.sort((a,b) => a.price - b.price);
    // console.log(crafts);

    return (
        <div>
            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-purple-500">All Art & Craft items</h2>
                <p className=" text-base lg:text-xl text-amber-600 font-medium">Welcome to SI Art & Craft, your ultimate destination for all things art and craft! Dive into a world where creativity knows no bounds and imagination takes flight. Whether you are a seasoned artist, a crafting enthusiast, or just beginning to explore the wonders of DIY projects, we have something special just for you.</p>
            </div>
            <div className=" mx-auto text-center lg:mt-8">
                <span className="label-text text-2xl font-semibold">Stored by</span>
                <div className=" my-4">
                    <select name="sort" id="sort" className="p-3 rounded-lg border-2 border-emerald-400 " onClick={sorting}>
                        <option onClick={() => setSort('price')} value="price">Price</option>
                        <option onClick={() => setSort('Ascending')}  value="Ascending">Ascending price</option>
                        <option onClick={() => setSort('Descending')}  value="Descending">Descending price</option>

                    </select>
                </div>
            </div>
            <div className=" lg:my-10 ">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Subcategory</th>
                                <th>Price</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                sortedData?.map((craft, index) => <tr key={craft._id}>
                                    <th>{index + 1}</th>
                                    <td>{craft.name}</td>
                                    <td>{craft.scName}</td>
                                    <td>{craft.price}</td>
                                    <td> <Link
                                        to={`/craft/${craft._id}`}
                                    ><button className="btn btn-outline btn-secondary">Show Details</button></Link></td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllCraft;