import Header from "@/components/header/Header";
import React, { useState } from "react";

import { Col, Row, List } from "antd";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from "@ant-design/icons";
import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import style from "./index.scss";
import Author from "@/components/author/Author";
import Footer from "@/components/footer/Footer";
import * as axios from "axios";
import Link from "next/link";
import servicePath from "../config/apiUrl";
import {
  mainPageLeftGridConfig,
  mainPageRightGridConfig,
} from "../config/baseConfig";
import Particles from "react-particles-js";

const Home = (list) => {
  const [mylist, setMylist] = useState(list.data);
  const renderer = new marked.Renderer();
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
      <div className="main-content">
        <Row justify="center">
          <Col
            className="main-content-left"
            xs={mainPageLeftGridConfig.xs}
            sm={mainPageLeftGridConfig.sm}
            md={mainPageLeftGridConfig.md}
          >
            <div>
              <List
                header={<div>最新日志</div>}
                itemLayout="vertical"
                dataSource={mylist}
                renderItem={(item: any) => (
                  <List.Item>
                    <div className="list-title">
                      <Link
                        href={{
                          pathname: "/detail",
                          query: { id: item.id, typeName: item.typeName },
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
            <Author />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};
Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    // @ts-ignore
    axios(servicePath.getArticleList).then((res) => {
      resolve(res.data);
    });
  });

  return await promise;
};
export default Home;
