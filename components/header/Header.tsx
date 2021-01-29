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

const Header: FC<{
  typeId?: number;
  typeName?: string;
}> = ({ typeId, typeName }) => {
  const [navArray, setNavArray] = useState<MenuType[]>([]);
  const INDEX_KEY = "-1";
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
          setNavArray(data);
          selectMenuByTypeName(data);
          return data;
        });
      setNavArray(result);
      setTimeout(() => {
        setCurrentSelect([typeId ? String(typeId) : INDEX_KEY]);
      });
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
    <div className="bg-white h-12 shadow-md">
      <div className="container mx-auto h-full flex place-content-between items-center">
        <div className="space-x-2 items-center">
          <a className="text-2xl text-blue-500 inline-block h-full" href="/">
            BigMeowCoding
          </a>
          <span className="text-sm text-gray-500 inline-block h-full">
            健康生活，快乐编程
          </span>
        </div>
        <div className="text-gray-600 flex space-x-4">
          <Link href="/">
            <a>首页</a>
          </Link>
          {navArray.map((item) => {
            return (
              <Link href="/" key={item.id}>
                {item.typeName}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Header;
