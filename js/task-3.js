class Storage {
    constructor (items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        
        this.items.push(item);
    }

    removeItem(item) {
        for (const element of this.items)
        {
            if (element === item) {
                this.items.splice(this.items.indexOf(element), 1);
            }
        }
    }


};
const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]