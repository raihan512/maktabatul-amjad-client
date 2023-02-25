import React from 'react';
import {} from './HeaderTop.css';
import { BsFillTelephoneFill,BsEnvelopeFill,BsCartCheckFill,BsGlobe,BsFillPersonFill } from "react-icons/bs";


const HeaderTop = () => {
    return (
        <div className='py-2 bg-black text-gray text-sm'>
            <div className='container mx-auto'>
               <div className='flex justify-center md:justify-between'>
                {/* Headertop left area start */}
                    <div className='hidden md:flex'>
                        <a href='tel:+8801734768772' className='flex items-center mr-5'> <BsFillTelephoneFill className='mr-1'/>(880) 1734768772</a>
                        <a href='mailto:amjad@gmail.com' className='flex items-center mr-5'> <BsEnvelopeFill className='mr-1'/>amjad@gmail.com</a>
                    </div>
                {/* Headertop left area end */}
                {/* Headertop right area start */}
                    <div className='flex items-center'>
                        <div className='flex items-center mr-5 relative'>
                            <BsCartCheckFill className='mr-1'/> Cart (<span className='text-red'>0 item</span>)
                            <div className='cart-menu absolute top-5 right-0 hidden hover:block'>
                                <h1>Hello</h1>
                            </div>
                        </div>
                        <div className='flex items-center mr-5'><BsGlobe className='mr-1'/> Language</div>
                        <div className='flex items-center '><BsFillPersonFill className='mr-1'/> Account</div>
                    </div>
                {/* Headertop right area end */}
               </div>
            </div>
        </div>
    );
};

export default HeaderTop;