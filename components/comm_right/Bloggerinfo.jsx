import React, { useState } from 'react'
import Image from 'next/image'
import { Avatar, Card, Tooltip, notification } from 'antd'
import {
    GithubOutlined,
    WechatFilled,
    TwitterOutlined,
    QqOutlined,
    LinkedinOutlined
} from '@ant-design/icons';
const { Meta } = Card;

const Bloggerinfo = () => {
    // const [wechatconopen,setWechatconopen] = useState(false)

    const openNotification = () => {
        const args = {
            message: '微信QRcode',
            description:<img src='/wechat.png' alt="wechat_qrcode" style={{width:'200px',marginLeft:'70px'}}/>,
            duration: 0,
            placement:'bottom'
        };
        notification.open(args);
    }

    return (
        <>
            <div className='bloggerinfo'>
                <div className="mdui-card">
                    <div className="mdui-card-media">
                        <img src='/IMG.png' alt="cardback" layout='fill' />
                        <div className="mdui-card-media-covered">
                            <div className="mdui-card-primary">
                                <img className="mdui-card-primary-avatar" src="/zhuanzhuan.gif" alt="avatar" />
                                <div className="mdui-card-primary-title" style={{ fontSize: '18px' }}><span className='color-logo'>博主: </span>Your Name</div>
                                <div className="mdui-card-primary-subtitle">The mountain of books has a way, the sea of learning is endless</div>
                            </div>
                            <div className="mdui-card-actions">
                                <button className="mdui-btn">This person is lazy and hasn't written a profile yet 👻~</button>
                                <br />
                                <button className="mdui-btn">
                                    <a href="Your administrative backend domain name">
                                        Admin
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='socialcount'>
                    <Tooltip placement="bottom" color="#0188fb" title="QQ">
                        <Avatar size={35} style={{ backgroundColor: '#0188fb' }} icon={<QqOutlined style={{ fontSize: '23px' }} />} />
                    </Tooltip>
                    <Tooltip placement="bottom" color="#87d068" title="Wechat">
                        <Avatar onClick={openNotification} size={35} style={{ backgroundColor: '#87d068' }} icon={<WechatFilled style={{ fontSize: '23px' }} />} />
                    </Tooltip>
                    <Tooltip placement="bottom" color="#252a2f" title="GitHub: your GitHub">
                        <a href="https://github.com/">
                            <Avatar size={35} style={{ backgroundColor: '#252a2f' }} icon={<GithubOutlined style={{ fontSize: '24px' }} />} />
                        </a>
                    </Tooltip>
                    <Tooltip placement="bottom" color="#1d9bf0" title="Twitter: 暂未提供">
                        <Avatar size={35} style={{ backgroundColor: '#1d9bf0' }} icon={<TwitterOutlined style={{ fontSize: '23px' }} />} />
                    </Tooltip>
                    <Tooltip placement="bottom" color="#0b66c1" title="InLink: 暂未提供">
                        <Avatar size={35} style={{ backgroundColor: '#0b66c1' }} icon={<LinkedinOutlined style={{ fontSize: '23px' }} />} />
                    </Tooltip>
                </div>
            </div>
        </>
    )
}

export default Bloggerinfo