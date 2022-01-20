
var countriesList = $('#countries');
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
              $("#1").html('<b>Pays: </b>' + country.name.common ),
              $("#2").html('<b>Région: </b>' + country.region ),
              $("#3").html('<b>Subrégion: </b>' + country.subregion )
              .appendTo(countriesList) 
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
          url: "https://restcountries.com/v3.1/region/europ",
  
          success: function (data) {
            
            let searchEurope;
  
            searchEurope = data.map((country) => {
  
             return `<i>
                     <b>${country.name.common}</b> 
                     <p>Capital : ${country.capital} </p>
                    </i>`;  
            });
  
            $("i").html(searchEurope)
          },  
        });     
      }
      else if (asia){
        $.ajax({
          url: "https://restcountries.com/v3.1/region/asia",
  
          success: function (data) {
            
            let searchAsia;
  
            searchAsia = data.map((country) => {
  
             return `<i>
                     <b>${country.name.common}</b> 
                     <p>Capital : ${country.capital} </p>
                    </i>`;  
            });
  
            $("i").html(searchAsia)
          },  
        });     
      }

      else if (africa){
        $.ajax({
          url: "https://restcountries.com/v3.1/region/africa",
  
          success: function (data) {
            
            let searchAfrica;
  
            searchAfrica = data.map((country) => {
  
             return `<i>
                     <b>${country.name.common}</b> 
                     <p>Capital : ${country.capital} </p>
                    </i>`;  
            });
  
            $("i").html(searchAfrica)
          },  
        });     
      }
}
/* To reset the result */
$("#btnReset").click(function(){
  $("ul").empty()
});