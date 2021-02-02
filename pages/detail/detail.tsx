import React, { FC } from "react";
import "github-markdown-css";
import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import servicePath from "@/config/apiUrl";
import { GetServerSideProps } from "next";
import { ArticleListItem } from "@/pages/types/article";
import { parseQueryParam } from "@libs/utils/parseQueryParam";
type Prop = ArticleListItem & { typeName?: string; typeId: string };
const Detail: FC<Prop> = ({
  article_content,
  title,
}) => {
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
      return highlight.highlightAuto(code).value;
    },
  });
  let html = marked(article_content);
  return (
    <>
      <Header type="article" className="mb-5" />
      <article className="mx-auto container">
        <div className="grid grid-cols-12">
          <h1
            className="lg:col-span-8 lg:col-start-3
           sm:col-span-12 text-6xl font-serif  mb-16
            md:col-span10 md:col-start-2"
          >
            {title}
          </h1>
        </div>
        <div className="grid grid-cols-12">
          <div
            className="lg:col-span-8 lg:col-start-3
           sm:col-span-12
            md:col-span10 md:col-start-2"
          >
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  Prop,
  { id: string; typeName: string }
> = async (context) => {
  const id = parseQueryParam(context.query.id),
    typeName = parseQueryParam(context.query.typeName);
  const res = await axios.get<{
    data: ArticleListItem;
  }>(servicePath.getArticleById + "/" + id);
  const content = res.data.data;
  return {
    props: {
      ...content,
      typeName,
      typeId: id,
    },
  };
};
export default Detail;
