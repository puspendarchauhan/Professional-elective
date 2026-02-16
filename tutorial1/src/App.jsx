import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  const users = [
    { id: 1, name: "Puspendar", country: "India", role: "Student" },
    { id: 2, name: "Rahul", country: "USA", role: "Developer" },
    { id: 3, name: "Neha", country: "Canada", role: "Designer" }
  ];

  return (
    <>
      <Header />

      <main className="dashboard">

        {/* 🔹 User List Section */}
        <section className="user-list">
          <h2>User List</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </section>

        {/* 🔹 User Details Section */}
        <section className="user-details">
          <h2>User Details</h2>

          {users.map((user) => (
            <div key={user.id} className="card">
              <h3>{user.name}</h3>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Country:</strong> {user.country}</p>
            </div>
          ))}

        </section>

      </main>

      <Footer />  
    </>
  );
}

export default App;
