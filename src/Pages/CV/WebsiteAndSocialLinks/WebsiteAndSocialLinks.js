import React from "react";
import { useForm } from "react-hook-form";

const WebsiteAndSocialLinks = ({
  websiteAndSocialLinks,
  setWebsiteAndSocialLinks,
}) => {
  console.log("websiteAndSocialLinks", websiteAndSocialLinks);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setWebsiteAndSocialLinks(data);
  };

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section>
          <h1 className="text-3xl font-semibold">Websites & Social Links</h1>
          <div className="form-control mt-5 w-full ">
            <p className="label text-gray-400 mb-3 text-base ">
              You can add links to websites you want hiring managers to see!
              Perhaps It will be a link to your portfolio. LinkedIn profile, or
              personal website
            </p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-xl ">
              {websiteAndSocialLinks?.label ? (
                <>{websiteAndSocialLinks?.label}</>
              ) : (
                <>(Not specified)</>
              )}
              <p className="text-gray-400">
                {websiteAndSocialLinks?.labelLink ? (
                  <>{websiteAndSocialLinks?.labelLink}</>
                ) : (
                  <></>
                )}
              </p>
            </summary>

            <div className="flex gap-10">
              {/* Job Title */}
              <div className="form-control mt-5 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-lg ">Label</span>
                </label>
                <input
                  type="text"
                  {...register("label", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Employer */}
              <div className="form-control mt-5 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-lg ">Link</span>
                </label>
                <input
                  type="text"
                  {...register("labelLink", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
            </div>
          </details>
        </section>
      </form>
    </div>
  );
};

export default WebsiteAndSocialLinks;
