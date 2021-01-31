import { Avatar, Tooltip } from "antd";
import style from "./author.module.scss";

import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Author = () => {
  return (
    <div className=''>
      <div className='bg-head-icon bg-cover bg-no-repeat w-48 h-48'>
      </div>
      <p className='text-gray-300'>老喵，前端娱乐圈迟到者，切页面爱好者，计算机科学朝圣者</p>

      <div className={style.author_introduction}>
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
