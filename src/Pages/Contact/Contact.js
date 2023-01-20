import React from 'react';
import { connect } from 'react-redux';
import Contact from '../../assets/contact.jpg'
// import Background from '../../assets/wave.png'

const ContactPage = ({ UniqueResume }) => {
  return (
    <div className='bg-gradient-to-r from-blue-400 via-teal-500 to-blue-300'>
      <form class='w-100 max-w-lg p-24'>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              class='block Capitalize tracking-wide   font-bold mb-2'
              for='grid-first-name'
            >
              First Name
            </label>
            <input
              class=' block w-full   border border-blue-800 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none '
              id='grid-first-name'
              type='text'
              placeholder='Jane'
            />
          </div>
          <div class='w-full md:w-1/2 px-3'>
            <label
              class='block Capitalize tracking-wide   font-bold mb-2'
              for='grid-last-name'
            >
              Last Name
            </label>
            <input
              class=' block w-full   border border-blue-800 rounded-xl py-3 px-4 leading-tight '
              id='grid-last-name'
              type='text'
              placeholder='Doe'
            />
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block Capitalize tracking-wide   font-bold mb-2'
              for='grid-password'
            >
              E-mail
            </label>
            <input
              class=' block w-full   border border-blue-800 rounded-xl py-3 px-4 mb-3 leading-tight '
              id='email'
              type='email'
              placeholder='doe@domain.com'
            />
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block Capitalize tracking-wide text-le  font-bold mb-2'
              for='grid-password'
            >
              Message
            </label>
            <textarea
              class=' no-resize  block w-full   border border-blue-800 rounded-xl py-3 px-4 mb-3 leading-tight  h-48 resize-none'
              id='message'
              placeholder='Type your message'
            ></textarea>
          </div>
        </div>
        <div class='md:flex md:items-center'>
          <div class='md:w-1/3'>
            <button
              class='shadow bg-blue-800 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-xl'
              type='button'
            >
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    UniqueResume: state.UniqueResume,
  };
};

export default connect(mapStateToProps)(ContactPage);

// style={{background: `url(${Background})`}}
