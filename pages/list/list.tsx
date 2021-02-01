import Header from "@/components/header/Header";
import React, { FC, useEffect, useState } from "react";

import { Col, Row, List, Breadcrumb } from "antd";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from "@ant-design/icons";

import Author from "@/components/author/Author";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import servicePath from "@/config/apiUrl";
import Link from "next/link";
import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import {
  bgInfoMap,
  mainPageLeftGridConfig,
  mainPageRightGridConfig,
} from "@/config/baseConfig";
import { GetServerSideProps } from "next";
import { ArticleListItem } from "@/pages/types/article";
import { MenuType } from "@libs/interface";

const MyList: FC<{
  list: ArticleListItem[];
  typeId: number;
  typeName: string;
}> = ({ list, typeId, typeName }) => {
  const [myList, setMyList] = useState(list);
  const renderer = new marked.Renderer();

  useEffect(() => {
    setMyList(list);
  });
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
      <div className="bg-info-bg bg-no-repeat bg-cover">
        <div className=" container mx-auto  mb-5">
          <div className="py-40">
            <h1 className="text-8xl text-white text-center font-bold  mb-2">
              {typeName}
            </h1>
            <p className="text-xl text-white text-center font-serif">
              {bgInfoMap[typeId]?.info}
            </p>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Row justify="center">
          <Col
            className="main-content-left"
            xs={mainPageLeftGridConfig.xs}
            sm={mainPageLeftGridConfig.sm}
            md={mainPageLeftGridConfig.md}
          >
            {" "}
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <a href="/">首页</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <List
                header={<div>最新日志</div>}
                itemLayout="vertical"
                dataSource={myList}
                renderItem={(item: any) => (
                  <List.Item>
                    <div className="list-title">
                      <Link
                        href={{
                          pathname: "/detail",
                          query: { id: item.id, typeId: typeId },
                        }}
                      >
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                      <span>
                        <CalendarOutlined />
                        {item.addTime}
                      </span>
                      <span>
                        <FolderOpenOutlined /> {item.typeName}
                      </span>
                      <span>
                        <FireOutlined />
                        {item.view_count}人
                      </span>
                    </div>
                    <div
                      className="list-context"
                      dangerouslySetInnerHTML={{
                        __html: marked(item.introduce),
                      }}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>

          <Col
            className="main-content-right"
            xs={mainPageRightGridConfig.xs}
            sm={mainPageRightGridConfig.sm}
            md={mainPageRightGridConfig.md}
          >
            {" "}
            <Author />
          </Col>
        </Row>
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
