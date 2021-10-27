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
// 인간이란 본디 자신이 만든 코드라도 주석 처리를 하지 않으면 못 알아보는 법  근데 이건 내 의견도 들어봐야 하지 않음...? 내가 이 코드 짰는데 어떻게 보면  내가 이 코드를 마음으로 낳은 건데  어머니 오셨어요? 네~ 저 코드에요 기억나시죠?  하면서 통설명을 해줘야 하는 거 아님?  아 이래서 주석 처리가 중요함  내가 마음으로 낳은 자식들 다 패륜함.... 폐륜이란 말이 좀 그렇긴 하다만은..... 다시 주석 넣기 글렀다  하여간 나약해 빠짐....  근데 생각해보면 이게 또 너무하다는 생각이 들긴 함  애초에 만드는 것부터 뇌빼고 만들었는데 ㅋㅋㅋㅋ,.....  의지박약이다 근면성실하게 살자;;;;;;;
// 
basic.forever(function () {
    Health(input.temperature() > 37.5, input.temperature() < 35.5)
})
