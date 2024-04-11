import { AiOutlinePlus } from "react-icons/ai";
const AddTask = () => {
    return (
        <div>
            <button class="btn btn-primary flex items-center justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Add Task <AiOutlinePlus className="ml2" size={18}/>
            </button>
        </div>
    )
}

export default AddTask