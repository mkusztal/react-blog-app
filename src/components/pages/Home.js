import Posts from '../pages/Posts';
import { Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <h1>All posts</h1>
        </Col>
        <Col className="d-flex flex-row-reverse p-2">
          <Link to="/post/add">
            <Button variant="outline-info">Add post</Button>{' '}
          </Link>
        </Col>
      </Row>
      <Row>
        <Posts />
      </Row>
    </div>
  );
};

export default Home;
