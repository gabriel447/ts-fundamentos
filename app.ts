import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.getLoan(500)
companyAccount.withdraw(150)
companyAccount.getBalance()

const bonusAccount: BonusAccount = new BonusAccount('Bonus', 30)
bonusAccount.deposit(100)
bonusAccount.withdraw(50)
bonusAccount.getBalance()
