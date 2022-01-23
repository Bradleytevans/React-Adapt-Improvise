import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactForm from './components/Contact';

function App() {
  return (
    <div className="App">
      <main>
        <AboutMe></AboutMe>     
        <ContactForm></ContactForm>
         </main>

    </div>
  );
}

export default App;