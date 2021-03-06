import React from 'react';
import styled from "@emotion/styled";
import {connect} from "react-redux";
import {css} from '@emotion/core';
import {CloseIcon} from "@/client/main/utils/icons";
import {statuses, updateColors} from "@/client/main/utils/constans";

const UpdatesWrapper = styled.div`
    position: absolute;
    bottom: -40px;
    max-width: 506px;
    width: 100%;
    max-height: 287px;
    height: 100%;
    padding: 21px 32px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px #869CB0;
    border-radius: 28px;
    
    @media screen and (max-width: 600px){
        left: 0;
    }
`;
const Close = styled.div`
    position: absolute;
    z-index: 2;
    right: 30px;
    top: 16px;
    svg{
        fill: #435F40;
        width: 16px;
        height: 21px;
    }
    &:hover{
        cursor: pointer;
    }
`;
const Title = styled.p`
    position: relative;
    font-weight: bold;
    font-size: 16px;
    color: #435F40;
    margin-bottom: 6px;
    padding-bottom: 6px;
    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 3px;
        background: #D9D9D9;
        border-radius: 18px;
    }
`;
const Table = styled.table`
    thead, tbody {
     display: block; 
     }
    tbody {
        overflow-y: auto;   
        overflow-x: hidden;  
        height: 200px;
        &::-webkit-scrollbar {
            display:none;
        }
    }
    tr{
        width: 100%;
        display: block;
    }
    th{
        padding: 0 0 4px 0;
        width: 25%;
        display: inline-block;
        border-top: none;
        font-size: 12px;
        font-weight: normal;
        line-height: 14px;
        color: #B4B4B4;
    }
    td{
        width: 25%;
        display: inline-block;
        padding: 7px 0;
        font-size: 12px;
        color: #435F40;
    }
    @media screen and (max-width: 450px){
        td{
            font-size: 9px;
            word-wrap: break-word;
        }
    }
`;
const colorTag = css`
    padding: 6px 4px;
    border-radius: 5px;
    color: #8B8B8B;
`;
const ExpectedTag = styled.span`
    ${colorTag};
    background-color: ${updateColors.blue};
`;
const RejectedTag = styled.span`
    ${colorTag};
    background-color: ${updateColors.red};
`;
const PerformedTag = styled.span`
    ${colorTag};
    background-color: ${updateColors.green};
`;
const UnConfirmedTag = styled.span`
    ${colorTag};
    background-color: ${updateColors.yellow};
`;
const statusColor = {
    [statuses.expected]: <ExpectedTag>{statuses.expected}</ExpectedTag>,
    [statuses.rejected]: <RejectedTag>{statuses.rejected}</RejectedTag>,
    [statuses.performed]: <PerformedTag>{statuses.performed}</PerformedTag>,
    [statuses.unConfirmed]: <UnConfirmedTag>{statuses.unConfirmed}</UnConfirmedTag>,
};

const Updates = (props) => {
    const {giraffes} = props;
    return (
        <UpdatesWrapper>
            <Close onClick={props.visibleFunction}>
                {CloseIcon}
            </Close>
            <Title>{props.title}</Title>
            <Table className="table">
                <thead>
                <tr>
                    <th scope="col">Дата</th>
                    <th scope="col">Действие</th>
                    <th scope="col">Жираф</th>
                    <th scope="col">Статус</th>

                </tr>
                </thead>
                <tbody>
                {props.data.map((data, i) =>
                    <tr key={"dataRow-" + i}>
                        <td>{data.date}</td>
                        <td>{data.action}</td>
                        <td>{giraffes.find(item => item.id === data.giraffeId).name}</td>
                        <td>{statusColor[data.status]}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </UpdatesWrapper>
    )
};
const mapStateToProps = (state) => {
    return {giraffes: state.giraffes};
};
export default connect(mapStateToProps)(Updates);
