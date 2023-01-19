import React, { useContext, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTimes } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const About = () => {
  const { user, userProfileUpdate, emailUpdate } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const title = form.title.value;
    const email = form.email.value;
    const facebook = form.facebook.value;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const data = {
      name,
      title,
      email,
      facebook,
      linkedin,
      github,
      photoUrl,
    };
    console.log(data);
    userProfileUpdate(name, photoUrl);
    emailUpdate(email)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      {user?.email ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='shadow-2xl relative pt-8'>
            <div
              onClick={() => setEdit(!edit)}
              className='absolute cursor-pointer top-3 right-3'
            >
              {edit ? <FaTimes /> : <BiEdit />}
            </div>
            {edit ? (
              <div className='w-96 px-4 pb-3'>
                <form onSubmit={handleUpdate}>
                  <div>
                    <label className='font-semibold' htmlFor='newName'>
                      {' '}
                      Name<span className='text-red-500'>*</span>{' '}
                    </label>
                    <input
                      required
                      name='name'
                      type='text'
                      id='newName'
                      defaultValue={user?.displayName}
                      className='input input-bordered rounded-md input-primary w-full'
                    />
                  </div>
                  <div className='mt-3'>
                    <label className='font-semibold' htmlFor='newShortInfo'>
                      Add title<span className='text-red-500'>*</span>{' '}
                    </label>
                    <input
                      required
                      type='text'
                      id='newShortInfo'
                      placeholder="Like I'm a Full Stack Developer"
                      name='title'
                      className='input input-bordered rounded-md input-primary w-full'
                    />
                  </div>
                  <div className='mt-3'>
                    <label className='font-semibold' htmlFor='newPhotoUrl'>
                      PhotoUrl<span className='text-red-500'>*</span>{' '}
                    </label>
                    <input
                      required
                      type='text'
                      id='newPhotoUrl'
                      placeholder="Like I'm a Full Stack Developer"
                      name='photoUrl'
                      defaultValue={user?.photoURL}
                      className='input input-bordered rounded-md input-primary w-full'
                    />
                  </div>
                  <div className='mt-3'>
                    <label className='font-semibold' htmlFor='newEmail'>
                      {' '}
                      Email<span className='text-red-500'>*</span>{' '}
                    </label>
                    <input
                      required
                      name='email'
                      type='email'
                      id='newEmail'
                      defaultValue={user?.email}
                      className='input input-bordered rounded-md input-primary w-full'
                    />
                  </div>
                  <div className='mt-3'>
                    <label className='font-semibold' htmlFor='newFacebook'>
                      {' '}
                      Facebook Profile<span className='text-red-500'>
                        *
                      </span>{' '}
                    </label>
                    <input
                      required
                      name='facebook'
                      type='text'
                      id='newFacebook'
                      className='input input-bordered rounded-md input-primary w-full'
                      placeholder='https://www.facebook.com/nurul.bd.775'
                    />
                  </div>
                  <div className='mt-3'>
                    <label className='font-semibold' htmlFor='newLinkedin'>
                      Linkedin Profile(optional){' '}
                    </label>
                    <input
                      type='text'
                      id='newLinkedin'
                      placeholder='https://www.linkedin.com/in/nurulbd75/'
                      name='linkedin'
                      className='input input-bordered rounded-md input-primary w-full'
                    />
                  </div>
                  <div className='mt-3'>
                    <label className='font-semibold' htmlFor='newGithub'>
                      Github Profile (optional){' '}
                    </label>
                    <input
                      type='text'
                      id='newGithub'
                      placeholder='https://github.com/nurulcse7'
                      name='github'
                      className='input input-bordered rounded-md input-primary w-full'
                    />
                  </div>
                  <div className='mt-5'>
                    <input
                      type='submit'
                      value='Update'
                      className='input btn btn-outline btn-primary w-full'
                    />
                  </div>
                </form>
              </div>
            ) : (
              <div className='flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800'>
                <img
                  alt=''
                  className='self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500'
                  src={user?.photoURL}
                />
                <div className='flex-1 my-4'>
                  <p className='text-xl font-semibold leading-snug'>
                    {user?.displayName}
                  </p>
                  <p>FullStack Developer</p>
                </div>
                <div className='flex items-center justify-center p-3 space-x-3 border-t-2'>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='mailto:nurul.cse7@gmail.com'
                    title='Email'
                    className='dark:text-gray-900 hover:dark:text-violet-400'
                  >
                    <GrMail className='text-xl' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://www.facebook.com/nurul.bd.775'
                    title='Facebook'
                    className='dark:text-gray-900 hover:dark:text-violet-400'
                  >
                    <FaFacebook className='text-xl' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://www.linkedin.com/in/nurulbd75/'
                    title='LinkedIn'
                    className='dark:text-gray-900 hover:dark:text-violet-400'
                  >
                    <FaLinkedinIn className='text-xl' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://github.com/nurulcse7'
                    title='GitHub'
                    className='dark:text-gray-900 hover:dark:text-violet-400'
                  >
                    <FaGithub className='text-xl' />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center h-screen lg:text-4xl md:text-3xl text-xl font-bold'>
          <div>
            You are not SignIn yet. Please{' '}
            <Link
              to='/SignIn'
              className=' text-primary font-semibold border-b-2 border-primary'
            >
              Sign In{' '}
            </Link>
          </div>{' '}
        </div>
      )}
    </section>
  );
};

export default About;
