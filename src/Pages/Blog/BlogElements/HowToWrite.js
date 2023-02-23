import React from "react";

const HowToWrite = () => {
  const Elements = [
    {
      id: 1,
      title: "Choose the right format",
      description:
        " There are several formats to choose from when creating a resume, such as chronological functional and combination The chronological format lists your work experience in reverse chronological, order while the functional format emphasizes your skills and accomplishments. The combination format combines the two.  When choosing a format, consider the requirements of the job you're applying for, as well as your career level and experience.",
    },
    {
      id: 2,
      title: "Start with a header",
      description:
        " The header should be the first thing on your resume and should include your name, address, phone number, and email address. Make sure your email address is professional and avoid using nicknames or slang.",
    },
    {
      id: 3,
      title: "Write a compelling summary statement",
      description:
        " The summary statement is an opportunity to grab the hiring manager's attention and make a great first impression. It should be a brief summary of your skills, experience, and accomplishments, and should be tailored to the job you're applying for.",
    },
    {
      id: 4,
      title: "Highlight your skills and accomplishments",
      description:
        " The body of your resume should focus on your skills and accomplishments. Use bullet points to list your accomplishments, and quantify them whenever possible. For example, instead of saying Managed a team of employees say Managed a team of 10 employees and increased productivity by 20%.",
    },
    {
      id: 5,
      title: "Use action verbs",
      description:
        " Using action verbs in your resume can make it more dynamic and engaging. Examples of action verbs include created, managed, implemented and improved.",
    },
    {
      id: 6,
      title: "Use keywords",
      description:
        " Many companies use automated systems to screen resumes for certain keywords. Use keywords from the job description to help your resume get past these screening tools.",
    },
    {
      id: 7,
      title: "Tailor your resume to the job",
      description:
        "Customize your resume to the job you're applying for by highlighting the skills and experience that are most relevant to the position. This will help you stand out from other applicants.",
    },
    {
      id: 8,
      title: "Keep it concise",
      description:
        "Your resume should be no more than two pages long. Keep it concise by using bullet points and avoiding long paragraphs.",
    },
    {
      id: 9,
      title: "Proofread",
      description:
        "Before submitting your resume, proofread it carefully to catch any spelling or grammatical errors. Ask a friend or family member to review it as well.",
    },
  ];

  return (
    <div className="w-[95%] mx-auto">
      <p className="text-lg text-left  font-bold my-1">
        Creating a resume can be a daunting task, especially if you're not sure
        where to start. However, with the right tricks and tips, you can create
        a standout resume that will help you land your dream job. Here's how to
        create a resume from scratch:
      </p>

      <div>
        {Elements.map((item) => {
          return (
            <div>
              <h1 className="text-left font-extrabold my-2 text-2xl">
                {item.title}
              </h1>
              <p className="text-left font-semibold my-2">
                {" "}
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowToWrite;
