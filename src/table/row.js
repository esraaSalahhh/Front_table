import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";



const row = (props) => {
    const { data } = props;

    console.log(data);
    const Delete = (e) => {
        axios.delete(`http://127.0.0.1:8000/api/deleteData/${data.id}`)
            .then(function (response) {
                console.log(response);
                window.location.reload(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // const Update = (e) => {
    //     props.history.push("/update");
    // }

    return (

        <>
        <br/>
           <tr>
          <td>{data.name}</td>
          <td>{data.price}</td>
          <td>{data.quantity}</td>
          <td >
              <button className=" btn btn-info" onClick={Delete}  >
                <i class="fas fa-trash-alt"></i>
                 </button>
                 <Link to={{ pathname: `/Update`, id:data.id }} class="text-decoration-none" style={{ "color": "black"}}>
                 <button className=" btn btn-info"   style={{"marginLeft":"30px"}}>
              <i class="fas fa-pencil-alt"></i>
                 </button>
      </Link>
                
                 </td>

            <td>
                
            </td>
             </tr>
        </>
    );
}

export default row;