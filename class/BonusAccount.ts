import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.increaseBalance(value + 10)
      console.log('Voce depositou')
    }
  }
}
