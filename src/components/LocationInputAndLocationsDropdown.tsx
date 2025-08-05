import { useEffect, useState } from "react";
import FlightLocationInput from "./FlightLocationInput";

type LocationInputProps = {
  btnText: string;
  icon: React.ReactNode;
};

export default function LocationInputAndLocationsDropdown({
  btnText,
  icon,
}: LocationInputProps) {
  const [location, setLocation] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [_error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError(
          "Unable to retrieve location. Permission denied or unavailable."
        );
        console.error(err);
      }
    );
  }, []);

  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports?lat=${coordinates?.lat}&lng=${coordinates?.lng}&locale=en-US`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3123955b89msh2d12bc5837d6e4dp16618cjsnd58f15612b6d",
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  const handleChange = (location: string) => {
    setLocation(location);
  };
  return (
    <div className="fixed w-full h-dvh md:h-fit md:absolute bg-dropdownBg z-50 md:z-10 top-0 left-0 min-w-64">
      <FlightLocationInput
        btnText={btnText}
        icon={icon}
        location={location ?? ""}
        handleChange={handleChange}
      />
      <ul className="p-2">Locations</ul>
    </div>
  );
}
