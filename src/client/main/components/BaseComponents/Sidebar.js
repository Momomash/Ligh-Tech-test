import React from 'react';
import styled from '@emotion/styled';
import {NavLink} from "react-router-dom";
import { HomeIcon, ControlIcon, GiraffesIcon, EmployeesIcon, SettingsIcon, SupportIcon } from '../../utils';
import logo from '../../../../assets/image/logo.jpg';

const SidebarWrapper = styled.div`
    padding: 20px;
    flex: 0 0 277px;
`;
const LogoBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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


const Sidebar = () => {
    return (
        <SidebarWrapper>
            <LogoBlock>
                <Icon />
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
                    { SupportIcon }
                    Поддержка
                </NavLink>
            </Menu>
        </SidebarWrapper>
    )
};

export default Sidebar;
