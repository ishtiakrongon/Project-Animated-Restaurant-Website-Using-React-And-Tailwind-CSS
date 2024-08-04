import React from 'react';
import FoodPng from "../../assets/food/food.png";
import Spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";
import { IoCartOutline } from 'react-icons/io5';

const Hero = () => {
  return (
    <main>
        <div className="container min-h-[600px] flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
                {/* text content here */}
                <div className='space-y-3 mt-14 text-center md:text-left md:mt-0'>
                    <h1 className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent">
                        Yummy
                        <img src={Leaf} alt="Ymmuy logo" className="absolute w-[50px] top-0 right-0 md:right-[100px]"/>
                    </h1>
                    <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase">BREAKFAST</h2>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, in magni nemo voluptatibus doloribus rem veniam possimus quibusdam ex. Laborum dolores repudiandae sint a enim fugiat assumenda veniam accusamus animi?
                    </p>
                </div>
                {/* images content here */}
            </div>
        </div>
    </main>
  )
}

export default Hero