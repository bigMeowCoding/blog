import Header from "../components/Header";
import React, {useState} from 'react'

import {Col, Row, List} from "antd";
import {CalendarOutlined, FolderOpenOutlined, FireOutlined} from '@ant-design/icons';
import 'markdown-navbar/dist/navbar.css';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import '../static/styles/pages/index.css'
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import * as axios from "axios";
import Link from "next/link";
import servicePath from "../config/apiUrl";


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
        }
    });
    return <>
        <Header/>
        <Row className="main-content" type="flex" justify="center">
            <Col className="main-content-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                <div>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={mylist}
                        renderItem={item => (
                            <List.Item>
                                <div className="list-title">
                                    <Link href={{pathname: '/detail', query: {id: item.id}}}>
                                        <a>{item.title}</a>
                                    </Link>
                                </div>
                                <div className="list-icon">
                                    <span><CalendarOutlined/>{item.addTime}</span>
                                    <span><FolderOpenOutlined/> {item.typeName}</span>
                                    <span><FireOutlined/>{item.view_count}人</span>
                                </div>
                                <div className="list-context"
                                     dangerouslySetInnerHTML={{__html: marked(item.introduce)}}
                                ></div>
                            </List.Item>
                        )}
                    />
                </div>
            </Col>

            <Col className="main-content-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author/>
            </Col>
        </Row>
        <Footer/>
    </>
};
Home.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios(servicePath.getArticleList).then(
            (res) => {
                resolve(res.data)
            }
        )
    })

    return await promise
}
export default Home
