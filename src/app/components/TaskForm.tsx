import React, { useState } from "react";
import { TaskFormProps } from "../types/task";
import ColorThumbnail from "./ColorThumbnail";
import Button from "./Button";
import Link from 'next/link'

import Image from 'next/image'


const TaskForm: React.FC<TaskFormProps> = ({ 
  onSubmit, 
  initialData = { title: "", color: "blue" },
  children 
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[736px] mx-auto px-[20px]">
      <div>
      <Link 
            href={"/"} 
        >

      <Image
            src='/backArrow.png'
            width={14}
            height={14} 
            alt={'back arrow'} 
            className='mt-[12px] mb-[36px]'   
        />
        </Link>
        <label className="block text-sm font-medium mb-1 text-[#4EA8DE] mb-[20px]">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-md px-3 py-2 outline-none focus:outline-none focus:ring-0 text-white bg-[#333333] h-[52px]"
          placeholder="Ex. Brush your teeth"
          required
        />

      </div>
      <div className="h-[81px]">
        <label className="block text-sm font-medium mb-1 text-[#4EA8DE] mb-[20px]">Color</label>
        <div className="flex">
          <ColorThumbnail 
            key={1}
            color={'#FF3B30'} 
          />
          <ColorThumbnail 
            key={2}
            color={'#FF9500'} 
          />
          <ColorThumbnail 
            key={3}
            color={'#FFCC00'} 
          />
          <ColorThumbnail 
            key={4}
            color={'#34C759'} 
          />
          <ColorThumbnail 
            key={5}
            color={'#007AFF'} 
          />
          <ColorThumbnail 
            key={6}
            color={'#5856D6'} 
          />
          <ColorThumbnail 
            key={7}
            color={'#AF52DE'} 
          />
          <ColorThumbnail 
            key={8}
            color={'#FF2D55'} 
          />
          <ColorThumbnail 
            key={9}
            color={'#A2845E'} 
          />
        </div>
      </div>
      {children}
    </form>
  );
};

export default TaskForm;