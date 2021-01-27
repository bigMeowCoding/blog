import { Avatar, Tooltip, Divider } from "antd";
import style from "./author.module.scss";

import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Author = () => {
  return (
    <div className={style.author_box}>
      <div>
        <Avatar size={100} src="/images/headIcon.jpeg" />
      </div>
      <div className={style.name}>BigMeow</div>
      <div className={style.description}>爱前端，更爱生活</div>
      <div className={style.author_introduction}>
        <Divider>社交账号</Divider>
        <Tooltip title="https://github.com/bigMeowCoding">
          <Avatar
            size={28}
            icon={<GithubOutlined />}
            className={style.account}
          />
        </Tooltip>
        <Tooltip title="lygkd50822103">
          <Avatar
            size={28}
            icon={<WechatOutlined />}
            className={style.account}
          />
        </Tooltip>
        <Tooltip title="495248579">
          <Avatar size={28} icon={<QqOutlined />} className={style.account} />
        </Tooltip>
        <Tooltip title="zhou495248579@hotmail.com">
          <Avatar size={28} icon={<MailOutlined />} className={style.account} />
        </Tooltip>
      </div>
    </div>
  );
};

export default Author;
