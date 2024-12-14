
# To Run backend
# python app.py


from flask import Flask, jsonify
from utils.system_info import get_system_info
from utils.location_info import get_location_info

app = Flask(__name__)

# Combined route for both system and location info
@app.route("/dashboard")
def dashboard():
    system_info = get_system_info()  # Get system information
    location_info = get_location_info()  # Get location information
    
    # Combining both system and location info
    combined_info = {
        "current_time": system_info["current_time"],
        "python_version": system_info["python_version"],
        "battery_status": system_info["battery_status"],
        "cpu_usage": system_info["cpu_usage"],
        "cpu_temperature": system_info["cpu_temperature"],
        "ram_usage": system_info["ram_usage"],
        "gpu_usage": system_info["gpu_usage"],
        "ip": location_info["ip"],
        "city": location_info["city"]
    }
    
    return jsonify(combined_info)

if __name__ == "__main__":
    app.run(debug=True)

# To Run backend
# python app.py