import React, { FC, forwardRef, useEffect, useState } from "react";
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
interface prop extends React.HTMLAttributes<HTMLDivElement> {
  type?: "article" | "fixed";
}

const Header = forwardRef<HTMLDivElement, prop>(({ className, type }, ref) => {
  const [navArray, setNavArray] = useState<MenuType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get<{
          data: [];
        }>(servicePath.getTypeInfo)
        .then((res) => {
          const data = res.data.data;
          data.sort((a: MenuType, b: MenuType) => {
            return a.orderNumber - b.orderNumber;
          });
          setNavArray(data);
          return data;
        });
      setNavArray(result);
    };
    fetchData().then((r) => r);
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        "h-16 ",
        className,
        type === "fixed" ? "fixed z-10" : "absolute",
        type === "fixed" ? "bg-white bg-opacity-90" : null,
        type === "fixed" ? "border-b border-gray-200 " : null
      )}
    >
      <div className="container mx-auto h-full flex place-content-between items-center">
        <div className="space-x-2 items-center">
          <a
            className={classNames(
              "text-2xl  font-extrabold inline-block h-full",
              type === "article" || type === "fixed"
                ? "text-black"
                : "text-white hover:text-opacity-80 "
            )}
            href="/"
          >
            {BLOG_NAME}
          </a>
        </div>
        <div className="text-gray-600 flex space-x-4">
          {navArray.map((item) => {
            return (
              <Link
                href={item.id ? `/list/list?id=${item.id}` : "/"}
                key={item.id}
              >
                <a
                  className={classNames(
                    '"font-extrabold  font-bold text-xs"',
                    type === "article" || type === "fixed"
                      ? "text-black"
                      : "text-white hover:text-opacity-80"
                  )}
                >
                  {item.typeName}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
});
export default Header;
