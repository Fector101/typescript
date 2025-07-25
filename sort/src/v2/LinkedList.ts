import { Sorter } from "./Sorter";

class Node {
    next: Node | null = null
    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null;
    add(data: number): void {
        const node = new Node(data)
        if (!this.head) {
            this.head = node;
            return
        }
        let tail = this.head
        while (tail.next) {
            tail = tail.next
        }
        tail.next = node
    }

    public get length(): number {
        if (!this.head) return 0

        let length = 1
        let node = this.head;
        while (node.next) {
            length++
            node = node.next
        }
        return length
    }

    at(index: number): Node {
        if (!this.head) { throw new Error("Index out of bounds") }

        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node
            }
            counter++
            node = node.next
        }

        throw new Error("Index out of bounds")
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) { throw new Error("List is empty") }
        return this.at(leftIndex).data > this.at(rightIndex).data
    }

    swap(leftIndex: number, rightIndex: number): void {
        const left_node = this.at(leftIndex)
        const right_node = this.at(rightIndex)

        const left_hand = left_node.data
        left_node.data = right_node.data
        right_node.data = left_hand
    }

    print(): void {
        if (!this.head) { return }

        let node: Node | null = this.head
        while (node) {
            console.log(node.data);
            node = node.next
        }
    }
}