import React from 'react';
import styled from '@emotion/styled';

import { CloseIcon} from "@/client/main/utils/icons";

const ProgressWrapper = styled.div`
    position: absolute;
    bottom: -60px;
    right: 40px;
    max-width: 506px;
    width: 100%;
    height: 217px;
    padding: 21px;
    background: #668663;
    border-radius: 28px;
    color:#fff;
    @media screen and (max-width: 600px){
        position: relative;
        margin-top: 30px;
        bottom: 0;
        right: 0;
    }
`;
const Close = styled.div`
    position: absolute;
    right: 16px;
    top: 16px;
    svg{
        fill: #fff;
        width: 16px;
        height: 21px;
    }
    &:hover{
        cursor: pointer;
    }
`;
const Title = styled.p`
    font-weight: bold;
    font-size: 20px;
`;
const Percent = styled.span`
    font-weight: normal;
    font-size: 50px;
`;
const Progress = styled.div`
    width: 0;
    flex-basis: 100%;
    border: 4px solid #435F40;
    height: 31px;
    background: #435F40;
    border-radius: 35px;
    .progress-bar{
        background: #F3DBC7;
        border-radius: 35px;
    }
`;
const Button = styled.button`
    flex: 0 0 110px;
    padding: 6px 18px;
    margin-left: 23px;
    font-weight: normal;
    font-size: 12px;
    background: #435F40;
    border-radius: 35px;
    border: none;
    color: #fff;
    
        &:focus{
            outline: 0;
            border: none;
        }
`;

export const ProgressBlock = (props) => {
    return (
        <ProgressWrapper>
            <Close onClick={props.visibleFunction}>
                {CloseIcon}
            </Close>
            <Title>
                <Percent>{props.percent}% </Percent>
                {props.title}
            </Title>
            <div className="d-flex justify-content-between flex-nowrap">
                <Progress className="progress">
                    <div className="progress-bar" style={{width: props.percent + '%'}} role="progressbar"
                         aria-valuemin="0"
                         aria-valuemax="100"/>
                </Progress>
                <Button onClick={props.handleClick}>{props.button}</Button>
            </div>
        </ProgressWrapper>
    );
};
