import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

const ZomoHomeFooter = () => {

    //============== Main_Return_Function =================//
    return (
        <Fragment>
            <Container>
                <div className='cart-popup'>
                    <div className='Zomo_Price_item' >
                        <h3>$18</h3>
                        <h6>2 item Added</h6>
                    </div>
                    <NavLink to='/ViewCartDetail' >
                        <Button className='Zomo_View_Cart_Btn'  >
                            View Cart"
                        </Button>
                    </NavLink>
                </div>
            </Container>
        </Fragment>
    )
}

export default ZomoHomeFooter
