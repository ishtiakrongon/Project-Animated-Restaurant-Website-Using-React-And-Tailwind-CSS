import React from 'react';
import BannerPng from '../../assets/food/banner.png';
import {motion} from 'framer-motion';
import {SlideUp} from '../Hero/Hero';
const Testimonial = () => {
  return (
    <section>
        <div className="container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
            
                {/* text content section */}
                <div className='space-y-5 lg:max-w-[400px]'>
                 <motion.p 
                 variants={SlideUp(0.4)}
                 initial="hidden"
                 whileInView={"show"}
                 className='text-xl font-serif relative z-10'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sed assumenda tempora eligendi amet tempore, reiciendis eos porro incidunt autem optio molestias omnis magnam voluptas, laboriosam nihil illo vero tenetur.
                 </motion.p>
                 
                </div>
                {/* image section here */}
                <div className='relative'>
                    <motion.img
                    initial={{
                        opacity: 0,
                        x: -100,
                        y: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0
                    }}
                    whileHover={{
                        scale: 1.2,
                        rotate: 15,
                        x: 50,
                        y: -50
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        scale: { duration: 0.5 }
                    }}
                    src={BannerPng} alt="" className='relative z-10 w-full lg:max-w-[280px] img-shadow'/>
                    <motion.div 
                    initial= {{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: .6, delay: 0.5 }}
                    className='absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px] bg-lightYellow rounded-full'>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial