import React from "react";

const ResumeElements = () => {
  return (
    <div className="w-[95%] mx-auto">
      <p className="text-lg text-left  font-bold my-1">
        A functional resume is a type of resume format that focuses on the
        skills and abilities of the candidate, rather than their chronological
        work history. This type of resume is ideal for individuals who are
        changing careers, have gaps in their work history, or have limited work
        experience.
      </p>

      <div>
        <h1 className="text-left font-extrabold my-2 text-2xl">
          Let's Know about Some important Elements of a Resume:
        </h1>

        <div className="text-left mb-1">
          <h1 className="font-bold text-xl"> 1. Contact Information: </h1>
          <p className="text-lg font-light">
            {" "}
            The first element of your resume should be your contact information.
            This includes your full name, phone number, email address, and
            physical address. Make sure that your contact information is easy to
            read and accurate.
          </p>
        </div>

        <div className="text-left mb-1">
          <h1 className="font-bold text-xl"> 2. Professional Summary: </h1>
          <p className="text-lg font-light">
            {" "}
            The professional summary is a brief statement that highlights your
            skills, experience, and qualifications. It should be tailored to the
            specific job you are applying for and should grab the attention of
            the employer.
          </p>
        </div>
        <div className="text-left mb-1">
          <h1 className="font-bold text-xl"> 3. Skills: </h1>
          <p className="text-lg font-light">
            {" "}
            Your skills section should highlight your technical and soft skills.
            Include both hard and soft skills that are relevant to the job you
            are applying for. This section should be easy to read and include
            bullet points.
          </p>
        </div>
        <div className="text-left mb-1">
          <h1 className="font-bold text-xl"> 4. Work Experience: </h1>
          <p className="text-lg font-light">
            {" "}
            Your work experience section should detail your employment history,
            including job titles, dates of employment, and responsibilities.
            Make sure to focus on your accomplishments and how you have
            contributed to the success of your previous employers.
          </p>
        </div>
        <div className="text-left mb-1">
          <h1 className="font-bold text-xl"> 5. Education : </h1>
          <p className="text-lg font-light">
            {" "}
            The education section should list your degrees, certifications, and
            any relevant coursework. Make sure to include the name of the
            institution, the degree or certification earned, and the dates
            attended.
          </p>
        </div>
        <div className="text-left mb-1">
          <h1 className="font-bold text-xl">
            {" "}
            6. Certifications and Licenses :{" "}
          </h1>
          <p className="text-lg font-light">
            {" "}
            If you have any relevant certifications or licenses, include them in
            a separate section. This can include professional certifications,
            such as the Certified Web Developer (CWD) or industry-specific
            licenses, such as a real estate license.
          </p>
        </div>
        <div className="text-left mb-1">
          <h1 className="font-bold text-xl"> 7. Awards and Honors : </h1>
          <p className="text-lg font-light">
            {" "}
            If you have received any awards or honors related to your field,
            include them in a separate section. This can include academic
            honors, professional awards, or recognition for outstanding work.
          </p>
        </div>
        <div className="text-left mb-1">
          <h1 className="font-bold text-xl"> 8. References : </h1>
          <p className="text-lg font-light">
            {" "}
            While it is not necessary to include references on your resume, it
            is a good idea to have them available upon request. Make sure to
            have a list of references that can speak to your skills and
            experience.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-left font-extrabold my-2 text-2xl">
          Additional Tips:
        </h1>

        <ol className="list-decimal text-left mx-4 font-semibold">
          <li>
            Keep it concise: Your resume should be no more than two pages in
            length. Make sure to focus on the most relevant information and keep
            your language concise.
          </li>
          <li>
            Tailor it to the job: Tailor your resume to the specific job you are
            applying for. Highlight the skills and experience that are most
            relevant to the position.
          </li>
          <li>
            Use action verbs: Use strong action verbs to describe your
            accomplishments and responsibilities. This will make your resume
            more dynamic and engaging.
          </li>
          <li>
            Proofread: Make sure to proofread your resume for spelling and
            grammatical errors. It is also a good idea to have someone else
            review it for you.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ResumeElements;
