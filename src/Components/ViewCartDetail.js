import React, { Fragment, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { NavLink } from 'react-router-dom'
import { Button, Container } from 'reactstrap'
import ZomoHomeFooter from './ZomoHomeFooter'
import { ViewCardDetail } from './DummyData'

const ViewCartDetail = () => {

    const [count, setCount] = useState(Array(ViewCardDetail.length).fill(0)); // Initialize an array of counts for each card
    const UpdateInc = (index) => {
        const updatedCounts = [...count];
        updatedCounts[index]++;
        setCount(updatedCounts);
    };

    const UpdateDec = (index) => {
        if (count[index] > 0) {
            const updatedCounts = [...count];
            updatedCounts[index]--;
            setCount(updatedCounts);
        }
    };

    //======================= Main_Return_Function ====================//
    return (
        <Fragment>
            <Container>
                <div className='View_Detail_Box mb-5'>
                    <div className='View_Detail_container'>
                        <div className='View_Detail_HeadSection' >
                            {/* <NavLink to='/'>
                                <ChevronLeft />
                            </NavLink> */}
                            <h2>Starbucks</h2>
                        </div>
                        <div className='View_Detail_Box '>
                            <h3 style={{ fontSize: "16px" }}>Food Categories</h3>
                            {ViewCardDetail.map((data, index) => (
                                <div className='View_Detail_CardBox mt-3' key={index}>
                                    <div className='Card_Left_Section'>
                                        <img src={data.imgdata} alt='img' className='img-fluid' />
                                        <div className="product_content ml-3">
                                            <h5>Mexican Shred Beef</h5>
                                            <h6>Hot beef stick</h6>
                                            <div className='View_Detail_Product_Btn'>
                                                <span onClick={() => UpdateDec(index)}>-</span>&nbsp;&nbsp;{count[index]}&nbsp;&nbsp;<span onClick={() => UpdateInc(index)}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Card_Right_Section'>
                                        <img src={data.arrimg} alt="symbol" />
                                        <h3 >$40</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='View_Detail_Box'>
                            <div className='Apply_coupon' >
                                <div>
                                    <h5 >Apply Coupon</h5>
                                    <h6 >#GOOGLE20</h6>
                                </div>
                                <div>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className='View_Detail_Box'>
                            <h3 style={{ fontSize: "16px" }} >Bill Details</h3>
                            <div class="ZomoTotal_detail mt-3">
                                <div className="ZomoSub_total">
                                    <h5>Sub Total</h5>
                                    <h5 style={{ fontWeight: "bold" }}>$58</h5>
                                </div>
                                <div className='Zomo_Delivery_blk mt-3'>
                                    <h5 >Delivery Charge (2 kms)</h5>
                                    <h5 style={{ color: "#ff8d2f" }} >Free</h5>
                                </div>
                                <h6 className=" mt-2">Save $5 on Delivery fee by ordering above $30</h6>
                                <div className="ZomoSub_total pb-3">
                                    <h5>Discount (20%)</h5>
                                    <h5 style={{ fontWeight: "bold" }}>$9.6</h5>
                                </div>
                                <div className="ZomoGrand_total">
                                    <h5 >Grand Total</h5>
                                    <h5 style={{ color: "#ff8d2f" }} >$48.4</h5>
                                </div>
                            </div>
                        </div>
                        <div className='View_Detail_Box Bottom_Section'>
                            <h3 style={{ fontSize: "16px" }}>Delivery Address</h3>
                            <div className="ZomoCart_add_box mt-3 mb-5">
                                <div className="ZomoCard_left_Blk d-flex">
                                    <img className="img-fluid img" src="https://themes.pixelstrap.com/zomo-app/assets/images/home.png" alt="rp1" />
                                    <div class="ZomoAdd_Card_Content ml-3">
                                        <h5 class="fw-semibold dark-text">Deliver to : Home</h5>
                                        <h6 class="address light-text mt-1">1901 Thornridge Cir. Shiloh, Hawaii 81063</h6>

                                    </div>
                                </div>

                                <p style={{ color: "#ff8d2f" }}>Change</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cart-popup'>
                    <div className='Zomo_Price_item' >
                        <h3>$18</h3>
                        <h6>2 item Added</h6>
                    </div>
                    <NavLink to='/ViewCartDetail' >
                        <Button className='Zomo_View_Cart_Btn'  >
                            Pay Now
                        </Button>
                    </NavLink>
                </div>
            </Container>
        </Fragment>
    )
}

export default ViewCartDetail
