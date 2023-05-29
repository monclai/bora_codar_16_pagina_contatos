import React from 'react'
import styled from 'styled-components'

const BodyContacts = styled.div`
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

    ul{
        list-style: none;
    }

    .contacts{
        display: flex;
        flex-direction: column;
        gap: 5.2rem;
        
        height: 75vh;
        overflow-y: scroll;
    }

    .contacts::-webkit-scrollbar{
        width: .8rem;
    }

    .contacts::-webkit-scrollbar-thumb{
        background: #282843;
        border-radius: 99.9rem;
    }

    .letter{
        background-color: gray;

        width: 4rem;
        height: 4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: .8rem;

        margin-right: 5.2rem;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.9rem;

        background-color: var(--color);
    }

    .purple{
        --color: #633BBC;
    }

    .person{
        gap: 1.6rem;
    }

    img{
        width: 4.8rem;
        height: 4.8rem;
        object-fit: cover;
        border-radius: 50%;

        filter: opacity(90%)
    }

    h3{
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.9rem;
    }

    p{
        font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.4rem;

            color: #8C8CBA;

            margin-top: .4rem;
    }


    .green{
        --color: #07847E;
    }

    .pink{
        --color: #9A00B3;
    }

    .blue{
        --color: #0088B3;
    }

    .list-wrapper ul{
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }

    .list-wrapper{
        max-width: 35rem;
        width: 100%;
        margin-inline: auto;
    }
`

export default function Contatos() {
    return (
        <BodyContacts>
            <section className='container contacts'>
                {/* Letra A */}
                <div className="list-wrapper flex ">
                    <div className="letter purple">A</div>
                    <ul>
                        <li>
                            <div className="person flex">
                                <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="" />
                                <div className='contact'>
                                    <h3>Abraão Sena</h3>
                                    <p>(11) 90876-1234</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Letra B */}
                <div className="list-wrapper flex">
                    <div className="letter green">B</div>
                    <ul>
                        <li>
                            <div className="person flex">
                                <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="" />
                                <div className='contact'>
                                    <h3>Beatriz Clasen</h3>
                                    <p>(48) 90876-1123</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="person flex">
                                <img src="https://randomuser.me/api/portraits/women/6.jpg" alt="" />
                                <div className='contact'>
                                    <h3>Brenda Mendes</h3>
                                    <p>(21) 90876-8765</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Letra C */}
                <div className="list-wrapper flex">
                    <div className="letter pink">C</div>
                    <ul>
                        <li>
                            <div className="person flex">
                                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
                                <div className='contact'>
                                    <h3>Caio Vinícius</h3>
                                    <p>(71) 90876-2435</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="person flex">
                                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                                <div className='contact'>
                                    <h3>Cleiton Souza</h3>
                                    <p>(11) 90876-1209</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Letra D */}
                <div className="list-wrapper flex ">
                    <div className="letter blue">D</div>
                    <ul>
                        <li>
                            <div className="person flex">
                                <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
                                <div className='contact'>
                                    <h3>Daniel Duarte</h3>
                                    <p>(82) 90876-6534</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>
        </BodyContacts>
    )
}
