import {Avatar, Tooltip,Divider} from 'antd'
import '../static/styles/components/author.css'

import {GithubOutlined, QqOutlined, WechatOutlined} from '@ant-design/icons';


const Author = () => {
    return (
        <div className="author-box common-box">
            <div><Avatar size={100} src='/images/headIcon.jpeg'/></div>
            <div className="author-introduction">
                <Divider>社交账号</Divider>
                    <Tooltip title="https://github.com/bigMeowCoding">
                        <Avatar size={28} icon={<GithubOutlined/>} className="account"/>
                    </Tooltip>
                <Avatar size={28} icon={<QqOutlined/>} className="account"/>
                <Avatar size={28} icon={<WechatOutlined/>} className="account"/>
            </div>
        </div>
    )
};

export default Author
