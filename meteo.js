
var callBackGetSuccess = function(data) {
		console.log("donnees api: ",data);
	  // alert("Meteo temp  : "  + data.main.temp);
	  var element = document.getElementById("zone_meteo");
	  element.innerHTML  = "La Temperature est: " + data.main.temp + "  ° ";
		//alert("Sucess : GET de taille : "  + data.length + " last ID "+lastId);
		//ajout humidité

		
		var element = document.getElementById("zone_humidite");
		element.innerHTML  = "L'Humidité est: " + data.main.humidity + " % ";
		//ajout icone
		var icon = data.weather[0].icon;
		//var element = document.getElementById("zone_icone");
		var element = document.querySelector("#zone_icone");
		var url2 = 'http://openweathermap.org/img/w/'+icon+'.png';
		element.setAttribute("src", url2 );
		var element = document.getElementById("zone_timezone");
		 element.innerHTML = "HEURE: " + data.dt;

		var element = document.getElementById("zone_lieu");
		 element.innerHTML = " LIEU: " + data.name;
		};
	
		
	function buttonClickGET() {
   var queryLoc = document.getElementById('queryLoc').value;
		var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=cc8ba9e786ee8b68fbfdb7414f7ec4ce&units=metric";
	
		//callRestApi : cette fonction est dans le JS fixTripAjaxRestApiUtils-0.0.1.js
		//callRestApi('GET', null, url, callBackGetSuccess, callBackError,getHttpHeaderJson());

		$.get(url, callBackGetSuccess).done(function() {
		    //alert( "second success" );
		  })
		  .fail(function() {
		    alert( "error" );
		  })
		  .always(function() {
		    //alert( "finished" );
		  });
	}





