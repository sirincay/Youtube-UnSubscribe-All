var i = 0;
var c = document.querySelectorAll("ytd-channel-renderer:not(.ytd-item-section-renderer)").length;

husnuEhedov();

function husnuEhedov () {	
    if (c == 0) return;

    el = document.querySelector('.ytd-subscribe-button-renderer');
    el.click();

    setTimeout(function () {
        var unSubBtn = document.getElementById("confirm-button").click();
        i++;

        console.log(i + " abunəlikdən çıxıldı"); // Konsola göstərəcək
        
        setTimeout(function () {
            el = document.querySelector("ytd-channel-renderer");
            el.parentNode.removeChild(el);

            husnuEhedov();
        }, 250);
    }, 250);
}
