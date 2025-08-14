import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world! It's my first React project</h1>
      </main>
    </div>
  );
}

export default App;
