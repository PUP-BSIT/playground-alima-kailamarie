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
    favotite_fruit: Fruit;
    print(): void;
}