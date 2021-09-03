import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, TypeTransactionButton } from './styles'

interface IProps {
    isOpen: boolean
    onRequestClose: () => void
}

const NewTransactionModal: React.FC<IProps> = ({ isOpen, onRequestClose }) => {
    const [transationType, setTransactionType] = useState('deposit')

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
            <Container>
                <h2>Nova transação</h2>

                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <TransactionTypeContainer>
                    <TypeTransactionButton
                        type="button"
                        transactionType={transationType as any}
                        defaultType="deposit"
                        onClick={() => setTransactionType('deposit')}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TypeTransactionButton>
                    <TypeTransactionButton
                        type="button"
                        transactionType={transationType as any}
                        defaultType="withdraw"
                        onClick={() => setTransactionType('withdraw')}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </TypeTransactionButton>
                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}

export { NewTransactionModal }