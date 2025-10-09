import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Header.css'
import { Link } from 'react-router';
import { useContext, useState } from 'react';
import { Getstroagedata } from '../../services/StroageData';
import { MovieContext } from '../MoiveContext';
const Header = () => {
    const { search, setSearch, movies, setMovies } = useContext(MovieContext);
    const setSearchData = (e) => {
        let value = e.target.value;
        setSearch(value);
    }
    const handleAsc = () => {
        let sorted = [...movies].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setMovies(sorted);
    };

    const handleDesc = () => {
        let sorted = [...movies].sort((a, b) =>
            b.name.localeCompare(a.name)
        );
        setMovies(sorted);
    };
    return (
        <>


            <section className='header-section'>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <div className='col-4'>
                            <Link to={'/'}><img src='../src/Image/logo.png' className='logo-image'></img></Link>
                        </div>
                        <div className='col-4 d-flex gap-2'>
                            <input className='p-2 border-1 rounded-2 w-100' type='text' name="search" placeholder='serach for moive' value={search} onChange={(e) => setSearchData(e)}></input>
                            <button className='px-3 border-1 rounded-2' onClick={handleAsc}>↑</button>
                            <button className='px-3 border-1 rounded-2' onClick={handleDesc}>↓</button>
                        </div>
                        <div className='col-4 d-flex justify-content-end'>
                            {/* <button >Add Moive</button> */}
                            <Link to={'/Addmoive'} className='btn btn-add-moive btn-danger'>Add Moive</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Header;