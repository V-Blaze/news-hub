import { Routes, Route } from 'react-router-dom';

// Pages
import {
  Home, Details,
} from './pages';

// Components
import { Navbar, Footer } from './components';

// Stylesheet
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </>
      </main>
      <Footer />
    </>
  );
}

export default App;
