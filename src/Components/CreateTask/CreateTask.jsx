import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import useTask from "../../Hooks/useTask";


const CreateTask = () => {
    const [ , refetch ] = useTask();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleCreateTask = async (data) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res) {
      toast.success("Task created successfully");
      refetch();
      document.getElementById("my_modal_5").close();
    }
    reset();
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-bold text-2xl text-[#3D3D3D]">Tasks</h2>
      </div>
      <div>
        <button
          className="btn bg-blue-700 text-white rounded py-2 px-6 flex items-center gap-2 text-sm"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Create Task <FaPlus></FaPlus>
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Create New Task</h3>
            {/* create task form */}
            <form onSubmit={handleSubmit(handleCreateTask)}>
              <input
                {...register("title", { required: true })}
                className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2"
                placeholder="Task title"/>
                {errors.title && (
                  <span className="text-red-600 text-xs block">Title is required</span>
                )}
              
              <input
                {...register("description", { required: true })}
                className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2"
                placeholder="Task Description"
              />
              {errors.description && (
                  <span className="text-red-600 text-xs block">Description is required</span>
                )}
              
              <input
                {...register("priority", { required: true })}
                className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2"
                placeholder="Task priority"
              />
              {errors.priority && (
                  <span className="text-red-600 text-xs block">Priority is required</span>
                )}
              <input
                {...register("status", { required: true })}
                className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2"
                placeholder="Status"
                defaultValue={"to-do"}
              />
              <br />
              <div className="flex justify-end">
                <input
                  className="bg-[#2563DC] text-white rounded py-1 px-4 text-sm"
                  type="submit"
                  value="Create Task"
                />
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  {" "}
                  ✕{" "}
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default CreateTask;
