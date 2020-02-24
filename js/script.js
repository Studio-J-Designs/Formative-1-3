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
code: "abc-news",
name: "ABC News",
},{
code: "abc-news-au",
name: "ABC News (AU)",
},{
code: "aftenposten",
name: "Aftenposten",
},{
code: "al-jazeera-english",
name: "Al Jazeera English",
},{
code: "ansa",
name: "ANSA.it",
},{
code: "argaam",
name: "Argaam",
},{
code: "ars-technica",
name: "Ars Technica",
},{
code: "ary-news",
name: "Ary News",
},{
code: "associated-press",
name: "Associated Press",
},{
code: "australian-financial-review",
name: "Australian Financial Review",
},{
code: "axios",
name: "Axios",
},{
code: "bbc-news",
name: "BBC News",
},{
code: "bbc-sport",
name: "BBC Sport",
},{
code: "bild",
name: "Bild",
},{
code: "blasting-news-br",
name: "Blasting News (BR)",
},{
code: "bleacher-report",
name: "Bleacher Report",
},{
code: "bloomberg",
name: "Bloomberg",
},{
code: "breitbart-news",
name: "Breitbart News",
},{
code: "business-inscodeer",
name: "Business Inscodeer",
},{
code: "business-inscodeer-uk",
name: "Business Inscodeer (UK)",
},{
code: "buzzfeed",
name: "Buzzfeed",
},{
code: "cbc-news",
name: "CBC News",
},{
code: "cbs-news",
name: "CBS News",
},{
code: "cnbc",
name: "CNBC",
},{
code: "cnn",
name: "CNN",
},{
code: "cnn-es",
name: "CNN Spanish",
},{
code: "crypto-coins-news",
name: "Crypto Coins News",
},{
code: "der-tagesspiegel",
name: "Der Tagesspiegel",
},{
code: "die-zeit",
name: "Die Zeit",
},{
code: "el-mundo",
name: "El Mundo",
},{
code: "engadget",
name: "Engadget",
},{
code: "entertainment-weekly",
name: "Entertainment Weekly",
},{
code: "espn",
name: "ESPN",
},{
code: "espn-cric-info",
name: "ESPN Cric Info",
},{
code: "financial-post",
name: "Financial Post",
},{
code: "focus",
name: "Focus",
},{
code: "football-italia",
name: "Football Italia",
},{
code: "fortune",
name: "Fortune",
},{
code: "four-four-two",
name: "FourFourTwo",
},{
code: "fox-news",
name: "Fox News",
},{
code: "fox-sports",
name: "Fox Sports",
},{
code: "globo",
name: "Globo",
},{
code: "google-news",
name: "Google News",
},{
code: "google-news-ar",
name: "Google News (Argentina)",
},{
code: "google-news-au",
name: "Google News (Australia)",
},{
code: "google-news-br",
name: "Google News (Brasil)",
},{
code: "google-news-ca",
name: "Google News (Canada)",
},{
code: "google-news-fr",
name: "Google News (France)",
},{
code: "google-news-in",
name: "Google News (India)",
},{
code: "google-news-is",
name: "Google News (Israel)",
},{
code: "google-news-it",
name: "Google News (Italy)",
},{
code: "google-news-ru",
name: "Google News (Russia)",
},{
code: "google-news-sa",
name: "Google News (Saudi Arabia)",
},{
code: "google-news-uk",
name: "Google News (UK)",
},{
code: "goteborgs-posten",
name: "Göteborgs-Posten",
},{
code: "gruenderszene",
name: "Gruenderszene",
},{
code: "hacker-news",
name: "Hacker News",
},{
code: "handelsblatt",
name: "Handelsblatt",
},{
code: "ign",
name: "IGN",
},{
code: "il-sole-24-ore",
name: "Il Sole 24 Ore",
},{
code: "independent",
name: "Independent",
},{
code: "infobae",
name: "Infobae",
},{
code: "info-money",
name: "InfoMoney",
},{
code: "la-gaceta",
name: "La Gaceta",
},{
code: "la-nacion",
name: "La Nacion",
},{
code: "la-repubblica",
name: "La Repubblica",
},{
code: "le-monde",
name: "Le Monde",
},{
code: "lenta",
name: "Lenta",
},{
code: "lequipe",
name: "L'equipe",
},{
code: "les-echos",
name: "Les Echos",
},{
code: "liberation",
name: "Libération",
},{
code: "marca",
name: "Marca",
},{
code: "mashable",
name: "Mashable",
},{
code: "medical-news-today",
name: "Medical News Today",
},{
code: "msnbc",
name: "MSNBC",
},{
code: "mtv-news",
name: "MTV News",
},{
code: "mtv-news-uk",
name: "MTV News (UK)",
},{
code: "national-geographic",
name: "National Geographic",
},{
code: "national-review",
name: "National Review",
},{
code: "nbc-news",
name: "NBC News",
},{
code: "news24",
name: "News24",
},{
code: "new-scientist",
name: "New Scientist",
},{
code: "news-com-au",
name: "News.com.au",
},{
code: "newsweek",
name: "Newsweek",
},{
code: "new-york-magazine",
name: "New York Magazine",
},{
code: "next-big-future",
name: "Next Big Future",
},{
code: "nfl-news",
name: "NFL News",
},{
code: "nhl-news",
name: "NHL News",
},{
code: "nrk",
name: "NRK",
},{
code: "politico",
name: "Politico",
},{
code: "polygon",
name: "Polygon",
},{
code: "rbc",
name: "RBC",
},{
code: "recode",
name: "Recode",
},{
code: "reddit-r-all",
name: "Reddit /r/all",
},{
code: "reuters",
name: "Reuters",
},{
code: "rt",
name: "RT",
},{
code: "rte",
name: "RTE",
},{
code: "rtl-nieuws",
name: "RTL Nieuws",
},{
code: "sabq",
name: "SABQ",
},{
code: "spiegel-online",
name: "Spiegel Online",
},{
code: "svenska-dagbladet",
name: "Svenska Dagbladet",
},{
code: "t3n",
name: "T3n",
},{
code: "talksport",
name: "TalkSport",
},{
code: "techcrunch",
name: "TechCrunch",
},{
code: "techcrunch-cn",
name: "TechCrunch (CN)",
},{
code: "techradar",
name: "TechRadar",
},{
code: "the-american-conservative",
name: "The American Conservative",
},{
code: "the-globe-and-mail",
name: "The Globe And Mail",
},{
code: "the-hill",
name: "The Hill",
},{
code: "the-hindu",
name: "The Hindu",
},{
code: "the-huffington-post",
name: "The Huffington Post",
},{
code: "the-irish-times",
name: "The Irish Times",
},{
code: "the-jerusalem-post",
name: "The Jerusalem Post",
},{
code: "the-lad-bible",
name: "The Lad Bible",
},{
code: "the-next-web",
name: "The Next Web",
},{
code: "the-sport-bible",
name: "The Sport Bible",
},{
code: "the-times-of-india",
name: "The Times of India",
},{
code: "the-verge",
name: "The Verge",
},{
code: "the-wall-street-journal",
name: "The Wall Street Journal",
},{
code: "the-washington-post",
name: "The Washington Post",
},{
code: "the-washington-times",
name: "The Washington Times",
},{
code: "time",
name: "Time",
},{
code: "usa-today",
name: "USA Today",
},{
code: "vice-news",
name: "Vice News",
},{
code: "wired",
name: "Wired",
},{
code: "wired-de",
name: "Wired.de",
},{
code: "wirtschafts-woche",
name: "Wirtschafts Woche",
},{
code: "xinhua-net",
name: "Xinhua Net",
},{
code: "ynet",
name: "Ynet",
}];



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
  console.log($("#source").val());
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
  source = document.getElementById('source').value;
  language = document.getElementById('language').value;
  buildURL();
  });

function buildURL(){
  var baseURL = "http://newsapi.org/v2/top-headlines?";
  console.log(baseURL);
  console.log(category, country, source, language);

  if (category != 0 && category != undefined)baseURL += "category=" + category + "&";
  if (country != 0 && country != undefined)baseURL += "country=" + country + "&";
  if (source != 0 && source != undefined)baseURL += "sources=" + source + "&";
  if (language != 0 && language != undefined)baseURL += "language=" + language + "&";
  if (baseURL === "http://newsapi.org/v2/top-headlines?")baseURL += "country=nz&";
  baseURL += "apiKey=" + myKey;
  console.log(baseURL);
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
              if (source != 0 && data.totalResults == 0) {
                for (var i = 0; i < languages.length; i++) {
                  if (languages[i].code === language) {
                    languageName = languages[i].name;
                  }
                }
                for (var i = 0; i < sources.length; i++) {
                  if (sources[i].code === source) {
                    sourceName = sources[i].name;
                  }
                }
                document.getElementById('result').innerHTML = 'The news source ' + sourceName + ' is unavaliable in ' + languageName + '.'
              } else if (data.totalResults > 0){
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
                      author = "Author: " + author;
                    }
                  console.log(i);
                  document.getElementById('result').innerHTML +=
                  '<div class="card plagItem cardFix">' +
                  '<img onerror="backupNews(this)" src="' + data.articles[i].urlToImage + '" class="card-img-top" alt="...">' +
                  '<div class="card-body">' +
                  '<h5 class="card-title">' + author + '</h5>' +
                  '<p class="card-text">' + data.articles[i].title + '</p>' +
                  '<a href="' + data.articles[i].url + '" class="btn btn-primary">View Story</a>' +
                  '</div>' +
                  '</div>';
                }
              } else {
                document.getElementById('result').innerHTML = 'The querys you have entered don\'t appear to have any results.';
              }
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
