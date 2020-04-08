import Header from "../components/Header";
import React, {useState} from 'react'

import {Col, Row, List} from "antd";
import {CalendarOutlined, FolderOpenOutlined, FireOutlined} from '@ant-design/icons';

import '../static/styles/pages/index.css'
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import * as axios from "axios";


const Home = (list) => {
    const [ mylist , setMylist ] = useState( list.data);

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
                                <div className="list-title">{item.title}</div>
                                <div className="list-icon">
                                    <span><CalendarOutlined/>{item.addTime}</span>
                                    <span><FolderOpenOutlined/> {item.typeName}</span>
                                    <span><FireOutlined/>{item.view_count}人</span>
                                </div>
                                <div className="list-context">{item.introduce}</div>
                            </List.Item>
                        )}
                    />
                </div>
            </Col>

            <Col className="main-content-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author/>
                <Advert/>
            </Col>
        </Row>
        <Footer/>
    </>
};
Home.getInitialProps = async ()=>{
    const promise = new Promise((resolve)=>{
        axios('http://127.0.0.1:7002/default/getArticleList').then(
            (res)=>{
                console.log('远程获取数据结果:',res.data.data)
                resolve(res.data)
            }
        )
    })

    return await promise
}
export default Home
