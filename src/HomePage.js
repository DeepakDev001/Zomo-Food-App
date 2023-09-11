import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import ZomoHome from './Components/ZomoHome'
import ZomoHomeFooter from './Components/ZomoHomeFooter'

const HomePage = () => {

    //================= Main_Return_Function ==============//
    return (
        <Fragment>
            <Container>
                <ZomoHome />
                <ZomoHomeFooter />
            </Container>
        </Fragment>
    )
}

export default HomePage
