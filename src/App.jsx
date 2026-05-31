import { useEffect, useState } from "react";
import Addnew from "./Components/Addnew";
import Form from "./Components/Form";
import Taskcard from "./Components/Taskcard";

const App = () => {
  const notesdata = [];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tasks, setTasks] = useState(()=>{

    const saved=localStorage.getItem('data');
    return saved?JSON.parse(saved):[];
  })
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(tasks));
  }, [tasks]);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const addTask = (taskData) => {
    setTasks((currentTasks) => [...currentTasks, { ...taskData, id: Date.now() }]);
    closeForm();
  };

  return (
    <div className="flex gap-3  min-w-fit bg-[#F0FFCE]">
      <Addnew onOpenForm={openForm} />

      <div className="min-h-screen w-full ">
        <h1 className="text-6xl text-center m-4 font-bold">Notes </h1>
        {isFormOpen && <Form onAddTask={addTask} notesdata={notesdata} onClose={closeForm} />}
        <div className="m-2 flex flex-wrap justify-evenly  gap-6">
          {tasks.map((task) => (
            <Taskcard key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
