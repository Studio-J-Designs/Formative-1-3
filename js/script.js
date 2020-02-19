    /*jshint esversion: 6 */

console.log('working');

var languages = [{
  code: 'ar',
  name: 'Arabic'
},{
  code: 'de',
  name: 'German'
},{
  code: 'en',
  name: 'English'
},{
  code: 'es',
  name: 'Spanish'
},{
  code: 'fr',
  name: 'French'
},{
  code: 'he',
  name: 'Hewbrew'
},{
  code: 'it',
  name: 'Italian'
},{
  code: 'nl',
  name: 'Dutch'
},{
  code: 'no',
  name: 'Norwegian'
},{
  code: 'pt',
  name: 'Portuguese'
},{
  code: 'ru',
  name: 'Russian'
},{
  code: 'se',
  name: 'Northern Sami'
},{
  code: 'zh',
  name: 'Chinese'
}];

var countrys = [{
  code: 'ar',
  name: 'Argentina',
},{
  code: 'au',
  name: 'Australia',
},{
  code: 'at',
  name: 'Austria',
},{
  code: 'be',
  name: 'Belgium',
},{
  code: 'br',
  name: 'Brazil',
},{
  code: 'bg',
  name: 'Bulgaria',
},{
  code: 'ca',
  name: 'Canada',
},{
  code: 'cn',
  name: 'China',
},{
  code: 'co',
  name: 'Colombia',
},{
  code: 'cu',
  name: 'Cuba',
},{
  code: 'cz',
  name: 'Czechia',
},{
  code: 'eg',
  name: 'Egypt',
},{
  code: 'fr',
  name: 'France',
},{
  code: 'de',
  name: 'Germany',
},{
  code: 'gr',
  name: 'Greece',
},{
  code: 'hk',
  name: 'Hong Kong',
},{
  code: 'hu',
  name: 'Hungary',
},{
  code: 'in',
  name: 'India',
},{
  code: 'id',
  name: 'Indonesia',
},{
  code: 'ie',
  name: 'Ireland',
},{
  code: 'il',
  name: 'Israel',
},{
  code: 'it',
  name: 'Italy',
},{
  code: 'jp',
  name: 'Japan',
},{
  code: 'kr',
  name: 'Korea',
},{
  code: 'lv',
  name: 'Latvia',
},{
  code: 'lt',
  name: 'Lithuania',
},{
  code: 'my',
  name: 'Malaysia',
},{
  code: 'mx',
  name: 'Mexico',
},{
  code: 'ma',
  name: 'Morocco',
},{
  code: 'nl',
  name: 'Netherlands',
},{
  code: 'nz',
  name: 'New Zealand',
},{
  code: 'ng',
  name: 'Nigeria',
},{
  code: 'no',
  name: 'Norway',
},{
  code: 'ph',
  name: 'Philippines',
},{
  code: 'pl',
  name: 'Poland',
},{
  code: 'pt',
  name: 'Portugal',
},{
  code: 'ro',
  name: 'Romania',
},{
  code: 'ru',
  name: 'Russian Federation',
},{
  code: 'sa',
  name: 'Saudi Arabia',
},{
  code: 'rs',
  name: 'Serbia',
},{
  code: 'sg',
  name: 'Singapore',
},{
  code: 'sk',
  name: 'Slovakia',
},{
  code: 'si',
  name: 'Slovenia',
},{
  code: 'za',
  name: 'South Africa',
},{
  code: 'se',
  name: 'Sweden',
},{
  code: 'ch',
  name: 'Switzerland',
},{
  code: 'tw',
  name: 'Taiwan',
},{
  code: 'th',
  name: 'Thailand',
},{
  code: 'tr',
  name: 'Turkey',
},{
  code: 'ua',
  name: 'Ukraine',
},{
  code: 'ae',
  name: 'United Arab Emirates',
},{
  code: 'gb',
  name: 'United Kingdom',
},{
  code: 'us',
  name: 'United States',
},{
  code: 've',
  name: 'Venezuela',
}]



console.log(languages);
console.log(countrys);




document.getElementById('language').innerHTML = '';

for (var i = 0; i < languages.length; i++) {
  document.getElementById('language').innerHTML += '<option class="dropdown-item" value="' + languages[i].code + '">' + languages[i].name + '</option>';
}

document.getElementById('country').innerHTML = '';

for (var i = 0; i < countrys.length; i++) {
  document.getElementById('country').innerHTML += '<option class="dropdown-item" value="' + countrys[i].code + '">' + countrys[i].name + '</option>';
}






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



  }








});

});
