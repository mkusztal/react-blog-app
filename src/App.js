import { Routes, Route } from 'react-router-dom';

// subpages
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Categories from './components/pages/Categories';
import PostByCategory from './components/pages/PostByCategories';

// styles
import { Container } from 'react-bootstrap';
import Header from './components/views/Header';
import Footer from './components/views/Footer';

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:postId" element={<PostEdit />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/:postCategory"
            element={<PostByCategory />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
