enum Fruit {
    APPLE = "apple",
    BANANA = "banana",
    ORANGE = "orange",
    GRAPE = "grape",
    WATERMELON = "watermelon"
}

type PersonInfo = {
    name: string;
    age: number;
    gender: string;
    address: string;
    favorite_fruit: Fruit;
    print(): void;
}

const AlimaInfo: PersonInfo = {
    name: "Kaila Marie Alima",
    age: 21,
    gender: "Female",
    address: "Blk. 67 Lot 9 Phase 4 Malvar St. Upper Bicutan, Taguig City",
    favorite_fruit: Fruit.WATERMELON,
    print(): void {
      console.log(`
      Name: ${this.name}, 
      Age: ${this.age}, 
      Gender: ${this.gender}, 
      Address: ${this.address},
      Favorite Fruit: ${this.favorite_fruit}`);
    }
  };

  AlimaInfo.print();