import React from 'react'
import Link from 'next/link'
import { List } from 'antd'
import { marked } from 'marked'
import hljs from "highlight.js";
import {
    CalendarOutlined,
    FolderOpenOutlined,
    EyeOutlined
} from '@ant-design/icons';

const Bloglists = ({ datalist }) => {
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    return (
        <List
            header={<div className='mainleft-header'>最新博客</div>}
            itemLayout="vertical"
            dataSource={datalist}
            renderItem={item => {

                return (
                    <List.Item>
                        <div className="list-title">
                            <Link
                                href={{
                                    pathname: '/details',
                                    query: {
                                        blogid: item.id
                                    }
                                }}>
                                <a>{item.title}</a>
                            </Link>
                        </div>
                        <div className="list-icon">
                            <span><CalendarOutlined /> {item.time}</span>
                            <span><FolderOpenOutlined /> {item.type}</span>
                            <span><EyeOutlined /> {item.view}次观看</span>
                        </div>
                        <div
                            className="list-context"
                            dangerouslySetInnerHTML={{ __html: marked(item.intro) }}
                        ></div>
                    </List.Item>
                )
            }}
        />

    )
}
export default Bloglists