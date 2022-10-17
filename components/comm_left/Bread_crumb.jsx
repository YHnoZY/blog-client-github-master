import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { HomeOutlined, FolderOpenOutlined } from '@ant-design/icons';
const Bread_crumb = ({type = '', id = ''}) => {
    return (
        <div className='breadcrumb-div'>
            <Breadcrumb>
                <Breadcrumb.Item><a href="/"><HomeOutlined />主页</a></Breadcrumb.Item>
                {type ? <Breadcrumb.Item><FolderOpenOutlined />{type}</Breadcrumb.Item> : null}
                {id ? <Breadcrumb.Item>博客页{id}</Breadcrumb.Item> : null}
            </Breadcrumb>
        </div>
    )
}
export default Bread_crumb