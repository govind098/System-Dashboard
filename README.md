
System Dashboard

A system monitoring dashboard that displays real-time information about the system's performance and location. The dashboard is built using Flask for the backend and React (with Vite) for the frontend. It updates various system and location metrics every 5 seconds.

Features

Real-time System Information: Displays system metrics like CPU usage, RAM usage, battery status, and more.
Location Information: Displays the user's current IP address and city based on geolocation data.
Real-Time Updates: The dashboard fetches updated information from the backend every 5 seconds, ensuring data is always fresh.
Responsive Design: The frontend is responsive and displays data in a clean, card-based layout.
Time Display: Displays the current system time, updating every second.

Tools Used-->

Backend (Flask)

Flask: A micro web framework for Python, used for serving API endpoints.
psutil: A Python library for retrieving system and hardware information like CPU usage, memory, battery status, etc.
requests: A Python library used to make HTTP requests for fetching geolocation data (IP address, city, etc.) from an external API.

Frontend (React with Vite)

React: A JavaScript library for building user interfaces.
Vite: A build tool that provides fast development environment for React projects.
Axios: A promise-based HTTP client used for making API requests from the React frontend to the Flask backend.


Running the Project

1.Start the Flask Backend:
Run the following command in the backend directory: python app.py

2.Start the React Frontend:
Run the following command in the frontend directory:npm run dev


Project Structure --> 

system_dashboard/
│
├── backend/                         # Backend directory (Flask)
│   ├── app.py                       # Flask application entry point
│   ├── requirements.txt             # Python dependencies
│   └── utils/                       
│       ├── system_info.py           # Retrieves system info (CPU, RAM, etc.)
│       └── location_info.py         # Retrieves geolocation info (IP, city, etc.)
│
├── frontend/                        # Frontend directory (React with Vite)
│   ├── src/
│   │   ├── components/              # React components
│   │   │   └── Dashboard.jsx        # Main dashboard component
│   │   ├── App.jsx                  # Main React app file
│   │   └── main.jsx                 # Entry point of React app
│   ├── public/                      # Public assets (index.html, images)
│   ├── package.json                 # Frontend dependencies and scripts
│   └── vite.config.js               # Vite configuration
└── README.md          
