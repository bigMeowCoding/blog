import Header from "@/components/header/Header";
import React, { FC } from "react";

import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Author from "@/components/author/Author";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import servicePath from "../config/apiUrl";
import { GetServerSideProps } from "next";
import { ArticleListItem } from "@/pages/types/article";
import { BLOG_NAME } from "@/config/baseConfig";
import BgInfo from "@/components/bg-info/bg-info";
import ArticleList from "@/components/article-list";

const Home: FC<{ list: ArticleListItem[] }> = ({ list }) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  return (
    <>
      <Header className=" bg-no-repeat bg-cover absolute inset-x-0 top-0" />
      <BgInfo
        title={BLOG_NAME}
        info="「不要因为走得太远 而忘记为什么出发」"
        className="bg-index-info   mb-5"
      />
      <div className="mx-auto md:container">
        <div>
          <div className="grid grid-cols-12">
            <div
              className="lg:col-span-7 lg:col-start-2
              lg:pr-8 md:pr-8
           sm:col-span-12
            md:col-span-8 md:col-start-2 -mb-3"
            >
              <ArticleList list={list} />
            </div>
            <div className="lg:col-span-3  sm:col-span-12 md:col-span-3  lg:pr-16">
              <Author />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<{
    data: ArticleListItem[];
  }>(servicePath.getArticleList);
  return {
    props: {
      list: res.data.data,
    },
  };
};
export default Home;
