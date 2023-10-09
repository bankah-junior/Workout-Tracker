import React from 'react';

const HeroImgBtn = ({img, title, text, btnName}) => {
  return (
    <div>
        <div className="hero min-h-[70vh] text-white" style={{backgroundImage: `url(${img})`}}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{text}</p>
                    <button className="btn bg-[#141b1f] text-white">{btnName}</button>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default HeroImgBtn