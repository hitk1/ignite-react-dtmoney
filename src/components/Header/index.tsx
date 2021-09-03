import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface IProps {
    onOpenModal: () => void
}

const Header: React.FC<IProps> = ({ onOpenModal }) => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Dt money" />
                <button
                    type="button"
                    onClick={onOpenModal}
                >
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}


export { Header }