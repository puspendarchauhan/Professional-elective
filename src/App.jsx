import Header from "./components/Header";
import Footer from "./components/footer";
import "./App.css";


function App() {
  return (
    <>
      <Header />

      <main className="main">
        <section className="hero">
          <h2>Welcome to My Website</h2>
          <p>
            This is a basic webpage created using React components and CSS.
          </p>
          <button>Get Started</button>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
