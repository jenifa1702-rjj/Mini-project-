import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <header className="topbar">
        <h1>IT Help Desk</h1>

        <Link to="/">
          <button>Logout</button>
        </Link>
      </header>

      <main className="dashboard-content">

        <h2>Dashboard</h2>
        <p>Welcome to the IT Help Desk!</p>

        <div className="cards">

          <div className="card">
            <h3>Total Tickets</h3>
            <p>25</p>
          </div>

          <div className="card">
            <h3>Open Tickets</h3>
            <p>8</p>
          </div>

          <div className="card">
            <h3>In Progress</h3>
            <p>5</p>
          </div>

          <div className="card">
            <h3>Resolved</h3>
            <p>12</p>
          </div>

        </div>

        <div className="dashboard-buttons">

          <Link to="/create-ticket">
            <button>Create New Ticket</button>
          </Link>

          <Link to="/tickets">
            <button>View My Tickets</button>
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;
