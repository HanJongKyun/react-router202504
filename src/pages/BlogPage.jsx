import PostCard from '../components/PostCard';
import styles from './BlogPage.module.scss';
import { posts } from '../assets/dummy-data';
import { useSearchParams } from 'react-router-dom';

const BlogPage = () => {
  // ?뒤에 값(쿼리스트링) 읽는법
  // useSearchParams은 배열을 리턴하는데
  // 0번인덱스에는 쿼리스트링을 모아놓은 객체를 리턴
  // 1번인덱스는 쿼리스트링을 생성할 수 있는 함수를 리턴
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'latest';
  const search = searchParams.get('search') || '';

  return (
    <div className={styles.blog}>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
