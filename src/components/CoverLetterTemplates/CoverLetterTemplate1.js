import React from "react";

const CoverLetterTemplate1 = () => {
  return (
    <div className="flex w-[800px] mx-auto my-10 ">
      <div
        className={`py-6 text-white gap-3 px-6 bg-gray-500 md:w-[30%] w-[30%] flex flex-col justify-start items-start `}
      >
        <h1 className="md:text-3xl text-start text-xl uppercase font-semibold ">
          fullName
        </h1>
        <span className="md:text-[15px] text-[12px]">Job Title</span>
        <div className="text-start">
          <p className="md:text-[15px] text-[12px]">Address:</p>
          <p className="md:text-[13px] text-[10px]">bakergonj,bangladesh</p>
        </div>
        <div className="flex flex-col items-start">
          <span className="md:text-[15px] text-[12px]">Email:</span>
          <span className="md:text-[13px] text-[10px]">
            golamrabbi@gmail.com
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="md:text-[15px] text-[12px]">Number</span>
          <span className="md:text-[13px] text-[10px]">01751552297</span>
        </div>
      </div>
      <div className="w-[80%]">
        <div className="flex gap-2 flex-col items-start p-6">
          <h1 className="font-semibold">Hiring manager</h1>
          <h1>Company Name</h1>
          <span>Job Title</span>
          <span>Dear: hiring manager</span>
        </div>
        <div className="flex flex-col items-start p-6">
          <p className=" text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            itaque illo tempora vero. Quisquam harum nulla magnam illo tempore
            eum blanditiis sapiente explicabo reprehenderit pariatur non error,
            dolor mollitia, fugit officiis quidem impedit libero? Quidem
            sapiente quae minima officia natus, voluptatibus inventore eos
            consectetur modi repellendus, dolorem error eius blanditiis quaerat
            ab obcaecati vero assumenda labore tempora harum quos praesentium.
            Quas adipisci ea reprehenderit, praesentium doloremque porro
            voluptate maiores iure. Qui consequatur vero dicta voluptates
            dolorum voluptatibus, veniam a veritatis repudiandae beatae
            inventore sit iste accusantium. Nihil eos placeat, aut omnis
            inventore atque voluptates est fugiat ipsa exercitationem iure
            eveniet quam quasi nostrum! Et obcaecati laboriosam voluptates
            reprehenderit dolorem optio voluptatibus ad a necessitatibus tempore
            sit aliquid alias animi aut ea sint libero sapiente beatae, possimus
            consequatur culpa voluptate assumenda? Ad modi error consequatur
            sapiente in doloremque rerum omnis, laudantium reiciendis aliquam
            neque veritatis? Ea, magnam. Veritatis eaque quo eius blanditiis vel
            est odit minus illo inventore! Corrupti, dolores quisquam amet
            exercitationem laudantium animi repellendus incidunt possimus
            consequuntur nam molestiae sunt accusantium accusamus iure! Rem
            harum dolores corrupti quisquam neque error quaerat ratione
            distinctio earum adipisci? Nam aperiam dolore, fugit illum fugiat
            culpa voluptates possimus totam dicta, reiciendis, nemo sint.
          </p>
          <p className="font-semibold text-lg capitalize">sincerly</p>
          <h2>Full name</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate1;
