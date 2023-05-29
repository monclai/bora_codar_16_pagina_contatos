import React from 'react'
import styled from 'styled-components'
import Cabecalho from '../src/Cabecalho';
import Contatos from '../src/Contatos';



export default function index() {
    return (
        <>
            <header>
                <Cabecalho />
            </header>
            <main>
                <Contatos />
            </main>

        </>
    )
}
