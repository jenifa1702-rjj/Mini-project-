import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTicket() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !category) {
      alert("Please fill all required fields");
      return;
    }

    alert("Ticket created successfully!");

    navigate("/tickets");
  };

  return (
    <div className="page">

      <h1>Create Support Ticket</h1>

      <form className="ticket-form" onSubmit={handleSubmit}>

        <label>Issue Title</label>
        <input
          type="text"
          placeholder="Example: Laptop Wi-Fi not working"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <textarea
          placeholder="Describe your issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Category</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Network">Network</option>
          <option value="Email">Email</option>
          <option value="Security">Security</option>
          <option value="Other">Other</option>
        </select>

        <label>Priority</label>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>

        <button type="submit">
          Submit Ticket
        </button>

      </form>

    </div>
  );
}

export default CreateTicket;
