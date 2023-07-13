import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const result = await Location.getLastKnownPositionAsync();
      if (result) {
        const { latitude, longitude } = result.coords;
        setLocation({ latitude, longitude });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return location;
};
export default useLocation;
