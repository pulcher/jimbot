def doSquare():
    light.show_ring("""
        yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow
    """)
    control.wait_micros(4000000)
def doLine():
    light.show_ring("""
        purple purple purple purple purple purple purple purple purple purple
    """)
    control.wait_micros(4000000)
    crickit.tank(45, 50)
    control.wait_micros(15000000)
    crickit.tank(0, 0)

def on_button_a_click():
    global DoRoutine
    DoRoutine = 1
input.button_a.on_event(ButtonEvent.CLICK, on_button_a_click)

DoRoutine = 0
DoRoutine = 0

def on_forever():
    global DoRoutine
    if DoRoutine:
        light.show_ring("""
            green green green green green green green green green green
        """)
        control.wait_micros(4000000)
        if input.switch_right():
            doSquare()
        else:
            doLine()
        DoRoutine = 0
    else:
        light.show_ring("red red red red red red red red red red")
forever(on_forever)
