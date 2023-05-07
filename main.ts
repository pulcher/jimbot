function doSquare () {
    light.showRing(
    `yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow`
    )
    control.waitMicros(4000000)
    crickit.tank(0, 100)
    control.waitMicros(5000000)
    crickit.tank(0, 0)
    light.showRing(
    `red red red red red red red red red red`
    )
}
function doLine () {
    light.showRing(
    `purple purple purple purple purple purple purple purple purple purple`
    )
    control.waitMicros(100000)
    crickit.tank(100, 100)
    control.waitMicros(5000000)
    crickit.tank(0, 0)
    control.waitMicros(1000000)
    light.showRing(
    `orange orange orange orange orange orange orange orange orange orange`
    )
    crickit.tank(-100, -100)
    control.waitMicros(5000000)
    crickit.tank(0, 0)
    light.showRing(
    `red red red red red red red red red red`
    )
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    doLine()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    doSquare()
})
let DoRoutine = 0
forever(function () {
	
})
