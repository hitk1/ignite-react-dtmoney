import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionContext'
import { Container } from './styles'


const TransactionsTable: React.FC = () => {
    const { transactions } = useContext(TransactionsContext)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(item => {
                        console.log(item)
                        return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td className={item.transactionType}>
                                    {new Intl.NumberFormat('pt-BR',
                                        {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(item.amount)
                                    }
                                </td>
                                <td>{item.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(item.createdAt))}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}

export { TransactionsTable }