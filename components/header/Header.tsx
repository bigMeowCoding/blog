import React, { FC, useEffect, useState } from "react";
import { Menu } from "antd";
import {
  YoutubeOutlined,
  SmileOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import axios from "axios";
import servicePath from "@/config/apiUrl";
import { MenuType } from "@libs/interface";
import SubMenu from "antd/lib/menu/SubMenu";
import Link from "next/link";
import classNames from "classnames";
import { BLOG_NAME } from "@/config/baseConfig";

const HeaderIcon: FC<{ type: number }> = ({ type }) => {
  switch (type) {
    case 1:
      return <YoutubeOutlined />;
    case 2:
      return <SmileOutlined />;
    case 3:
      return <ToolOutlined />;
    default:
      return null;
  }
};
const MenuTreeNode: FC<{ menuItem: MenuType }> = ({ menuItem, ...rest }) => {
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
};
interface prop extends React.HTMLAttributes<HTMLElement> {
  typeId?: number;
  typeName?: string;
}
const Header: FC<prop> = ({ typeName, className }) => {
  const [navArray, setNavArray] = useState<MenuType[]>([]);
  // const INDEX_KEY = "-1";
  // const [currentSelect, setCurrentSelect] = useState<string[]>([INDEX_KEY]);
  function selectMenuByTypeName(data: MenuType[]) {
    if (typeName) {
      const menu = data.find((item) => {
        return item.typeName === typeName;
      });
      if (menu) {
        // setTimeout(() => {
        // setCurrentSelect([String(menu.id)] || [INDEX_KEY]);
        // });
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get<{
          data: MenuType[];
        }>(servicePath.getTypeInfo)
        .then((res) => {
          const data = res.data.data;
          data.sort((a, b) => {
            return a.orderNumber - b.orderNumber;
          });
          setNavArray(data);
          selectMenuByTypeName(data);
          return data;
        });
      setNavArray(result);
      // setTimeout(() => {
      // setCurrentSelect([typeId ? String(typeId) : INDEX_KEY]);
      // });
    };
    fetchData().then((r) => r);
  }, []);

  // const handleClick: MenuClickEventHandler = (e) => {
  //   if (e.key === String(INDEX_KEY)) {
  //     setCurrentSelect([INDEX_KEY]);
  //     Router.push("/index").then((r) => r);
  //   } else {
  //     setCurrentSelect([e.key + ""]);
  //     Router.push("/list?id=" + e.key).then((r) => r);
  //   }
  // };

  return (
    <div className={classNames("bg-white h-12 ", className)}>
      <div className="container mx-auto h-full flex place-content-between items-center">
        <div className="space-x-2 items-center">
          <a
            className="text-2xl hover:text-opacity-80 text-white font-extrabold inline-block h-full"
            href="/"
          >
            {BLOG_NAME}
          </a>
        </div>
        <div className="text-gray-600 flex space-x-4">
          {navArray.map((item) => {
            return (
              <Link href="/" key={item.id}>
                <a className="font-extrabold hover:text-opacity-80 text-white text-xs">{item.typeName}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Header;
