import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Header from './Header'

function App() {
  const name = "Jeff"
  return (
    <div >
      <Header jeff={name} Resume/>
      <h1>Jeff's Resume</h1>
      <main>Work Experience</main>
      <section>Contact</section>
      <address>Los Angeles, CA</address>
      <Button />
    </div>
  );
}

export default App;
