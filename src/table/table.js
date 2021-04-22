import React from 'react';
import './table.css';
import { Container } from 'reactstrap';
import { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import axios from 'axios';
import { Link } from "react-router-dom";
import Roww from './row';
const Tablee = (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`https://backendlarave.herokuapp.com/api/getData`)
          .then(function (response) {
            console.log(response.data);
            setData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    
      }, []);
    //   const Add = (e) => {
    //     let history = useHistory();
    //     history.push('/Add')

    // }
  return (
    <>
    <br/>
    
      <Container>
      <Link to={{ pathname: `/Add` }} class="text-decoration-none" style={{ "color": "black"}}>
        <button type="button" style={{"marginTop":"20px" }} className="d-block btn btn-info">
          Add </button>
      </Link>
  
      <br/>
      <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        
        {data ? (data.map((d, index) =>

<Roww key={d.id} data={d} />
)) : (<h2>Not Found</h2>)}
      </tbody>
    </Table>

        
              </Container>
    </>
  );
}

export default Tablee;