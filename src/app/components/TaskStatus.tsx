import React from "react";
import { TaskStatusProps } from "../types/task";

const TaskStatus: React.FC<TaskStatusProps> = ({
  label,
  value,
  total = 0,
  labelColor,
  valueColor,
}) => {
  return (
    <h2>
      <span className={labelColor}>{label}</span>
      <span
        className={`${valueColor} bg-[#333333] rounded-full ml-1 px-2 py-0.5`}
      >
        {label === "Tasks" ? value : `${value} de ${total}`}
      </span>
    </h2>
  );
};
export default TaskStatus;
