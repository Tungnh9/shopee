import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderOnlyProps {
    title: string;
    children: React.ReactElement;
}

function HeaderOnly(props: HeaderOnlyProps) {
    const { title = 'Đăng ký', children } = props;

    return (
        <div className="">
            <div className="header">
                <div className="header-left">
                    <span>Logo</span>
                    <span>{title}</span>
                </div>
                <div className="header-right">
                    <Link to={'/support'}>Bạn cần giúp đỡ?</Link>
                </div>
            </div>
            <div className="content"></div>
        </div>
    );
}

export default HeaderOnly;
