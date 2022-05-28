import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostByCategory } from '../../redux/postRedux';
import Posts from './Posts';

const PostByCategory = () => {
  const { postCategory } = useParams();
  const posts = useSelector((state) => getPostByCategory(state, postCategory));

  if (posts.length === 0)
    return (
      <div>
        <h1>Category: {postCategory}</h1>
        <p>No posts in this category</p>
      </div>
    );
  return (
    <div>
      <Row xs={1} md={4} className="g-2">
        <Col col={12}>
          <h1>Category: {postCategory}</h1>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        {posts.map((post) => (
          <Col key={post.id}>
            <Posts {...post} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PostByCategory;
