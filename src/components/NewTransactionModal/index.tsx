import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionContext'
import { Container, TransactionTypeContainer, TypeTransactionButton } from './styles'

interface IProps {
    isOpen: boolean
    onRequestClose: () => void
}

const NewTransactionModal: React.FC<IProps> = ({ isOpen, onRequestClose }) => {
    const { createTransaction } = useContext(TransactionsContext)

    const [transactionType, setTransactionType] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)

    const clearState = () => {
        setTitle('')
        setCategory('')
        setAmount(0)
        setTransactionType('')
    }

    const handleCreateNewTransaction = async (e: FormEvent) => {
        e.preventDefault()

        await createTransaction({
            title,
            transactionType,
            amount,
            category
        })

        clearState()
        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                className="react-modal-close"
                type="button"
                onClick={onRequestClose}
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container
                onSubmit={handleCreateNewTransaction}
            >
                <h2>Nova transação</h2>

                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <TypeTransactionButton
                        type="button"
                        transactionType={transactionType as any}
                        defaultType="deposit"
                        onClick={() => setTransactionType('deposit')}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TypeTransactionButton>
                    <TypeTransactionButton
                        type="button"
                        transactionType={transactionType as any}
                        defaultType="withdraw"
                        onClick={() => setTransactionType('withdraw')}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </TypeTransactionButton>
                </TransactionTypeContainer>
                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}

export { NewTransactionModal }