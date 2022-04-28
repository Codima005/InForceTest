
import './App.css';
import { Products } from './views/Products';
import { Product } from './views/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/products/:id" element={<Product />} />
          <Route path="/" element={<Products />} />

        </Routes>
      </div>
    </Router>
  );
}



export default App;
