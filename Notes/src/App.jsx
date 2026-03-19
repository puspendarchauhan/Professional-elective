import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <main style={styles.main}>
        <h2>Welcome to Notes App</h2>
        <p>Here you can create, save, and manage your notes.</p>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  main: {
    textAlign: "center",
    padding: "40px",
    minHeight: "60vh",
  },
};

export default App;