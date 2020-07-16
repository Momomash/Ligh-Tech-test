import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styled from '@emotion/styled';

import { CloseIcon} from "@/client/main/utils/icons";

const ProgressWrapper = styled.div((props => ({
    display:
        props.visible === 1
            ? 'block'
            : 'none',
    position: 'absolute',
    bottom: '-60px',
    right: '40px',
    maxWidth: '506px',
    width: '100%',
    height: '217px',
    padding: '21px',
    background: '#668663',
    borderRadius: '28px',
    color: '#fff',
})));

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
`;

export const ProgressBlock = (props) => {
    const [isVisible, setIsVisible ] = useState(1);
    return (
        <ProgressWrapper visible={isVisible}>
            <Close onClick={() => setIsVisible(0)}>
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
                <Button onClick={props.onclick}>{props.button}</Button>
            </div>
        </ProgressWrapper>
    );
};
