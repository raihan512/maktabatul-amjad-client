import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import BookCard from '../../Shared/BookCard/BookCard';
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';


const HomeBookTabs = () => {
    const [activeTab,setActiveTab] = useState('tab-1');
    const sliderBtns = useRef(null);

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 100,
        slidesToShow: 7,
        slidesToScroll: 1,
        easing: 'linear',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 455,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };
    return (
        <section className=''>
            <div className='container mx-auto'>
                <div className='relative pb-3'>
                    {/* Tabbar start */}
                <div className='flex border-b-2 border-gray pb-2'>
                    <button onClick={() => setActiveTab('tab-1')} className={`${activeTab === "tab-1" ? "border-b-2 text-red" : "no"} text-sm md:text-base font-semibold pb-2 -mb-[10px] border-black mr-2.5 md:mr-4 uppercase`}>New Books</button>
                    <button onClick={() => setActiveTab('tab-2')} className={`${activeTab === "tab-2" ? "border-b-2 text-red" : "no"} text-sm md:text-base font-semibold pb-2 -mb-[10px] border-black mr-2.5 md:mr-4 uppercase`}>Best Seller</button>
                    <button onClick={() => setActiveTab('tab-3')} className={`${activeTab === "tab-3" ? "border-b-2 text-red" : "no"} text-sm md:text-base font-semibold pb-2 -mb-[10px] border-black uppercase`}>Comming Soon</button>
                </div>
                {/* Tabbar end */}
                {/* Tabs Start */}
                <div className=''>
                    {
                    activeTab === 'tab-1' &&  <div className='my-8'>
                        <Slider ref={sliderBtns} {...settings}>
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/8/2/a/db8d44fd4082a441dc499d34c429bc2e.jpg.webp'></BookCard></div>
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/3/1/f/5/2ce9a9fe551f594f2493d3b63753b226.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/b/a/f/31ae885713baf14fc47c00fff34f704d.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/a/2/1/bb6449e969a2117cdc260159f9db1aa0.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/3/2/f/279a423da332f433b9fd74374a6e3b94.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/3/c/d/8/ca9c4ce220cd8c14445afaf1ce456937.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/9/b/f/1/cdf115c6b4bf1a8c1ad4d07346f4b028.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/b/2/e/05254d2e8db2eebdd9259565e3faa509.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/13/8/5/6/33f9fa8aee85661a585599fe2fb88ed5.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/6/2/f/4/4d3a1fc7952f424f5d6d781191322c98.png.webp'></BookCard></div> 

                        </Slider>
                            </div>
                    }
                    {
                        activeTab === 'tab-2' &&  
                        <div className='my-8'>
                                <Slider ref={sliderBtns} {...settings}>
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/6/2/f/4/4d3a1fc7952f424f5d6d781191322c98.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/13/8/5/6/33f9fa8aee85661a585599fe2fb88ed5.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/b/2/e/05254d2e8db2eebdd9259565e3faa509.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/9/b/f/1/cdf115c6b4bf1a8c1ad4d07346f4b028.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/3/2/f/279a423da332f433b9fd74374a6e3b94.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/3/c/d/8/ca9c4ce220cd8c14445afaf1ce456937.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/a/2/1/bb6449e969a2117cdc260159f9db1aa0.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/b/a/f/31ae885713baf14fc47c00fff34f704d.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/3/1/f/5/2ce9a9fe551f594f2493d3b63753b226.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/8/2/a/db8d44fd4082a441dc499d34c429bc2e.jpg.webp'></BookCard></div>

                        </Slider>
                            </div>
                    }
                    {
                    activeTab === 'tab-3' &&  <div className='my-8'>
                                <Slider ref={sliderBtns} {...settings}>
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/3/1/f/5/2ce9a9fe551f594f2493d3b63753b226.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/b/a/f/31ae885713baf14fc47c00fff34f704d.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/8/2/a/db8d44fd4082a441dc499d34c429bc2e.jpg.webp'></BookCard></div>
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/a/2/1/bb6449e969a2117cdc260159f9db1aa0.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/3/c/d/8/ca9c4ce220cd8c14445afaf1ce456937.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/3/2/f/279a423da332f433b9fd74374a6e3b94.jpg.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/1/b/2/e/05254d2e8db2eebdd9259565e3faa509.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/9/b/f/1/cdf115c6b4bf1a8c1ad4d07346f4b028.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/6/2/f/4/4d3a1fc7952f424f5d6d781191322c98.png.webp'></BookCard></div> 
                                <div className='flex justify-center'><BookCard src='https://www.noor-book.com/publice/covers_cache_webp/13/8/5/6/33f9fa8aee85661a585599fe2fb88ed5.png.webp'></BookCard></div> 

                        </Slider>
                            </div>
                    }
                    {/* Slider buttons */}
                    <div className='absolute bottom-0 left-0 w-full px-1 lg:px-2 flex justify-between'>
                        <button onClick={() => sliderBtns.current.slickPrev()} className='py-4 px-1 bg-gray'><IoIosArrowBack className='text-white text-lg md:text-xl'/></button>
                        <button onClick={() => sliderBtns.current.slickNext()} className='py-4 px-1 bg-gray'><IoIosArrowForward className='text-white text-lg md:text-xl'/></button>
                    </div>
                </div>
                {/* Tabs End */}
                </div>
            </div>
        </section>
    );
};

export default HomeBookTabs;