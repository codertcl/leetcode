class Scheduler {
    constructor(limit) {
        this.limit = limit;
        this.runningCount = 0;
        this.queue = [];
    }

    add(promiseCreator) {
        return new Promise((resolve, reject) => {
            const task = () => {
                this.runningCount++;
                promiseCreator()
                    .then(result => resolve(result))
                    .catch(error => reject(error))
                    .finally(() => {
                        this.runningCount--;
                        if (this.queue.length > 0) {
                            this.executeNext();
                        }
                    });
            };

            if (this.runningCount < this.limit) {
                task();
            } else {
                this.queue.push(task);
            }
        });
    }

    executeNext() {
        const task = this.queue.shift();
        if (task) {
            task();
        }
    }
}

// 使用示例
const scheduler = new Scheduler(2);
const timeout = (time, value) =>
    new Promise(resolve => setTimeout(() => resolve(value), time));

const addTask = (time, value) => {
    return scheduler.add(() => timeout(time, value));
};

addTask(100, '任务 1').then(console.log);
addTask(200, '任务 2').then(console.log);
addTask(100, '任务 3').then(console.log);
addTask(800, '任务 4').then(console.log);
