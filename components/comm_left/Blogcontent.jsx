import { marked } from 'marked'
import hljs from "highlight.js";
import {
    CalendarOutlined,
    FolderOpenOutlined,
    EyeOutlined
} from '@ant-design/icons';

const Blogcontent = ({ bloginfo }) => {
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
        <div>
            <div className='details-title'>{bloginfo.title}</div>
            <div className="list-icon center">
                <span><CalendarOutlined /> {bloginfo.time}</span>
                <span><FolderOpenOutlined /> {bloginfo.type}</span>
                <span><EyeOutlined /> {bloginfo.view}次观看</span>
            </div>
            <div
                className='details-content'
                dangerouslySetInnerHTML={{ __html: marked(bloginfo.content) }}
            >
            </div>
        </div>
    )
}

export default Blogcontent