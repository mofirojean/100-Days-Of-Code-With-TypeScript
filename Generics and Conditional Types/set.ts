// creating a Set ADT with Generics
class SetADT<T> {
    private _items: T[];

    constructor(initializeItems: T[] = []) {
        this._items = initializeItems;
    }

    // return the size of the 
    get size(): number {
        return this._items.length
    }

    // check if the set contains an item "i"
    has(item: T): boolean {
        return this._items.includes(item);
    }

    add(item: T): void {
        if (!this.has(item)) {
            this._items.push(item);
        }
    }

    remove(item: T): void {
        const itemIndex = this._items.indexOf(item);
        if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
        }
    }
}
