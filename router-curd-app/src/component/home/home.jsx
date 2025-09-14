import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getstoragedata, setstroagedata } from '../../services/storageData';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router';
const Product = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortData, setSortData] = useState(" ");

  useEffect(() => {
    let data = getstoragedata();
    setproducts(data);
  }, [])

  const handleDelete = (id) => {
    let data = getstoragedata();
    let up = data.filter(v => v.id != id);
    setstroagedata(up);
    setproducts(up);
  }

  const handleEdit = (id) => {
    navigate(`/Editproduct/${id}`)
  }
  const handlesearch = () => {
    let data = getstoragedata();
    let up = data.filter((v) => {
      return v.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    })

    console.log(up);

    setproducts(up);
  }
  // const handleasc = () => {

  //   let data = [...products];
  //   let up = data.sort((a, b) => {
  //     return a.title.localeCompare(b.title);
  //   })
  //   setproducts(up)
  // }

  // const handledesc = () => {
  //   let data = [...products];
  //   let up = data.sort((a, b) => {
  //     return b.title.localeCompare(a.title);
  //   })
  //   setproducts(up);
  // }
  const setSearchData = (e) => {
    let value = e.target.value;
    setSearch(value);
    let data = getstoragedata();
    let up = data.filter((v) => {
      return v.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    })
    setproducts(up);
  }

  // const handledropdown = () => {
  //   let data = [...products];
  //   let [field, type] = sortData.split(",");
  //   let up;
  //   if (type == "acs") {
  //     if (field == "title") {
  //       up = data.sort((a, b) => {
  //         return a.title.localeCompare(b.title);
  //       }
  //       )
  //     }
  //   }
  //   else {
  //     if (field == "title") {
  //       up = data.sort((a, b) => {
  //         return b.title.localeCompare(a.title);
  //       }
  //       )
  //     }
  //   }
  //   setproducts(up);
  // }

  const sortingData = (e) => {
    let value = e.target.value;
    setSortData(value);
    let data = [...products];
    let [field, type] = value.split(",");
    let up;
    if (type == "acs") {
      if (field == "title") {
        up = data.sort((a, b) => {
          return a.title.localeCompare(b.title);
        }
        )
      }
    }
    else {
      if (field == "title") {
        up = data.sort((a, b) => {
          return b.title.localeCompare(a.title);
        }
        )
      }
    }
    setproducts(up);
  }
  const handleclear = () => {
    let data = getstoragedata();
    setproducts(data);
  }
  return (
    <>

      <Container>
        <h2>All Product </h2>

        <input type='text' name="search" value={search} onChange={(e) => setSearchData(e)}></input>
        {/* <button onClick={handlesearch}>Search</button> */}
        {/* <button onClick={handleasc}>ACS</button>
        <button onClick={handledesc}>DESC</button> */}
        <button onClick={handleclear}>Clear</button>&nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;
        {/* <select onChange={(e) => setSortData(e.target.value)}> */}
        <select onChange={(e) => sortingData(e)}>
          <option value="">--select--</option>
          <option value="title,acs">title acs</option>
          <option value="title,desc">title desc</option>
        </select>&nbsp;&nbsp;&nbsp;
        {/* <button onClick={handledropdown}>Sort</button> */}





        <div className="d-flex gap-3">
          {
            products.map((v, i) => {
              return (
                <>

                  <Card style={{ width: '18rem' }}>
                    <Card.Img src={v.Image} />
                    <Card.Body>
                      <Card.Title>{v.title} || {v.id}</Card.Title>
                      <Card.Text>
                        {v.desc} || {v.price}
                      </Card.Text>
                      <Button variant="primary" onClick={() => handleEdit(v.id)}>Edit</Button> &nbsp;
                      <Button variant="danger" onClick={() => handleDelete(v.id)}>Delete</Button>
                    </Card.Body>
                  </Card>

                </>

              )
            })
          }
        </div>
      </Container>



    </>
  )
}

export default Product;