import React from 'react';
import  Link  from 'next/link'; // Import Link component from Next.js
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Budget = () => {
  return (
    <section className="py-20 w-full" id="budget">
        <h2 className="heading">Your Website, <span className="text-purple">Your Budget</span></h2>
        <p className="relative text-sm md:text-lg max-w-4xl text-center mt-4 mx-auto text-white font-normal">
          We understand that website needs and budgets can vary. This is why we
          offer a range of solutions to help you achieve your online goals.
        </p>

      <div className="flex flex-wrap items-center justify-center mt-20">
        <div>
          <span className="text-xl font-bold leading-[1.6] text-purple my-4">Pre-defined Packages:</span>
          <p className="text-white-200 max-w-xl mx-auto text-sm leading-relaxed mb-10 md:mb-0 lg:mb-0">
            We offer a range of pre-defined website packages to suit
            various needs, along with the option to create a custom website
            tailored to your specific requirements. Explore our packages and
            additional services to find the perfect solution for your online presence.
          </p>

          <Link href="#packages">
            <MagicButton
                title="Explore Packages"
                icon={<FaLocationArrow />}
                position={'right'}
               />
            </Link> 
        </div>

        <div className="sm:mt-10 mt-10 md:mt-12 lg:mt-12">
          <span className="text-xl font-bold leading-[1.6] text-purple my-4">Custom Website:</span>
          <p className="text-white-200 max-w-xl mx-auto text-sm leading-relaxed mb-10 md:mb-0 lg:mb-0"> 
            Don&apos;t see a perfect fit? We can create
            a custom website tailored to your specific requirements and budget.
            We also offer a variety of additional services
            to enhance your online presence (more details below).
            Feel free to contact us on whatsapp rigth now to tell us about your specific requirements and budget.
          </p>
        <Link href="/">
            <MagicButton
                title="Contact Us Now!"
                icon={<FaLocationArrow />}
                position={'right'}
               />
            </Link> 
        </div>
      </div>
    </section>
  );
};

export default Budget;
