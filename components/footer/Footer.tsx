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
        <div className="text-center">
          Powered by
          <Link href="/">
            <a className="text-blue-500">{BLOG_NAME}</a>
          </Link>
        </div>
        <div className="text-center mt-2 pb-16 text-sm text-gray-500">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            苏ICP备2026082866号
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
