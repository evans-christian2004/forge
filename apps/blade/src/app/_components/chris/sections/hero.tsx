import React from 'react'
import { BezierDefinition, motion } from "motion/react"
import useDisableScroll from '~/hooks/useDisableScroll'
import useWindowSize from '~/hooks/useWindowSize';
import Image from 'next/image';
import Slider from "../ui/slider";
import { ArrowBigDown } from 'lucide-react';

const Hero = () => {
  useDisableScroll(3000);
  const { width } = useWindowSize();
  const initialScale = width < 768 ? 0.4 : 0.4;
  const PRIMARY_EASE: BezierDefinition = [0.22, 1, 0.36, 1];

  const sliderImages = [
    "/chris/hero/1.jpg",
    "/chris/hero/2.jpg",
    "/chris/hero/3.jpg",
    "/chris/hero/4.jpg",
    "/chris/hero/5.jpg",
    "/chris/hero/6.jpg",
    "/chris/hero/7.jpg",
  ];
  
  return (
    <section className="pt-4 lg:pb-24 h-screen relative">
      <div className="px-4">
        <h1 className="hidden">Jazmin Wong</h1>

        <motion.div
          initial={{
            scale: initialScale,
            top: "50%",
            y: "-50%",
          }}
          animate={{
            scale: 1,
            top: "0px",
            y: "16px",
          }}
          transition={{
            duration: 1.6,
            ease: PRIMARY_EASE,
            scale: {
              duration: 1,
              delay: 0.8,
              ease: PRIMARY_EASE,
            },
            top: {
              duration: 1.5,
              delay: 1.5,
              ease: PRIMARY_EASE,
            },
            y: {
              duration: 1.5,
              delay: 1.5,
              ease: PRIMARY_EASE,
            },
          }}
          className="font-extrabold text-[12vw] leading-none absolute flex flex-col items-center justify-center sm:flex-row sm:gap-8 sm:justify-between left-4 right-4 origin-center will-change-transform"
        >
          <div className="overflow-hidden -mb-3 sm:mb-0">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: PRIMARY_EASE,
              }}
              className="w-full pointer-events-none mb-6"
            >
              <h1>Christian</h1>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: width < 768 ? 0.225 : 0.2,
                ease: PRIMARY_EASE,
              }}
              className="w-full pointer-events-none mb-6"
            >
              <h1 className=''>Evans</h1>
            </motion.div>
          </div>
        </motion.div>

        <div
          className="overflow-hidden absolute left-4 right-4 xs:top-[80vh] sm:top-[70vh] md:top-[12.5vw]"
        >
          <div className="flex flex-col gap-0.5 md:gap-0 md:flex-row justify-between items-center relative">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: width < 768 ? 2 : 1.9,
                  ease: PRIMARY_EASE,
                }}
                className="text-[clamp(20px,1.6vw,32px)] font-semibold leading-[1.2] text-center md:text-left"
              >
                Always Learning
              </motion.p>
            </div>

            <div className="hidden md:block overflow-hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <motion.div
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1.7,
                  ease: PRIMARY_EASE,
                }}
                className="w-[clamp(28px,2vw,48px)] h-[clamp(28px,2vw,48px)] relative group"
              >
                <Image
                  src="/chris/icons/star.png"
                  alt="star"
                  fill
                  sizes="(max-width: 768px) 28px, 48px"
                  className="group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out"
                />
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: width < 768 ? 2.05 : 1.9,
                  ease: PRIMARY_EASE,
                }}
                className="text-[clamp(20px,1.6vw,32px)] font-normal -mt-1 leading-[1.2] text-center md:text-left"
              >
                Always Building
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[19vh] xs:mt-[23vh] sm:mt-[12vh] md:mt-[14vw] overflow-hidden hover:cursor-pointer">
        <Slider images={sliderImages} />
      </div>
      <motion.div className="w-[40rem] h-[2rem]"
        initial={{ y: 120, opacity:0 }}
        animate={{ y: 0 , opacity:100}}
        transition={{
          duration: 3,
          delay: width < 768 ? 4 : 3,
          ease: PRIMARY_EASE,
        }}
      >
        <Image className='object-cover #e0e6f relative bottom-20 left-20' src="/chris/icons/clickNdrag.png" alt="click and drag" width={500} height={100}/>
      </motion.div>
      <ArrowBigDown className='flex justify-center w-full h-20 animate-bounce' color='#e0e6fc'/>
    </section>
  );
}

export default Hero