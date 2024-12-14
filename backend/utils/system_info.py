import psutil
import platform

def get_system_info():
    return {
        "current_time": psutil.boot_time(),
        "python_version": platform.python_version(),
        "battery_status": get_battery_status(),
        "cpu_usage": psutil.cpu_percent(interval=1),
        "cpu_temperature": get_cpu_temperature(),
        "ram_usage": psutil.virtual_memory().percent,
        "gpu_usage": "N/A"  # Placeholder for GPU usage
    }

def get_battery_status():
    battery = psutil.sensors_battery()
    if battery:
        return {"percent": battery.percent, "status": "Charging" if battery.power_plugged else "Not Charging"}
    return "No Battery Information"

def get_cpu_temperature():
    # Replace with an appropriate library for temperatures
    return "Not Available on this OS"
