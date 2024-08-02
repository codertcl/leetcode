class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name}, ${data}`)
    }
}

class Subject {
    constructor() {
        this.observers = [];
    }

    attach(...args) {
        args.forEach((observer) => {
            if (observer && typeof observer.update === "function") {
                this.observers.push(observer);
            }
        })
    }

    detach(observer) {
        const index = this.observers.findIndex(item => item === observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data) {
      this.observers.forEach(item => {
          item.update(data)
      })
    }
}

const subject = new Subject();
const observer1 = new Observer("observer1");
const observer2 = new Observer("observer2");
subject.attach(observer1, observer2);
subject.notify("notify");
subject.detach(observer2); // observer1, notify  observer2, notify
subject.notify("notify"); // observer1, notify
