input.onPinPressed(TouchPin.P0, function () {
    game.setScore(0)
    Opening()
})
function Game () {
    basic.clearScreen()
    Mouse = game.createSprite(2, 2)
    for (let index = 0; index < 50; index++) {
        Mouse.ifOnEdgeBounce()
        Mouse.move(1)
        Mouse.turn(Direction.Left, randint(0, 180))
        basic.pause(350)
    }
    basic.showNumber(game.score())
    control.reset()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("HELLO WORLD!")
})
function Sparcle () {
    for (let index = 0; index < 2; index++) {
        soundExpression.sad.playUntilDone()
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(100)
    }
    basic.clearScreen()
}
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    My_num2 += 1
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    My_num1 += 1
})
function Opening () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    Game()
}
function Learn (Learn_num1: number, Learn_num2: number) {
    My_num1 = 0
    My_num2 = 0
    basic.clearScreen()
    basic.showNumber(Learn_num1)
    basic.showString("X")
    basic.showNumber(Learn_num2)
    basic.showString("=")
    basic.showNumber(Learn_num1 * Learn_num2)
    basic.pause(1000)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    if (Mouse.get(LedSpriteProperty.X) == 2 && Mouse.get(LedSpriteProperty.Y) == 2) {
        game.addScore(1)
        GG()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    Learn(My_num1, My_num2)
})
function GG () {
    basic.showIcon(IconNames.SmallHeart)
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    led.setBrightness(101)
})
function Health (_375: boolean, _355: boolean) {
    if (input.temperature() >= 35.6 && input.temperature() <= 37.4) {
    	
    } else {
        if (_375) {
            Sparcle()
        }
        if (_355) {
            Sparcle()
        }
    }
}
let My_num1 = 0
let My_num2 = 0
let Mouse: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    Health(input.temperature() > 37.5, input.temperature() < 35.5)
})
