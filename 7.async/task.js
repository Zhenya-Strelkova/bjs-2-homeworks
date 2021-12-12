class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(timeClock, actionClock, idClock) {
        if (idClock === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
        }
        if (this.alarmCollection.find((itemClock) => itemClock.id === idClock) !== undefined) {
            return console.error('Будильник с таким id уже существует');
        }
        this.alarmCollection.push({
            id: idClock,
            time: timeClock,
            callback: actionClock,
        });
    }

    removeClock(idClock) {
        const lenCollection = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((itemClock) => itemClock.id !== idClock);
        return !(lenCollection === this.alarmCollection.length);
    }

    getCurrentFormattedTime() {
        return new Date().getHours() + ':' + new Date().getMinutes();
    }

    start() {
        const checkClock = (itemClock) => {
            if (this.getCurrentFormattedTime() === itemClock.time) {
                itemClock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((item) => checkClock(item));
            }, 1000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((itemClock) => console.log(`Будильник №${itemClock.id} заведен на ${itemClock.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

//------------------------test case--------------------------------
let appAlarm = new AlarmClock();
appAlarm.addClock('20:43', () => console.log('Выпей таблетку'), 1);
appAlarm.addClock('20:44', () => {
    console.log('Выпей уже таблетку');
    appAlarm.removeClock(2);
    }, 2);
appAlarm.addClock('20:45', () => {
    console.log('Выпей пожалуйста таблетку');
    appAlarm.clearAlarms();
    appAlarm.printAlarms();
}, 3);
appAlarm.printAlarms();
appAlarm.start();