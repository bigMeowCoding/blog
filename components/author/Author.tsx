import SocialAddress from "@/components/social-address";

const Author = () => {
  return (
    <div className="">
      <h2 className="text-xl text-gray-400 font-bold mb-4">关于我</h2>
      <div className="relative inline-block">
        <div className="bg-head-icon bg-cover rounded-md bg-no-repeat w-48 h-48 mb-4" />
      </div>
      <p className="text-gray-300 mb-4  w-48">
        老喵，前端娱乐圈迟到者，切页面爱好者，计算机科学朝圣者
      </p>
      <SocialAddress />
    </div>
  );
};

export default Author;
