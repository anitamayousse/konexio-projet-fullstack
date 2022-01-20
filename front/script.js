
var countriesList = $('#countries');{
$("#btnShowData").click(search);
function search(){
    var countryName = $('#country-name').val();
    var countries = $("input[name='pays']:checked").val();
    var capital = $("input[name='capitale']:checked").val();
    var region = $("input[name='région']:checked").val();
    var europe = $("option[value='Europe']:selected").val();
    var asia = $("option[value='Asia']:selected").val();
    var africa = $("option[value='Africa']:selected").val();
    if (countries){
        $.ajax({
          url:"https://restcountries.com/v3.1/name/" + countryName,
          
          success: function (data) {
            countriesList.empty();
            data.forEach((country) => {
              $("#1").html('<b>Capitale: </b>' + country.capital ),
              $("#2").html('<b>Région: </b>' + country.region ),
              $("#3").html('<b>Subrégion: </b>' + country.subregion )
              .appendTo(countriesList) 
            })
          }
        });
        
      }
      else if (capital){
        $.ajax({
          url:"https://restcountries.com/v3.1/capital/" + countryName,
          
          success: function (data) {
            countriesList.empty();
            data.forEach((country) => {
              $("i").html('<b>Pays: </b>' + country.name.common + '<b>Région: </b>' + country.region + '<b>Subrégion: </b>' + country.subregion).appendTo(countriesList) 
            })
          }
        });
      }
      else if (region){
        $.ajax({
          url:"https://restcountries.com/v3.1/region/" + countryName,
          
          success: function (data) {
            countriesList.empty();
            data.forEach((country) => {
              $("i").html('<b>Capitale: </b>' + country.name.common).appendTo(countriesList) 
            })
          }
        });
      }
      else if (europe){
        $.ajax({
          url:"https://restcountries.com/v3.1/subregion/europe",
          
          success: function (data) {
            countriesList.empty();
            data.forEach((country) => {
              $("i").html('<b>Pays: </b>' + country.continents).appendTo(countriesList) 
            })
          }
        });
      }
      else if (asia){
        $.ajax({
          url:"https://restcountries.com/v3.1/subregion/asia",
          
          success: function (data) {
            countriesList.empty();
            data.forEach.map((country) => {
              $("i").html('<b>Pays: </b>' + country.continents).appendTo(countriesList) 
            })
          }
        });
      }
      else if (africa){
        $.ajax({
          url:"https://restcountries.com/v3.1/subregion/africa",
          
          success: function (data) {
            countriesList.empty();
            data.map((country) => {
              $("i").html('<b>Pays: </b>' + country.name.common).appendTo(countriesList) 
            })
          }
        });
      }
};
}
