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

var sources = [{
  code: 0,
  name: 'Source'
},{
id: "abc-news",
name: "ABC News",
},{
id: "abc-news-au",
name: "ABC News (AU)",
},{
id: "aftenposten",
name: "Aftenposten",
},{
id: "al-jazeera-english",
name: "Al Jazeera English",
},{
id: "ansa",
name: "ANSA.it",
},{
id: "argaam",
name: "Argaam",
},{
id: "ars-technica",
name: "Ars Technica",
},{
id: "ary-news",
name: "Ary News",
},{
id: "associated-press",
name: "Associated Press",
},{
id: "australian-financial-review",
name: "Australian Financial Review",
},{
id: "axios",
name: "Axios",
},{
id: "bbc-news",
name: "BBC News",
},{
id: "bbc-sport",
name: "BBC Sport",
},{
id: "bild",
name: "Bild",
},{
id: "blasting-news-br",
name: "Blasting News (BR)",
},{
id: "bleacher-report",
name: "Bleacher Report",
},{
id: "bloomberg",
name: "Bloomberg",
},{
id: "breitbart-news",
name: "Breitbart News",
},{
id: "business-insider",
name: "Business Insider",
},{
id: "business-insider-uk",
name: "Business Insider (UK)",
},{
id: "buzzfeed",
name: "Buzzfeed",
},{
id: "cbc-news",
name: "CBC News",
},{
id: "cbs-news",
name: "CBS News",
},{
id: "cnbc",
name: "CNBC",
},{
id: "cnn",
name: "CNN",
},{
id: "cnn-es",
name: "CNN Spanish",
},{
id: "crypto-coins-news",
name: "Crypto Coins News",
},{
id: "der-tagesspiegel",
name: "Der Tagesspiegel",
},{
id: "die-zeit",
name: "Die Zeit",
},{
id: "el-mundo",
name: "El Mundo",
},{
id: "engadget",
name: "Engadget",
},{
id: "entertainment-weekly",
name: "Entertainment Weekly",
},{
id: "espn",
name: "ESPN",
},{
id: "espn-cric-info",
name: "ESPN Cric Info",
},{
id: "financial-post",
name: "Financial Post",
},{
id: "focus",
name: "Focus",
},{
id: "football-italia",
name: "Football Italia",
},{
id: "fortune",
name: "Fortune",
},{
id: "four-four-two",
name: "FourFourTwo",
},{
id: "fox-news",
name: "Fox News",
},{
id: "fox-sports",
name: "Fox Sports",
},{
id: "globo",
name: "Globo",
},{
id: "google-news",
name: "Google News",
},{
id: "google-news-ar",
name: "Google News (Argentina)",
},{
id: "google-news-au",
name: "Google News (Australia)",
},{
id: "google-news-br",
name: "Google News (Brasil)",
},{
id: "google-news-ca",
name: "Google News (Canada)",
},{
id: "google-news-fr",
name: "Google News (France)",
},{
id: "google-news-in",
name: "Google News (India)",
},{
id: "google-news-is",
name: "Google News (Israel)",
},{
id: "google-news-it",
name: "Google News (Italy)",
},{
id: "google-news-ru",
name: "Google News (Russia)",
},{
id: "google-news-sa",
name: "Google News (Saudi Arabia)",
},{
id: "google-news-uk",
name: "Google News (UK)",
},{
id: "goteborgs-posten",
name: "Göteborgs-Posten",
},{
id: "gruenderszene",
name: "Gruenderszene",
},{
id: "hacker-news",
name: "Hacker News",
},{
id: "handelsblatt",
name: "Handelsblatt",
},{
id: "ign",
name: "IGN",
},{
id: "il-sole-24-ore",
name: "Il Sole 24 Ore",
},{
id: "independent",
name: "Independent",
},{
id: "infobae",
name: "Infobae",
},{
id: "info-money",
name: "InfoMoney",
},{
id: "la-gaceta",
name: "La Gaceta",
},{
id: "la-nacion",
name: "La Nacion",
},{
id: "la-repubblica",
name: "La Repubblica",
},{
id: "le-monde",
name: "Le Monde",
},{
id: "lenta",
name: "Lenta",
},{
id: "lequipe",
name: "L'equipe",
},{
id: "les-echos",
name: "Les Echos",
},{
id: "liberation",
name: "Libération",
},{
id: "marca",
name: "Marca",
},{
id: "mashable",
name: "Mashable",
},{
id: "medical-news-today",
name: "Medical News Today",
},{
id: "msnbc",
name: "MSNBC",
},{
id: "mtv-news",
name: "MTV News",
},{
id: "mtv-news-uk",
name: "MTV News (UK)",
},{
id: "national-geographic",
name: "National Geographic",
},{
id: "national-review",
name: "National Review",
},{
id: "nbc-news",
name: "NBC News",
},{
id: "news24",
name: "News24",
},{
id: "new-scientist",
name: "New Scientist",
},{
id: "news-com-au",
name: "News.com.au",
},{
id: "newsweek",
name: "Newsweek",
},{
id: "new-york-magazine",
name: "New York Magazine",
},{
id: "next-big-future",
name: "Next Big Future",
},{
id: "nfl-news",
name: "NFL News",
},{
id: "nhl-news",
name: "NHL News",
},{
id: "nrk",
name: "NRK",
},{
id: "politico",
name: "Politico",
},{
id: "polygon",
name: "Polygon",
},{
id: "rbc",
name: "RBC",
},{
id: "recode",
name: "Recode",
},{
id: "reddit-r-all",
name: "Reddit /r/all",
},{
id: "reuters",
name: "Reuters",
},{
id: "rt",
name: "RT",
},{
id: "rte",
name: "RTE",
},{
id: "rtl-nieuws",
name: "RTL Nieuws",
},{
id: "sabq",
name: "SABQ",
},{
id: "spiegel-online",
name: "Spiegel Online",
},{
id: "svenska-dagbladet",
name: "Svenska Dagbladet",
},{
id: "t3n",
name: "T3n",
},{
id: "talksport",
name: "TalkSport",
},{
id: "techcrunch",
name: "TechCrunch",
},{
id: "techcrunch-cn",
name: "TechCrunch (CN)",
},{
id: "techradar",
name: "TechRadar",
},{
id: "the-american-conservative",
name: "The American Conservative",
},{
id: "the-globe-and-mail",
name: "The Globe And Mail",
},{
id: "the-hill",
name: "The Hill",
},{
id: "the-hindu",
name: "The Hindu",
},{
id: "the-huffington-post",
name: "The Huffington Post",
},{
id: "the-irish-times",
name: "The Irish Times",
},{
id: "the-jerusalem-post",
name: "The Jerusalem Post",
},{
id: "the-lad-bible",
name: "The Lad Bible",
},{
id: "the-next-web",
name: "The Next Web",
},{
id: "the-sport-bible",
name: "The Sport Bible",
},{
id: "the-times-of-india",
name: "The Times of India",
},{
id: "the-verge",
name: "The Verge",
},{
id: "the-wall-street-journal",
name: "The Wall Street Journal",
},{
id: "the-washington-post",
name: "The Washington Post",
},{
id: "the-washington-times",
name: "The Washington Times",
},{
id: "time",
name: "Time",
},{
id: "usa-today",
name: "USA Today",
},{
id: "vice-news",
name: "Vice News",
},{
id: "wired",
name: "Wired",
},{
id: "wired-de",
name: "Wired.de",
},{
id: "wirtschafts-woche",
name: "Wirtschafts Woche",
},{
id: "xinhua-net",
name: "Xinhua Net",
},{
id: "ynet",
name: "Ynet",
}]



console.log(languages);
console.log(countrys);



document.getElementById('category').innerHTML = '';

for (var i = 0; i < categorys.length; i++) {
  document.getElementById('category').innerHTML += '<option class="dropdown-item" value="' + categorys[i].code + '">' + categorys[i].name + '</option>';
}

document.getElementById('country').innerHTML = '';

for (var i = 0; i < countrys.length; i++) {
  document.getElementById('country').innerHTML += '<option class="dropdown-item" value="' + countrys[i].code + '">' + countrys[i].name + '</option>';
}

document.getElementById('language').innerHTML = '';

for (var i = 0; i < languages.length; i++) {
  document.getElementById('language').innerHTML += '<option class="dropdown-item" value="' + languages[i].code + '">' + languages[i].name + '</option>';
}

document.getElementById('source').innerHTML = '';

for (var i = 0; i < sources.length; i++) {
  document.getElementById('source').innerHTML += '<option class="dropdown-item" value="' + sources[i].code + '">' + sources[i].name + '</option>';
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
  if ($("#category").val() !== 0)$('#source').attr('disabled', true),$('#language').attr('disabled', true);
  if ($("#category").val() == 0 && $("#country").val() == 0)$('#source').attr('disabled', false),$('#language').attr('disabled', false);
});

$('#country').change(function(){
  if ($("#country").val() !== 0)$('#source').attr('disabled', true),$('#language').attr('disabled', true);
  if ($("#country").val() == 0 && $("#category").val() == 0)$('#source').attr('disabled', false),$('#language').attr('disabled', false);
});

$('#source').change(function(){
  if ($("#source").val() !== 0)$('#category').attr('disabled', true),$('#country').attr('disabled', true);
  if ($("#source").val() == 0 && $("#language").val() == 0)$('#category').attr('disabled', false),$('#country').attr('disabled', false);
});

$('#language').change(function(){
  if ($("#language").val() !== 0)$('#category').attr('disabled', true),$('#country').attr('disabled', true);
  if ($("#language").val() == 0 && $("#source").val() == 0)$('#category').attr('disabled', false),$('#country').attr('disabled', false);
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
  console.log('urlDone');
}

function print(url){
  console.log('printURL');

  $.ajax({
          url: url,
          type:'GET',
          data:'json',
            success: function(data){
              console.log(data);
              document.getElementById('result').innerHTML = '';
                for (var i = 0; i < data.articles.length; i++) {
                  var author = data.articles[i].author;
                    if (author == null && data.articles[i].source.name == null) {
                      console.log(author + "1");
                      author = "Author: Unkown";
                    } else if (author == null) {
                      console.log(author + "2");
                      author = "Source: " + data.articles[i].source.name;
                    } else {
                      console.log(author + "3");
                      author = "Author: " + author
                    };
                  console.log(i);
                  document.getElementById('result').innerHTML +=
                  '<div class="card" style="width: 18rem;">' +
                  '<img onerror="backupNews(this)" src="' + data.articles[i].urlToImage + '" class="card-img-top" alt="...">' +
                  '<div class="card-body">' +
                  '<h5 class="card-title">' + author + '</h5>' +
                  '<p class="card-text">' + data.articles[i].title + '</p>' +
                  '<a href="' + data.articles[i].url + '" class="btn btn-primary">View Story</a>' +
                  '</div>' +
                  '</div>';
                };
              },
            error:function(){
              console.log('error');
            }
          });
}

function backupNews(source){
  source.src="assets/images/backupNews.jpg";
  source.onerror="";
  return true;
}
