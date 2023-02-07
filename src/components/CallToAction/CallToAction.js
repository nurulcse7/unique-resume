import React from 'react';
import resumeImg from '../../assets/resume.png';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div>
      <div className='container my-24 px-6 mx-auto'>
        <section className='mb-32'>
          <div className='flex flex-wrap'>
            <div className='grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0'>
              <div className='flex lg:py-12'>
                <img
                  src={resumeImg}
                  className='w-full rounded-lg shadow-lg z-10 lg:ml-11'
                  alt=''
                />
              </div>
            </div>

            <div className='grow-0 shrink-0 basis-auto w-full lg:w-7/12'>
              <div className='bg-primary h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left'>
                <div className='lg:pl-12'>
                  <h2 className='text-3xl font-bold mb-6'>
                    What are you waiting for? Try our professional Resume
                    builder now!
                  </h2>
                  <p className='mb-6 pb-2 lg:pb-0'>
                    Save time with our easy 3-step resume builder. No more
                    writer's block or formatting difficulties in Word. Rapidly
                    make a perfect resume employers love.
                  </p>
                  <div className=' flex gap-3'>
                    <Link to='/resume-templates'>
                      <button
                        type='button'
                        className='inline-block px-5 py-3 border-[1px] bg-secondary border-white text-white font-medium text-sm leading-snug uppercase rounded-md hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        Create My Resume
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CallToAction;
