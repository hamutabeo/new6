input.onGesture(Gesture.TiltRight, function () {
    music.changeTempoBy(-50)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.changeTempoBy(50)
})
input.onSound(DetectedSound.Loud, function () {
    if (music.volume() == 0) {
        basic.showIcon(IconNames.Happy)
        music.setTempo(120)
        music.setVolume(100)
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        music.setVolume(0)
        music.stopAllSounds()
    }
})
basic.forever(function () {
    input.setSoundThreshold(SoundThreshold.Loud, 120)
})
