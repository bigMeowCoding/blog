import React, { FC } from "react";
import Link from "next/link";
import marked from "marked";
import { ArticleListItem } from "@/pages/types/article";

interface Prop {
  list: ArticleListItem[];
}
const ArticleList: FC<Prop> = ({ list }) => {
  return (
    <>
      <div className='-mb-5'>
        {list.map((item) => {
          return (
              <div key={item.id} className="mb-5 border-b pb-5 border-gray-200">
                <Link
                    href={{
                      pathname: `/detail/detail`,
                      query: { id: item.id },
                    }}
                >
                  <h3 className="text-2xl mb-4 font-bold text-gray-700">
                    {item.title}
                  </h3>
                </Link>
                <div
                    className="text-gray-400 text-sm font-serif italic"
                    dangerouslySetInnerHTML={{
                      __html: marked(item.introduce),
                    }}
                />
              </div>
          );
        })}
      </div>


    </>
  );
};
export default ArticleList;
