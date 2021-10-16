fetch('https://animechan.vercel.app/api/random')
.then(function(response) {
  return response.json();
}).then(function(json){
      let result = "";
      result += "<anime>"+json.quote+"</anime></div></div></div>";
      result += "<div class=\"row\"><div class=\"col-lg\"><div class=\"d-flex justify-content-center\"><anime>-"+json.character+", "+json.anime+"</anime>";
      document.getElementById("animeResults").innerHTML = result;
    });
