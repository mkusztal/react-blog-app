import { Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getPostById } from '../../redux/postRedux';
import { removePost } from '../../redux/postRedux';
import DeletePost from '../features/DeletePost';

const Post = () => {
  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, postId));

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removePost(postId));
    handleClose();
  };

  if (showModal)
    return (
      <DeletePost
        showModal={showModal}
        handleClose={handleClose}
        handleRemove={handleRemove}
      />
    );

  if (!post) return <Navigate to="/" />;
  return (
    <section>
      <Row md={4} className="d-flex justify-content-center">
        <Col xs={12} lg="5">
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="mb-3">{post.title}</Card.Title>
              <Card.Subtitle className="mb-2">
                Author:{post.author}
              </Card.Subtitle>
              <Card.Subtitle className="mb-3">
                Published:{post.publishedDate}
              </Card.Subtitle>
              <Card.Text>{post.shortDescription}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg="2">
          <Link to={'/post/edit/' + postId}>
            <Button variant="outline-info" className="m-2">
              Edit
            </Button>{' '}
          </Link>
          <Button variant="outline-danger" onClick={handleShow}>
            Delete
          </Button>{' '}
        </Col>
      </Row>
    </section>
  );
};

export default Post;
