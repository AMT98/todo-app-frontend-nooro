import Link from "next/link";
import TaskCard from "./components/TaskCard";
import Button from "./components/Button";
import TaskStatus from "./components/TaskStatus";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/tasks");
  const tasks = await res.json();
  console.log({ tasks });

  // bg-[#1a1a1a]
  return (
    <div className="relative top-[-25px] flex flex-col items-center  mx-[20px]">
      <Button
        pageLink="/create-task"
        customClasses="flex items-center justify-center rounded-lg p-4 sm:px-6 bg-[#1E6F9F] text-white w-full max-w-[736px]"
        labelStyle="font-bold text-sm"
        imgPath="/plus.png"
        imgAlt="plus sign"
        imgHeight={16}
        imgWidth={16}
        imgStyle="ml-2"
        buttonTitle="Create Task"
      />
      <div className="w-full max-w-[736px] flex items-center justify-between mt-[50px] font-bold text-sm pt-[80px]">
        <TaskStatus
          label="Tasks"
          value={tasks.length}
          labelColor="text-[#4EA8DE]"
          valueColor="text-[#D9D9D9]"
        />
        <TaskStatus
          label="Completed"
          value={tasks.filter((task) => task.completed).length}
          total={tasks.length}
          labelColor="text-[#8284FA]"
          valueColor="text-[#D9D9D9]"
        />
      </div>

      <div className="w-full max-w-[736px] mx-auto mt-8 space-y-4">
        {tasks.length > 0 ? (
          tasks
            .sort((a, b) => Number(a.completed) - Number(b.completed))
            .map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                color={task.color}
                completed={task.completed}
                id={task.id}
              />
            ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full max-w-[736px] mx-auto  mt-[10px] font-bold text-sm pt-[80px] mb-[30px] border-t border-[#333333]">
            <Image
              src="/Clipboard.png"
              width={56}
              height={56}
              alt="ClipBoard"
            />
            <h2 className="text-center text-lg text-gray-500 font-[700]">
              You don't have any tasks registered yet.
            </h2>
            <h2 className="text-center text-lg text-gray-500 font-[400]">
              Create tasks and organize your to-do items.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
