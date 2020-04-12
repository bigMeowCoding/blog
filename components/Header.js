import React, {useEffect, useState} from 'react';
import Router from 'next/router'

import '../static/styles/components/header.css'
import {Col, Menu, Row} from "antd";
import {HomeOutlined, YoutubeOutlined, SmileOutlined} from '@ant-design/icons';
import * as axios from "axios";
import servicePath from "../config/apiUrl";

const Header = () => {
    const [navArray, setNavArray] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()

    }, [])
    const handleClick = (e) => {
        if (e.key === "0") {
            Router.push('/index')
        } else {
            Router.push('/list?id=' + e.key)
        }

    }
    return <div className='header'>
        <Row type='flex' justify='center'>
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-title">技术胖</span>
                <span className="header-introduce">专注前端开发,每年100集免费视频。</span>
            </Col>
            <Col className="menu-box" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode='horizontal'
                      onClick={handleClick}
                >
                    <Menu.Item key="0">
                        <HomeOutlined/> 首页
                    </Menu.Item>
                    {
                        navArray.map((item) => {
                            return (
                                <Menu.Item key={item.id}>
                                    <HeaderIcon type={item.icon}/>
                                    {item.typeName}
                                </Menu.Item>
                            )
                        })
                    }

                </Menu>
            </Col>
        </Row>
    </div>
}


export default Header;

function HeaderIcon(props) {
    let {type} = props;
    switch (type) {
        case 1:
            return <YoutubeOutlined/>
        case 2:
            return <SmileOutlined/>
    }
}
