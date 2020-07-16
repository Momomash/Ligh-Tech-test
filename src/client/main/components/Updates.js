import React from 'react';
import styled from "@emotion/styled";
import { css } from '@emotion/core'
import {CloseIcon} from "@/client/main/utils/icons";
import {giraffes, statuses} from "@/client/main/utils/giraffes";

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
        height: 100px;      
        overflow-y: auto;   
        overflow-x: hidden;  
        
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
`;
const colorTag = css`
    padding: 6px 4px;
    border-radius: 5px;
    color: #8B8B8B;
`;

const ExpectedTag = styled.span`
    ${colorTag};
    background-color: #D2EFFF;
`;
const RejectedTag = styled.span`
    ${colorTag};
    background-color: #FFC1C1;
`;
const PerformedTag = styled.span`
    ${colorTag};
    background-color: #C1FFC8;
`;
const UnConfirmedTag = styled.span`
    ${colorTag};
    background-color: #FFEAC1;
`;


const statusColor = {
    [statuses.expected]: <ExpectedTag >{statuses.expected}</ExpectedTag>,
    [statuses.rejected]:  <RejectedTag >{statuses.rejected}</RejectedTag>,
    [statuses.performed]:  <PerformedTag >{statuses.performed}</PerformedTag>,
    [statuses.unConfirmed]:  <UnConfirmedTag>{statuses.unConfirmed}</UnConfirmedTag>,
};


export const Updates = (props) => {
    return (
        <UpdatesWrapper >
            <Close onClick={props.visibleFunction}>
                {CloseIcon}
            </Close>
            <Title>{props.title}</Title>
            <Table className="table">
                <thead>
                    <tr>
                        {props.headers.map((header, i) =>
                            <th key={"header-" + header.key} scope="col">{header.name}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((data) =>
                            <tr key={"dataRow-" + data.giraffeId}>
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
