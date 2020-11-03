//source : https://www.w3schools.com/js/js_cookies.asp



$(document).ready(function(){
   
    if (getCookie("gpdr") == "" && document.noscript === undefined ) {
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



function selectText(element){
  let selectText = document.getElementById(element)
  /* Select the text field */
  selectText.select();
  selectText.setSelectionRange(0, 99999); /*For mobile devices*/
  return selectText
}

function copyText(element){
  selectText(element)
  document.execCommand("copy")
}

function showSuggestionForm(page){
 let suggestionForm =  '<div id="suggestionModal" class="modal fade">' +
                        '<div class="modal-dialog">' +
                          '<div class="modal-content">' +
                              '<div class="modal-header">' +
                                '<h5 class="modal-title">Suggestion for :page:</h5>' +
                                '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                              '</div>' +
                            '<div class="modal-body">' +
                              '<div class="row">' +
                        '        <div class="col-md-12">' +
                        '            <form method="POST" class="gform pure-form pure-form-stacked" '+
                        '                        action="https://script.google.com/macros/s/AKfycbyj54P6tYyHMXDRKPW2Q2BHjO_Cv2KyglV1ZDYxM0afuNxfqt7K/exec" >' +
                        
                        '               <div class="form-group form-elements"  >' +
                        '                  <input type="hidden" name="page" value=":page:"/>' +
                        '                  <label for="sugestion">Suggestion :</label>' +
                              '            <textarea class="form-control" id="suggestion" name="suggestion" rows="10"></textarea>' +
                             '          </div>' +
                                        ' <fieldset class="honeypot-field" style="display: none">' +
                                          ' <label for="honeypot">Honey POT.</label>' +
                                          ' <input id="honeypot" type="text" name="honeypot" value="" />'+
                                        ' </fieldset>' +
                        '              <div class="form-group text-center">' +
                        '                 <button class="btn btn-warning m-2 text-center" type="submit"   id="sendsuggestion" >' +
                        '                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> ' +
                        '                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>' +
                        '                         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>'+
                        '                    </svg>   '+
                        '                    &nbsp;Send </button>  '+
                        '             </div>' +
                        '             </form>'+
                        '        </div>' +
                        '      </div>' +                
                            '</div>' +
                          '</div>' +
                        '</div>' +
                     '</div>'
  
  suggestionForm = suggestionForm.replaceAll(":page:", page)
  $("#extra").append(suggestionForm)
  loaded()
  $("#suggestionModal").modal('show');

}


