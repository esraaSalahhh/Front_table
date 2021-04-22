import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

const UpdateForm = (props) => {
console.log(props);
    const [AddForm, setAddForm] = useState({
        name: "",
        price:"",
        quantity:""
    });

  

    const handleFormChange = (e) => {
        console.log(e.target.value, e.target.name)
        setAddForm({
            name: e.target.name === 'name' ? e.target.value : AddForm.name,
            price: e.target.name === 'price' ? e.target.value : AddForm.price,
            quantity: e.target.name === 'quantity' ? e.target.value : AddForm.quantity,

        });
       
    };
    const handleFormSubmit = () => {
        console.log(AddForm);

            axios.put(`https://backendlarave.herokuapp.com/api/updateData/${props.location.id}`,{
                name    : AddForm.name,
                price : AddForm.price ,
                quantity : AddForm.quantity ,
              }
        )
            .then(function (response) {
                console.log(response);
                props.history.push('/Table');

            })
            
            .catch(function (error) {
                console.log(error);
            });
    };


    return (

        <>

            <Container dir="auto" style={{textAlign: 'start'}}>
                <br /><br />

                <div class="row" style={{ "margin-top": "20px", "height": "390px" }}>
                    <div class="col-lg-12 col-md-12 col-sm-12 divstyle">
                        <h3 style={{ "margin-top": "10px" }}>Add your data</h3><hr />       
                <br />
                <input
                    onChange={handleFormChange}
                    placeholder="name"
                    name="name"
                    className={`form-control mt-4 mb-4 `}
                    value={AddForm.name}
                />
                <input
                    onChange={handleFormChange}
                    placeholder="price"
                    name="price"
                    className={`form-control mt-4 mb-4 `}
                    value={AddForm.price}
                />
                <input
                    onChange={handleFormChange}
                    placeholder="quantity"
                    name="quantity"
                    className={`form-control mt-4 mb-4 `}
                    value={AddForm.quantity}
                />
               
                
                <br/><br/>
                <button className="d-block btn btn-info"
                 onClick={handleFormSubmit}
                 >
                    submit
      </button>

                    </div>
                </div>
            </Container>
        </>
    );
}

export default UpdateForm;