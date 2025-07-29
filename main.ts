input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    datalogger.log(
    datalogger.createCV("sound", input.soundLevel()),
    datalogger.createCV("light", input.lightLevel()),
    datalogger.createCV("temperature", input.temperature())
    )
    basic.clearScreen()
})
basic.showIcon(IconNames.Giraffe)
datalogger.setColumnTitles(
"sound",
"light",
"temperature"
)
