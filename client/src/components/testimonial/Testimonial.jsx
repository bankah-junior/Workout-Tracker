import React from 'react'

const Testimonial = ({name, post, text}) => {
  return (
    <div className="w-full mb-4">
        <h3 className="font-bold text-xl">
            <span className='font-extrabold'>\\\ </span>
            TESTIMONIALS 
            <span className='font-extrabold'> \\\</span> 
        </h3>
        <p>
            {text}
        </p>
        <h3 className="text-right font-bold italic text-white">
            {name} <br /> {post}
        </h3>
    </div>
  )
}

export default Testimonial