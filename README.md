# 💻 IT Help Desk & Ticket Management System

> A full-stack web application designed to manage IT support requests, technical issues, employees, and IT support engineers within an organization.

---

# 🎯 Project Objective

The **IT Help Desk & Ticket Management System** provides a centralized platform where employees can report technical problems and IT support engineers can efficiently manage, assign, track, and resolve those issues.

The system improves communication between employees and the IT support team while providing administrators with complete ticket monitoring and reporting.

---

# 👥 Team Members

| Member | Responsibility |
|--------|----------------|
| **Jenifa** | Frontend Development |
| **Kincy** | Backend & Database Development |

---

# ✨ Key Features

## 👤 Employee Module

- Register and Login
- Create IT Support Tickets
- Select Issue Category
- Set Ticket Priority
- Upload Screenshots or Attachments
- View Submitted Tickets
- Track Ticket Status
- Add Comments
- Give Feedback After Resolution

---

## 🧑‍💻 IT Support Engineer Module

- Secure Login
- View Assigned Tickets
- Accept Support Tickets
- Update Ticket Status
- Add Resolution Details
- Communicate with Employees
- Track Pending and Resolved Tickets
- View Performance

---

## 👨‍💼 Admin Module

- Admin Dashboard
- Manage Employees
- Manage IT Support Engineers
- Assign Tickets
- Manage Ticket Categories
- Monitor All Tickets
- Manage Ticket Priorities
- View Reports and Analytics

---

# 🛠️ Technologies Used

## 🎨 Frontend

- **React.js**
- **JavaScript**
- **HTML5**
- **CSS3**
- **React Router**
- **Axios**

## ⚙️ Backend

- **Node.js**
- **Express.js**
- **REST API**

## 🗄️ Database

- **MySQL**

## 🔐 Authentication & Security

- **JWT**
- **bcrypt**

## 🔧 Development Tools

- **Visual Studio Code**
- **Git**
- **GitHub**

---

# 📁 Project Structure

```text
IT-Helpdesk/
│
├── frontend/
│   │
│   ├── public/
│   │
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Sidebar.jsx
│       │   ├── TicketCard.jsx
│       │   └── ProtectedRoute.jsx
│       │
│       ├── pages/
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   │
│       │   ├── employee/
│       │   │   ├── Dashboard.jsx
│       │   │   ├── CreateTicket.jsx
│       │   │   ├── MyTickets.jsx
│       │   │   ├── TicketDetails.jsx
│       │   │   └── Profile.jsx
│       │   │
│       │   ├── support/
│       │   │   ├── Dashboard.jsx
│       │   │   ├── AssignedTickets.jsx
│       │   │   └── ResolveTicket.jsx
│       │   │
│       │   └── admin/
│       │       ├── Dashboard.jsx
│       │       ├── Users.jsx
│       │       ├── Engineers.jsx
│       │       ├── Tickets.jsx
│       │       ├── Categories.jsx
│       │       └── Reports.jsx
│       │
│       ├── services/
│       │   └── api.js
│       │
│       ├── context/
│       │   └── AuthContext.jsx
│       │
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── ticketController.js
│   │   ├── userController.js
│   │   └── adminController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Ticket.js
│   │   └── Category.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── ticketRoutes.js
│   │   ├── userRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── config/
│   │   └── database.js
│   │
│   ├── uploads/
│   ├── .env
│   └── server.js
│
├── database/
│   └── schema.sql
│
├── .gitignore
└── README.md
