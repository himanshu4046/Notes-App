import { useState } from "react";

const Form = ({ onAddTask, onClose }) => {
  const [task, settask] = useState("");
  const [detail, setdetail] = useState("");
  const [deadline, setdeadline] = useState("");

  const addingtask = (e) => {
    e.preventDefault();
    onAddTask({ task, detail, deadline });
  };

  return (
    <div className="fixed z-30 inset-0 flex items-center justify-center  bg-black/30 backdrop-blur-2xl">
      <div className="border-2 border-black rounded-2xl">
        <form
          className="flex flex-col p-5 gap-5 items-center justify-center w-fit rounded-2xl bg-[#638475]"
          onSubmit={addingtask}
        >
          <input
            type="text"
            value={task}
            onChange={(e) => {
              settask(e.target.value);
            }}
            className="outline-2 outline-black w-fit text-2xl rounded-2xl p-2"
            placeholder="Enter Task"
          />
          <input
            type="text"
            value={detail}
            onChange={(e) => {
              setdetail(e.target.value);
            }}
            className="outline-2 outline-black w-fit text-2xl rounded-2xl p-2"
            placeholder="Enter detail"
          />
          <input
            type="text"
            value={deadline}
            onChange={(e) => {
              setdeadline(e.target.value);
            }}
            className="outline-2 outline-black w-fit text-2xl rounded-2xl p-2"
            placeholder="Enter deadline"
          />
          <div className="flex gap-3">
            <button
              type="button"
              className="border-2 rounded-2xl text-2xl bg-[#FF9670] p-2 w-32"
              onClick={onClose}
            >
              Close
            </button>
            <button type="submit" className="border-2 bg-[#4EBC69] rounded-2xl text-2xl p-2 w-32">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
