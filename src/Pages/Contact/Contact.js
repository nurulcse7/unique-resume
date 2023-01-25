import React, { useRef } from 'react';
import useTitle from '../../hooks/useTitle';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  useTitle('ContactUs');

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_36vclrk',
        'template_uib0ack',
        form.current,
        'y3HJdYXyeuv1sR5i4'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Congrats! Successfully sent message');
        },
        (error) => {
          toast.error(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <section className='hero my-12 shadow-2xl'>
      <form ref={form} onSubmit={sendEmail} className='form-control p-12'>
        <h4 className='text-center text-3xl text-secondary'>Contact Us</h4>
        <h1 className='text-center text-white text-xl my-4'>
        Have any queries? Send a message now.
        </h1>
        <label className='label text-lg mt-2'>Name</label>
        <input
          type='text'
          name='user_name'
          placeholder='Your Full Name'
          className='input input-bordered input-accent w-full max-w-sm'
          required
        />
        <label className='label text-lg mt-2'>Email</label>
        <input
          type='email'
          name='user_email'
          placeholder='Email Address'
          className='input input-bordered input-accent w-full max-w-sm'
          required
        />
        <label className='label text-lg mt-2'>Address</label>
        <input
          type='text'
          name='user_address'
          placeholder='Your address'
          className='input input-bordered input-accent w-full max-w-sm my-2'
        />
        <label className='label text-lg'>Type message</label>
        <textarea
        name='message'
          placeholder='Your message'
          className='textarea textarea-accent'
          required
        ></textarea>
        <input type='submit' value='Send Message' className='btn bg-gradient-to-r from-accent to-secondary text-xl text-white capitalize mt-4' />
      </form>
    </section>
  );
};

export default Contact;
