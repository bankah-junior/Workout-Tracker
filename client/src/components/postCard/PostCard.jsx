import React from 'react'
import { RiChat1Fill, RiTimeFill } from 'react-icons/ri';

const PostCard = ({img, title, date, comment, text, aos}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:h-52">
        <div className="sm:w-2/5 border border-white p-1 grid place-content-center">
        <img src={img} alt="" data-aos={aos} />
        </div>
        <div className="sm:w-3/5 sm:pl-6 mt-2 sm:mt-0">
            <h3 className="font-bold uppercase text-white">{title}</h3>
            <div className='flex items-center'>
                <RiTimeFill /> 
                <span className='ml-1 mr-4'>{date}</span>  
                <RiChat1Fill /> 
                <span className='ml-1'>{comment}</span>
            </div>
            <p className='mt-3'>
                {text}
                <span className="text-blue-700">[...]</span>
            </p>
        </div>
    </div>
  )
}

export default PostCard