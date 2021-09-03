import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

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
    <>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}

export default App;
