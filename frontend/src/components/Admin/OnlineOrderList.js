import React from 'react'

const OnlineOrderList = ({item, setCheckedItem, checkedItem}) => {
    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
    };

    const handleCheckboxChange = () => {
        setCheckedItem(prevCheckedItems => {
            if (prevCheckedItems.includes(item.pickupId)) {
                return prevCheckedItems.filter(id => id !== item.pickupId);
            } else {
                return [...prevCheckedItems, item.pickupId];
            }
        });
    };
    
    return (
        <tr key={item.id} className="bg-gray-100 border-b hover:bg-gray-200">
            <td className="w-4 p-4 border-r text-center">
                <div className="flex items-center justify-center">
                    <input
                        type="checkbox"
                        checked={checkedItem.includes(item.pickupId)}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                </div>
            </td>
            <td className="px-6 py-4 border-r text-center">{item.pickupId}</td>
            <td className="px-6 py-4 font-medium border-r text-center">{item.name}</td>
            <td className="px-6 py-4 border-r text-center">{item.mobileNumber}</td>
            <td className="px-6 py-4 border-r text-center">{item.address}</td>
            <td className="px-6 py-4 border-r text-center">{item.pickupDate}</td>
            <td className="px-6 py-4 border-r text-center">{item.pickupTime}</td>
            <td className="px-6 py-4 border-r text-center">{formatDateTime(item.createdAt)}</td>
            <td className="px-6 py-4 text-center">{item.isUserExist ? "OLD" : "NEW"}</td>
        </tr>
    )
}

export default OnlineOrderList