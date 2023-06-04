describe("Test My BusTravel Factory Function", function () {
  /* ----- GETTING THE DATA ----- */
  describe("Get The Data", function () {
    it("should set the number of points entered", function () {
      const busTripCalculator = BusTripCalculator();
      assert.equal(160, busTripCalculator.setPoints(160));
      assert.equal(40, busTripCalculator.setPoints(40));
      assert.equal(80, busTripCalculator.setPoints(80));
    });
    it("should set the number of points entered", function () {
      const busTripCalculator = BusTripCalculator();
      assert.equal(260, busTripCalculator.setPoints(260));
      assert.equal(450, busTripCalculator.setPoints(450));
      assert.equal(800, busTripCalculator.setPoints(800));
    });
    it("should get the trip cost according to location", function () {
      const busTripCalculator = BusTripCalculator();
      assert.equal(25, busTripCalculator.getCostLocation("Dunoon"));
      assert.equal(30, busTripCalculator.getCostLocation("MitchellsPlain"));
      assert.equal(40, busTripCalculator.getCostLocation("Khayelitsha"));
    });
  });

  /* ----- CALCULATIONS ----- */
  describe("CALCULATIONS", function () {
    /* ***** CALCULATIONS FOR OFF PEAK HOURS ***** */
    describe("During Off Peak Hours", function () {
      /* ***** CALCULATIONS FOR SINGLE VALUES ***** */
      // DEALS WITH NUMBER OF SINGLE TRIPS
      it("should get the number of single trips", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.setPoints(40);
        busTripCalculator.takeTrip("Khayelitsha", "off peak");
        assert.equal(1, busTripCalculator.getSingleTrips());
        busTripCalculator.setPoints(160);
        busTripCalculator.takeTrip("Dunoon", "off peak");
        assert.equal(6, busTripCalculator.getSingleTrips());
      });

      // DEALS WITH THE PRICE FOR SINGLE TRIPS
      it("should get the price per trip", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.takeTrip("Khayelitsha", "off peak");
        assert.equal(40, busTripCalculator.getPricePerTrip());
      });

      /* ***** CALCULATIONS FOR RETURNING VALUES ***** */
      // DEALS WITH NUMBER OF RETURNING TRIPS
      it("should get the number of returning trips", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.setPoints(160);
        busTripCalculator.takeTrip("Khayelitsha", "off peak");
        assert.equal(2, busTripCalculator.getReturningTrips());
      });

      // DEALS WITH THE PRICE FOR RETURNING TRIPS
      it("should get the price per returning trip", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.takeTrip("Khayelitsha", "off peak");
        assert.equal(80, busTripCalculator.getPriceReturningTrips());
      });
    });

    /* ***** CALCULATIONS FOR PEAK HOURS ***** */
    describe("During Peak Hours", function () {
      /* ***** CALCULATIONS FOR SINGLE VALUES ***** */
      // DEALS WITH NUMBER OF SINGLE TRIPS
      it("should get the number of single trips", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.setPoints(80);
        busTripCalculator.takeTrip("Khayelitsha", "peak");
        assert.equal(1, busTripCalculator.getSingleTrips());
      });

      // DEALS WITH THE PRICE FOR SINGLE TRIPS
      it("should get the price per trip", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.takeTrip("Khayelitsha", "peak");
        assert.equal(50, busTripCalculator.getPricePerTrip());
      });

      /* ***** CALCULATIONS FOR RETURNING VALUES ***** */
      // DEALS WITH NUMBER OF RETURNING TRIPS
      it("should get the number return trips", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.setPoints(200);
        busTripCalculator.takeTrip("Khayelitsha", "peak");
        assert.equal(2, busTripCalculator.getReturningTrips());
        busTripCalculator.setPoints(160);
        busTripCalculator.takeTrip("Dunoon", "peak");
        assert.equal(5, busTripCalculator.getSingleTrips());
      });

      // DEALS WITH THE PRICE FOR RETURNING TRIPS
      it("should get the price per returning trip", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.takeTrip("Khayelitsha", "peak");
        assert.equal(100, busTripCalculator.getPriceReturningTrips());
      });
    });
  });
});
