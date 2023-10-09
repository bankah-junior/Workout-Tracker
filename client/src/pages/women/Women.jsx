import React from 'react'
import cImg1 from '../../assets/womenPage1.jpg';
import cImg2 from '../../assets/womenPage2.jpg';
import cImg3 from '../../assets/womenPage3.jpg';
import cImg4 from '../../assets/womenPage4.jpg';
import cImg5 from '../../assets/womenPage5.jpg';
import pImg1 from '../../assets/postW1.jpg';
import pImg2 from '../../assets/postW2.jpg';
import pImg3 from '../../assets/postW3.jpg';
import { CarouselContainer, Footer, Navbar, PostCard, Testimonial } from '../../components'

const Women = () => {
  return (
    <div>
      <Navbar />
        <CarouselContainer img1={cImg1} img2={cImg2} img3={cImg3} img4={cImg4} img5={cImg5} />
        <div className="w-full flex flex-col sm:flex-row justify-between p-6">
          <div className="sm:w-3/6 mb-6">
            <h3 className="font-bold text-xl text-white">
                <pre className='font-extrabold inline-block'>\\\  </pre>
                BLOGS & TIPS  
            </h3><br />
            <div>
              <PostCard img={pImg1} title={"Lorem ipsum dolor sit amet."} date={"OCT 5, 2023"} comment={"50"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laborum reiciendis at ex hic nam nisi. Voluptas fuga fugit reprehenderit rem, ex illum possimus sequi, reiciendis eius voluptates veritatis mollitia minus ad quo? Mollitia aspernatur dolorum esse repudiandae ad quod libero quo hic perferendis repellendus voluptatem facere..."} /> <br />
              <PostCard aos={"zoom-in"} img={pImg2} title={"Lorem ipsum dolor sit amet."} date={"JULY 2, 2023"} comment={"10"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laborum reiciendis at ex hic nam nisi. Voluptas fuga fugit reprehenderit rem, ex illum possimus sequi, reiciendis eius voluptates veritatis mollitia minus ad quo? Mollitia aspernatur dolorum esse repudiandae ad quod libero quo hic perferendis repellendus voluptatem facere..."} /> <br />
              <PostCard aos={"zoom-in"} img={pImg3} title={"Lorem ipsum dolor sit amet."} date={"JAN 5, 2023"} comment={"70"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laborum reiciendis at ex hic nam nisi. Voluptas fuga fugit reprehenderit rem, ex illum possimus sequi, reiciendis eius voluptates veritatis mollitia minus ad quo? Mollitia aspernatur dolorum esse repudiandae ad quod libero quo hic perferendis repellendus voluptatem facere..."} />
            </div>
          </div> <hr className="sm:hidden mb-6" />
          <div className="sm:w-2/5">
            <Testimonial name={"YOHANI"} post={"CEO"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, quia! Quos aut eius quisquam, quasi cum qui alias, non deserunt pariatur ut natus laborum consequatur. Possimus debitis provident optio ex eius suscipit autem culpa perferendis! Quidem et odio fugit rem placeat laboriosam minus asperiores rerum aut minima, unde recusandae ut libero blanditiis dolorum, incidunt itaque in tempore pariatur facilis quas dolores. Et eum neque eos, aspernatur itaque ullam illum reiciendis?"} />
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Women