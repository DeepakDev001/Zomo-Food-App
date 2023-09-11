import React, { Fragment, useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import { Cardsdata } from './DummyData'
import { Rating } from '@mui/material'

const ZomoCardSection = () => {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(Array(Cardsdata.length).fill(0)); // Initialize an array of counts for each card
    const [changeBtn, setChangeBtn] = useState(Array(Cardsdata.length).fill(false)); // Initialize an array of button states for each card

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

    const [page, setPage] = useState()
    //================== Main_return_Functon =====================//
    return (
        <Fragment>
            <div className='Zomo_Card_Main_Section'>
                <div className='Zomo_Card_Head_blk'>
                    <h6>Recommended</h6>
                </div>
                <div className='Zomo_Card_Accordin_blk' >
                    <h6>
                        Feature Food (04)
                    </h6>
                    {!show ?
                        <ChevronDown size={24} style={{ cursor: "pointer" }} onClick={() => setShow(!show)} /> :
                        <ChevronUp size={24} style={{ cursor: "pointer" }} onClick={() => setShow(!show)} />
                    }
                </div>
                {
                    !show ?
                        <Fragment>
                            <div className='Bottom_Section'>
                                {
                                    Cardsdata.map((data, index) => (
                                        <div class="Zomo_Product_blk mt-4 " key={index} >
                                            <div class="ZomoProduct-content">
                                                <img src={data.arrimg} alt="symbol" />
                                                <h5 >{data.rname}</h5>
                                                <div className="Zomo_Product_Rating gap-1">
                                                    <Rating name="read-only" value={data.rating} readOnly />
                                                    <h5>1k+ Rating</h5>
                                                </div>
                                                <div className="ZomoPoduct_price">
                                                    <h6><span>{data.price}</span> / $12</h6>
                                                </div>
                                                <p className="mb-1 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                                            </div>
                                            <div className="ZomoProduct-img">
                                                <img src={data.imgdata} alt="rp1" className='img-fluid' />
                                                {!changeBtn[index] ?
                                                    <Fragment>
                                                        <div className='Zomo_Product_Btn' onClick={() => {
                                                            const updatedChangeBtn = [...changeBtn];
                                                            updatedChangeBtn[index] = true;
                                                            setChangeBtn(updatedChangeBtn);
                                                        }}>
                                                            +Add
                                                        </div>
                                                    </Fragment> :
                                                    <div className='Zomo_Product_Btn'>
                                                        <span onClick={() => UpdateDec(index)}>-</span>&nbsp;{count[index]}&nbsp;<span onClick={() => UpdateInc(index)}>+</span>
                                                    </div>
                                                }


                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </Fragment> : null
                }

            </div >
        </Fragment >
    )
}

export default ZomoCardSection
