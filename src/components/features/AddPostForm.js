import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';

const AddPostForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (post) => {
    dispatch(addPost(post));
    navigate('/');
  };

  return <PostForm action={handleSubmit} actionText="Add Post" />;
};

export default AddPostForm;
