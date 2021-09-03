import styled from 'styled-components'
import { darken, transparentize } from 'polished'

interface ITransactionType {
    transactionType: 'deposit' | 'withdraw'
    defaultType: 'deposit' | 'withdraw'
}

const colors = {
    deposit: '#33CC95',
    withdraw: '#E5234D'
}

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #D7D7D7;
        background: #E7E9EE;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }
    
    button[type="submit"] {
            width: 100%;
            height: 4rem;
            
            padding:0 1.5rem;
            margin-top: 1rem;

            background: var(--green);
            color: #FFF;

            border-radius: .25rem;
            border: 0;

            font-size: 1rem;
            font-weight: 600;
            transition: filter .2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;
`

export const TypeTransactionButton = styled.button<ITransactionType>`
        height: 4rem;

        border: 1px solid #D7D7D7;
        border-radius: .25rem;

        background: ${props =>
        props.transactionType === props.defaultType
            ? transparentize(.9, colors[props.transactionType])
            : 'transparent'
    };

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: border-color .2s;

        &:hover {
            border-color: ${darken(0.1, '#D7D7D7')};
        }

        img {
            height: 20px;
            width: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`