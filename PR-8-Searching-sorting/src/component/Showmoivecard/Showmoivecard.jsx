import { useContext, useEffect, useState } from 'react';
import { Getstroagedata, Setstroagedata } from '../../services/StroageData';
import { useNavigate } from 'react-router';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Showmoivecard.css'
import { MovieContext } from '../MoiveContext';

// const Showmoivecard = () => {
    
//     const [showcard, setshowcard] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         let data = Getstroagedata();
//         setshowcard(data);
//     }, [])

//     const handledelete = (id) => {
//         let data = Getstroagedata();
//         let del = data.filter((v) => v.id !== id);
//         Setstroagedata(del);
//         setshowcard(del);
//     }

//     const handleedit = (id) => {
//         navigate(`/Editmoive/${id}`)
//     }

//     return (
//         <section className='pt-5'>
//             <Container fluid>
//                 <Row className="d-flex flex-wrap">
//                 <h2>Recommended moive</h2>
//                     {
//                         showcard.map((v) => (
//                             <div className="col-12 col-sm-6 col-lg-3 mb-4" key={v.id}>
//                                 <div className="movie-card">
//                                     <img src={v.image} alt={v.name} className="movie-img" />
//                                     <div className="movie-body">
//                                         <h5>{v.name}</h5>
//                                        <span> {v.type}</span> || <span>{v.category}</span>
//                                        <p>Relase Year : {v.year}</p>
                                        
                                        
                                       

//                                         <div className="movie-actions">
//                                             <button className="edit-btn" onClick={() => handleedit(v.id)}>
//                                                 <FaRegEdit /> Edit
//                                             </button>
//                                             <button className="delete-btn" onClick={() => handledelete(v.id)}>
//                                                 <MdDelete /> Delete
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </Row>
//             </Container>
//         </section>
//     )
// }

const Showmoivecard = () => {
  const { movies, setMovies, search } = useContext(MovieContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    let data = Getstroagedata();
    setMovies(data);
  }, []);

  const handledelete = (id) => {
    let data = Getstroagedata();
    let del = data.filter((v) => v.id !== id);
    Setstroagedata(del);
    setMovies(del);
  };

  const handleedit = (id) => {
    navigate(`/Editmoive/${id}`);
  };

  
  const filteredMovies = movies.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="pt-5">
      <Container fluid>
        <Row className="d-flex flex-wrap">
          <h2>Recommended movies</h2>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((v) => (
              <div className="col-12 col-sm-6 col-lg-3 mb-4" key={v.id}>
                <div className="movie-card">
                  <img src={v.image} alt={v.name} className="movie-img" />
                  <div className="movie-body">
                    <h5>{v.name}</h5>
                    <span>{v.type}</span> || <span>{v.category}</span>
                    <p>Release Year : {v.year}</p>
                    <div className="movie-actions">
                      <button className="edit-btn" onClick={() => handleedit(v.id)}>
                        <FaRegEdit /> Edit
                      </button>
                      <button className="delete-btn" onClick={() => handledelete(v.id)}>
                        <MdDelete /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No movies found...</p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Showmoivecard;

// export default Showmoivecard;
