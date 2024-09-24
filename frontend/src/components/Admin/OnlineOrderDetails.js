import React, { useEffect, useState } from 'react'
import CardContainer from '../utilities/Card'
import { CheckSquare, CloudFog } from 'lucide-react';
import { BASE_URL } from '../utilities/constant';
import OnlineOrderList from './OnlineOrderList';
import useGetsDataFromDB from '../hooks/useGetsDataFromDb.hook';
import usePostsDataToDb from '../hooks/usePostsDataToDb.hook';

const OnlineOrderDetails = () => {
    const [orders, setOrders] = useState([]);
    const [checkedItem, setCheckedItem] = useState([])
   const getDataFromDB= useGetsDataFromDB()
    const postDatatoDb= usePostsDataToDb()


    console.log(orders)
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getDataFromDB("onlineorder");
                setOrders(response.orders);
            } catch (error) {
                console.log(error)
            }
        };

        fetchOrders();
    }, [])

    async function handleDeleteOrder () {
        try {
           const data= await postDatatoDb("deleteolorders",{pickupIds:checkedItem})
                  console.log("superb",data)
            if(data.statusCode===200){
              setTimeout(()=>{
                window.location.reload()

              },500)  
            }
           
        } catch (error) {

            console.log(error)
        }
    }


    return (
        < CardContainer>
            <div className="p-4">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-gray-600 border-collapse">
                        <thead className="text-xs text-white uppercase bg-blue-500">
                            <tr>
                                <th scope="col" className="p-4 w-16 border-r border-white text-center">
                                    <div className="flex items-center justify-center">
                                        <CheckSquare
                                        // className={`w-4 h-4 cursor-pointer ${isAllSelected ? 'text-blue-700' : 'text-white'}`}
                                        />
                                        <span className="ml-2">select</span>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3 w-24 border-r border-white text-center">Pickup No.</th>
                                <th scope="col" className="px-6 py-3 w-40 border-r border-white text-center">Customer Name</th>
                                <th scope="col" className="px-6 py-3 w-24 border-r border-white text-center">Mobile</th>
                                <th scope="col" className="px-6 py-3 w-96 border-r border-white text-center">Address</th>
                                <th scope="col" className="px-6 py-3 w-32 border-r border-white text-center">Pickup Date</th>
                                <th scope="col" className="px-6 py-3 w-48 border-r border-white text-center">Pickup Time</th>
                                <th scope="col" className="px-6 py-3 w-48 border-r border-white text-center">Created Date/Time</th>
                                <th scope="col" className="px-6 py-3 w-32 text-center">Customer Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((item) => (
                                <OnlineOrderList item={item} checkedItem={checkedItem} setCheckedItem={setCheckedItem} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex space-x-4">
                    <button onClick={handleDeleteOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Mark Complete
                    </button>
                    <button onClick={handleDeleteOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Mark Cancel
                    </button>
                </div>
            </div>

        </CardContainer>
    )
}

export default OnlineOrderDetails