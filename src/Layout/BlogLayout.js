import React from "react";
import { Outlet } from "react-router-dom";
import BlogBanner from "../Pages/Blog/BlogBanner/BlogBanner";
import LeftSidebar from "../Pages/Blog/BlogSidebar/LeftSidebar/LeftSidebar";
import RightSidebar from "../Pages/Blog/BlogSidebar/RightSidebar/RightSidebar";

const BlogLayout = () => {
  return (
    <div>
      <section className="mb-2">
        <BlogBanner />
      </section>

      <section className="my-4 py-5 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-3">
        <div>
          {" "}
          <LeftSidebar />{" "}
        </div>
        <div className="col-span-3 md:col-span-2 lg:col-span-3">
          {" "}
          <Outlet />{" "}
        </div>
        <div className="hidden md:block lg:block sticky ">
          <RightSidebar />
        </div>
      </section>
    </div>
  );
};

export default BlogLayout;
