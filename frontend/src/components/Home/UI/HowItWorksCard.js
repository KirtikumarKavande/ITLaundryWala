const WorkflowStep = ({ icon, title, step, }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-gray-100">
        <div className=" p-3 mb-4">
            <img src={icon} alt={title} className="h-28"/>
        </div>
        <p className="font-semibold text-gray-800 mb-2">{step}. {title}</p>
    </div>
);
export default WorkflowStep