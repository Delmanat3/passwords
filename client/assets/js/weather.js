const getLocSearch = function() {
    var locApiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=77014&units=imperial&main&appid=779b8c517308874db3a1e3d4a5a161bb'
   // 'api.openweathermap.org/data/2.5/forecast?zip='+zipD+'&units=imperial&main&appid=779b8c517308874db3a1e3d4a5a161bb'

    fetch(locApiUrl)
          .then(function(response) {
              
              if (response.ok) {
                  response.json().then(function(data) {
                      displayResults(data);
                  });
              } else {
                  alert('Error: ' + response.statusText);
              }
          })
          .catch(function(error) {
              alert("Can't connect to weather");
              console.log(error);
          });
  };
  getLocSearch()

 const displayResults=async(data)=>{
console.log(data)
const nickname=$("#name")
const degree=$("#temp")
const whether=$("#whether")
const location=data.name
const temp=data.main.feels_like
const weather=data.weather[0].description

nickname.append(location)
degree.append(temp)
whether.append(weather)
 }
 

