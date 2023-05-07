def doSquare():
    light.show_ring("""
        yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow
    """)
    control.wait_micros(4000000)
    crickit.tank(0, 100)
    control.wait_micros(5000000)
    crickit.tank(0, 0)
    light.show_ring("""
        red red red red red red red red red red
    """)
def doLine():
    light.show_ring("""
        purple purple purple purple purple purple purple purple purple purple
    """)
    control.wait_micros(100000)
    crickit.tank(93, 100)
    control.wait_micros(5000000)
    crickit.tank(0, 0)
    control.wait_micros(500000)
    crickit.tank(-92, -100)
    control.wait_micros(5000000)
    crickit.tank(0, 0)
    light.show_ring("""
        red red red red red red red red red red
    """)

def on_button_a_click():
    doLine()
input.button_a.on_event(ButtonEvent.CLICK, on_button_a_click)

def on_button_b_click():
    doSquare()
input.button_b.on_event(ButtonEvent.CLICK, on_button_b_click)

DoRoutine = 0

def on_forever():
    pass
forever(on_forever)
