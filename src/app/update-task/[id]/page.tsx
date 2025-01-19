'use client'
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import TaskForm from "../../components/TaskForm";
import Button from "../../components/Button";


const EditTaskPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();

  const [task, setTask] = useState<{ title: string; color: string } | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      if (id) {
        try {
          const res = await fetch(`http://localhost:3000/tasks/${id}`);
          if (!res.ok) {
            throw new Error("Failed to fetch task");
          }
          const data = await res.json();
          setTask({ title: data.title, color: data.color });
        } catch (error) {
          console.error("Error fetching task:", error);
        }
      }
    };
  
    fetchTask();
  }, [id]);

  const handleEditTask = async (data: { title: string; color: string }) => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        throw new Error("Failed to edit task");
      }
  
      router.push("/"); 
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };
  

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
      <div className="flex flex-col items-center justify-center]">
      <TaskForm onSubmit={handleEditTask} initialData={task}>
                    <Button 
                        pageLink='/update-task'
                        customClasses="flex items-center mt-[35px] justify-center p-[16px] gap-[8px] rounded-[8px] bg-[#1E6F9F] text-white w-full max-w-[736px] mx-auto h-[52px]"
                        labelStyle="font-bold text-sm"
                        imgPath="/mdi_check-bold.png"
                        imgAlt="plus sign"
                        imgHeight={16}
                        imgWidth={16}
                        imgStyle="ml-1"
                        buttonTitle="Save"
                        isSubmit={true}
                    />
                    </TaskForm>
            </div>
  );
};

export default EditTaskPage;