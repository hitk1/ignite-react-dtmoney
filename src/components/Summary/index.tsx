import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionContext'

import { Container } from "./styles"

const Summary: React.FC = () => {
    const data = useContext(TransactionsContext)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- R$200,00</strong>
            </div>
            <div className="hightlighted">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$800,00</strong>
            </div>
        </Container>
    )
}

export { Summary }