import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let {
        coords: { longitude, latitude },
      } = await Location.getCurrentPositionAsync({});

      setLocation({ longitude, latitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
