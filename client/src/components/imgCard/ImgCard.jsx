import React from 'react'

const ImgCard = ({img, name, about}) => {
    return (
      <div className='my-8'>
          <div className="card card-compact shadow-xl">
              <figure><img src={img} alt="" /></figure>
              <div className="card-body flex flex-col  justify-center items-center">
                  <h2 className="card-title">{name}</h2>
                  <p>_{about}_</p>
              </div>
          </div>
      </div>
    )
  }

export default ImgCard