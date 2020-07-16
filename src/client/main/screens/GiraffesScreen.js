import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styled from '@emotion/styled';

import logo from '../../../assets/image/logo.jpg';
import {giraffes, aviarys} from '../utils/giraffes';
import {NoticeIcon, PlusIcon} from '../utils/icons';
import {GiraffeCard} from '../components/GiraffeCard';
import {ProgressBlock} from '../components/ProgressBlock';

const Header = styled.div`
    
`;
const Tabs = styled.ul`
     border-bottom: 3px solid #D9D9D9 !important;
     padding-bottom: 7px;
     .nav-item{
        display: flex;
        align-items: flex-end;
        margin-bottom: -10px !important;
        
            a{
                padding: 0 10px 10px 10px;
                color: #D9D9D9;
                border: none !important;
                border-bottom: 3px solid transparent !important;
                &.active{
                    color: #484848;
                    border-bottom: 3px solid #567354 !important;
                }
            }
     }
`;
const UserDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    
        .notice{
            margin-right: 24px;
            svg{
                fill: #567354;
            }
            &:hover{
                cursor: pointer;
                animation: 1.2s ease-in-out 0s normal none infinite running trambling-animation;
            }
            @keyframes trambling-animation {
                0%, 50%, 100% {
                    transform: rotate(0deg);
                }
                10%, 30% {
                    transform: rotate(-10deg);
                }
                20%, 40% {
                    transform: rotate(10deg);
                }
            }
        }
        .icon{
            margin-right: 13px;
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background-image: url('${logo}');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            &:hover{
                cursor: pointer;
            }
        }
        .email{
            color: #484848;
            font-weight: 300;
            font-size: 16px;
        }
`;
const AddAviary = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin: auto 0;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    &:hover{
        cursor: pointer;
        background-color: #bfbdbd;
        transition-duration: 0.4s;
    }
        svg{
            fill: #fff;
            width: 10px;
            height: 10px;
            
        }
    
`;
const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 32px;
    color: #567354;
    margin: 35px 0 26px 0;  
`;
const AddGiraffe = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 37px;
    height: 37px;
    margin-left: 13px;
    border-radius: 50%;
    border: none;
    background-color: #668663;
    &:hover{
        cursor: pointer;
        background-color: #567354;
        transition-duration: 0.4s;
    }
        svg{
            fill: #fff;
            width: 16px;
            height: 16px;
            
        }
`;
const GiraffeWrapper = styled.div`
    overflow-x: auto;
    &::-webkit-scrollbar {
        display:none;
    }
`;
const GiraffeList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 3000px;
`;
const Updates = styled.div`
    position: absolute;
    bottom: 10px;
    max-width: 506px;
    width: 100%;
    max-height: 287px;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px #869CB0;
    border-radius: 28px;
`;


export const GiraffesScreen = () => {

    return (
        <div>
            <Header>
                <Tabs className="nav nav-tabs" id="myTab" role="tablist">
                    {aviarys.map((aviary, i) => <li className="nav-item" role="presentation" key={aviary.id}>
                            <a className={"nav-link" + (i === 0 ? ' active' : '')} id={"link-" + aviary.id}
                               data-toggle="tab" href={"#nav-" + aviary.id}
                               role="tab" aria-controls={"#nav-" + aviary.id} aria-selected="false">Вольер {aviary.id}</a>
                        </li>
                    )}
                    <AddAviary>
                        {PlusIcon}
                    </AddAviary>
                    <UserDiv>
                        <div className="notice">{NoticeIcon}</div>
                        <div className="icon"/>
                        <div className="email">hello@giraffe.com</div>
                    </UserDiv>
                </Tabs>
            </Header>

            <Title>Жирафы <AddGiraffe>{PlusIcon}</AddGiraffe></Title>
            <div className="tab-content" id="myTabContent">
                {aviarys.map((aviary, i) =>
                    <div className={"tab-pane fade" + (i === 0 ? ' show active' : '')} key={"content-" + aviary.id}
                         id={"nav-" + aviary.id}
                         role="tabpanel" aria-labelledby={"link-" + aviary.id}>
                        <GiraffeWrapper>
                            <GiraffeList>
                                {giraffes
                                    .filter(giraffe => giraffe.aviary === aviary.id)
                                    .map((giraffe, i) =>
                                        <GiraffeCard key={"giraffe-" + giraffe.id} giraffe={giraffe}/>
                                    )}
                            </GiraffeList>
                        </GiraffeWrapper>

                    </div>
                )}
            </div>
            <ProgressBlock percent={50} title={'Заполнение вольера'} button={'Информация'} onclick={null} />
            <Updates>

            </Updates>
        </div>
    )
};

export default GiraffesScreen;
