# Service Request System

A full-stack web application where users can submit service requests and admins can manage them.

## Features

✅ User-friendly form with real-time validation  
✅ Multiple service options (PAN Card, Aadhaar, Passport, etc.)  
✅ SQLite database for data persistence  
✅ Admin panel to view all requests  
✅ Search functionality by mobile number  
✅ Pagination support  
✅ Delete requests capability  
✅ Responsive design for all devices  
✅ Success alerts after submission  

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite3

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/arnavthakurr/service-request-system.git
   cd service-request-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - User Form: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin

## Project Structure

```
service-request-system/
├── server.js           # Express server
├── db.js              # Database configuration
├── package.json       # Dependencies
├── public/
│   ├── index.html     # User form
│   ├── admin.html     # Admin panel
│   └── styles.css     # Styling
├── routes/
│   └── api.js         # API endpoints
├── .gitignore
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/submit-request` | Submit a new service request |
| GET | `/api/requests` | Get all requests |
| DELETE | `/api/requests/:id` | Delete a request by ID |
| GET | `/api/search/:mobile` | Search requests by mobile number |

## Validation Rules

- **Name**: Required, non-empty string
- **Mobile**: Must be exactly 10 digits
- **Email**: Valid email format
- **Service**: Must be selected from dropdown
- **Message**: Optional text field

## Service Options

- PAN Card Apply
- Aadhaar Update
- Passport Apply
- Online Form Filling
- Document Printing

## Database Schema

```sql
CREATE TABLE requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Features Implemented

### Core Features
- ✅ Frontend form with validation
- ✅ Backend API with data validation
- ✅ SQLite database integration
- ✅ Admin panel with list view

### Bonus Features
- ✅ Delete requests
- ✅ Search by mobile number
- ✅ Pagination (5 items per page)
- ✅ Responsive UI
- ✅ Success alerts

## Usage

### For Users
1. Visit http://localhost:3000
2. Fill out the service request form
3. Submit the form
4. Receive success confirmation

### For Admin
1. Visit http://localhost:3000/admin
2. View all submitted requests
3. Search by mobile number
4. Delete requests if needed
5. Use pagination to navigate

## License

MIT License - Created by arnavthakurr
