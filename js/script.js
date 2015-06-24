$(document).ready(function() {

//---GLOBAL VARIALBES----// 
    var keyword = '';
    var results = '';

$('#submit-btn').click(function() {
    $('.search-results').empty(); //this clears the results div each time so that the videos don't all add together
    searchTerm = $('#query').val();//grabs user's input
    getResults();

});


//----FUNCTION definitions---//


function getResults(data) {

var params = { part: 'snippet', type: 'video', q: searchTerm, order: 'viewCount', relevanceLanguage: 'en', maxResults: '10', fields: 'items(id(videoId), snippet(title, channelTitle, thumbnails))', key: 'AIzaSyABTE4fBQBAXSrX18w3QPt4zhNBZPrWuyY' }; // a JS object containing name:value pairs
var url = 'https://www.googleapis.com/youtube/v3/search?';

$.getJSON(url, params, function(data) {
            myData = data.items; //the array returned by the searc

    });

};





}) //end doc ready