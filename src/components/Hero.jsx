import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className='flex min-h-screen flex-col container mx-auto px-12 py-4'>
      <div className='flex'>
        <div className='place-self-auto text-center sm:text-left py-52'>
          <h1 className='text-white font-extrabold mb-4 text-6xl sm:text-5xl lg:text-8xl'>
            <span>Hello, I'm{" "}</span> <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffa62e] to-[#f71b1b]'>
              <TypeAnimation
                sequence={[
                  'Alberto',
                  1000,
                  'Full Stack Developer',
                  1000
                ]}
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className='text-slate-100 sm:text-3xl lg:text-5xl text-lg pt-10'>
            I am a software developer, gamer <br/> and computer geek based in Italy.
          </p>
        </div>
        {/* <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <img
              src={hero}
              alt='hero image'
              width={300}
              height={300}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero