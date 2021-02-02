import Header from "@/components/header/Header";
import React, { FC } from "react";

import Footer from "@/components/footer/Footer";
import axios from "axios";
import servicePath from "@/config/apiUrl";
import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { bgInfoMap } from "@/config/baseConfig";
import { GetServerSideProps } from "next";
import { ArticleListItem } from "@/pages/types/article";
import { MenuType } from "@libs/interface";
import BgInfo from "@/components/bg-info/bg-info";
import ArticleList from "@/components/article-list";

const MyList: FC<{
  list: ArticleListItem[];
  typeId: number;
  typeName: string;
}> = ({ list, typeId, typeName }) => {
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
        title={typeName}
        info={bgInfoMap[typeId]?.info}
        className={bgInfoMap[typeId]?.bg}
      />

      <div className="mx-auto md:container">
        <div>
          <div className="grid grid-cols-12">
            <div
              className="lg:col-span-8 lg:col-start-3
              lg:pr-8
           sm:col-span-12
            md:col-span-10 md:col-start-2"
            >
             <ArticleList list={list}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export const getServerSideProps: GetServerSideProps<{
  list: ArticleListItem[];
  typeId: number;
}> = async (context) => {
  let queryId = context.query.id;
  const id = typeof queryId === "string" ? parseInt(queryId) : -1;
  const res = await axios.get<{ data: ArticleListItem[] }>(
      servicePath.getListById + "/" + queryId
    ),
    list = res.data.data;
  const typeInfoRes = await axios.get<{ data: MenuType }>(
      servicePath.getTypeInfoById + "/" + queryId
    ),
    typeInfo = typeInfoRes.data.data;
  return {
    props: {
      list,
      typeId: id,
      typeName: typeInfo ? typeInfo.typeName : null,
    },
  };
};
export default MyList;
