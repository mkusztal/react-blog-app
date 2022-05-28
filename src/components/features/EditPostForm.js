import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { editPost, getPostById } from '../../redux/postRedux';
import PostForm from './PostForm';

const EditPostForm = () => {
  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, postId));

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id: postId }));
    navigate('/');
  };

  if (!post) return <Navigate to="/" />;
  return (
    <PostForm
      action={handleSubmit}
      actionText="Edit Post"
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      category={post.category}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
};

export default EditPostForm;
