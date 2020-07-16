import React from 'react';
import styled from '@emotion/styled';

import Sidebar from './Sidebar';

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 12px;
    background: #668663;
    display: flex;
    flex-direction: row;
`;

const MainBlock = styled.div`
    width: 0;
    position: relative;
    background: #FFFFFF;
    border-radius: 25px;
    padding: 17px 40px 40px 50px;
    flex-basis: 100%;
    overflow: hidden;
`;

function WrapperApp(props) {

    return (
        <Wrapper>
            <Sidebar/>
            <MainBlock>
                {props.children}
            </MainBlock>
        </Wrapper>
    )
}

export default WrapperApp;
