import { getDistanceFromLatLonInKm } from "../utils/getDistanceFromLatLonInKm";

test("basic distance calc", () => {
  expect(
    Math.round(
      getDistanceFromLatLonInKm({
        firstLocation: { lat: -10.5, lon: 10.5 },
        secondLocation: { lat: 10.5, lon: -10.5 },
      })
    )
  ).toBe(3293);

  expect(
    Math.round(
      getDistanceFromLatLonInKm({
        firstLocation: { lat: 10.5, lon: -10.5 },
        secondLocation: { lat: -10.5, lon: 10.5 },
      })
    )
  ).toBe(3293);

  expect(
    Math.round(
      getDistanceFromLatLonInKm({
        firstLocation: { lat: 0, lon: 0 },
        secondLocation: { lat: -10.5, lon: 10.5 },
      })
    )
  ).toBe(1647);

  expect(
    Math.round(
      getDistanceFromLatLonInKm({
        firstLocation: { lat: 0, lon: 0 },
        secondLocation: { lat: 0, lon: 0 },
      })
    )
  ).toBe(0);
});
