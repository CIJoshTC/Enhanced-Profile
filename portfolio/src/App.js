import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects';

function App() {
  const [activeSection, setActiveSection] = useState('about'); // Default to 'about'

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
       <Header /> {}
       <About /> {}
       <Projects /> {}
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
