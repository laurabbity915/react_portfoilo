import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import Project from './components/Project';
import './styles/style.css';

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/project-page' element={<ProjectPage />} />
          <Route path='/project-page/:id' element={<Project />} />
          <Route path='/contact-page' element={<ContactPage />} />
        </Routes>
      </div>
    </>

  );
}

export default App;


