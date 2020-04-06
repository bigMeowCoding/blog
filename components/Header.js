import React from 'react';

import '../static/styles/components/header.css'
import {Col, Menu, Row} from "antd";
import {HomeOutlined,YoutubeOutlined,SmileOutlined} from '@ant-design/icons';

const Header = () => (
    <div className='header'>
        <Row type='flex' justify='center'>
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-title">技术胖</span>
                <span className="header-introduce">专注前端开发,每年100集免费视频。</span>
            </Col>
            <Col className="menu-box" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode='horizontal'>
                    <Menu.Item key="home">
                        <HomeOutlined/> 首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <YoutubeOutlined/>
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <SmileOutlined/> 生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
);

export default Header;
