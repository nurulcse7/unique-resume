import React from 'react';
import { connect } from 'react-redux';
// import Background from '../../assets/wave.png'

const AboutPage = ({ UniqueResume }) => {
  return (
    <div className='font-serif '>
      <div className='min-h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-blue-300'>
        <h1 className='text-4xl py-6 font-bold'>About us {UniqueResume}</h1>
        <p className='text-lg font-bold pl-10 pr-10 font-sans'>
          <span className='text-3xl'>U</span>nique Resume is a website
          that helps job seekers create professional and unique resumes to stand
          out in the job market. 
          We offer a variety of templates, tools, and resources to help job
          seekers create a resume that showcases their skills and experience.
        </p>
        <div className='mt-10 text-lg text-left p-12'>
        <p>
          Welcome to Unique Resume, the website dedicated to helping job seekers
          create stand-out resumes that will get them noticed by employers. We
          understand that the job market can be competitive, and that's why
          we're here to help you make your resume stand out.<br />
          <br />
          Our team of experts have years of experience in the recruitment and
          hiring industry, and we know what employers are looking for in a
          resume. We offer a wide range of services, including resume writing,
          editing, and design. Whether you're a recent graduate or an
          experienced professional, we can help you create a resume that
          showcases your skills and accomplishments.<br />
          <br />
          In addition to our resume services, we also offer career coaching and
          interview preparation. Our career coaches can help you identify your
          strengths and weaknesses, and provide guidance on how to present
          yourself in the best light possible.<br />
          <br />
          At Unique Resume, we are committed to helping job seekers achieve
          their career goals. We understand that the job search process can be
          stressful, and that's why we're here to help. Our goal is to make the
          process as easy and stress-free as possible, so that you can focus on
          landing your dream job.<br />
          <br />
          Thank you for choosing Unique Resume. We look forward to working with
          you!
        </p>
      </div>
      </div>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    UniqueResume: state.UniqueResume,
  };
};

export default connect(mapStateToProps)(AboutPage);

// style={{background: `url(${Background})`}}
