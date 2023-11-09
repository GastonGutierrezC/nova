import logo from './logo.svg';
import './Css/App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUsers';
import EditUser from './components/EditUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductAllInformation from './components/ProductAllInformation';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="Crud mern stack render2web.com" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="adduser">Add User</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="products">View Products</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} exact></Route>
          <Route path='/adduser' element={<AddUser />} exact></Route>
          <Route path='/edituser/:idusuario' element={<EditUser />} exact></Route>
          <Route path="/products" element={<ProductAllInformation />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
