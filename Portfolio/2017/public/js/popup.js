function popUp(url, title, w, h) {
     var externalLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
     var externalTop = window.screenTop != undefined ? window.screenTop : screen.top;

     width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
 	 height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

     var left = ((width / 2) - (w / 2)) + externalLeft;
     var top = ((height / 2) - (h / 2)) + externalTop;
     var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

     if (window.focus) {
         newWindow.focus();
     }
 }