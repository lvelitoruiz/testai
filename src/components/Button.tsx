import React from 'react'
import { chatText } from '../utils/consts'
import IconCustom from './IconCustom'
import { buttonProps } from '../types'

const Button = ({icon,text}: buttonProps) => {
    return (
        <button className="flex items-center px-5 gap-2 text-white bg-[#F97316] h-[39px] rounded-[6px]">
            <IconCustom name={icon} className='w-4 h-4 text-white' />
            <span>{text}</span>
        </button>
    )
}

export default Button
