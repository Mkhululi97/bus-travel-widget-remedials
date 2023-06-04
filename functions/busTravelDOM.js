const inputPoints = document.querySelector(".points");
const calcBtn = document.querySelector(".calculate-btn");
const checkBox = document.querySelector(".return-trip-checkbox");
const inputSingleTrips = document.querySelector(".single-trips");
const inputPricePerTrip = document.querySelector(".price-per-trip");
const inputReturnTrips = document.querySelector(".return-trip");
const inputPricePerReturnTrip = document.querySelector(
  ".price-per-return-trip"
);
const errorDiv = document.querySelector(".error-div");
const errorMsgEle = document.querySelector(".show-error-text");
let busTripCalculator = BusTripCalculator();

function calcBtnFunction() {
  const selectLocation = document.querySelector("select");
  const selectedRadio = document.querySelector(".radio-btn:checked");
  if (selectLocation.value !== "" && selectedRadio) {
    // set the points
    Number(busTripCalculator.setPoints(inputPoints.value));
    // take trip function
    busTripCalculator.takeTrip(selectLocation.value, selectedRadio.value);
    if (checkBox.checked) {
      inputReturnTrips.value = busTripCalculator.getReturningTrips();
      inputPricePerReturnTrip.value = `R ${busTripCalculator
        .getPriceReturningTrips()
        .toFixed(2)}`;
      inputSingleTrips.value = "";
      inputPricePerTrip.value = "";
    } else {
      inputSingleTrips.value = busTripCalculator.getSingleTrips();
      inputPricePerTrip.value = `R ${busTripCalculator
        .getPricePerTrip()
        .toFixed(2)}`;

      inputReturnTrips.value = "";
      inputPricePerReturnTrip.value = "";
    }
  }
  // handle errors for points start location and travel times
  if (
    inputPoints.value === "" ||
    selectLocation.value === "" ||
    !selectedRadio
  ) {
    errorDiv.classList.remove("hidden");
    errorMsgEle.innerHTML = busTripCalculator.errorMsg(
      inputPoints.value === "",
      selectLocation.value === "",
      !selectedRadio
    );
    setTimeout(function () {
      errorDiv.classList.add("hidden");
    }, 3900);
  }
}

calcBtn.addEventListener("click", calcBtnFunction);
