import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/categoryReducer';

const Categories = () => {
  const categories = useSelector(getCategories);
  return (
    <section>
      <h1 className="mb=5">All categories</h1>
      <Row xs={1} md={1} className="g-2 justify-content-md-center">
        {categories.map((category) => (
          <Col key={category}>
            <Link to={'/categories/' + category}>
              <Button variant={'primary'} className="px-5">
                {category}
              </Button>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Categories;
