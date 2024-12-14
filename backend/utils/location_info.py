import requests

def get_location_info():
    try:
        response = requests.get("https://ipinfo.io/json")
        data = response.json()
        return {
            "ip": data.get("ip"),
            "city": data.get("city"),
            "region": data.get("region"),
            "country": data.get("country"),
            "loc": data.get("loc")
        }
    except Exception as e:
        return {"error": str(e)}
