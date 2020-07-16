import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styled from '@emotion/styled';

import logo from '../../../assets/image/logo.jpg';
import {giraffes, aviarys, updates, configuration} from '../utils/giraffes';
import {NoticeIcon, PlusIcon} from '../utils/icons';
import {GiraffeCard} from '../components/GiraffeCard';
import {ProgressBlock} from '../components/ProgressBlock';
import {Updates} from '../components/Updates';

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

export const GiraffesScreen = () => {
    const tableField = [
        {name: 'Дата', key: 'date'},
        {name: 'Действие', key: 'action'},
        {name: 'Жираф', key: 'giraffeId'},
        {name: 'Статус', key: 'status'},
    ];
    const [visibleUpdates, setIsVisibleUpdates] = useState(false);
    const [visibleProgress, setIsVisibleProgress] = useState(true);
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
                {aviarys.map((aviary, i) => {
                        const filtederGiraffes = giraffes.filter(giraffe => giraffe.aviary === aviary.id);
                        const percent = Math.floor(filtederGiraffes.length / configuration.avairySize * 100);
                        return <div className={"tab-pane fade" + (i === 0 ? ' show active' : '')}
                                    key={"content-" + aviary.id}
                                    id={"nav-" + aviary.id}
                                    role="tabpanel" aria-labelledby={"link-" + aviary.id}>
                            <GiraffeWrapper>
                                <GiraffeList>
                                    {filtederGiraffes.map((giraffe, i) =>
                                        <GiraffeCard key={"giraffe-" + giraffe.id} giraffe={giraffe}/>
                                    )}
                                </GiraffeList>
                            </GiraffeWrapper>
                            {visibleProgress &&
                            <ProgressBlock percent={percent} title={'Заполнение вольера'} button={'Информация'}
                                           handleClick={() => {
                                               setIsVisibleUpdates(true)
                                           }} visibleFunction={() => {
                                setIsVisibleProgress(false)
                            }}/>
                            }
                            {visibleUpdates && <Updates title={'Обновления'} headers={tableField}
                                                        data={updates.filter(update => update.avairysId === aviary.id)}
                                                        visibleFunction={() => {
                                                            setIsVisibleUpdates(false)
                                                        }}/>
                            }
                        </div>
                    }
                )}
            </div>
        </div>
    )
};

export default GiraffesScreen;
