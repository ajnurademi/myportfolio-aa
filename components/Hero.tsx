import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerate-Effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-8 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="blue"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-center items-center relative z-10 my-5 w-full max-w-screen-xl mx-auto px-4">
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/hero-portfolio.png"
            alt="Ajnur's Portrait"
            className="w-3/4 md:w-[500px] border-4 border-neutral-200 dark:border-slate-800 rounded-3xl"
          />
        </div>

        <div className="md:w-1/2 flex flex-col items-center md:items-start mt-10 md:mt-0">
          <p className="uppercase tracking-widest text-xs text-center md:text-left text-blue-100">
            My Portfolio Website
          </p>

          <TextGenerateEffect
            words="Turning ideas into transformative Solutions."
            className="text-center md:text-left text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-white text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Ajnur, a little programmer based in Switzerland
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
