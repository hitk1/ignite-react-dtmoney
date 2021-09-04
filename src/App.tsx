import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionContext';

Modal.setAppElement('#root')

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
      />
    </TransactionsProvider>
  );
}

export default App;
