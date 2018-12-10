// This is a jQuery function telling the browser to wait until all the HTML and CSS has loaded first BEFORE running the Javascript
$(document).ready(function() {
  // If you open your console you should see "working" - the following code 'logs' information in the console
  console.log("working");

  var googleSearchInput = $("#googleSearchInput");
  var googleSearchBtn = $("#googleSearchBtn");

  // === NAVBAR LISTENERS ===
  // Attach a 'click' listener on to our refreshPageBtn variable (which represents an element on the page)

  googleSearchBtn.click(function(e) {
    // this stops the page from refreshing when the form element is submitted
    // Stops the button from refreshing the page
    e.preventDefault();

    // store data from the input
    // URI code, turn anything into a URI safe component
    var input = encodeURIComponent(googleSearchInput.val());
    window.open("http://www.google.com/search?q=" + input );
  });

});
