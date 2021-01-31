import { BLOG_NAME } from "@/config/baseConfig";
import Link from "next/link";
import React from "react";
import SocialAddress from "@/components/social-address";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center mt-16">
        <SocialAddress />
      </div>
      <div className="text-gray-700 font-serif mt-5">
        <div className="text-center ">Copyright © {BLOG_NAME} {new Date().getFullYear()}</div>
        <div className="text-center pb-16">
          Powered by
          <Link href="/">
            <a className="text-blue-500">{BLOG_NAME}</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
