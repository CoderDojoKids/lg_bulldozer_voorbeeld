radio.onReceivedValue(function (name, value) {
    if (name == "links") {
        if (value >= 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Math.abs(value))
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Math.abs(value))
        }
    } else if (name == "rechts") {
        if (value >= 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Math.abs(value))
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Math.abs(value))
        }
    } else if (name == "shovel") {
        maqueen.servoRun(maqueen.Servos.S1, value)
    }
})
maqueen.motorStop(maqueen.Motors.All)
radio.setGroup(7)
basic.forever(function () {
	
})
