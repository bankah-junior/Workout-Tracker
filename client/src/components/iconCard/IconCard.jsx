import React from 'react'

const IconCard = ({icon, title, text, animeName, animeDuration}) => {
  return (
    <div className='my-8' data-aos={animeName} data-aos-duration={animeDuration}>
        <div className="card card-compact shadow-xl">
            <figure>{icon}</figure>
            <div className="card-body flex flex-col  justify-center items-center">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default IconCard