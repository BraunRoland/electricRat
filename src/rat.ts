export class Rat {
    name: string;
    atk: number;
    hp: number;
    constructor(name: string, atk: number, hp: number) {
        if (name == undefined || name == null || name == "") {
            throw new Error("Nem lehet üres a név!");
        }
        else if (atk < 10 || atk > 20) {
            throw new Error("nem megfelelő a támadás mennyisége!");
        }
        else if (hp < 50 || hp > 100) {
            throw new Error("nem megfelelő az élet mennyisége!");
        }
        
        this.name = name;
        this.atk = atk;
        this.hp = hp;
    }   

    toCSV() {
        return `${this.name};${this.atk};${this.hp}`
    }
}