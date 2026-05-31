import CrossSolidIcon from '@iconify-react/basil/cross-solid';

const Taskcard = ({ task, onDelete }) => {
  
  return (
    <div className='relative'>
    <div className="bg-[#CCC9A1] flex w-fit p-6 rounded-2xl flex-col gap-2">
      <CrossSolidIcon
        className="top-1 right-2 absolute cursor-pointer"
        height="2em"
        style={{ color: '#000' }}
        onClick={() => onDelete(task.id)}
      />
      <h1 className=" rounded-2xl wrap-break-word text-md w-60 sm:text-xl sm:w-70 font-bold p-3">
        Task: <span className="text-lg font-semibold">{task.task} </span>
      </h1>
      <h1 className=" text-[rgb(22,37,33)] text-md w-60 sm:text-xl sm:w-70 wrap-break-word rounded-2xl  font-bold p-3">
        Detail:
        <span className="text-lg  font-normal">
          {task.detail}
        </span>
      </h1>
      <h1 className=" rounded-2xl wrap-break-word text-md w-60 sm:text-xl sm:w-70 font-bold p-3">
        Deadline: <span className="text-lg font-normal">{task.deadline}</span>
      </h1>
    </div>
    </div>
  );
};

export default Taskcard;
