export class Wallet {
  private money: number;
  private cards: string[];

  constructor() {
    this.money = 0;
    this.cards = [];
  }

  public getMoney() {
    return this.money;
  }

  public addMoney(value: number) {
    if (value < 0) {
      throw new Error("Money value must be positive");
    }
    this.money += value;
    return this;
  }

  public addCard(card: string) {
    this.cards.push(card);
    return this;
  }
}
