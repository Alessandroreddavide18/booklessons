window.addEventListener('resize', adjustIframe);

function adjustIframe() {
    var iframe = document.querySelector('.googlecalendar iframe');
    if (!iframe) return;

    var desiredWidth = Math.min(document.body.clientWidth, 600); // Larghezza massima di 600px
    iframe.style.width = desiredWidth + 'px';
    iframe.style.height = 'auto'; 
}


adjustIframe();
