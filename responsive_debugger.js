/*
* responsive_debugger.js
* Small pop-up in right bottom corner to show current screen width and Bootstrap breakpoint
* by Jonilive
* 2023
*/

var debugbox = document.createElement('div');
debugbox.setAttribute('id', 'debugger-box');
debugbox.style.position = 'fixed';
debugbox.style.bottom = '50px';
debugbox.style.right = '20px';
debugbox.style.width = '170px';
debugbox.style.height = '75px';
debugbox.style.backgroundColor = '#000000';
debugbox.style.border = '1px solid #ccc';
debugbox.style.padding = '5px';

var closeButton = document.createElement('span');
closeButton.textContent = 'X';
closeButton.style.font.weight = 'bold';
closeButton.style.cursor = 'pointer';
closeButton.style.float = 'right';
closeButton.style.color = 'red';
closeButton.style.marginRight = '3px';
closeButton.onclick = function () {
  debugbox.style.display = 'none';
};

var infotext = document.createElement('p');
infotext.setAttribute('id', 'infoWindow');
infotext.style.color = '#ffffff';
infotext.style.marginLeft = '2px';
infotext.style.marginTop = '0px';
debugbox.appendChild(closeButton);
debugbox.appendChild(infotext);
document.body.appendChild(debugbox);
function showinfoWindow() {
  var windowWidth = window.innerWidth;
  var breakpoint = '';
  if (typeof window !== 'undefined') {
    var bootstrapBreakpoints = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    };

    if (windowWidth < bootstrapBreakpoints.sm) {
      breakpoint = 'xs';
    } else if (windowWidth >= bootstrapBreakpoints.sm && windowWidth < bootstrapBreakpoints.md) {
      breakpoint = 'sm';
    } else if (windowWidth >= bootstrapBreakpoints.md && windowWidth < bootstrapBreakpoints.lg) {
      breakpoint = 'md';
    } else if (windowWidth >= bootstrapBreakpoints.lg && windowWidth < bootstrapBreakpoints.xl) {
      breakpoint = 'lg';
    } else if (windowWidth >= bootstrapBreakpoints.xl && windowWidth < bootstrapBreakpoints.xxl) {
      breakpoint = 'xl';
    } else {
      breakpoint = 'xxl';
    }
  }

  document.getElementById('infoWindow').innerHTML = '<strong>Responsive Debug</strong>\nWidth: ' + windowWidth + 'px\nBreakpoint: ' + breakpoint.toUpperCase();
}
window.onload = showinfoWindow;
window.onresize = showinfoWindow;
