function getAllCountries () {
    $("button").click(function () {
        $.ajax({
          url:"https://restcountries.com/v3.1/all",
          success: function (data) {
            
            data.forEach((country) => {
              
              $("#exercise").append(
             `<p> ${country.name.common}</p>`
             )
    
            })
          }
        });
      });
    
}