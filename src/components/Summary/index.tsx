import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

import { Container } from "./styles"

const Summary: React.FC = () => {
    const { transactions } = useTransactions()

    const summary = transactions.reduce((prev, curr) => {

        if (curr.transactionType === 'deposit') {
            prev.deposits += curr.amount
            prev.total += curr.amount
        } else {
            prev.withdraws += curr.amount
            prev.total -= curr.amount
        }

        return prev
    },
        {
            deposits: 0,
            withdraws: 0,
            total: 0
        }
    )

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)
                }</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)
                }</strong>
            </div>
            <div className="hightlighted">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)
                }</strong>
            </div>
        </Container>
    )
}

export { Summary }