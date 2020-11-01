//source : https://www.w3schools.com/js/js_cookies.asp



$(document).ready(function(){
    if (getCookie("gpdr") == "" ) {
      let div = '<div id="gpdrmodal" class="modal fade">' +
                  '<div class="modal-dialog">' +
                      '<div class="modal-content">' +
                        '<div class="modal-header">' +
                          '<h5 class="modal-title">GDPR Cookie Consent</h5>' +
                          '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                        '</div>' +
                        '<div class="modal-body">' +
                          '<p>We use cookies and other tracking technologies to improve your ' +
                            'browsing experience on our website, to show you personalized content ' +
                            'and targeted ads, to analyze our website traffic, and to understand where ' +
                            'our visitors are coming from. By browsing our website, you consent to our ' +
                            'use of cookies and other tracking technologies.</p>'   +               
                          '<button type="button" onClick="agree()" class="btn btn-primary" data-dismiss="modal">I Agree</button>' +
                
                        '</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>'

      $("#extra").append(div)

		  $("#gpdrmodal").modal('show');
    }

	});

function agree(){
  setCookie("gpdr", "agree",365)
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



