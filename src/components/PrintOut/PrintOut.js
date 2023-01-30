import React from 'react';

const PrintOut = () => {
  return (
    <div className='text-center items-center shadow-lg my-24'>
      <p
        className='btn bg-gradient-to-r from-primary to-secondary text-lg text-white  capitalize  print:hidden p-5 rounded-lg'
        onClick={() => window.print()}
      >
        Download Template
      </p>
    </div>
  );
};

export default PrintOut;
