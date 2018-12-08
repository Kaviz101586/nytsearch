var userInput

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    userInput = $("#searchTerm").val().trim();
  });
 
 $("#reset").on("click", function(){
    $(".results").empty();
 });