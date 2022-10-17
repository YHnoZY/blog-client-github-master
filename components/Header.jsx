import React from 'react';
import { Col, Row, Menu, Switch } from 'antd';
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    AlertFilled,
    BulbFilled
} from '@ant-design/icons';

const Header = ({ setbgcolor }) => {
    const [themetype, settheme] = React.useState('light')
    const [themeclass, setthemeclass] = React.useState(false)

    const changetheme = () => {
        setbgcolor()
        settheme(themetype === 'light' ? 'dark' : 'light')
        setTimeout(() => { setthemeclass(themeclass ? false : true) }, 120)
    }

    const Menu_items = [
        { label: '菜单项', key: 'item-1', icon: <AppstoreOutlined />, },
        { label: '菜单项', key: 'item-2', icon: <MailOutlined />, disabled: true },
        { label: '菜单项', key: 'item-3', icon: <SettingOutlined />, }
    ];

    return (
        <div className={'header' + (themeclass ? " header-dark" : "")}>
            <Row justify='center'>
                <Col xs={20} sm={14} md={12} lg={12} xl={13}>
                    <span className='header-logo'>Your Blog Name</span>
                    <span className='header-text'></span>
                    {/* <Switch
                        className='theme-switch'
                        size="small"
                        defaultChecked
                        onClick={changetheme}
                        checkedChildren={<AlertFilled />}
                        unCheckedChildren={<BulbFilled />}
                    /> */}
                </Col>
                <Col xs={2} sm={4} md={6} lg={6} xl={6}>
                    {/* <Menu className='header-menu' mode='horizontal' items={Menu_items} theme={themetype} /> */}
                </Col>
            </Row>
        </div>
    )
}

export default Header