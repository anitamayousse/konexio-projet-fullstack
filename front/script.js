$("#btnShowData").click(function getAllCountries() {
        $.ajax({
          url:"https://restcountries.com/v3.1/all",
          success: function (data) {
            
            data.forEach((country) => {
              
              $("i").append(
             `<p> ${country.name.common}</p>`
             )
    
            })
          }
        });
});

