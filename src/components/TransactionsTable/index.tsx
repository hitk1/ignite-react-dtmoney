import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

const TransactionsTable: React.FC = () => {

    useEffect(() => {

        api.get('/transactions')
            .then(response => {
                const { data } = response

            })
    }, [])

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
                    <tr>
                        <td>Desenvolivmento de app mobile</td>
                        <td className="deposit">R$8.000</td>
                        <td>Desenvolvimento</td>
                        <td>30/08/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export { TransactionsTable }