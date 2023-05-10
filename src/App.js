import './static/css/app.style.css';
import { SideBar } from './components/SideBar';
import { Intro } from './components/Intro';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { About } from './components/About';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container row">
        <div className="offset-2 col-md-8">
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        </div>
        <div className="col-md-2">
        <SideBar intro="intro" about="about" experience="experience" projects="projects"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
