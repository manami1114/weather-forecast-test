function getWeather() {
  const citySelect = document.getElementById('city-select');
  const selectValue = citySelect.value;
  const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${selectValue}.json`;

  fetch(url)
    .then(response => response.json())
    .then(function (weather) {
      const area = weather[0].timeSeries[0].areas[0];
      const todayTemps = weather[1].tempAverage.areas[0];
  
      document.getElementById('publishingOffice').lastElementChild.textContent = weather[0].publishingOffice;
      document.getElementById('reportDatetime').lastElementChild.textContent = weather[0].reportDatetime;
      document.getElementById('targetArea').lastElementChild.textContent = area.area.name;
      document.getElementById('todayHighTemperature').lastElementChild.textContent = `${todayTemps.max}℃`;
      document.getElementById('todayLowTemperature').lastElementChild.textContent = `${todayTemps.min}℃`;
      document.getElementById('today').lastElementChild.textContent = area.weathers[0];
      document.getElementById('tomorrow').lastElementChild.textContent = area.weathers[1];
      document.getElementById('dayAfterTomorrow').lastElementChild.textContent = area.weathers[2];
    })
    .catch(error => console.error('エラー:', error));
}
