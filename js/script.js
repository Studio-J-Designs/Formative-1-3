console.log('working');

$(document).ready(function(){

var myKey = JSON.parse(apiKey);
console.log(myKey[0]);
myKey = myKey[0].key;

document.getElementById('submit').addEventListener('click', function(){
  language = document.getElementById('language').value;
  country = document.getElementById('country').value;
  console.log(language,country);
  displayData(language,country);


  function displayData(lg, ct){

$.ajax({
  url: `http://newsapi.org/v2/sources?language=${lg}&country=${ct}&apiKey=${myKey}`,
  type:'GET',
  data:'json',
    success: function(data){
      console.log(data);
      },
    error:function(){
      console.log('error');
    }
  });



  };








});

});
