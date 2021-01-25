import { Avatar, Tooltip, Divider } from "antd";
// import "./author.scss";

import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Author = () => {
  return (
    <div className="author-box">
      <div>
        <Avatar size={100} src="/images/headIcon.jpeg" />
      </div>
      <div className="name">BigMeow</div>
      <div className="description">爱前端，更爱生活</div>
      <div className="author-introduction">
        <Divider>社交账号</Divider>
        <Tooltip title="https://github.com/bigMeowCoding">
          <Avatar size={28} icon={<GithubOutlined />} className="account" />
        </Tooltip>
        <Tooltip title="lygkd50822103">
          <Avatar size={28} icon={<WechatOutlined />} className="account" />
        </Tooltip>
        <Tooltip title="495248579">
          <Avatar size={28} icon={<QqOutlined />} className="account" />
        </Tooltip>
        <Tooltip title="zhou495248579@hotmail.com">
          <Avatar size={28} icon={<MailOutlined />} className="account" />
        </Tooltip>
      </div>
    </div>
  );
};

export default Author;
