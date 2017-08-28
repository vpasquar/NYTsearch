$("#search").on("click", function(e) {

    e.preventDefault();
    
    startSearch();
});


$("#clear").on("click",function(e) {

    e.preventDefault();

    clearWindow();
});
    
function startSearch() {

    var searchTerm = $("#input-q").val();
    var numRecords = $("#input-num").val();
    var startYear  = $("#input-startYear").val();
    var endYear    = $("#input-endYear").val();
     

    var apiKey = "149dc9ee7d31a98e5981a676b59db541:10:71604795";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    queryURL += '?' + $.param({
    'q': searchTerm,
    //'begin_date': startYear,
    //'end_date': endYear,
    'api_key': "149dc9ee7d31a98e5981a676b59db541:10:71604795"
    });
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).done(function(result) {
      console.log(result);

       for (var i = 0; i < result.response.docs.length; i++) {
    
          var articleSection = $("<div>").addClass("articleSection");
          var headlineDiv = $("<p>").text(result.response.docs[i].headline.main).addClass("headline");
          var snippetDiv = $("<p>").text(result.response.docs[i].snippet).addClass("snippet");
        
          var urlDiv = $("<a>").attr("href",result.response.docs[i].web_url).text("Article Link").addClass("link");

          articleSection.append(headlineDiv).append(snippetDiv).append(urlDiv);

          $("#article-output").append(articleSection);
       }

    })  

};

function clearWindow () {

   $("#article-output").empty();

};