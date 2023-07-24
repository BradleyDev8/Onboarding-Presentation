import React from 'react';
import logo from "../assets/logo.svg";
import TsLogo from "../assets/accordion-logos/TypeScript.png"
import AwsLogo from "../assets/accordion-logos/awsLogo.png"
import cypressLogo from "../assets/accordion-logos/cypressLogo.png"
import jestLogo from "../assets/accordion-logos/jst.png"
import reactNativeLogo from "../assets/accordion-logos/reactNative.png"
import TerraformLogo from "../assets/accordion-logos/Terraform.png"
import MicroServices from "../assets/accordion-logos/microservices.jpeg"
import ClientServer from "../assets/accordion-logos/client-server.jpeg"
import JobMatcha from "../assets/accordion-logos/JobMatchaLogo.png"
import MarvelLogo from "../assets/accordion-logos/marvelLogo.png"
import SailLogo from "../assets/accordion-logos/sailboat-solid.svg"
import TunesdayLogo from "../assets/accordion-logos/TunesdayLogo.svg"
import JonSnowLogo from "../assets/accordion-logos/JonLogo.png"


const AccordionChecked: React.FC = () => {
  return (
    <>
      <div className="collapse collapse-arrow bg-gradient-to-tr from-success to-base-100  mb-2">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Technologies Hamilton Robson Use:
        </div>
        <div className="collapse-content flex justify-center gap-2">
          <img src={logo} alt="" className='w-24'/>
          <img src={TsLogo} alt="" className='w-24'/>
          <img src={AwsLogo} alt="" className='w-24 ml-2 mr-2'/>
          <img src={cypressLogo} alt="" className='w-24 ml-2'/>
          <img src={jestLogo} alt="" className='w-24'/>
          <img src={reactNativeLogo} alt="" className='w-24'/>
          <img src={TerraformLogo} alt="" className='w-24'/>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gradient-to-tr from-success to-base-100 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Client Server & Microservices
        </div>
        <div className="collapse-content flex gap-3">
          <img src={ClientServer} alt="" className='rounded-lg' />
          <img src={MicroServices} alt="" className='rounded-lg'/>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gradient-to-tr from-success to-base-100">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Hamilton Robson Projects:
        </div>
        <div className="collapse-content">
          
            <div className='flex justify-center gap-4'>
              <div className=' p-2'><img src={JobMatcha} className='w-24' alt="" />
              <h2 className='font-semibold'>JobMatcha</h2></div>
              <div className=' p-2'><img src={MarvelLogo} className='w-44' alt="" />
              <h2 className='font-semibold'>Marvel</h2></div>
              <div className=' p-2'><img src={SailLogo} className='w-28' alt="" />
              <h2 className='font-semibold'>Sail</h2></div>
              <div className=' p-2'><img src={JonSnowLogo} className='w-36' alt="" />
              <h2 className='font-semibold'>Game of Thrones</h2></div>
              <div className=' p-2'><img src={TunesdayLogo} className='w-28' alt="" />
              <h2 className='font-semibold'></h2></div>
              
            </div>
          
        </div>
      </div>
    </>
  );
};

export default AccordionChecked;
