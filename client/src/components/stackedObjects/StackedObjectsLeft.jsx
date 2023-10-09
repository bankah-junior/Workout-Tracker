import React from 'react';
import { Link } from 'react-router-dom';

const StackedObjectsLeft = ({img, bgImg, title1, title2, text, btnName, color, bgColor}) => {
  return (
    <div className='w-full h-[80vh] sm:h-[50vh] relative flex justify-center items-center'>
      <div className="absolute w-1/2 sm:w-1/3 h-full left-0 bg-black opacity-80 rounded-tr-[5rem]" style={{backgroundImage: `url(${bgImg})`, backgroundPosition: "center", backgroundSize: "cover"}}></div>
        <div className="absolute w-1/2 sm:w-2/3 h-full right-0 flex flex-col-reverse">
          <div className={`w-full h-[86%] bg-[${bgColor}]`}></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center z-50 items-center sm:items-start">
          <div className="sm:w-72 w-60" data-aos="fade-right" data-aos-duration="1000">
            <img src={img} alt="" className='card' />
          </div>
          <div className={`flex flex-col items-end sm:items-start px-6 sm:pl-16 pt-4 text-[${color}] mt-4 sm:mt-0 w-96`}>
            <h3 className="font-semibold text-2xl text-right sm:text-left">{title1} <br className="hidden sm:block" /> {title2}</h3>
            <br />
            <p className='text-right sm:text-left'>{text}</p>
            <Link to={'/women'}>
              <button className={`btn border-white bg-[${bgColor}] text-[${color}] hover:bg-white hover:text-[#000] mt-4`}>{btnName}</button>            
            </Link>
          </div>
        </div>  
        <div className="absolute w-1/2 sm:w-1/3 h-full left-0 opacity-80 rounded-tr-[5rem] sm:bg-transparent bg-[rgba(0,0,0,0.5)]"></div>
    </div>
  )
}

export default StackedObjectsLeft