import React from 'react';
import { Link } from 'react-router-dom';
import {GrStar} from 'react-icons/gr' 

const Hero = () => {
    return (
        <section className='my-12'>
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    {/* Hero  left area start */}
                    <div className='w-9/12 border p-5 flex'>
                        <div className='w-8/12 flex flex-col justify-center'>
                            <h3 className='text-4xl font-bold'>Interpretation Of The Great Qur'an Tafsir Ibn Kathir I Ibn Hazm </h3>
                            <p className='text-lg mt-2 mb-4'>
                                The Author Book Interpretation of the great qur'an tafsir ibn kathir i ibn hazm and the author of 3 another books
                            </p>
                            <Link className='text-red text-lg hover:underline' to=''>View more</Link>
                        </div>
                        <div className='w-4/12'>
                            <img src='https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp' alt=''/>
                        </div>
                    </div>
                    {/* Hero  left area end */}
                    {/* Hero  right area start */}
                    <div className='w-3/12 ml-20 p-5 bg-black'>
                            <div className='bg-olive py-2 px-4 -ml-16 mr-36 text-center mb-5'>
                                <p className='text-lg text-white'>TODAY HIGHLIGHT</p>
                            </div>
                        <div className='flex justify-between pb-8 border-b border-dashed border-gray'>
                            <div className='w-4/12'>
                                <img src='https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp' className='w-full' alt=''/>
                            </div>
                            <div className='w-7/12 truncate'>
                                <p className='text-white text-base'>Interpretation of the Great Qur'an Interpretation of Ibn Katheer </p>
                                <Link to='' className='text-gray text-sm hover:text-red hover:underline'>Ibn Kathir</Link>
                                <div className='flex'>
                                    <GrStar className='text-sm text-gold'/>
                                    <GrStar className='text-sm text-gold'/>
                                    <GrStar className='text-sm text-gold'/>
                                    <GrStar className='text-sm text-gold'/>
                                    <GrStar className='text-sm text-gold'/>
                                </div>
                                <div className='flex mt-5'>
                                    <del><p className='mr-2'>$<span>25.00</span></p></del>
                                    <p className='text-red'>$<span>25.00</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between mt-8'>
                        <img src='https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp' className='w-3/12' alt=''/>
                        <img src='https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp' className='w-3/12' alt=''/>
                        <img src='https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp' className='w-3/12' alt=''/>
                            
                        </div>
                    </div>
                    {/* Hero  right area end */}
                </div>
            </div>
        </section>
    );
};

export default Hero;