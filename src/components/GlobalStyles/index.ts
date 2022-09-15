import React from 'react';
import './GlobalStyles.scss';

interface GlobalStylesProps {
    children: React.ReactElement
}

function GlobalStyles(props: GlobalStylesProps) {
    const { children } = props;
    
    return children
}

export default GlobalStyles;