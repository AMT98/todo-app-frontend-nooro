"use client";
import React, { useState } from "react";
import { TaskCardProps } from "../types/task";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const API_URL = "http://localhost:3000";
const TaskCard: React.FC<TaskCardProps> = ({ id, title, color, completed }) => {
  const [isComplete, setIsComplete] = useState(completed);
  const router = useRouter();

  const updateComplete = async () => {
    try {
      const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !isComplete }),
      });

      if (!res.ok) throw new Error("Failed to update task");

      const task = await res.json();
      setIsComplete(task.completed);
      router.refresh();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this task?")) {
      try {
        const res = await fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });

        if (!res.ok) throw new Error("Failed to delete task");
        router.refresh();
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  return (
    <div
      className={`flex items-center justify-between p-4 border border-[#262626] rounded-[8px] h-[72px] bg-[#262626]  ${
        isComplete ? "text-white" : "text-[#808080]"
      } shadow-sm hover:shadow-md transition`}
    >
      <div className="flex space-x-2">
        <button
          onClick={() => updateComplete()}
          className={`px-4 py-2 rounded-md `}
        >
          {isComplete ? (
            <Image
              src="/complete.png"
              width={24}
              height={24}
              alt="completeIcon"
            />
          ) : (
            <Image
              src="/incomplete.png"
              width={24}
              height={24}
              alt="incomplete"
            />
          )}
        </button>
      </div>
      <Link href={`/update-task/${id}`}>
        <h3
          className={`max-w-[632px] text-sm font-semibold  text-[#F2F2F2]  ${
            isComplete && "line-through opacity-60 text-[#808080]"
          }`}
        >
          {title}
        </h3>
      </Link>
      <div className="flex space-x-2 cursor-pointer">
        <Image
          src="/trash.png"
          width={24}
          height={24}
          alt="trashIcon"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default TaskCard;
