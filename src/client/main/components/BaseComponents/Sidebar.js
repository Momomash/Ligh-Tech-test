import React, {useState} from 'react';
import styled from '@emotion/styled';
import {NavLink} from "react-router-dom";
import {HomeIcon, ControlIcon, GiraffesIcon, EmployeesIcon, SettingsIcon, SupportIcon, BurgerIcon} from '../../utils';
import logo from '../../../../assets/image/logo.jpg';

const SidebarWrapper = styled.div`
    z-index: 3;
    padding: 20px;
    flex: 0 0 277px;
    background: #668663;
    @media screen and (max-width: 990px){
        position: absolute;
        z-index: 2;
        height: 100%;
        left: -257px;
        transition-duration: 0.4s;
        &.open{
            left: 0;
        }
    }
`;
const LogoBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-bottom: 70px;
    color: #fff;
    font-size: 10px;
    p{
        margin: 6px 0 0 0 ;
    }
`;
const Icon = styled.div`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 9px;
    background-image: url('${logo}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
const Menu = styled.div`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    a{
        display: flex;
        flex-direction: row;
        align-items: center;
        background: #567354;
        border-radius: 52px;
        padding: 11px 16px;
        margin: 10px 0;
        font-size: 17px;
        font-weight: 300;
        line-height: 20px;
        color: #FFFFFF;
        text-decoration: none;
        svg{
            fill: #F3DBC7;
            margin-right: 20px;
        }
        &.active{
            background: #fff;
            color: #567354;
            font-weight: 500;
            svg{
                fill: #435F40;
            }
        }
        &:hover{
            background: #435F40;
            transition-duration: 0.4s;
            color: #fff;
            svg{
                fill: #F3DBC7;
                transition-duration: 0.4s;
            }
        }
    };
`;
const ToggleButton = styled.div`
    display: none;
    position: absolute;
    z-index: -1;
    right: -70px;

    justify-content: flex-end;
    padding: 10px 14px;
    width: 50px;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    background: #435F40;
    svg{
        fill: #F3DBC7;
    }
    @media screen and (max-width: 990px){
        display: flex;
    }
`;


const Sidebar = () => {
    const [mobileVisible, setmobileVisible] = useState(false);
    return (
        <SidebarWrapper mobileVisible={mobileVisible} className={mobileVisible ? 'open': ''}>
            <LogoBlock>
                <ToggleButton onClick={() => {setmobileVisible(!mobileVisible)}}>
                    {BurgerIcon}
                </ToggleButton>
                <Icon/>
                <div>
                    <b>Ферма Заслуженных Жирафов</b>
                    <p>России и СНГ</p>
                </div>
            </LogoBlock>
            <Menu className="sidenavMenu">
                <NavLink exact to="/" activeClassName="active">
                    {HomeIcon}
                    Главная
                </NavLink>
                <NavLink exact to="/control" activeClassName="active">
                    {ControlIcon}
                    Управление
                </NavLink>
                <NavLink exact to="/giraffes" activeClassName="active">
                    {GiraffesIcon}
                    Жирафы
                </NavLink>
                <NavLink exact to="/employees" activeClassName="active">
                    {EmployeesIcon}
                    Сотрудники
                </NavLink>
                <NavLink exact to="/settings" activeClassName="active">
                    {SettingsIcon}
                    Настройки
                </NavLink>
                <NavLink exact to="/support" activeClassName="active">
                    {SupportIcon}
                    Поддержка
                </NavLink>
            </Menu>
        </SidebarWrapper>
    )
};

export default Sidebar;
