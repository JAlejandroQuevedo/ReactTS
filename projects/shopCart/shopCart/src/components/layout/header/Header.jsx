import React from 'react'
import { NavBarContainer } from '../navBar/NavBarContainer'

export const Header = ({ total }) => {
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <NavBarContainer total={total} />
                </div>
            </div>
        </header>
    )
}
