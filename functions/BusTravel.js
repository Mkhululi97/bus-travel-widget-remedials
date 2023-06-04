function BusTripCalculator() {
  const points = {
    pointsEntered: 0,
  };
  const priceTrip = {
    singleTrips: 0,
    returnTrips: 0,
  };
  const numOfTrips = {
    numSingleTrips: 0,
    numReturnTrips: 0,
  };
  const tripInfo = {
    Khayelitsha: 40,
    Dunoon: 25,
    MitchellsPlain: 30,
  };
  function setPoints(inputPoints) {
    points.pointsEntered = inputPoints;
    return points.pointsEntered;
  }
  function getCostLocation(inputLocation) {
    return tripInfo[inputLocation];
  }
  /* +++++ PST 4 FORMULAS +++++ */
  /* @offpeakHours */
  // trip cost ---- Single Price Trips
  // 2 * trip cost ---- Returning Price Trips
  // points divided by trip cost ---- Single Trips
  // points divided by (2 * trip cost) ---- Returning Trips

  /* @peakHours */
  // trip cost + (trip cost * 0.25) ---- Single Price Trips
  // 2 * (trip cost + (trip cost * 0.25)) ---- Returning Price Trips
  // points divided by (trip cost + trip cost * 0.25) ---- Single Trips
  // points divided by 2 * (trip cost + trip cost * 0.25) ---- Returning Trips

  function takeTrip(inputLocation, peakOrOffPeak) {
    if (peakOrOffPeak === "off peak") {
      /* Dealing with the price for the trips */
      priceTrip.singleTrips = tripInfo[inputLocation];
      priceTrip.returnTrips = 2 * tripInfo[inputLocation];

      /* Dealing with number of trips */
      // SINGLE TRIPS
      numOfTrips.numSingleTrips = Math.trunc(
        points.pointsEntered / tripInfo[inputLocation]
      );
      // RETURNING TRIPS
      numOfTrips.numReturnTrips = Math.trunc(
        points.pointsEntered / (2 * tripInfo[inputLocation])
      );
    }
    if (peakOrOffPeak === "peak") {
      /* Dealing with the price for the trips */
      priceTrip.singleTrips =
        tripInfo[inputLocation] + tripInfo[inputLocation] * 0.25;
      priceTrip.returnTrips =
        2 * (tripInfo[inputLocation] + tripInfo[inputLocation] * 0.25);

      /* Dealing with number of trips */
      // SINGLE TRIPS
      numOfTrips.numSingleTrips = Math.trunc(
        points.pointsEntered /
          (tripInfo[inputLocation] + tripInfo[inputLocation] * 0.25)
      );
      // RETURNING TRIPS
      numOfTrips.numReturnTrips = Math.trunc(
        points.pointsEntered /
          (2 * (tripInfo[inputLocation] + tripInfo[inputLocation] * 0.25))
      );
    }
  }

  /* Dealing with the price for the trips */
  function getPricePerTrip() {
    return priceTrip.singleTrips;
  }
  function getPriceReturningTrips() {
    return priceTrip.returnTrips;
  }

  /* Dealing with number of trips */
  function getSingleTrips() {
    return numOfTrips.numSingleTrips;
  }
  function getReturningTrips() {
    return numOfTrips.numReturnTrips;
  }
  /* handling errors */
  function errorMsg(points, location, times) {
    if (points && location && times) {
      return "Please enter points, select starting location and travelling time";
    } else if (location && times) {
      return "Please select starting location and travelling time";
    } else if (location) {
      return "Please select a starting location";
    } else if (times) {
      return "Please select a travelling time";
    } else if (points) {
      return "Please enter points";
    }
  }
  return {
    setPoints,
    getCostLocation,
    takeTrip,
    getPricePerTrip,
    getPriceReturningTrips,
    getSingleTrips,
    getReturningTrips,
    errorMsg,
  };
}
