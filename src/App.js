import { Routes, Route } from 'react-router-dom';

// Pages
import {
  Home,
} from './pages';

// Components

// Stylesheet
import './App.css';

function App() {
  return (
    <>
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
