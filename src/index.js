import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Components/Home.js';
import Mindmade from './Components/Mindmade.js';
import ButtonClick from './Components/buttonClick.js';
import ApiFetch from './Components/ApiFetch.js';
import NotFound from './Components/NotFound.js';
import Header from './Components/Header.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './redux/store';
import Products from './Components/Products.js';
import ProductDetails from './Components/ProductDetails.js';
import List from './Components/List'
import ListMapping from './Components/ListMapping'
import CartPage from './Components/cartpage';
const routing=(
  <div>
    <Provider store={store}>
      <Router>
        <div>
          <App />
          <Header />
          <div className="p-5">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Mindmade' element={<Mindmade />} />
              <Route path='/buttonClick' element={<ButtonClick />} />
              <Route path='/ApiFetch' element={<ApiFetch />} />
              <Route path='/Products' element={<Products />} />
              <Route path='/ProductDetails' element={<ProductDetails />} />
              <Route path='/List' element={<List />} />
              <Route path='/ListMapping' element={<ListMapping />} />
              <Route path='/cartPage' element={<CartPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  </div>
)
ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
