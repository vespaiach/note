import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import { Post } from '../components/Post';

export default function Home({ posts }: { posts: PostData[] }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {posts.map((post) => (
        <Post post={post} key={post.id} excerpt />
      ))}

      <style jsx>{`
        .blog-caption {
          font-size: 3rem;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};
