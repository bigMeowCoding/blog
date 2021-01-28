import React from "react";

import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { Affix, Col, Row } from "antd";
import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import Author from "@/components/author/Author";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import axios from "axios";

import Tocify from "@/components/tocify";
import servicePath from "@/config/apiUrl";
import {
  mainPageLeftGridConfig,
  mainPageRightGridConfig,
} from "@/config/baseConfig";
import { GetServerSideProps } from "next";

const Detail = (props: { typeId?: number; [key: string]: any }) => {
  const tocify = new Tocify();
  const { typeName, typeId } = props;
  const renderer = new marked.Renderer();
  renderer.heading = function (text, level) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
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
  let html = marked(props?.article_content);
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
                />
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

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string; typeName: string }
> = async (context) => {
  let id = context.query?.id,
    typeName = context.query?.typeName;
  const res = await axios.get<{
    data: any[];
  }>(servicePath.getArticleById + "/" + id);
  const content = res.data.data;
  return {
    props: {
      ...content,
      typeName,
    },
  };
};
export default Detail;
