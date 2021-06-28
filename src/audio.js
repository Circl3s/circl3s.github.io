const AudioContext = window.AudioContext || window.webkitAudioContext;

const ctx = new AudioContext();

export class Note {
    constructor(note, octave, length) {
        this.note = note;
        this.octave = note == "-" ? "-" : octave;
        this.length = length;
        this.realLength = length / 1500;
    }

    static freq = {
        "C": 32.7,
        "C#": 34.65,
        "D": 36.71,
        "D#": 38.89,
        "E": 41.20,
        "F": 43.65,
        "F#": 46.25,
        "G": 49,
        "G#": 51.91,
        "A": 55,
        "A#": 58.27,
        "B": 61.74,
        "-": 0
    }

    get frequency() {
        return Note.freq[this.note] * 2 ** (this.octave - 1);
    }

    play(start) {
        if (this.note != "-") {
            let osc = ctx.createOscillator();
            osc.type = "square";
            osc.frequency.value = this.frequency;
            osc.connect(ctx.destination);
            console.log(this.frequency);
            osc.start(ctx.currentTime + start);
            osc.stop(ctx.currentTime + this.realLength);
        }
        
    }
}

export class Sequence {
    constructor(notes) {
        this.notes = notes;
        this.position = 0;
        this.startTimes = [0];

        for (let i = 0; i < this.notes.length; i++) {
            let sum = 0;
            for (let j = 0; j < i; j++) {
                sum += this.notes[j].realLength;
            }
            this.startTimes[i] = sum;
        }

        console.log(this.startTimes);
    }

    play() {
        for (let i = 0; i < this.notes.length; i++) {
            this.notes[i].play(this.startTimes[i]);
        }
    }
}