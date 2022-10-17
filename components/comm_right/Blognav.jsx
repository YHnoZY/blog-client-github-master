import MDNav from 'markdown-navbar';
import { Affix } from 'antd';

const Blognav = ({markdown}) => {
    return (
        <Affix offsetTop={5}>
            <div className="details-nav">
                <div className="nav-title">文章目录</div>
                <MDNav
                    className="article-menu"
                    source={markdown}
                    ordered={false}
                />
            </div>
        </Affix>
    )
}

export default Blognav
