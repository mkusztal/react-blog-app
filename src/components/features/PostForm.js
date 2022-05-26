import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row, FloatingLabel, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
    navigate('/');
  };

  return (
    <Row>
      <Col md={{ span: 10, offset: 2 }}>
        <Form onSubmit={handleSubmit}>
          <h3 className="pb-3">{actionText}</h3>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Published</Form.Label>
            <Form.Control
              type="date"
              placeholder="dd-mm-yyyy"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Short Description</Form.Label>
            <FloatingLabel controlId="floatingTextarea">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={shortDescription}
                style={{ height: '100px' }}
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Main content</Form.Label>
            <FloatingLabel controlId="floatingTextarea">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={content}
                style={{ height: '100px' }}
                onChange={(e) => setContent(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Button as="input" type="submit" value={actionText} />{' '}
        </Form>
      </Col>
    </Row>
  );
};

export default PostForm;
