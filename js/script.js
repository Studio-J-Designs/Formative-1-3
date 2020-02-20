    /*jshint esversion: 6 */

console.log('working');

var languages = [{
  code: 0,
  name: 'Language'
},{
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
  code: 0,
  name: 'Country'
},{
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
}];

var categorys = [{
  code: 0,
  name: 'Category'
},{
  code: 'business',
  name: 'Business'
},{
  code: 'entertainment',
  name: 'Entertainment'
},{
  code: 'general',
  name: 'General'
},{
  code: 'health',
  name: 'Health'
},{
  code: 'science',
  name: 'Science'
},{
  code: 'sports',
  name: 'Sports'
},{
  code: 'technology',
  name: 'Technology'
}];



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

document.getElementById('category').innerHTML = '';

for (var i = 0; i < categorys.length; i++) {
  document.getElementById('category').innerHTML += '<option class="dropdown-item" value="' + categorys[i].code + '">' + categorys[i].name + '</option>';
}






// $(document).ready(function(){
//
// var myKey = JSON.parse(apiKey);
// console.log(myKey[0]);
// myKey = myKey[0].key;
//
//   document.getElementById('submit').addEventListener('click', function(){
//     if (document.getElementById('language').value === 0) {
//     } else {
//       language = "language=" + document.getElementById('language').value + "&";
//     }
//     if (document.getElementById('country').value === 0) {
//     } else {
//       country = "country=" + document.getElementById('country').value + "&";
//     }
//     category = "category=" + document.getElementById('category').value + "&";
//     console.log(category,language,country);
//     displayData(category,language,country);
//
//     function displayData(ca,lg,ct){
//
//       $.ajax({
//         url: `http://newsapi.org/v2/top-headlines?${ca}${lg}${ct}apiKey=${myKey}`,
//         type:'GET',
//         data:'json',
//           success: function(data){
//             console.log(data);
//             },
//           error:function(){
//             console.log('error');
//           }
//         });
//       }
//
//   });
//
// });


var myKey = JSON.parse(apiKey);
console.log(myKey[0]);
myKey = myKey[0].key;

var category,country,language,source;

buildURL();

$('#category').change(function(){
  if ($("#category").val() !== 0){
      console.log(category);
  $('#language').attr('disabled', true);}
  if (category == 0){
      console.log(category);
  $('#language').attr('disabled', false);}
});



document.getElementById('submit').addEventListener('click', function(){
  category = document.getElementById('category').value;
  country = document.getElementById('country').value;
  language = document.getElementById('language').value;
  buildURL();
  });

function buildURL(){
  var baseURL = "http://newsapi.org/v2/top-headlines?";
  console.log(baseURL);

  if (category != 0 && category != undefined)baseURL += "category=" + category + "&";
  if (country != 0 && country != undefined)baseURL += "country=" + country + "&";
  if (language != 0 && language != undefined)baseURL += "language=" + language + "&";
  if (baseURL === "http://newsapi.org/v2/top-headlines?")baseURL += "country=nz&"
  baseURL += "apiKey=" + myKey;
  print(baseURL);
}

function print(url){

  $.ajax({
          url: url,
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
