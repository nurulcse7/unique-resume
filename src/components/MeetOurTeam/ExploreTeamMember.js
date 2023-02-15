import React, { useEffect, useState } from 'react';

const ExploreTeamMember = () => {
  const [selectMember, setSelectMember] = useState([]);

  useEffect(() => {
    const query = window.location.search.substring(1);
    const id = query.split('&')[0].split('=')[1];

    fetch('members.json')
      .then((res) => res.json())
      .then((data) => {
        setSelectMember(data.find((memebrs) => memebrs.id === id));
      });
  }, []);

  console.log(selectMember);

  return (
    <section>
      <div className='w-full md:max-w-[1000px] p-6 mx-auto'>
        <h2 className='sm:text-3xl pb-6 text-4xl font-extrabold text-center title-font text-gray-900'>
          The Developers Dynamo
        </h2>
        <div className='md:my-6 my-2 '>
          <div className='md:flex'>
            <div>
              <img
                className='rounded-md w-full md:w-80'
                src={selectMember?.image}
                alt={selectMember?.name}
              />
            </div>
            <div className='md:p-8 p-3 leading-none'>
              <h3 className='md:text-4xl uppercase text-2xl font-bold'>
                {selectMember?.name}
              </h3>
              <p className='border-b pb-2 font-semibold border-black'>
                {selectMember.designation}
              </p>
              <div className='text-left py-4'>
                <p className='py-1'>
                  Team Position:{' '}
                  <span className='font-semibold'>
                    {selectMember?.teamPosition}
                  </span>
                </p>

                <p>Contact Info:</p>
                <div className='flex items-center p-2 hover:text-blue-600'>
                  <p>
                    <i className='fa-solid fa-phone'></i>
                  </p>
                  <p className='px-2'>{selectMember?.mobile}</p>
                </div>
                <div className='flex items-center px-2 hover:text-blue-600 '>
                  <p>
                    <i className='fa-brands fa-github'></i>
                  </p>
                  <a className='px-2' target='_' href={selectMember?.gitLink}>
                    GitHub Profile
                  </a>
                </div>
                <div className='flex items-center px-2 hover:text-blue-600  pt-2'>
                  <p>
                    <i className='fa-brands fa-linkedin'></i>
                  </p>
                  <a className='px-2' target='_' href={selectMember?.linkedin}>
                    LinkeDin Profile
                  </a>
                </div>
                <div className='flex items-center px-2 hover:text-blue-600  pt-2'>
                  <p>
                    <i className='fa-solid fa-earth-americas'></i>
                  </p>
                  <a className='px-2' target='_' href={selectMember?.portfolio}>
                    Portfolio Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-center md:py-4'>
            <h3 className='uppercase text-2xl md:text-4xl font-bold border-b-2 border-black'>
              Skills
            </h3>
          </div>
          <div className='grid grid-cols-2 p-4 md:grid-cols-3 gap-2'>
            {selectMember?.skills?.map((skill) => (
              <button className='text-center font-bold text-white hover:bg-primary bg-secondary duration-300 text-xl p-3 rounded-md'>
                {skill}
              </button>
            ))}
          </div>

          <div className='flex justify-center pt-6'>
            <h3 className='uppercase text-2xl md:text-4xl font-bold border-b-2 border-black'>
              Project
            </h3>
          </div>
          <div className='grid grid-cols-1 p-4 md:grid-cols-2 gap-5'>
            {selectMember?.projects?.map((project) => (
              <div
                key={project.name}
                className='w-full border border-black rounded-md shadow-md bg-white text-gray-900'
              >
                <img
                  src={project.img}
                  alt=''
                  className='object-cover object-center w-full rounded-t-md bg-gray-500'
                />
                <div className='flex flex-col justify-between p-4 space-y-8'>
                  <div className='space-y-2'>
                    <h2 className='text-3xl font-semibold tracking-wide'>
                      {project.name}
                    </h2>
                    <p className='text-lg'>{project.title}</p>
                  </div>
                  <a
                    className='hover:bg-primary bg-secondary border-white text-white p-2 rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                    href={project.link}
                    target='_'
                  >
                    Visited Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=''>
          <div className='flex justify-center md:mt-6 pt-6 '>
            <h3 className='font-sans text-2xl md:text-4xl font-bold border-b-2 border-black'>
              Available for Hire!
            </h3>
          </div>
          <div className='flex justify-center bg-secondary rounded-md my-4'>
            <form
              method='POST'
              action='https://getform.io/f/5255c9c4-ec4b-4fcb-aafb-6c14740263db'
              className='flex flex-col max-w-[600px] my-6 w-full'
            >
              <p className='text-center p-3 text-white'>
                Submit the form below to send me a short message
              </p>
              <input
                className='bg-[white] mb-4 p-2 rounded-2xl'
                type='text'
                name='hireParson'
                value={selectMember.name}
                required
              />
              <input
                className='bg-[white] p-2  rounded-2xl'
                type='text'
                placeholder='Your Name'
                name='name'
                required
              />
              <input
                className='my-4 p-2 bg-white  rounded-2xl'
                type='email'
                placeholder='Your Email'
                name='email'
                required
              />
              <textarea
                className='bg-[white] p-2  rounded-2xl'
                name='massage'
                rows='5'
                placeholder='Message'
                required
              ></textarea>
              <button className='text-white border-2 hover:bg-secondary bg-primary px-4 py-3 my-8 mx-auto flex items-center'>
                Let's Collaborate
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTeamMember;
