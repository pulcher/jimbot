function doSquare () {
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
    crickit.tank(45, 50)
    control.waitMicros(12000000)
    crickit.tank(0, 0)
    control.waitMicros(4000000)
    crickit.tank(-45, -50)
    control.waitMicros(12000000)
    crickit.tank(0, 0)
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    DoRoutine = 1
})
let DoRoutine = 0
DoRoutine = 0
forever(function () {
    if (DoRoutine) {
        light.showRing(
        `green green green green green green green green green green`
        )
        control.waitMicros(4000000)
        if (input.switchRight()) {
            doSquare()
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
