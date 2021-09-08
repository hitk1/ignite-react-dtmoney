import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface ITransaction {
    id: number
    title: string
    amount: number
    transactionType: string
    category: string
    createdAt: string
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionContext {
    transactions: ITransaction[],
    createTransaction: (transaction: ITransactionInput) => Promise<void>
}

const TransactionsContext = createContext<ITransactionContext>({} as ITransactionContext)

const TransactionsProvider: React.FC = ({ children }) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const createTransaction = async (transaction: ITransactionInput) => {
        const response = await api.post('/transactions', transaction)
        const { transaction: createdTransaction } = response.data

        setTransactions([
            ...transactions,
            createdTransaction
        ])
    }

    useEffect(() => {
        api.get('/transactions')
            .then(response => {
                const { data } = response

                console.log(data)
                setTransactions(data.transactions)
            })
    }, [])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

const useTransactions = () => {
    const context = useContext(TransactionsContext)

    return context
}

export { useTransactions, TransactionsProvider }