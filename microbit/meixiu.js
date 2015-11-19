var meixiu_icon = new MicroIcon({iconUrl: '/img/meixiu.png'})
var meixiu_colour = '#a83fd8';

var meixiuMicrobit = [{
    popup: "Nicholas posted Mei-Xiu micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: meixiu_icon
    }
}];

meixiuMicrobit.forEach(addMarker);
addRoute(meixiuMicrobit, meixiu_colour);
