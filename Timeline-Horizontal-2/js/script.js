

$('#example').horizontalTimeline({
dateIntervals: {
"desktop": 200,
"tablet": 150,
"mobile": 120,
"minimal": true

}
});

$('#example').horizontalTimeline({
dateDisplay: "dayMonth"
});

$('#example').horizontalTimeline({
animationClass: {
"base": "animated fast",
"enter": {
"left": "rotateInDownLeft",
"right": "rotateInUpRight"
},
"exit": {
"left": "rotateOutDownLeft",
"right": "rotateOutUpRight"
}
}
});