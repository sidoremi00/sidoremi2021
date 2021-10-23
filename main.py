def on_pin_pressed_p0():
    game.set_score(0)
    Opening()
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def Game():
    global Mouse
    basic.clear_screen()
    Mouse = game.create_sprite(2, 2)
    for index in range(50):
        Mouse.if_on_edge_bounce()
        Mouse.move(1)
        Mouse.turn(Direction.LEFT, randint(0, 180))
        basic.pause(350)
    basic.show_number(game.score())
    control.reset()

def on_logo_pressed():
    basic.show_string("HELLO WORLD!")
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def Sparcle():
    for index2 in range(2):
        soundExpression.sad.play_until_done()
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . . . . .
                        . . # . .
        """)
        basic.pause(100)
    basic.clear_screen()

def on_microbit_id_button_b_evt_click():
    global My_num2
    My_num2 += 1
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK,
    on_microbit_id_button_b_evt_click)

def on_microbit_id_button_a_evt_click():
    global My_num1
    My_num1 += 1
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK,
    on_microbit_id_button_a_evt_click)

def Opening():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
    """)
    basic.show_leds("""
        . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
    """)
    basic.show_leds("""
        . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
    """)
    basic.show_leds("""
        . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
    """)
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    Game()
def Learn(Learn_num1: number, Learn_num2: number):
    global My_num1, My_num2
    My_num1 = 0
    My_num2 = 0
    basic.clear_screen()
    basic.show_number(Learn_num1)
    basic.show_string("X")
    basic.show_number(Learn_num2)
    basic.show_string("=")
    basic.show_number(Learn_num1 * Learn_num2)
    basic.pause(1000)
    basic.clear_screen()

def on_button_pressed_ab():
    if Mouse.get(LedSpriteProperty.X) == 2 and Mouse.get(LedSpriteProperty.Y) == 2:
        game.add_score(1)
        GG()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_pin_pressed_p1():
    Learn(My_num1, My_num2)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def GG():
    basic.show_icon(IconNames.SMALL_HEART)

def on_logo_long_pressed():
    led.set_brightness(255)
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def Health(_375: bool, _355: bool):
    if input.temperature() >= 35.6 and input.temperature() <= 37.4:
        pass
    else:
        if _375:
            Sparcle()
        if _355:
            Sparcle()
My_num1 = 0
My_num2 = 0
Mouse: game.LedSprite = None
music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
basic.show_leds("""
    . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
""")

def on_forever():
    Health(input.temperature() > 37.5, input.temperature() < 35.5)
basic.forever(on_forever)
