import React, { Suspense } from "react";

import Tablee from './table/table';
import Add from './AddForm/AddForm';
import Update from './UpdateForm/UpdateForm';




import { Route, Switch } from "react-router-dom";


// const Home = React.lazy(() => import("./home/Home"));
// const Login = React.lazy(() => import("./login/Login"));
// const Cart = React.lazy(() => import("./cart/Cart"));
// const Register = React.lazy(() => import("./register/Register"));



export default function Routes() {
 
    return (

      <Suspense fallback="loading">
        <Switch>
          <Route path="/" exact component={Tablee} />
          <Route path="/Table" exact component={Tablee} />
          <Route path="/Add" exact component={Add} />
          <Route path="/Update" exact component={Update} />
        </Switch>
      </Suspense>
    );
  }