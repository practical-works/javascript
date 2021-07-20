var styles = ["styles/1_animate.css", "styles/2_title-style.css"];
var scripts = ["scripts/1_ jquery.js", "scripts/2_title-text.js", "scripts/3_title-animation.js"];

loadSources("style", styles); // May not work because of onload event absent for html link tag -_-'
loadSources("script", scripts);

function loadSources(sourceType, urls) {
  if (sourceType != "script" && sourceType != "style") return;
  var i = 0;
  function recursiveCallback() {
    if (++i < urls.length) {
      loadSource(urls[i], recursiveCallback);
    } else {
      console.log(sourceType + " sources loaded successfully !");
    }
  }
  function loadSource(url, callback) {
    var element = "";
    if (sourceType == "script") {
      element = document.createElement("script");
      element.type = "text/javascript";
    }
    if (sourceType == "style") {
      element = document.createElement("link");
      element.rel = "stylesheet";
    }
    if (element.readyState) { //IE
      element.onreadystatechange = function() {
        if (element.readyState == "loaded" ||
          element.readyState == "complete") {
          element.onreadystatechange = null;
          callback();
        }
      };
    } else { //Others
      element.onload = function() {
        callback();
      };
    }
    if (sourceType == "script") element.src = url;
    if (sourceType == "script") element.href = url;
    document.getElementsByTagName("head")[0].appendChild(element);
  }
  loadSource(urls[0], recursiveCallback);
}