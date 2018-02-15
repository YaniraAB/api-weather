let begin = () => {
  let typeDay = $('#day-type');
  let temperature = $('#temperature');
  let wind = $('#wind');
  let humidity = $('#humidity');
  let indexUv = $('#uv-index');
  let pressure = $('#pressure');
  let week = $('#week');

  function myFunction(data) {
    console.log(data);
    let current = data.currently;
    let allWeek = data.daily.data;
    let icon = current.icon;
    console.log(current);
    temperature.text(current.temperature + ' º');
    typeDay.text(current.summary);
    wind.text(current.windSpeed);
    humidity.text(current.humidity);
    indexUv.text(current.uvIndex);
    pressure.text(current.pressure);

    $('#week-btn').on('click', function() {
      let namesDaysWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sàbado'];
      let dayName = new Date().getDay();
      $('#container-week').removeClass('hiden');
      $('#container-day').addClass('hiden');
      if (dayName === 0) {
        $('#monday').text(allWeek[1].summary);
        $('#tuesday').text(allWeek[2].summary);
        $('#wednesday').text(allWeek[3].summary);
        $('#thursday').text(allWeek[4].summary);
        $('#friday').text(allWeek[5].summary);
        $('#saturday').text(allWeek[6].summary);
        $('#sunday').text(allWeek[7].summary);
      } else if (dayName === 1) {
        $('#tuesday').text(allWeek[2].summary);
        $('#wednesday').text(allWeek[3].summary);
        $('#thursday').text(allWeek[4].summary);
        $('#friday').text(allWeek[5].summary);
        $('#saturday').text(allWeek[6].summary);
        $('#sunday').text(allWeek[7].summary);
        $('#monday').text(allWeek[0].summary);
      } else if (dayName === 2) {
        $('#wednesday').text(allWeek[3].summary);
        $('#thursday').text(allWeek[4].summary);
        $('#friday').text(allWeek[5].summary);
        $('#saturday').text(allWeek[6].summary);
        $('#sunday').text(allWeek[7].summary);
        $('#monday').text(allWeek[0].summary);
        $('#tuesday').text(allWeek[1].summary);
      } else if (dayName === 3) {
        $('#thursday').text(allWeek[4].summary);
        $('#friday').text(allWeek[5].summary);
        $('#saturday').text(allWeek[6].summary);
        $('#sunday').text(allWeek[7].summary);
        $('#monday').text(allWeek[0].summary);
        $('#tuesday').text(allWeek[1].summary);
        $('#wednesday').text(allWeek[2].summary);
      } else if (dayName === 4) {
        $('#friday').text(allWeek[5].summary);
        $('#saturday').text(allWeek[6].summary);
        $('#sunday').text(allWeek[7].summary);
        $('#monday').text(allWeek[0].summary);
        $('#tuesday').text(allWeek[1].summary);
        $('#wednesday').text(allWeek[2].summary);
        $('#thursday').text(allWeek[3].summary);
      } else if (dayName === 5) {
        $('#saturday').text(allWeek[6].summary);
        $('#sunday').text(allWeek[7].summary);
        $('#monday').text(allWeek[0].summary);
        $('#tuesday').text(allWeek[1].summary);
        $('#wednesday').text(allWeek[2].summary);
        $('#thursday').text(allWeek[3].summary);
        $('#friday').text(allWeek[4].summary);
      } else if (dayName === 6) {
        $('#sunday').text(allWeek[7].summary);
        $('#monday').text(allWeek[0].summary);
        $('#tuesday').text(allWeek[1].summary);
        $('#wednesday').text(allWeek[2].summary);
        $('#thursday').text(allWeek[3].summary);
        $('#friday').text(allWeek[4].summary);
        $('#saturday').text(allWeek[5].summary);
      } else if (dayName === 7) {
        $('#monday').text(allWeek[0].summary);
        $('#tuesday').text(allWeek[1].summary);
        $('#wednesday').text(allWeek[2].summary);
        $('#thursday').text(allWeek[3].summary);
        $('#friday').text(allWeek[4].summary);
        $('#saturday').text(allWeek[5].summary);
        $('#sunday').text(allWeek[6].summary);
      }
    });
  }
  let location = () => {
    let latitude;
    let longitude;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        var proxy = 'https://cors-anywhere.herokuapp.com/';
        var apiLinkDS = `https://api.darksky.net/forecast/8ccfe1903cbb7ff0f4735f679c51e375/${latitude},${longitude}?lang=es`;
        $.ajax({
          url: proxy + apiLinkDS,
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
