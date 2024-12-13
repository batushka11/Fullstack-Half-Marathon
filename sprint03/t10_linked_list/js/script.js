class LinkedList{
    data;
    next;

    add(value) {
        if (!this.data) {
            this.data = value;
            this.next = null;
        } else {
            let cur = this;
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = { data: value, next: null };
        }
    }

    remove(value) {
        if (!this.data) {
            return false;
        }
        if (this.data === value) {
            this.data = this.next ? this.next.data : null;
            this.next = this.next ? this.next.next : null;
            return true;
        }
        let cur = this;
        while (cur.next !== null) {
            if (cur.next.data === value) {
                cur.next = cur.next.next;
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    contains(value){
        let cur = this;
        while(cur !== null){
            if(cur.data === value){
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    clear(){
        this.data = null;
        this.next = null;
    }

    *[Symbol.iterator]() {
        let cur = this;
        while (cur !== null) {
            yield cur.data;
            cur = cur.next;
        }
    }

    count(){
        let cnt = 0;
        let cur = this;
        while(cur !== null){
            cnt++;
            cur = cur.next;
        }
        return cnt;
    }

    log(){
        let result = '';
        if(this.data !== null){
            let cur = this;
            while(cur !== null){
                if(!(cur.next === null)){
                    result += cur.data + ", ";
                }
                else{
                    result += cur.data;
                }
                cur = cur.next;
            }
            console.log(result);
        }
        else{
            console.log("");
        }
    }
}

function createLinkedList(arr){
    let list = new LinkedList();
    for(let i in arr){
        list.add(arr[i]);
    }
    return list;
}