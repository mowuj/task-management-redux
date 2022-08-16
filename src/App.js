
import Layout from './components/Layout/Layout';
import { Routes, Route, Link } from "react-router-dom";
import Task from './components/Task/Task';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import TaskForm from './components/TaskForm/TaskForm';
import About from './components/About/About';
import { Container } from 'react-bootstrap';
import EditTask from './components/EditTask/EditTask';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
      <Routes>
        <Route path='/' element={<Layout></Layout>}></Route>
        <Route path='/home' element={<Layout></Layout>}></Route>
        <Route path='/task' element={<TaskList></TaskList>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/edit/:id' element={<EditTask></EditTask>}></Route>
        </Routes>
        </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
