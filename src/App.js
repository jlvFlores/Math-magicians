import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './styles/app.css';

const Layout = () => (
  <>
    <div className="header">
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/calculator">Calculator</a></li>
          <li><a href="/quote">Quote</a></li>
        </ul>
      </nav>
    </div>
    <div className="page">
      <Outlet />
    </div>
  </>
);

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
