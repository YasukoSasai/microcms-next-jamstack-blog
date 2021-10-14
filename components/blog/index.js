import styles from '../../styles/Home.module.scss';
// pages/blog/[id].js
export const Blog = ({ blog, highlightedBody }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <p className="category">{blog.category && `${blog.category.name}`}</p>
      <div
        dangerouslySetInnerHTML={{
          // __html: `${blog.body}`,
          __html: `${highlightedBody}`,
        }}
        className={styles.post}
      />
    </main>
  );
}
