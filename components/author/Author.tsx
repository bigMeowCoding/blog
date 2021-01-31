import Weibo from "../../public/images/icons/weibo.svg";
import Zhihu from "../../public/images/icons/zhihu.svg";
import Github from "../../public/images/icons/github.svg";

const Author = () => {
  return (
    <div className="">
      <div className="bg-head-icon bg-cover bg-no-repeat w-48 h-48" />
      <p className="text-gray-300">
        老喵，前端娱乐圈迟到者，切页面爱好者，计算机科学朝圣者
      </p>

      <div className="flex space-x-4">
        <div
          onClick={() => {
            window.open("https://www.zhihu.com/people/zhou-yi-jun-95-9");
          }}
          className="w-10 h-10 bg-gray-500 hover:bg-green-800 flex justify-center items-center rounded-full"
        >
          <Zhihu fill="white" className=" w-6 h-6" />
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/bigMeowCoding");
          }}
          className="w-10 h-10 bg-gray-500 hover:bg-green-800 flex justify-center items-center rounded-full"
        >
          <Github fill="white" className=" w-6 h-6" />
        </div>
        <div
          onClick={() => {
            window.open(
              "https://weibo.com/2119861484/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"
            );
          }}
          className="w-10 h-10 bg-gray-500 hover:bg-green-800 flex justify-center items-center rounded-full"
        >
          <Weibo fill="white" className=" w-6 h-6" />
        </div>

        {/*<Tooltip title="">*/}
        {/*  <Avatar*/}
        {/*    size={28}*/}
        {/*    icon={<GithubOutlined />}*/}
        {/*    className={style.account}*/}
        {/*  />*/}
        {/*</Tooltip>*/}
        {/*<Tooltip title="lygkd50822103">*/}
        {/*  <Avatar*/}
        {/*    size={28}*/}
        {/*    icon={<WechatOutlined />}*/}
        {/*    className={style.account}*/}
        {/*  />*/}
        {/*</Tooltip>*/}
        {/*<Tooltip title="495248579">*/}
        {/*  <Avatar size={28} icon={<QqOutlined />} className={style.account} />*/}
        {/*</Tooltip>*/}
        {/*<Tooltip title="zhou495248579@hotmail.com">*/}
        {/*  <Avatar size={28} icon={<MailOutlined />} className={style.account} />*/}
        {/*</Tooltip>*/}
      </div>
    </div>
  );
};

export default Author;
