import React from "react";
import SteakMeal from "../assets/images/SteakMeal.jpg"
import Fries from "../assets/images/Fries.jpg"
import Glass from "../assets/images/Glass.jpg"

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6" >
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white"> 
          <p className="font-bold text-2xl px-2 pt-4" >Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={SteakMeal} alt="SteakMeal"/>
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white"> 
          <p className="font-bold text-2xl px-2 pt-4" >New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={Fries} alt="Fries"/>
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white"> 
          <p className="font-bold text-2xl px-2 pt-4" >We Deliver Deserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={Glass} alt="Glass"/>
      </div>
    </div>
  );
};

export default HeadlineCards;
