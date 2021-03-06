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
import { ArticleListItem } from "@/@types/article";
import { BLOG_NAME } from "@/config/baseConfig";
import BgInfo from "@/components/bg-info/bg-info";
import ArticleList from "@/components/article-list";
import classNames from "classnames";
import { useHeaderFixed } from "@libs/hooks/header-fixed";

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
  const { hRef, rollBack } = useHeaderFixed();
  return (
    <>
      <Header
        ref={hRef}
        type={rollBack ? "fixed" : undefined}
        className={classNames("bg-no-repeat bg-cover  inset-x-0 top-0 mb-5")}
      />
      <BgInfo
        title={BLOG_NAME}
        info="「不要因为走得太远 而忘记为什么出发」"
        className="bg-index-info   mb-5"
      />
      <div className="mx-auto md:container">
        <div className="grid grid-cols-12">
          <div
            className="response-left"
          >
            <ArticleList list={list} />
          </div>
          <div className="response-right">
            <Author />
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
