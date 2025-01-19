'use client'
import React from "react";
import TaskForm from "../components/TaskForm";
import { useRouter } from "next/navigation";
import Button from "../components/Button";


const CreateTaskPage: React.FC = () => {
  const router = useRouter();

  const handleCreateTask = async (data: { title: string; color: string }) => {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, completed: false }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create task");
      }
  
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("Error: Could not create the task. Please try again.");
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[736px] mx-auto">
      <TaskForm onSubmit={handleCreateTask}>
        <Button 
            pageLink='/create-task'
            customClasses="flex items-center mt-[35px] justify-center gap-[8px] rounded-[8px] bg-[#1E6F9F] text-white w-full max-w-[736px] mx-auto h-[52px]"
            labelStyle="font-bold text-sm"
            imgPath="/plus.png"
            imgAlt="plus sign"
            imgHeight={16}
            imgWidth={16}
            imgStyle="ml-1"
            buttonTitle="Add Task"
            isSubmit={true}
        />
      </TaskForm>
    </div>
  );
};

export default CreateTaskPage;