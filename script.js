function openWebBrowser() {
  window.open(
    "https://h-kharboutly.blogspot.com/",
    "_blank",
    "width=500,height=500"
  );
}

function Project1() {
  window.open(
    "https://xpaintlyx.blogspot.com/",
    "_blank",
    "width=500,height=500"
  );
}

function FB() {
  window.open(
    "https://www.facebook.com/xsniperx92",
    "_blank",
    "width=500,height=500"
  );
}

function Insta() {
  window.open(
    "https://www.instagram.com/xsniperx1810/",
    "_blank",
    "width=500,height=500"
  );
}

function openGmailCompose() {
  var emailAddress = "h.s.k@usa.com";
  var subject = "Subject";
  var body = "Delete this text and write me what you need";

  var composeUrl =
    "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=" +
    encodeURIComponent(emailAddress) +
    "&su=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  window.open(composeUrl, "_blank", "width=500,heigth=500");
}

document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Retrieve form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    // Do something with the form data (e.g., display it on the page)
    var output =
      "Name: " + name + "<br>Email: " + email + "<br>Comment: " + comment;
    document.getElementById("output").innerHTML = output;
  });
