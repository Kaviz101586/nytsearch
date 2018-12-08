var userInput

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    userInput = $("#searchTerm").val().trim();
  });
 
 $("#reset").on("click", function(){
    $(".results").empty();
 });

 $("#searchBtn").on("click", function() {
    var q = $("#searchTerm").val();
    var beginDate = $("#startYear").val();
    var endDate = $("#endYear").val();
    var queryNum = $("#numberOfRecords").val();
 
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "d4fe7d5f1a9d4bb9bf15fcba0dd5f5f4",
      'q': q,
      'begin_date': beginDate + "0101",
      'end_date': endDate + "1231",
    });
 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(json){
        for (var i = 0; i < queryNum; i++) {
        var articleDiv = $("<div>");
        var articleNum = i + 1;
        var articleHeadline = json.response.docs[i].headline.main;
        var byline = json.response.docs[i].byline.original;
        var numberSpan = $("<span>");
        var headlineSpan = $("<span>");
        var bylineDiv = $("<div>");
 
        numberSpan.append(articleNum);
        headlineSpan.append(articleHeadline);
        bylineDiv.append(byline);
 
        articleDiv.append(numberSpan).append(headlineSpan).append(bylineDiv);
        $("#results").append(articleDiv);
        }
    })
 }
 )