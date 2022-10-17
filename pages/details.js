import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header';
import Mainright from '../components/comm_right/Mainright';
import Footer from '../components/Footer';
import Blognav from '../components/comm_right/Blognav';
import Blogcontent from '../components/comm_left/Blogcontent';
import Bubblebg from '../components/BgBubble';
import Fixedbutton from '../components/Fixed_button';
import Breadcrumb from '../components/comm_left/Bread_crumb';
import axios from 'axios';
import { Col, Row } from 'antd';

import apiurl from '../api'

const Details = () => {
    // const { blogdata } = props
    const [blogdata, setBlogdata] = useState(null)
    const router = useRouter()
    const {blogid} = router.query
    // const { blogid } = router.query

    useEffect(() => {
        getBlogdata()
    },[])

    const getBlogdata = async () => {
        const res = await axios(apiurl.blogcontent + blogid)
        const result = res.data
        setBlogdata(result.data[0])
    }

    if (!blogdata) return null
    return (
        <>
            <Head>
                <title>Blog Articles{blogdata.id} | Your Blog Name</title>
                <meta name="description" content="YHnoZY Tech Blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            {/* /--------------------背景-----------------/ */}
            <Bubblebg />

            <Row className='comm-main' justify='center'>
                <Col className='comm-left' xs={23} sm={19} md={18} lg={13} xl={13}>

                    {/* --------------------面包屑-------------------- */}
                    <Breadcrumb id={blogdata.id} type={blogdata.type} />

                    {/* --------------------博客内容-------------------- */}
                    <Blogcontent bloginfo={blogdata} />
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={0} lg={7} xl={6}>
                    <Mainright />

                    {/* --------------------内容导航栏-------------------- */}
                    <Blognav markdown={blogdata.content} />
                </Col>
            </Row>

            {/* ---------------fixedbutton-------------------- */}
            <Fixedbutton />

            <Footer />
        </>
    )
}

//  For SSR
// export const getServerSideProps = async (ctx) => {
//     const res = await axios(apiurl.blogcontent + ctx.query.blogid)
//     const result = res.data
//     return {
//         props: {
//             blogdata: result.data[0]
//         }
//     }
// }

export default Details