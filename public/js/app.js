let begin = () => {
  let typeDay = $('#day-type');
  let wind = $('#wind');
  let humidity = $('#humidity');
  let indexUv = $('#uv-index');
  let pressure = $('#pressure');
  let week = $('#week');

  function myFunction(data) {
    console.log(data);
    /*let current = data.currently;
    let temperature = current.temperature
    let allWeek = data.daily.data;
    let icon = current.icon;
    console.log(current);
    typeDay.text(current.summary);
    wind.text(current.windSpeed);
    humidity.text(current.humidity);
    uvIndex.text(current.uvIndex);
    pressure.text(current.pressure);*/
  }
  let location = () => {
    let latitude;
    let longitude;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        $.ajax({
          url: `https://api.darksky.net/forecast/8ccfe1903cbb7ff0f4735f679c51e375/${latitude},${longitude}`,
          success: myFunction
        });
      });
    } else {
      console.log('Este navegador no soporta geolocalización');
    }
  };
  location();
};

window.onload = begin;
