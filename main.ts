input.onPinPressed(TouchPin.P0, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0)
})
basic.showIcon(IconNames.Heart)
