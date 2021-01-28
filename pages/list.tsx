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
import servicePath from "../config/apiUrl";
import Link from "next/link";
import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import {
  mainPageLeftGridConfig,
  mainPageRightGridConfig,
} from "@/config/baseConfig";
import { GetServerSideProps } from "next";
import { ArticleListItem } from "@/pages/types/article";

const MyList: FC<{ list: ArticleListItem[]; typeId: number }> = ({
  list,
  typeId,
}) => {
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
      <Header typeId={typeId} />
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
  return {
    props: {
      list,
      typeId: id,
    },
  };
};
export default MyList;
