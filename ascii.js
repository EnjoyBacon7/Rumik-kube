var bannerLength = 50;
var animSpeed = 100;

function ASCIIbanner() {
  
  var bannerDiv = document.getElementById("banner");
  bannerDiv.style.fontFamily = "monospace";
  bannerDiv.classList.add("text-center");
  
  var text = "Chte bez jv l'niquer ce projet";
  var buffer = Array(bannerLength).join(" ") + text;
  
  setInterval(function() {
      // Shift buffer to the left
      buffer = buffer.slice(1) + " ";
      // Display the buffer
      console.log("[" + buffer + "]");
      // Set the banner
      bannerDiv.innerHTML = `<pre>[${buffer.substring(0, bannerLength)}]</pre>`;
      if (buffer.trim() === "") {
          buffer = Array(bannerLength).join(" ") + text;
      }
  }, animSpeed);
  
}
