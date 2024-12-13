const LLData = require('./LLdata');

class LList {
    constructor() {
        this.head = null;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        return current;
    }

    add(value) {
        const newNode = new LLData(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let last = this.getLast();
            last.next = newNode;
        }
    }

    addFromArray(arrayOfData) {
        arrayOfData.forEach(value => this.add(value));
    }

    remove(value) {
        if (!this.head) return;

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    removeAll(value) {
        while (this.head && this.head.data === value) {
            this.head = this.head.next;
        }

        let current = this.head;
        while (current && current.next) {
            if (current.next.data === value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) return true;
            current = current.next;
        }
        return false;
    }

    clear() {
        this.head = null;
    }

    count() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    toString() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result.join(',');
    }

    getIterator() {
        let current = this.head;
        return {
            next: function() {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return { value: value, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }

    filter(callback) {
        let filteredList = new LList();
        let current = this.head;
        while (current) {
            if (callback(current.data)) {
                filteredList.add(current.data);
            }
            current = current.next;
        }
        return filteredList;
    }

    [Symbol.iterator]() {
        return this.getIterator();
    }
}

module.exports.LList = LList;