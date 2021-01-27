import React, { useEffect } from "react";

import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { Affix, Col, Row } from "antd";
import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import Author from "../components/Author";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "../static/styles/pages/detail.scss";
import * as axios from "axios";

import Tocify from "../components/tocify";
import servicePath from "../config/apiUrl";
import {
  mainPageLeftGridConfig,
  mainPageRightGridConfig,
} from "../config/baseConfig";

const Detail = (props: { typeId?: number; [key: string]: any }) => {
  const tocify = new Tocify();
  const { typeName, typeId } = props;
  const renderer = new marked.Renderer();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
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
  let html = marked(props.article_content);
  return (
    <>
      <Header typeName={typeName} typeId={typeId} />
      <div className="main-content">
        <Row justify="center">
          <Col
            className="main-content-left"
            xs={mainPageLeftGridConfig.xs}
            sm={mainPageLeftGridConfig.sm}
            md={mainPageLeftGridConfig.md}
          >
            <div>
              {/*<div className="bread-box">*/}
              {/*<Breadcrumb>*/}
              {/*<Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>*/}
              {/*<Breadcrumb.Item>视频列表</Breadcrumb.Item>*/}
              {/*<Breadcrumb.Item>xxxx</Breadcrumb.Item>*/}
              {/*</Breadcrumb>*/}
              {/*</div>*/}

              <div>
                <div className="detail-title">{props.title}</div>

                <div className="list-icon center">
                  <span>
                    <CalendarOutlined />
                    {props.addTime}
                  </span>
                  <span>
                    <FolderOpenOutlined /> {props.typeName}
                  </span>
                  <span>
                    <FireOutlined />
                    {props.view_count}人
                  </span>
                </div>

                <div
                  className="detail-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                ></div>
              </div>
            </div>
          </Col>

          <Col
            className="main-content-right"
            xs={mainPageRightGridConfig.xs}
            sm={mainPageRightGridConfig.sm}
            md={mainPageRightGridConfig.md}
          >
            <Author />
            <Affix offsetTop={5}>
              <div className="detailed-nav common-box">
                <div className="nav-title">文章目录</div>
                <div className="toc-list">{tocify && tocify.render()}</div>
              </div>
            </Affix>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

Detail.getInitialProps = async (context) => {
  let id = context.query.id,
    typeName = context.query.typeName;
  const promise = new Promise((resolve) => {
    // @ts-ignore
    axios(servicePath.getArticleById + "/" + id).then((res) => {
      const content = res.data.data[0];
      resolve({
        ...content,
        typeName,
      });
    });
  });

  return await promise;
};
export default Detail;
