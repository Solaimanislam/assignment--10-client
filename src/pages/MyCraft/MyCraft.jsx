import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


import FilterProduct from "../../FilterProduct/FilterProduct";
import MyCard from "./MyCard";




const MyCraft = () => {

    const { user } = useContext(AuthContext) || {};

    const [item, setItem] = useState([]);
    const [filterTextValue, updateFilterText] = useState('custom');

    const filterCraftList = item.filter((craft) => {
        if(filterTextValue === 'true'){
            return craft.isTrue === true;
        }else if(filterTextValue === 'false'){
            return craft.isTrue = false;
        }else{
            return craft;
        }
    })

    useEffect(() => {
        fetch(`http://localhost:5000/myCraft/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, [user]);

    

    const onFilterValueSelected = (filterValue) => {
        updateFilterText(filterValue);
    }


    return (
        <div>
            <div className=" mx-auto text-center lg:mt-8">
                <span className="label-text text-2xl font-semibold">Filter by</span>
                <div className=" my-4">
                    <FilterProduct filterValueSelected={onFilterValueSelected}></FilterProduct>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 container mx-auto">
                {
                    item?.map(p => (
                        <MyCard
                        key={p._id}
                        filterCraftListC = {filterCraftList}
                        p={p}
                        ></MyCard>
                    ))
                }
            </div>
        </div>
    );
};

export default MyCraft;