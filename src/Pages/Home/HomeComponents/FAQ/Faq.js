import React from "react";

const Faq = () => {
  return (
    <div>
      <div>
        <section className="text-black ">
          <div className="container py-5  mx-auto">
            <div className="text-center mb-7">
              <h1 className="sm:text-3xl text-4xl font-extrabold text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="font-medium text-xl xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className=" w-[70%] mx-auto sm:mb-2 ">
              <details className="mb-4 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  How can I use UNIQUERESUME for free?
                </summary>

                <span className="font-thin text-lg">
                  has a few different tools you can use 100% for free without
                  entering any credit card details.
                </span>
              </details>
              <details className="mb-4 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  How can I customize my resume?
                </summary>

                <span className="font-thin text-lg">
                  Our resume templates are designed to adapt to your content and
                  look great across all of our designs.
                </span>
              </details>

              <details className="mb-4 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  Can I download my resume to Word or PDF?
                </summary>

                <span className="font-thin text-lg">
                  Once your resume is ready there are a number of ways you can
                  export your resumes or cover letters to start applying for
                  jobs. You can download a PDF, DOCX(Word), or TXT file of your
                  resume either directly from your Dashboard or from the Resume
                  Editor.
                </span>
              </details>
              <details className="mb-4 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  How do I cancel, downgrade or delete my account?
                </summary>

                <span className="font-thin text-lg">
                  You can cancel a UNIQUERESUME subscription right from our
                  website without even logging into the app. To do that visit
                  our <a href="#"> Contact Us</a> page and then click the
                  "Cancel Subscription" option from the menu.
                </span>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
