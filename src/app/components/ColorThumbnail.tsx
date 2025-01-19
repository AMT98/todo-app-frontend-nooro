import React from 'react'
import { ColorThumbnailProps } from '../types/task';

const ColorThumbnail: React.FC<ColorThumbnailProps> = ({ color }) => {
    return (
      <div
        className="h-[45px] w-[45px] mr-[5px] rounded-full cursor-pointer"
        style={{ backgroundColor: color }}
      />
    );
  }
  

export default ColorThumbnail
