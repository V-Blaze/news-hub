import { Routes, Route } from 'react-router-dom';

// Pages
import {
  Home,
} from './pages';

// Components
import { Navbar } from './components';

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
          </Routes>
        </>
      </main>
    </>
  );
}

export default App;
