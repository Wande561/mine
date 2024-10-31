import React from 'react';
import myImage from '../pic.jpg' ;

const Hero: React.FC = () => {
  return (
    <div className=" bg-cover bg-center h-[300px] flex items-center justify-between px-8 bg-gradient-to-br from-[#3BAEDE] to-[#F8F9FA]" >
      <div className="text-center flex-grow">
      <div className='flex-shrink-0'>
        {/* Image */}
        <img 
          src={myImage} 
          className="w-32 h-32 rounded-full mx-auto mb-4 "
        />   
      </div>
        <p className="text-[#3c4b78] font-bold mb-2 text-xl"> Hello, My name is </p>
        <h1 className="text-4xl font-bold mb-4 text-[#3c4b78]">Mawande Sphosethu Hlangu</h1>
        <p className="text-xl mb-4 text-[#3c4b78] font-bold">A Creative Freelancer & Web Developer</p>
      </div>
    </div>
  );
};

export default Hero;
