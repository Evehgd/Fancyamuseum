// This is a jQuery function telling the browser to wait until all the HTML and CSS has loaded first BEFORE running the Javascript
$(document).ready(function() {
  // If you open your console you should see "working" - the following code 'logs' information in the console
  console.log("working");

  // Good practice is to 'grab' all your elements from the page and store them in 'containers' called Variables at the top of your code
  // the 'Btn' is shorthand for 'button' - it's always good practice to specify exactly what element type you're interacting with
  // === NAV ===
  var refreshPageBtn = $("#refreshPageBtn");
  // console. log(refreshPageBtn);
  var fadeOutBtn = $("#fadeOutBtn");
  var slideUpBtn = $("#slideUpBtn");
  var changeNavColorBtn = $("#changeNavColorBtn");
  var navbar = $("#navbar");
  var googleSearchInput = $("#googleSearchInput");
  var googleSearchBtn = $("#googleSearchBtn");
  // === JUMBOTRON ===
  var jumbotron = $("#jumbotron");
  var changeBgImageBtn = $("#changeBgImageBtn");
  // === ARTICLES ===
  var paragraph1 = $("#paragraph1");
  var paragraph2 = $("#paragraph2");
  var paragraph3 = $("#paragraph3");
  var paragraph1Btn = $("#paragraph1Btn");
  var paragraph2Btn = $("#paragraph2Btn");
  var paragraph3Btn = $("#paragraph3Btn");

  // === NAVBAR LISTENERS ===
  // Attach a 'click' listener on to our refreshPageBtn variable (which represents an element on the page)
  refreshPageBtn.on("click", function() {
  // this is an object, each one has a property: key and value, (ex: car, make and model)
    window.location.reload();
  });

  // With jQuery, you can also just assign a click event by doing .click().
  // There are a few effects you can do, like fadeOut...
  fadeOutBtn.click(function() {
    fadeOutBtn.fadeOut(5000);
    // fadeOutBtn.hide();
  });

  // ...or slideUp
  slideUpBtn.click(function() {
    slideUpBtn.slideUp(5000);
    // slideUpBtn.slideDown();
  });

  // Here, we 'click' a button in our navbar, and then we can change the background color of its parent element ('#navbar') by 'invoking' another function (setRandomColor())
  changeNavColorBtn.click(function() {
    navbar.css({ background: setRandomColor() });
  });

  googleSearchBtn.click(function(e) {
    // this stops the page from refreshing when the form element is submitted
    // Stops the button from refreshing the page
    e.preventDefault();

    // store data from the input
    // URI code, turn anything into a URI safe component
    var input = encodeURIComponent(googleSearchInput.val());
    window.open("http://www.google.com/search?q=" + input );
  });

  // === JUMBOTRON LISTENERS ===
  changeBgImageBtn.click(function() {
    // Here we're making a 'call' to something called an API - Application Programming Interface - which is like asking for a bit of information from over the web and doing something with the data
    // the $.get() is a REQUEST Go and get me this url, want a bit of info from the page. Most websites are API's (how we communicate with software, ASOS,Facebook...)
    $.get("http://www.splashbase.co/api/v1/images/random", function(
      data,
      status
    ) {
      // We get back a RESPONSE (a random image in the form of data.url) and we can set the background image of the jumbotron
      jumbotron.css ({ background: "url(" + data.url +")" })
    });
  });

  // === PARAGRAPH LISTENERS ===
  // Click the first paragraph's button and change the font color (of a different element: paragraph1)
  paragraph1Btn.click(function() {
    paragraph1.css({ color: setRandomColor() })
  });

  // Click the second paragraph's button and change the font size
  paragraph2Btn.click(function() {
    var currentFont = increaseFont(paragraph2.css("font-size"));
    paragraph2.css({ fontSize: currentFont })
  });

  // Click the 3rd paragraph's button and move the paragraph down 300px
  paragraph3Btn.click(function() {});

  // Hover over the 3rd paragraph to change the font and background colors of the button
  paragraph3.hover(function() {
    paragraph3Btn.css({
      color: setRandomColor(),
      background: setRandomColor()
    });
  });

  // === FUNCTIONS ===
  function setRandomColor() {
    // This will return a random RGB value eg rgb(133,23,245); math.floor means keeping whole numbers between 0 and 255
    return `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  }
// this will take fontsize and increase it by 1 pixel
  function increaseFont(currentFont) {
    currentFont = parseInt(currentFont.split("px")[0]);
    return `${currentFont + 1}px`;
  }
});
