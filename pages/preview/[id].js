import { Blog } from '../../components/blog';
import { client } from '../../libs/client';
// pages/blog/[id].js
export default function BlogId({ blog }) {
  return (
    <>
      <p>プレビュー</p>
      <Blog blog={blog}/>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/preview/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  
      // draftKeyを取得し、クエリを作成する
      const draftKey = context.previewData?.draftKey
      ? { draftKey: context.previewData.draftKey }
      : {};

  const data = await client.get({ 
    endpoint: "blog",
    contentId: id ,
    queries: draftKey,
  });

   // 記事が存在しなければ404エラーを返す
   if (!data) {
    return { notFound: true }
  }

  return {
    props: {
      blog: data,
      ...draftKey
    },
  };
};