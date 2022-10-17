import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import axios from 'axios';
import Header from '../components/Header';
import Bloglists from '../components/Bloglists';
import Mainright from '../components/comm_right/Mainright';
import Footer from '../components/Footer';
import Bubblebg from '../components/BgBubble';
import Fixedbutton from '../components/Fixed_button';
import Breadcrumb from '../components/comm_left/Bread_crumb';
import { Col, Row } from 'antd';

import apiurl from '../api'

function Home() {
    const [bgcolor, setbgcolor] = React.useState('f6f6f6')
    const [datalist, setDatalist] = useState(null)
    
    useEffect(() => {
        getDatalist()
    },[])
    
    const getDatalist= async() => {
        const res = await axios.get(apiurl.bloglist)
        const result = res.data
        setDatalist(result.data)
    }

    function changebgcolor() {
        setbgcolor(bgcolor === 'f6f6f6' ? '0c192c' : 'f6f6f6')
    }

    if(!datalist) return null
    return (
        <>
            <Head>
                <title>渊海个人博客</title>
                <meta name="description" content="YHnoZY Tech Blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header setbgcolor={changebgcolor} />

            {/* /--------------------背景-----------------/ */}
            <Bubblebg />

            <Row className='comm-main' justify='center'>
                <Col className='comm-left' xs={23} sm={19} md={18} lg={13} xl={13}>

                    {/* --------------------面包屑-------------------- */}
                    <Breadcrumb/>

                    {/* --------------------博客列表-------------------- */}
                    <Bloglists datalist={datalist} />

                </Col>
                <Col className='comm-right' xs={0} sm={0} md={0} lg={7} xl={6}>
                    {/* ---------------------右侧栏--------------------- */}
                    <Mainright />

                </Col>
            </Row>

            {/* ---------------fixedbutton-------------------- */}
            <Fixedbutton/>

            <Footer />

            <style global jsx>{`
                body {
                    background-color: #${bgcolor};
                }
            `}</style>
        </>
    )
}

export default Home
