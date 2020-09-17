import Header from "../components/Header";
import React, { useEffect, useState } from "react";

import { Col, Row, List, Breadcrumb } from "antd";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from "@ant-design/icons";

import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import * as axios from "axios";
import servicePath from "../config/apiUrl";
import Link from "next/link";
import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import {
  mainPageLeftGridConfig,
  mainPageRightGridConfig,
} from "../config/baseConfig";

const MyList = (list) => {
  const [mylist, setMylist] = useState(list.data);
  const renderer = new marked.Renderer();

  useEffect(() => {
    setMylist(list.data);
  });
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
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
      <Row className="main-content" type="flex" justify="center">
        <Col
          className="main-content-left"
          xs={mainPageLeftGridConfig.xs}
          sm={mainPageLeftGridConfig.sm}
          md={mainPageLeftGridConfig.md}
          lg={mainPageLeftGridConfig.lg}
          xl={mainPageLeftGridConfig.xl}
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
              dataSource={mylist}
              renderItem={(item) => (
                <List.Item>
                  <div className="list-title">
                    <Link
                      href={{ pathname: "/detail", query: { id: item.id } }}
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
                    dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                  ></div>
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
          lg={mainPageRightGridConfig.lg}
          xl={mainPageRightGridConfig.xl}
        >
          {" "}
          <Author />
        </Col>
      </Row>
      <Footer />
    </>
  );
};
MyList.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios(servicePath.getListById + "/" + id).then((res) => resolve(res.data));
  });
  return await promise;
};
export default MyList;
