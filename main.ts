function doSquaew () {
    light.showRing(
    `yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow`
    )
    control.waitMicros(4000000)
}
function doLine () {
    light.showRing(
    `purple purple purple purple purple purple purple purple purple purple`
    )
    control.waitMicros(4000000)
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    DoRoutine = 1
})
let DoRoutine = 0
DoRoutine = 0
forever(function () {
    if (DoRoutine) {
        light.showRing(
        `purple blue yellow orange red purple blue yellow orange red`
        )
        control.waitMicros(4000000)
        light.showAnimation(light.rainbowAnimation, 2000)
        control.waitMicros(4000000)
        if (input.switchRight()) {
            doSquaew()
        } else {
            doLine()
        }
        DoRoutine = 0
    } else {
        light.showRing(
        "red red red red red red red red red red"
        )
    }
})
