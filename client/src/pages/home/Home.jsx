import React from 'react';
import { GiRun, GiStrong, GiStrongMan } from 'react-icons/gi';
import heroImg from '../../assets/e5476bf09093b776f607944ca6262b01.jpg';
import womenSecImg from '../../assets/women-section-Img.jpg';
import menSecImg from '../../assets/men-section-Img.jpg';
import trainer1 from '../../assets/trainer1.jpeg';
import trainer2 from '../../assets/trainer2.jpeg';
import trainer3 from '../../assets/trainer3.jpeg';
import trainer4 from '../../assets/trainer4.jpeg';
import { HeroImgBtn, IconCard, StackedObjectsRight, StackedObjectsLeft, ImgCard, Navbar, Footer } from '../../components';

const Home = () => {
  return (
    <div className='bg-white text-black'>

      <Navbar />

      {/* Hero Section */}
      <section>
        <HeroImgBtn img={heroImg} title={"Hello there"} text={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."} btnName={"Get Started"} />
      </section>
      {/* End of Hero Section */}
      
      {/* Services Section */}
      <section className='mt-8'>
        <center className='mx-6'>
          <h3 className='font-bold text-2xl'>Our Services</h3>
          <p className='opacity-80 my-2'>Spacious gym club at a health club free-weight area at a health club</p>
          <pre className='text-xl'>Men    <span className='font-bold'>Women</span></pre>
          <div className="flex flex-col sm:flex-row mt-8">
            <div className="md:w-1/3 md:mx-6">
              <IconCard animeName={"flip-left"} animeDuration={"1000"} icon={<GiStrongMan size={70} />} title={"Body Composition"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae exercitationem rem sit? Facilis labore repellat reiciendis error quis debitis, nam quos tempora nobis est doloribus, ullam explicabo quam saepe dolorem sit asperiores corporis magni. Error odio obcaecati blanditiis ex possimus! Molestias fuga non rem suscipit enim perspiciatis voluptatem voluptatibus!"} />
            </div>
            <div className="md:w-1/3 md:mx-6">
              <IconCard animeName={"flip-left"} animeDuration={"2000"} icon={<GiStrong size={70} />} title={"Personal Training"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae exercitationem rem sit? Facilis labore repellat reiciendis error quis debitis, nam quos tempora nobis est doloribus, ullam explicabo quam saepe dolorem sit asperiores corporis magni. Error odio obcaecati blanditiis ex possimus! Molestias fuga non rem suscipit enim perspiciatis voluptatem voluptatibus!"} />
            </div>
            <div className="md:w-1/3 md:mx-6">
              <IconCard animeName={"flip-left"} animeDuration={"3000"} icon={<GiRun size={70} />} title={"Spin Cycling"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae exercitationem rem sit? Facilis labore repellat reiciendis error quis debitis, nam quos tempora nobis est doloribus, ullam explicabo quam saepe dolorem sit asperiores corporis magni. Error odio obcaecati blanditiis ex possimus! Molestias fuga non rem suscipit enim perspiciatis voluptatem voluptatibus!"} />
            </div>
          </div>
        </center>

      </section>
      {/* End of Services Section */}

      {/* Women Section */}
      <section>
        <StackedObjectsLeft 
          img={womenSecImg} 
          bgImg={womenSecImg} 
          color={"white"}
          bgColor={"#1b252c"}
          title1={"Your Body is a work "} 
          title2={" of art in the gym"} 
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nobis? Consequuntur, error. Voluptatibus ad excepturi cupiditate rem neque corrupti quas?"} 
          btnName={"LEARN MORE"} 
        />
      </section>
      {/* End of Women Section */}

      {/* Services Section */}
      <section className='my-20'>
        <center className='mx-6'>
          <h3 className='font-bold text-2xl'>Our Best Trainer</h3>
          <p className='opacity-80 my-2'>Spacious gym club at a health club free-weight area at a health club</p>
          <div className="flex flex-col sm:flex-row mt-8">
            <div className="md:w-1/4 md:mx-6">
              <ImgCard img={trainer1} name={"David Clark"} about={"Personal Trainer"} />
            </div>
            <div className="md:w-1/4 md:mx-6">
              <ImgCard img={trainer2} name={"Merry Cristian"} about={"Female Trainer"} />
            </div>
            <div className="md:w-1/4 md:mx-6">
              <ImgCard img={trainer3} name={"Mark Carry"} about={"Body Composer"} />
            </div>
            <div className="md:w-1/4 md:mx-6">
              <ImgCard img={trainer4} name={"Maria Yap"} about={"Class Instructor"} />
            </div>
          </div>
        </center>

      </section>      
      {/* End of Services Section */}

      {/* Men Section */}
      <section>
        <StackedObjectsRight 
          img={menSecImg} 
          bgImg={menSecImg} 
          color={"#141b1f"}
          bgColor={"#cdc3c6"}
          title1={"Stop by and see the gym "} 
          title2={" for yourself"} 
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nobis? Consequuntur, error. Voluptatibus ad excepturi cupiditate rem neque corrupti quas?"} 
          btnName={"LEARN MORE"} 
        />
      </section>
      {/* End of Men Section */}

      <Footer />

    </div>
  )
}

export default Home