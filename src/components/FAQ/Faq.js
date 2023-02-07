import { Collapse } from 'antd';
const { Panel } = Collapse;

const Faq = () => (
  <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    className='lg:ml-44 lg:mr-44'
  >
    <h1 className='text-3xl p-3'>Frequently Asked Questions (FAQs)</h1>
    <Panel
      header='What is Unique Resume?'
      key='1'
      className='text-left font-semibold text-lg'
    >
      <p className='font-normal  text-base bg-gradient-to-l from-primary via-secondary to-primary p-3 rounded-xl text-white'>
        Unique Resume is a website that offers professional resume writing
        services. Our team of experts specializes in creating tailored and
        optimized resumes to help job seekers stand out in the competitive job
        market.
      </p>
    </Panel>
    <Panel
      header='How does the resume writing process work?'
      key='2'
      className='text-left font-semibold text-lg'
    >
      <p className='font-normal  text-base bg-gradient-to-l from-primary via-secondary to-primary p-3 rounded-xl text-white'>
        The process starts with you filling out a form with your personal and
        professional information, and our team of experts will use this
        information to craft a unique and effective resume for you. Once the
        first draft is complete, you will have the opportunity to review and
        request any changes before receiving the final copy.
      </p>
    </Panel>
    <Panel
      header='How long does it take to receive the final copy of my resume?'
      key='3'
      className='text-left font-semibold text-lg'
    >
      <p className='font-normal  text-base bg-gradient-to-l from-primary via-secondary to-primary p-3 rounded-xl text-white'>
        The average turnaround time for our resume writing services is
        instantly. However, we also offer expedited services for an additional
        fee if you need your resume sooner.
      </p>
    </Panel>
    <Panel
      header='What if I am not satisfied with the final product?'
      key='4'
      className='text-left font-semibold text-lg'
    >
      <p className='font-normal  text-base bg-gradient-to-l from-primary via-secondary to-primary p-3 rounded-xl text-white'>
        We strive to provide the best possible service to all of our clients,
        and our team of experts will work with you to make any revisions or
        updates to ensure your complete satisfaction.
      </p>
    </Panel>
    <Panel
      header='How much does your service cost?'
      key='5'
      className='text-left font-semibold text-lg'
    >
      <p className='font-normal  text-base bg-gradient-to-l from-primary via-secondary to-primary p-3 rounded-xl text-white'>
        Our prices vary based on the level of service and the number of pages
        you need for your resume. You can view our full list of services and
        prices on our website.
      </p>
    </Panel>
    <Panel
      header='Do you offer any guarantees?'
      key='6'
      className='text-left font-semibold text-lg'
    >
      <p className='font-normal  text-base bg-gradient-to-l from-primary via-secondary to-primary p-3 rounded-xl text-white'>
        Yes, we offer a 100% satisfaction guarantee, which means that if you are
        not completely satisfied with your final product, we will make revisions
        until you are happy with the result.
      </p>
    </Panel>
    <Panel
      header='How can I pay for your services?'
      key='7'
      className='text-left font-semibold text-lg'
    >
      <p className='font-normal  text-base bg-gradient-to-l from-primary via-secondary to-primary p-3 rounded-xl text-white'>
        You can pay for our services securely online through our website using a
        credit card or Stripe
      </p>
    </Panel>
    <Panel
      header='What format will I receive my final resume in?'
      key='8'
      className='text-left font-semibold text-lg'
    >
      <p className='font-normal  text-base bg-gradient-to-l from-primary via-secondary to-primary p-3 rounded-xl text-white'>
        Your final resume will be sent to you in both Microsoft Word and PDF
        formats for your convenience.
      </p>
    </Panel>
    <Panel
      header='Can you help me with a cover letter as well?'
      key='9'
      className='text-left font-semibold text-lg'
    >
      <p className='font-normal  text-base bg-gradient-to-l from-primary via-secondary to-primary p-3 rounded-xl text-white'>
        Yes, we offer cover letter writing services as part of our professional
        resume writing package. You can learn more about our cover letter
        services on our website.
      </p>
    </Panel>
  </Collapse>
);
export default Faq;
