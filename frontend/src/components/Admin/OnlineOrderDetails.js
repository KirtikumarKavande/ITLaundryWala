import React, { useEffect, useState } from 'react'
import CardContainer from '../utilities/Card'
import { CheckSquare } from 'lucide-react';

const OnlineOrderDetails = () => {
    const [selectedItems, setSelectedItems] = useState({});

    const tableData = [
        {
            id: 1,
            pickupNo: 1,
            customerName: 'Kirtikumar',
            mobile: '7756951888',
            address: 'Hinjewadi Phase 1, Near Wipro Circle, Pune, Maharashtra 411057',
            pickupDate: '30 Sep 2024',
            pickupTime: '7:00 PM - 8:00 PM',
            createdDateTime: '21 Sep 2024 12:53 AM',
            customerType: 'New'
        },
        {
            id: 2,
            pickupNo: 2,
            customerName: 'Rahul Sharma',
            mobile: '9876543210',
            address: 'Koregaon Park, Lane 7, Near ABC Restaurant, Pune, Maharashtra 411001',
            pickupDate: '1 Oct 2024',
            pickupTime: '10:00 AM - 11:00 AM',
            createdDateTime: '22 Sep 2024 10:15 AM',
            customerType: 'Old'
        },
        {
            id: 3,
            pickupNo: 3,
            customerName: 'Priya Patel',
            mobile: '8765432109',
            address: 'Magarpatta City, Hadapsar, Near Suzlon One Earth, Pune, Maharashtra 411028',
            pickupDate: '2 Oct 2024',
            pickupTime: '2:00 PM - 3:00 PM',
            createdDateTime: '23 Sep 2024 3:30 PM',
            customerType: 'New'
        }
    ];

    const toggleSelection = (id) => {
        setSelectedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const isAllSelected = Object.keys(selectedItems).length === tableData.length &&
        Object.values(selectedItems).every(Boolean);

    const toggleAllSelection = () => {
        if (isAllSelected) {
            setSelectedItems({});
        } else {
            const newSelectedItems = {};
            tableData.forEach(item => {
                newSelectedItems[item.id] = true;
            });
            setSelectedItems(newSelectedItems);
        }
    };
    useEffect(() => {

    }, [])

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
                                            className={`w-4 h-4 cursor-pointer ${isAllSelected ? 'text-blue-700' : 'text-white'}`}
                                            onClick={toggleAllSelection}
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
                            {tableData.map((item) => (
                                <tr key={item.id} className="bg-gray-100 border-b hover:bg-gray-200">
                                    <td className="w-4 p-4 border-r text-center">
                                        <div className="flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedItems[item.id] || false}
                                                onChange={() => toggleSelection(item.id)}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r text-center">{item.pickupNo}</td>
                                    <td className="px-6 py-4 font-medium border-r text-center">{item.customerName}</td>
                                    <td className="px-6 py-4 border-r text-center">{item.mobile}</td>
                                    <td className="px-6 py-4 border-r text-center">{item.address}</td>
                                    <td className="px-6 py-4 border-r text-center">{item.pickupDate}</td>
                                    <td className="px-6 py-4 border-r text-center">{item.pickupTime}</td>
                                    <td className="px-6 py-4 border-r text-center">{item.createdDateTime}</td>
                                    <td className="px-6 py-4 text-center">{item.customerType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Mark Complete
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Mark Cancel
                    </button>
                </div>
            </div>

        </CardContainer>
    )
}

export default OnlineOrderDetails