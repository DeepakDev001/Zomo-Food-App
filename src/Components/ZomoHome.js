import React, { Fragment, useState } from 'react'
import { ChevronLeft, Clock, Heart, MapPin, Search, Share2, Star } from 'react-feather'
import { Container } from 'reactstrap'
import OfferImg from '../Img/OfferImg.png'
import ZomoCardSection from './ZomoCardSection'

const ZomoHome = () => {

    //================== start_Coupan_dummy_Data ================//
    const CoupanDummyData = [
        {
            img: OfferImg,
            price: "$25",
            offerPer: "50% OFF upto",
            cupanCode: "Use Code MEFRGD124"
        },
        {
            img: OfferImg,
            price: "$10",
            offerPer: "10% OFF upto",
            cupanCode: "Use Code MEFRGD9835"
        }
    ]
    const [show, setShow] = useState(false)
    //================== end_Coupan_dummy_Data ================//

    //================ Main_Return_Function================//
    return (
        <Fragment>
            <Container>
                <div className='Zomo_TopSection' >
                    <div className='Zomo_Left_Section' >
                        <ChevronLeft size={15} color='#ffff' />
                    </div>
                    <div className='Zomo_Right_Section'>
                        <Search size={15} color='#ffff' />
                    </div>
                </div>
                <div className='Zomo_Card_Container'>
                    <div className='Zomo_Details-Card'>
                        <div className='Zomo_Head_Section'>
                            <div className='d-flex'>
                                <img src='https://themes.pixelstrap.com/zomo-app/assets/images/icons/brand3.png' alt='img' />
                                <div className=" ms-2">
                                    <h3>Starbucks</h3>
                                    <h6>Coffee</h6>
                                </div>
                            </div>
                            <div>
                                <Share2 size={20} color='#212529' />
                                <Heart size={20} fill='#dc3545' color='#dc3545' className='ml-2' />
                            </div>
                        </div>
                        <div className='Zomo_details'>
                            <div className='Location' >
                                <Star size={13} /> 3.7 (1k+ Reviews)
                            </div>
                            <div className="Distance">
                                <MapPin size={14} /> 1 km
                                <Clock size={14} /> 15 min
                            </div>
                        </div>
                    </div>
                    <div className='Zomo_Coupan_Section'>
                        {
                            CoupanDummyData.map((data) => (
                                <div className='Zomo_Offer_Box' >
                                    <img src={data.img} alt="offer" />
                                    <div className="ZomoOffer_content ml-2">
                                        <h5>{data.offerPer} &amp; {data.price}</h5>
                                        <h6 class="light-text">{data.cupanCode}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <ZomoCardSection />
            </Container>
        </Fragment>
    )
}

export default ZomoHome
