import { Popover, message } from 'antd';
import { SettingOutlined, InfoCircleOutlined } from '@ant-design/icons';

const Fixed_button = () => {
    return (
        <div className="fixed-widgets">
            <span
                className="zhuanzhuan ant-avatar ant-avatar-circle ant-avatar-icon ant-dropdown-trigger fixed-widgets-avatar"
                onClick={() => message.warning('dev version')}
            >
                <SettingOutlined />
            </span>
            <span
                className="ant-avatar ant-avatar-circle ant-avatar-icon ant-dropdown-trigger fixed-widgets-avatar"
            >
                <a href="#top" style={{ color: 'white' }}>UP</a>
            </span>
            <span
                className="ant-avatar ant-avatar-circle ant-avatar-icon ant-dropdown-trigger fixed-widgets-avatar"
            >
                <Popover content={(
                    <div>
                        <p>Tech Blog：v0.9.0(Dev)</p>
                    </div>
                )}
                    placement="leftBottom"
                    trigger="click"
                >
                    <InfoCircleOutlined />
                </Popover>
            </span>
        </div>
    )
}
export default Fixed_button