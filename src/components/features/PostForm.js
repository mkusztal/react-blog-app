import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row, FloatingLabel, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  let navigate = useNavigate();

  const handleSubmit = () => {
    action({ title, author, publishedDate, shortDescription, content });
    navigate('/');
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <Row>
      <Col md={{ span: 10, offset: 2 }}>
        <Form onSubmit={validate(handleSubmit)}>
          <h3 className="pb-3">{actionText}</h3>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Title</Form.Label>
            <Form.Control
              {...register('title', { required: true, minLength: 3 })}
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <small className="d-block form-text text-danger mt-2">
                Title is too short (min is 3)
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Author</Form.Label>
            <Form.Control
              {...register('author', { required: true, minLength: 3 })}
              type="text"
              placeholder="Enter author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            {errors.author && (
              <small className="d-block form-text text-danger mt-2">
                Author is too short (min is 3)
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Published</Form.Label>
            <DatePicker
              selected={publishedDate}
              onChange={(date) => setPublishedDate(date)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Short Description</Form.Label>
            <FloatingLabel controlId="floatingTextarea">
              <Form.Control
                {...register('shortDescription', {
                  required: true,
                  minLength: 20,
                })}
                as="textarea"
                placeholder="Leave a comment here"
                value={shortDescription}
                style={{ height: '100px' }}
                onChange={(e) => setShortDescription(e.target.value)}
              />
              {errors.shortDescription && (
                <small className="d-block form-text text-danger mt-2">
                  Short description is too short (min is 20)
                </small>
              )}
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Main content</Form.Label>
            <ReactQuill
              theme="snow"
              value={content}
              placeholder="Leave a comment here"
              onChange={setContent}
            />
          </Form.Group>
          <Button as="input" type="submit" value={actionText} />{' '}
        </Form>
      </Col>
    </Row>
  );
};

export default PostForm;
