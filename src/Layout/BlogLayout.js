import React from "react";
import RightSidebar from "../Pages/Blog/BlogSidebar/RightSidebar/RightSidebar";

const BlogLayout = () => {
  return (
    <div>
      <section className="my-4 py-5 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-3">
        <div>
          <h1>This is left sidebar</h1>
        </div>
        <div className="col-span-3 md:col-span-2 lg:col-span-3">
          <h1>This is Blog content</h1>
        </div>
        <div className="hidden md:block lg:block sticky ">
          <RightSidebar />
        </div>
      </section>
    </div>
  );
};

export default BlogLayout;
