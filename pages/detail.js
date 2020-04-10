import React from "react";

import {CalendarOutlined, FolderOpenOutlined, FireOutlined} from '@ant-design/icons';
import {Affix, Breadcrumb, Col, Row} from "antd";
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import Author from "../components/Author";
import Header from "../components/Header";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import '../static/styles/pages/detail.css'
import * as axios from "axios";

import Tocify from '../components/tocify.tsx'


const Detail = (props) => {
    const tocify = new Tocify()

    const renderer = new marked.Renderer();
    renderer.heading = function(text, level, raw) {
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
        }
    });
    let html = marked(props.article_content)

    return (
        <>

            <Header/>
            <Row className="main-content" type="flex" justify="center">
                <Col className="main-content-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="bread-box">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className="detail-title">
                                React实战视频教程-技术胖Blog开发(更新08集)
                            </div>

                            <div className="list-icon center">
                                <span><CalendarOutlined/>2019-06-28</span>
                                <span><FolderOpenOutlined/> 视频教程</span>
                                <span><FireOutlined/>5498人</span>
                            </div>

                            <div className="detail-content"
                            dangerouslySetInnerHTML={{__html:html}}
                            >
                            </div>

                        </div>

                    </div>
                </Col>

                <Col className="main-content-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                    <Affix offsetTop={5}>
                        <div className="detailed-nav common-box">
                            <div className="nav-title">文章目录</div>
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>

                </Col>
            </Row>
            <Footer/>

        </>
    )
}

Detail.getInitialProps = async (context) => {
    console.log(context.query.id)
    let id = context.query.id
    const promise = new Promise((resolve) => {

        axios('http://127.0.0.1:7002/default/getArticleById/' + id).then(
            (res) => {
                resolve(res.data.data[0])
            }
        )
    })

    return await promise
}
export default Detail
