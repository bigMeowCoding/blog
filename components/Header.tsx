import React, { useEffect, useState } from "react";
import Router from "next/router";

import "../static/styles/components/header.css";
import { Col, Menu, Row } from "antd";
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import * as axios from "axios";
import servicePath from "../config/apiUrl";
import {
  headerLeftGridConfig,
  headerRightGridConfig,
} from "../config/baseConfig";

function HeaderIcon(props) {
  let { type } = props;
  switch (type) {
    case 1:
      return <YoutubeOutlined />;
    case 2:
      return <SmileOutlined />;
    case 3:
      return <ToolOutlined />;
  }
}
const Header = () => {
  const [navArray, setNavArray] = useState([]);
  const [currentSelect, setCurrentSelect] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      // @ts-ignore
      const result = await axios(servicePath.getTypeInfo).then((res) => {
        setNavArray(res.data.data);
        return res.data.data;
      });
      setNavArray(result);
    };
    fetchData();
  }, []);

  const handleClick = (e) => {
    setCurrentSelect(e.key);
    if (e.key === "0") {
      Router.push("/index");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };

  return (
    <div className="header">
      <Row justify="center">
        <Col
          xs={headerLeftGridConfig.xs}
          sm={headerLeftGridConfig.sm}
          md={headerLeftGridConfig.md}
          lg={headerLeftGridConfig.lg}
          xl={headerLeftGridConfig.xl}
        >
          <a href="/">
            <span className="header-title">BigMeowCoding</span>
          </a>
          <span className="header-introduce">健康生活，快乐编程</span>
        </Col>
        <Col
          className="menu-box"
          xs={headerRightGridConfig.xs}
          sm={headerRightGridConfig.sm}
          md={headerRightGridConfig.md}
          lg={headerRightGridConfig.lg}
          xl={headerRightGridConfig.xl}
        >
          <Menu
            mode="horizontal"
            selectedKeys={[currentSelect]}
            onClick={handleClick}
          >
            <Menu.Item key="0">
              <HomeOutlined /> 首页
            </Menu.Item>
            {navArray.map((item) => {
              return (
                <Menu.Item key={item.id}>
                  <HeaderIcon type={item.icon} />
                  {item.typeName}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
