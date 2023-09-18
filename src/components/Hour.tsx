import React, { useEffect, useState } from 'react'
import { hourProperties } from '../types';

const Hour = ({ time }: hourProperties) => {

  const [formattedTime, setTime] = useState("")

  const formatTime = (timestamp: string): string => {
    try {
      const date = new Date(timestamp);
      const formatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      return formatter.format(date);
    } catch (error) {
      console.error(error);
      return "Invalid Timestamp";
    }
  }

  useEffect(() => {
    if (time !== undefined) {
      setTime(formatTime(time.toString()));
    }
  }, [time])

  return (
    <p className="text-[#94A3B8] text-[13px]">{formattedTime}</p>
  )
}

export default Hour
