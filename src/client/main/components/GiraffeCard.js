import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import {
    MoreIcon,
    GenderIcon,
    WeightIcon,
    HeightIcon,
    EditIcon,
    DeleteIcon
} from '../utils/icons';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 236px;
    min-width: 236px;
    height: 495px;
    padding: 14px 23px;
    background: #F3DBC7;
    border-radius: 28px;
    
    &:not(:last-child){
        margin-right: 33px;
    }
`;

const ButtonDropdown = styled.div`
    float: right;
    svg{
        fill: #435F40;
    }
`;
const DropdownBlock = styled.div`
    .dropdown-menu{
        padding: 15px 10px;
        background: #668663;
        border-radius: 20px;
        &.show{
            left: -14px !important;
        }
        .dropdown-item{
            color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 52px;
            font-size: 14px;
            padding: 6px 12px;
            svg{
                fill: #fff;
                margin-right: 9px;
            }
            &:hover{
                background: #567354;
                color: #fff;
            }
        }
    }
`;
const Name = styled.p`
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    color: #435F40;
    margin-bottom: 30px;
`;
const Infographics = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 23px;
    svg{
        fill: #435F40;
    }
`;
const Specifications = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 23px;
    background-color: #DCB18B;
    border-radius: 58px;
    font-weight: bold;
    font-size: 16px;
    color: #333333;
`;
const Description = styled.p`
    font-size: 15px;
    color: #000;
    padding-left: 12px;
    b{
        font-weight: bold;
        color: #435F40;
    }
    &:not(last-child){
        margin: 8px 0;
    }
    
`;

export const GiraffeCard = (props) => {
    const {id, name, image, gender, weight, growth, color, diet, character} = props.giraffe;
    const Image = styled.img`
        border-radius: 50%;
        width: 150px;
        height: 150px;
        background: gray;
        margin: 0 auto;
        background-image: url(${image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 12px;
    `;
    return (
        <CardWrapper>
            <DropdownBlock className="dropdown">
                <ButtonDropdown  type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {MoreIcon}
                </ButtonDropdown>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">{EditIcon} Редактировать</a>
                    <a className="dropdown-item" href="#">{DeleteIcon} Удалить</a>
                </div >
            </DropdownBlock>
            <Image/>
            <Name>{name}</Name>
            <Infographics>
                {GenderIcon}
                {WeightIcon}
                {HeightIcon}
            </Infographics>
            <Specifications>
                <span>{gender}</span>
                <span>{weight}</span>
                <span>{growth}</span>
            </Specifications>
            <Description><b>Цвет: </b>{color}</Description>
            <Description><b>Диета: </b>{diet}</Description>
            <Description><b>Характер: </b>{character}</Description>
        </CardWrapper>
    )
};

