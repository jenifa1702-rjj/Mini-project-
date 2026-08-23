import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import MyTickets from "./pages/MyTickets";
import TicketDetails from "./pages/TicketDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/tickets" element={<MyTickets />} />
        <Route path="/tickets/:id" element={<TicketDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
