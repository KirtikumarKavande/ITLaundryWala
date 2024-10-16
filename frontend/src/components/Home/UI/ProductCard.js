const ProductCard = ({ title, price, description,setOpen,setCurrentPage,identifier }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col  items-center ">
      <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-lg  mt-auto">{price}</p>
      <button onClick={()=>{setOpen(true)
        setCurrentPage(identifier)
      }} className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
        Start Order
      </button>
    </div>
  );

  export default ProductCard