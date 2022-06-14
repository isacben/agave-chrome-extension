
if(document.getElementById('agave-console-y380olam79') === null){
  var sidebar;
  $('body').css({
    'padding-right': '400px'
  });
  sidebar = $(
    "<div id='agave-console-y380olam79'>" +
      "<div id='agave-hide-y380olam79'>" +
        "<a href='#' id='agave-hide-link-y380olam79'>HIDE &#9658;</a>" +
      "</div>" +
      "<pre id='output-agave'></pre>" +
    "</div>");
  sidebar.css({
    'position': 'fixed',
    'right': '0px',
    'top': '0px',
    'z-index': 9999,
    'width': '390px',
    'height': '100%',
    'overflow-y': 'scroll',
    'overflow-wrap': 'break-all',
    'font-size': '11px',
  });
  $('body').append(sidebar);
}  

if (window.getSelection) {
  const code = window.getSelection();

  if (code.toString() != ""){
    const beautify = js_beautify;

    document.getElementById('output-agave').innerHTML += 
      '<section class="agave-segment">' +
        '<p class="agave-segment-header">&nbsp;</p>' +
        '<section class="agave-segment-content">' + 
          beautify(code.toString(), { indent_size: 2, space_in_empty_paren: true }) +
        '</section>' +
      '</section>'       
  }
  document.getElementById('agave-console-y380olam79').scrollTop = document.getElementById('agave-console-y380olam79').scrollHeight;
}

if ($("#agave-console-y380olam79").is(":hidden")){
  $("#agave-console-y380olam79").show();
  document.getElementById('agave-console-y380olam79').scrollTop = document.getElementById('agave-console-y380olam79').scrollHeight;
}

$("#agave-hide-link-y380olam79" ).click(function( event ) {
  event.preventDefault();
  $("#agave-console-y380olam79").hide();
});