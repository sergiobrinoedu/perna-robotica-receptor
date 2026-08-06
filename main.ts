input.onButtonPressed(Button.A, function () {
    angulo_atual += 40
    SuperBit.MotorRun(SuperBit.enMotors.M1, 25)
    basic.pause(2000)
    if (angulo_atual >= angulototal) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -10)
        basic.pause(1000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let angulo_atual = 0
let angulototal = 0
angulototal = 40
SuperBit.Servo2(SuperBit.enServo.S4, 0)
SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
SuperBit.MotorRun(SuperBit.enMotors.M4, 0)
basic.forever(function () {
	
})
