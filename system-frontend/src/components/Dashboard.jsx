

//  import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [currentTime, setCurrentTime] = useState(new Date()); // State for dynamic current time

//     // Fetch data function
//     const fetchData = () => {
//         axios
//             .get('/dashboard')
//             .then((response) => {
//                 setData(response.data);  // Update data with new response
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError("Error fetching data: " + err.message);  // Handle errors
//                 setLoading(false);
//             });
//     };

//     // Update current time every second
//     useEffect(() => {
//         const timeInterval = setInterval(() => {
//             setCurrentTime(new Date());  // Update current time every second
//         }, 1000);

//         return () => clearInterval(timeInterval);  // Cleanup the interval
//     }, []);

//     // Fetch data when component mounts and then every 5 seconds
//     useEffect(() => {
//         fetchData();  // Initial data fetch

//         const dataInterval = setInterval(() => {
//             fetchData();  // Fetch data every 5 seconds
//         }, 5000);

//         // Cleanup the interval when the component unmounts
//         return () => clearInterval(dataInterval);
//     }, []);  // Empty dependency array ensures this effect runs only once after the initial mount

//     // Display loading or error messages if data is not available
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div className="dashboard">
//             <h2>System and Location Information</h2>
//             <ul>
//                 <li><strong>Current Time:</strong> {currentTime.toLocaleString()}</li>
//                 <li><strong>Python Version:</strong> {data.python_version}</li>
//                 <li><strong>Battery Status:</strong> {typeof data.battery_status === 'object'
//                     ? `${data.battery_status.percent}% - ${data.battery_status.status}`
//                     : data.battery_status
//                 }</li>
//                 <li><strong>CPU Usage:</strong> {data.cpu_usage}%</li>
//                 <li><strong>CPU Temperature:</strong> {data.cpu_temperature}</li>
//                 <li><strong>RAM Usage:</strong> {data.ram_usage}%</li>
//                 <li><strong>GPU Usage:</strong> {data.gpu_usage}</li>
//                 <li><strong>IP Address:</strong> {data.ip}</li>
//                 <li><strong>City:</strong> {data.city}</li>
//             </ul>
//         </div>
//     );
// };

// export default Dashboard;



//

import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Enhanced styling

const Dashboard = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    const fetchData = () => {
        fetch('/dashboard')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error fetching data: " + err.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    useEffect(() => {
        fetchData();
        const dataInterval = setInterval(() => {
            fetchData();
        }, 5000);

        return () => clearInterval(dataInterval);
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="dashboard">
            <h1> <u>Resource Information</u></h1>
            <div className="time">
                <strong>Current Time:</strong> {currentTime.toLocaleString()}
            </div>
            <div className="card-container">
                <div className="card">
                    <h3>Python Version</h3>
                    <p>{data.python_version}</p>
                </div>
                <div className="card">
                    <h3>Battery Status</h3>
                    <p>
                        {typeof data.battery_status === 'object'
                            ? `${data.battery_status.percent}% - ${data.battery_status.status}`
                            : data.battery_status}
                    </p>
                </div>
                <div className="card">
                    <h3>CPU Usage</h3>
                    <p>{data.cpu_usage}%</p>
                </div>
                <div className="card">
                    <h3>CPU Temperature</h3>
                    <p>{data.cpu_temperature}°C</p>
                </div>
                <div className="card">
                    <h3>RAM Usage</h3>
                    <p>{data.ram_usage}%</p>
                </div>
                <div className="card">
                    <h3>GPU Usage</h3>
                    <p>{data.gpu_usage}%</p>
                </div>
                <div className="card">
                    <h3>IP Address</h3>
                    <p>{data.ip}</p>
                </div>
                <div className="card">
                    <h3>City</h3>
                    <p>{data.city}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

