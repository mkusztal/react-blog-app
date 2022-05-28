import { Col, Form, Row, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getCategories } from '../../redux/categoryReducer';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [category, setCategory] = useState(props.categories || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  let navigate = useNavigate();

  const categories = useSelector(getCategories);

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
        category,
      });
      navigate('/');
    }
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
            {dateError && (
              <small className="d-block form-text text-danger mt-2">
                Date can't be empty
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Category</Form.Label>
            <Form.Select onChange={setCategory} value={category}>
              <option disabled value="1">
                Select category...
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
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
            {contentError && (
              <small className="d-block form-text text-danger mt-2">
                Content can't be empty
              </small>
            )}
          </Form.Group>
          <Button as="input" type="submit" value={actionText} />{' '}
        </Form>
      </Col>
    </Row>
  );
};

export default PostForm;
