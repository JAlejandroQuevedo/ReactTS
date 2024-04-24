import React from 'react'
import { NavBarContainer } from '../navBar/NavBarContainer'

export const Header = ({ dataCart, setDataCart }) => {
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <NavBarContainer dataCart={dataCart} setDataCart={setDataCart} />
                </div>
            </div>
        </header>
    )
}
