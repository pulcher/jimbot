// ===============================
// JimBot Timing Configuration
// ===============================

// Game #1
let forwardTime1 = 1500      // ms forward before and after the 180° turn
let turn180Time = 900        // ms for 180° right turn

// Game #2 (4 segments)
let forwardTimes2 = [1000, 1000, 1000, 1000]
let turn90Times = [450, 450, 450, 450]

// ===============================
// R2-D2 Sound Helpers
// ===============================

// Excited rising chirp (READY)
function r2d2Excited() {
    music.playTone(880, 120)
    music.playTone(1040, 120)
    music.playTone(1320, 150)
    music.playTone(1760, 180)
    music.playTone(1560, 120)
}

// Descending sad boop (FINISHED)
function r2d2Sad() {
    music.playTone(880, 200)
    music.playTone(660, 200)
    music.playTone(440, 300)
    music.playTone(330, 200)
}

// Optional: R2 warble (fun during turns)
// Uncomment inside turnRightFor() if desired
function r2d2Warble() {
    music.playTone(1200, 100)
    music.playTone(900, 80)
    music.playTone(1500, 120)
    music.playTone(700, 100)
    music.playTone(1600, 150)
}

// ===============================
// Motor + LED Control Helpers
// ===============================

// Forward movement with orange lights
function driveForward(speed: number) {
    light.setAll(Colors.Orange)
    crickit.motor1.run(speed)   // left wheel
    crickit.motor2.run(speed)   // right wheel
}

// Right turn with red/blue flashing for the duration
function turnRightFor(duration: number, speed: number) {
    let start = control.millis()
    while (control.millis() - start < duration) {

        // Red phase
        light.setAll(Colors.Red)
        crickit.motor1.run(speed)
        crickit.motor2.run(-speed)
        pause(150)

        // Blue phase
        light.setAll(Colors.Blue)
        crickit.motor1.run(speed)
        crickit.motor2.run(-speed)
        pause(150)

        // Optional: add R2 warble during turning
        // r2d2Warble()
    }
    stopAll()
}

// Stop motors + clear LEDs
function stopAll() {
    crickit.motor1.run(0)
    crickit.motor2.run(0)
    light.clear()
}

// Flash a color N times (used for startup + end-of-game)
function flashColor(color: number, times: number) {
    for (let i = 0; i < times; i++) {
        light.setAll(color)
        pause(500)
        light.clear()
        pause(500)
    }
}

// ===============================
// Startup Sequence
// ===============================

light.setBrightness(40)

// Flash red 3×
flashColor(Colors.Red, 3)
pause(500)

// Flash yellow 3×
flashColor(Colors.Yellow, 3)
pause(500)

// Flash green 3×
flashColor(Colors.Green, 3)
pause(500)

light.clear()
r2d2Excited()

// ===============================
// Game #1 — Button A
// ===============================

input.buttonA.onEvent(ButtonEvent.Click, function () {

    // Forward segment 1
    driveForward(100)
    pause(forwardTime1)
    stopAll()
    pause(100)

    // 180° right turn
    turnRightFor(turn180Time, 100)
    pause(100)

    // Forward segment 2
    driveForward(100)
    pause(forwardTime1)
    stopAll()

    // End-of-game signal
    flashColor(Colors.Green, 3)
    r2d2Sad()
})

// ===============================
// Game #2 — Button B
// ===============================

input.buttonB.onEvent(ButtonEvent.Click, function () {

    for (let i = 0; i < 4; i++) {

        // Forward
        driveForward(100)
        pause(forwardTimes2[i])
        stopAll()
        pause(100)

        // 90° right turn
        turnRightFor(turn90Times[i], 100)
        pause(100)
    }

    // End-of-game signal
    flashColor(Colors.Green, 3)
    r2d2Sad()
})
