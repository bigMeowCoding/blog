import React, { useEffect, useState } from "react";
import Router from "next/router";

import style from "./header.module.scss";
import { Col, Menu, Row } from "antd";
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import * as axios from "axios";
import servicePath from "@/config/apiUrl";
import {
  headerLeftGridConfig,
  headerRightGridConfig,
} from "@/config/baseConfig";
import { HeaderComponent, MenuType } from "@libs/interface";
import SubMenu from "antd/lib/menu/SubMenu";

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
function MenuTreeNode(props: { menuItem: MenuType }) {
  const { menuItem, ...rest } = props;
  if (menuItem.children && menuItem.children.length > 0) {
    return (
      <SubMenu {...rest} title={menuItem.typeName} key={menuItem.id}>
        {menuItem.children.map((item) => {
          return <MenuTreeNode menuItem={item} key={item.id} />;
        })}
      </SubMenu>
    );
  } else {
    return (
      <Menu.Item {...rest} key={menuItem.id}>
        <HeaderIcon type={menuItem.icon} />
        {menuItem.typeName}
      </Menu.Item>
    );
  }
}

const Header = (props: HeaderComponent) => {
  const [navArray, setNavArray] = useState<MenuType[]>([]);
  const INDEX_KEY = "-1";
  const [currentSelect, setCurrentSelect] = useState([INDEX_KEY]);
  function selectMenuByTypeName(data: MenuType[]) {
    if (props.typeName) {
      const menu = data.find((item) => {
        return item.typeName === props.typeName;
      });
      if (menu) {
        setTimeout(() => {
          setCurrentSelect([String(menu.id)] || [INDEX_KEY]);
        });
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      // @ts-ignore
      const result = await axios(servicePath.getTypeInfo).then((res) => {
        const data: MenuType[] = res.data.data;
        setNavArray(data);
        selectMenuByTypeName(data);
        return data;
      });
      setNavArray(result);
      setTimeout(() => {
        setCurrentSelect([props.typeId ? String(props.typeId) : INDEX_KEY]);
      });
    };
    fetchData();
  }, []);

  const handleClick = (e) => {
    if (e.key === String(INDEX_KEY)) {
      setCurrentSelect([INDEX_KEY]);
      Router.push("/index");
    } else {
      setCurrentSelect([e.key]);
      Router.push("/list?id=" + e.key);
    }
  };

  return (
    <div className={style.header}>
      <div className={style.header_content}>
        <Row justify="center">
          <Col
            xs={headerLeftGridConfig.xs}
            sm={headerLeftGridConfig.sm}
            md={headerLeftGridConfig.md}
          >
            <a href="/">
              <span className={style.header_title}>BigMeowCoding</span>
            </a>
            <span className={style.header_introduce}>健康生活，快乐编程</span>
          </Col>
          <Col
            className="menu-box"
            xs={headerRightGridConfig.xs}
            sm={headerRightGridConfig.sm}
            md={headerRightGridConfig.md}
          >
            <Menu
              mode="horizontal"
              selectedKeys={currentSelect}
              onClick={handleClick}
            >
              <Menu.Item key={INDEX_KEY}>
                <HomeOutlined /> 首页
              </Menu.Item>
              {navArray.map((item) => {
                return <MenuTreeNode menuItem={item} key={item.id} />;
              })}
            </Menu>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Header;
