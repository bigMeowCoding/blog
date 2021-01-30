import Header from "@/components/header/Header";
import React, { FC, useState } from "react";

import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Author from "@/components/author/Author";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import Link from "next/link";
import servicePath from "../config/apiUrl";
import { GetServerSideProps } from "next";
import { ArticleListItem } from "@/pages/types/article";

const Home: FC<{ list: ArticleListItem[] }> = ({ list }) => {
  const [myList] = useState(list);
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
      <Header />
      <div className="mx-auto md:container">
        <div className="mt-5">
          <div className="grid grid-cols-12">
            <div
              className="lg:col-span-8 lg:col-start-2
           sm:col-span-12
            md:col-span-8 md:col-start-2"
            >
              <h2 className="text-xl text-gray-400 mb-4">最新博客</h2>
              {myList.map((item) => {
                return (
                  <div>
                    <div className="list-title">
                      <Link
                        href={{
                          pathname: `/detail/detail`,
                          query: { id: item.id, typeName: item.typeName },
                        }}
                      >
                        <h3 className="text-lg mb-4 text-blue-400">
                          {item.title}
                        </h3>
                      </Link>
                    </div>

                    <div
                      className="list-context"
                      dangerouslySetInnerHTML={{
                        __html: marked(item.introduce),
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-3  sm:col-span-12 md:col-span-3">
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
