type Point = {
  lat: number;
  lon: number;
};

type Coordinates = {
  firstLocation: Point;
  secondLocation: Point;
};

const deg2rad = (deg: number): number => {
  return deg * (Math.PI / 180);
};

export const getDistanceFromLatLonInKm = (coordinates: Coordinates) => {
  const R = 6371;
  const dLat = deg2rad(
    coordinates.secondLocation.lat - coordinates.firstLocation.lat
  );
  const dLon = deg2rad(
    coordinates.secondLocation.lon - coordinates.firstLocation.lon
  );
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(coordinates.firstLocation.lat)) *
      Math.cos(deg2rad(coordinates.secondLocation.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};
