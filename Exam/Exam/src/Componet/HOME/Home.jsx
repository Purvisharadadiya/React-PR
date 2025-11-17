import { useEffect } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogsAsync, deleteBlogAsync } from "../../service/ation/action";
import { useNavigate } from "react-router";

const HOME = () => {

  const { blogs } = useSelector((state) => state.blog);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllBlogsAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBlogAsync(id));
  };

  const handleEdit = (id) => {
    navigate(`/editblog/${id}`);
  };

  return (
    <Container className="py-4">
      <h2 className="fw-bold text-center mb-4">All Blogs</h2>

      <Row className="gy-4">
        {blogs && blogs.length > 0 ? (
          blogs.map((v) => (
            <div className="col-md-4" key={v.id}>
              <Card className="shadow-sm blog-card">

                <Card.Img
                  variant="top"
                  src={v.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <Card.Body>
                  <h5 className="fw-bold">{v.title}</h5>
                  <p className="text-muted">{v.category}</p>

                  <p className="blog-desc">
                    {v.desc.length > 100 ? v.desc.slice(0, 100) + "..." : v.desc}
                  </p>

                 
                  <div className="d-flex gap-2">
                    <Button size="sm" variant="primary" onClick={() => handleEdit(v.id)}>
                      Edit
                    </Button>

                    <Button size="sm" variant="danger" onClick={() => handleDelete(v.id)}>
                      Delete
                    </Button>
                  </div>

                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h2 className="text-center">No Blogs Found</h2>
        )}
      </Row>
    </Container>
  );
};

export default HOME;
