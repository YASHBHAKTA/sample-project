import './App.css';
import Nav from './nav'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>PRODUCTS COMPONENT</h1>} />
        <Route path="/add" element={<h1>ADD PRODUCTS COMPONENT</h1>} />
        <Route path="/update" element={<h1>UPDATE PRODUCTS COMPONENT</h1>} />
        <Route path="/logout" element={<h1>LOGOUT COMPONENT</h1>} />
        <Route path="/profile" element={<h1>PROFILE COMPONENT</h1>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
