import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container'
import Home from './components/Home';
import NoPage from './components/NoPage';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route path='*' element={<NoPage/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
