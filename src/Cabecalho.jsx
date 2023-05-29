import React from 'react'
import styled from 'styled-components'

const CabecalhoBody = styled.div`
    background-color: #16151E;
    padding: 40px;
    
    ul{
        list-style: none;
    }


    .flex{
        display: flex;
    }


    /* Verificar se foi usado no final do projeto */
    .container{
        padding: 40px;
    }

    .itens-center{
        align-items: center;
    }


    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.3rem;
    }

    nav{
        justify-content: space-between;
    }

    ul{
        gap: 1.6rem;
    }

    li{
        font-size: 2.4rem;
    }

    form{
        margin-top: 2.4rem;
    }

    .sr-only{
        position: absolute;
        width: .1rem;
        height: .1rem;
        padding: 0;
        margin: -.1rem;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border-width: 0;
    }

    .input-wrapper{
        gap: 1rem;

        background-color: #24243D;
        border-radius: .5rem;
        padding: 1.6rem 2.4rem;
    }

    .input-wrapper:focus-within{
        outline: .2rem #fff solid;
    }

    input{
        background-color: transparent;
        border: 0;
        width: 100%;
        outline: none;

        font-size: 1.2rem;
        line-height: 1.4rem;

        color: #E1E1E6;
    }

    input-wrapper ion-icon{
        font-size: 1.6rem;
    }

    input::placeholder{
        color: #E1E1E6;
    }

    nav,
    form{
        max-width: 35rem;
        width: 100%;
        margin-inline: auto;
    }

`;

export default function Cabecalho() {
    return (
        <CabecalhoBody >
            <nav className='flex itens-center'>
                <h2>Meus contatos</h2>
                <ul className='flex itens-center'>
                    <li>
                        <ion-icon name="add" />
                    </li>
                    <li>
                        <ion-icon name="pencil" />
                    </li>
                    <li>
                        <ion-icon name="trash" />
                    </li>
                </ul>
            </nav>

            <form>
                <div className='input-wrapper flex itens-center'>
                    <label className='sr-only' htmlFor="filter">Busque por nome ou por dados de contato...</label>
                    <ion-icon name="search" />
                    <input type="text" id='filter' placeholder='Busque por nome ou por dados de contato...' />
                </div>
            </form>

        </CabecalhoBody>
    )
}
