class MySet {
    constructor(arr) {
        this.arr = []
        for (const el of arr) {
            if (!this.arr.includes(el)) {
                this.arr.push(el)
            }
        }
    }

    add(val) {
        if (!this.arr.includes(val)) {
            this.arr.push(val)
        }
    }

    delete(val) {
        const index = this.arr.indexOf(val);
        index > -1 && this.arr.splice(index, 1)
    }

    has(val) {
        return this.arr.includes(val)
    }
}