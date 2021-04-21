import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

const AddForm = (props) => {

    const [AddForm, setAddForm] = useState({
        name: "",
        price:"",
        quantity:""
    });

    const [formErrors, setFormErros] = useState({
        nameErrors: null,
        priceErrors: null,
        quantityErrors: null,

    });

    const handleFormChange = (e) => {
        console.log(e.target.value, e.target.name)
        setAddForm({
            name: e.target.name === 'name' ? e.target.value : AddForm.name,
            price: e.target.name === 'price' ? e.target.value : AddForm.price,
            quantity: e.target.name === 'quantity' ? e.target.value : AddForm.quantity,

        });
       
        setFormErros({
            nameErrors: e.target.name === 'name' ? (e.target.value.length === 0) ?"this field is required":null: formErrors.nameErrors,
            priceErrors: e.target.name === 'price' ? (e.target.value.length === 0) ?"this field is required":null: formErrors.priceErrors,
            quantityErrors: e.target.name === 'quantity' ? (e.target.value.length === 0) ?"this field is required":null: formErrors.quantityErrors,

        });
    };
    const handleFormSubmit = () => {
        console.log(AddForm);
        setFormErros({
            nameErrors: AddForm.name.length > 0 ? null : "This field is required",
            priceErrors: AddForm.price.length > 0 ? null : "This field is required",
            quantityErrors: AddForm.quantity.length > 0 ? null : "This field is required",

        });
        


        if(formErrors.nameErrors===null &&formErrors.priceErrors===null &&formErrors.quantityErrors===null ){
            axios.post('http://127.0.0.1:8000/api/addData',{
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

    }
    else{
    }
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
                    className={`form-control mt-4 mb-4 ${formErrors.nameErrors ? "border-danger" : ""
                        }`}
                    value={AddForm.name}
                />
                <small className="text-danger"> {formErrors.nameErrors}</small>
                <input
                    onChange={handleFormChange}
                    placeholder="price"
                    name="price"
                    className={`form-control mt-4 mb-4 ${formErrors.priceErrors ? "border-danger" : ""
                        }`}
                    value={AddForm.price}
                />
                <small className="text-danger"> {formErrors.priceErrors}</small>
                <input
                    onChange={handleFormChange}
                    placeholder="quantity"
                    name="quantity"
                    className={`form-control mt-4 mb-4 ${formErrors.quantityErrors ? "border-danger" : ""
                        }`}
                    value={AddForm.quantity}
                />
                <small className="text-danger"> {formErrors.quantityErrors}</small>
               
                
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

export default AddForm;