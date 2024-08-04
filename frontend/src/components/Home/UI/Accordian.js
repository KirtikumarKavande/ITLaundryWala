import { ChevronDown } from 'lucide-react';
const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className="border-b w-full border-gray-200 "
        onClick={onToggle}
        
        >
            <button
                className="flex justify-between items-center w-full p-5 text-left bg-gray-100 hover:bg-gray-50 transition-colors"
            >
                <span className="text-lg font-semibold text-gray-800">{title}</span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-5 bg-gray-50">{content}</div>
            </div>
        </div>
    );
};
export default AccordionItem