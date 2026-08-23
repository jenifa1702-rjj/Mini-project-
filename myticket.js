import { Link } from "react-router-dom";

function MyTickets() {

  const tickets = [
    {
      id: 1001,
      title: "Laptop Wi-Fi not working",
      category: "Network",
      priority: "High",
      status: "Open"
    },
    {
      id: 1002,
      title: "Email login problem",
      category: "Email",
      priority: "Medium",
      status: "In Progress"
    },
    {
      id: 1003,
      title: "Software installation",
      category: "Software",
      priority: "Low",
      status: "Resolved"
    }
  ];

  return (
    <div className="page">

      <h1>My Tickets</h1>

      <table>

        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Issue</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {tickets.map((ticket) => (

            <tr key={ticket.id}>

              <td>#{ticket.id}</td>

              <td>{ticket.title}</td>

              <td>{ticket.category}</td>

              <td>{ticket.priority}</td>

              <td>{ticket.status}</td>

              <td>
                <Link to={`/tickets/${ticket.id}`}>
                  View
                </Link>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MyTickets;
