import { FC } from "react";
import Weibo from "../../public/images/icons/weibo.svg";
import Zhihu from "../../public/images/icons/zhihu.svg";
import Github from "../../public/images/icons/github.svg";
const SocialAddress: FC = () => {
  return (
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
    </div>
  );
};
export default SocialAddress;
