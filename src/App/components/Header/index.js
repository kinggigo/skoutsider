// base
import React from 'react';
import { NavLink } from 'react-router-dom';

// assets
import './header.scss';

const Header = (props) => {
    return (
        <header className={"Header"}>
            <div className="l-wrapper u-clearfix">
                <p>header/index 부분</p>
                <p> 여기에 버튼 하나씩 넣어서 그걸로 각 페이지 만들꺼임</p>
                <p> {props.naeyoung}</p>
                <nav>
                    <NavItem link="" title="TODO DashBoard" />
                    <NavItem link="/Game" title="위젯그리드 1" />
                    <NavItem link="/Lol" title="위젯그리드 2" />
                    <NavItem link="/widjet" title="위젯추가" />
                    <NavItem link="/Tests" title="테스트용" />
                </nav>
            </div>
        </header>
    )
};

const NavItem = props => {
    const style = {
        'display': 'inline-block',
        'marginRight': '50px',
        'padding': '0 30px',
        'height': '40px',
        'lineHeight': '40px',
        'borderRadius': '20px',
        'backgroundColor': 'rgba(0,0,0,0.3)'
    }
    const activeStyle = {
        backgroundColor: '#000',
        color: '#fff'
    }

    return (
        <NavLink to={props.link} activeStyle={activeStyle} style={style}><span>{props.title}</span></NavLink>
    )
}

NavItem.defaultProps = {
    link : '/',
    title : 'navTitle',
};

export default Header