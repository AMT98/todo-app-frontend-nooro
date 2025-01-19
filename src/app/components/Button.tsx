import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ButtonProps } from '../types/task'

const Button: React.FC<ButtonProps> = ({
    pageLink, 
    customClasses, 
    labelStyle,
    imgPath, 
    imgAlt, 
    imgHeight, 
    imgWidth, 
    imgStyle,
    buttonTitle,
    isSubmit
}) => {
    return isSubmit ? (
        <button
            type="submit"
            className={customClasses}
        >
            <span className={labelStyle}>{buttonTitle}</span>
            <Image
                src={imgPath}
                width={imgWidth}
                height={imgHeight} 
                alt={imgAlt}
                className={imgStyle}
            />
        </button>
    ) : (
        <Link 
            href={pageLink} 
            className={customClasses}
        >
            <span className={labelStyle}>{buttonTitle}</span>
            <Image
                src={imgPath}
                width={imgWidth}
                height={imgHeight} 
                alt={imgAlt}
                className={imgStyle}
            />
        </Link>
    )
}

export default Button
