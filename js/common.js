$(document).ready(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".hidden-mnu").slideToggle();
        return false;
    });

    $(function() {
        $("#tabs").tabs()

        // return false;
    });



});

function initMap() {
    var pos = {
        lat: -34.397,
        lng: 150.644
    }
    var opt = {
        // center - определяем точку на которой карта будет центрироваться
        center: pos,
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 10,
    };
    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    var map = new google.maps.Map(document.getElementById("map"), opt);
    // При создании объекта карты необходимо указать его свойства
    var image = {
        url: "img/cap2.png"
    };
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Hello World!',
        icon: image,
    });
}