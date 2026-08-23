import { useParams, Link } from "react-router-dom";

function TicketDetails() {

  const { id } = useParams();

  return (
    <div className="page">

      <Link to="/tickets">← Back to Tickets</Link>

      <h1>Ticket #{id}</h1>

      <div className="ticket-details">

        <h2>Laptop Wi-Fi not working</h2>

        <p>
          <strong>Category:</strong> Network
        </p>

        <p>
          <strong>Priority:</strong> High
        </p>

        <p>
          <strong>Status:</strong> In Progress
        </p>

        <p>
          <strong>Assigned To:</strong> IT Support Engineer
        </p>

        <hr />

        <h3>Description</h3>

        <p>
          My laptop is unable to connect to the office Wi-Fi.
          Please help me resolve this issue.
        </p>

        <h3>Activity</h3>

        <p>Employee → Ticket created</p>
        <p>Admin → Ticket assigned</p>
        <p>Engineer → Working on issue</p>

      </div>

    </div>
  );
}

export default TicketDetails;
