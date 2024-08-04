const OurPromise = ({ icon: Icon, title, description }) => (
    <div className="flex items-center mb-4 border border-white mx-10 border-t-gray-100">
      <div className="mr-10 ">
        <Icon className="w-24 h-24 text-red-500 mt-3" />
      </div>
      <div >
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  export default OurPromise