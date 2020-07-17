import React, {useState} from 'react';
import styled from '@emotion/styled';
import {connect} from "react-redux";

import logo from '@/assets/image/logo.jpg';
import {configuration} from '../utils/constans';
import {NoticeIcon, PlusIcon} from '../utils/icons';
import GiraffeCard from '../components/GiraffeCard';
import {ProgressBlock} from '../components/ProgressBlock';
import Updates from '../components/Updates';
import {newAviary, deleteGiraffe} from '../redux/actionCreators';

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
     @media screen and (max-width: 450px){
        padding-bottom: 10px;
        flex-direction: column-reverse;
        align-items: flex-end;
        .nav-item a{
            padding: 5px 0 !important;
        }
        .nav-item a.active{
            border-bottom: none !important;
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
        &:focus{
            outline: 0;
            border: none;
        }
        svg{
            fill: #fff;
            width: 10px;
            height: 10px;  
        }
    @media screen and (max-width: 450px){
        position: absolute;
        top: 50px;
        right: 100px;        
    }   
`;
const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 32px;
    color: #567354;
    margin-top: 35px;  
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
        :focus{
            outline: 0;
            border: none;
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
    padding: 20px 0;
`;

export const GiraffesScreen = (props) => {
    const {giraffes, aviarys, updates, newAviary, deleteGiraffe} = props;
    const [visibleUpdates, setIsVisibleUpdates] = useState(false);
    const [visibleProgress, setIsVisibleProgress] = useState(true);
    const [displayNewCard, setDisplayNewCard] = useState(aviarys.map(() => false));

    const changeDisplayCard = (i, state) => {
        const newCards = displayNewCard.slice();
        newCards[i] = state;
        setDisplayNewCard(newCards)
    };
    return (
        <>
            <div>
                <Tabs className="nav nav-tabs" id="myTab" role="tablist">
                    {aviarys.map((aviary, i) => <li className="nav-item" role="presentation" key={'tab-' + aviary.id}>
                            <a className={"nav-link" + (!i ? ' active' : '')} id={"link-" + aviary.id}
                               data-toggle="tab" href={"#nav-" + aviary.id}
                               role="tab" aria-controls={"#nav-" + aviary.id} aria-selected="false">Вольер {aviary.id}</a>
                        </li>
                    )}
                    <AddAviary onClick={() => newAviary(aviarys.length + 1)}>
                        {PlusIcon}
                    </AddAviary>
                    <UserDiv>
                        <div className="notice">{NoticeIcon}</div>
                        <div className="icon"/>
                        <div className="email">hello@giraffe.com</div>
                    </UserDiv>
                </Tabs>
            </div>
            <div className="tab-content" id="myTabContent">
                {aviarys.map((aviary, i) => {
                        const filtederGiraffes = giraffes.filter(giraffe => giraffe.aviary === aviary.id);
                        const percent = Math.floor(filtederGiraffes.length / configuration.avairySize * 100);
                        return <React.Fragment key={"content-" + aviary.id}>
                            <div className={"tab-pane fade" + (!i ? ' show active' : '')}
                                 id={"nav-" + aviary.id}
                                 role="tabpanel" aria-labelledby={"link-" + aviary.id}>
                                <Title>Жирафы
                                    <AddGiraffe onClick={() => changeDisplayCard(i, true)}>
                                        {PlusIcon}
                                    </AddGiraffe>
                                </Title>
                                <GiraffeWrapper>
                                    <GiraffeList>
                                        {displayNewCard[i] &&
                                        <GiraffeCard deleteFunction={() => changeDisplayCard(i, false)} isNewGiraffe={true}
                                                     key={"giraffe-" + giraffes.length + 1}
                                                     giraffe={{
                                                         id: giraffes.length + 1,
                                                         aviary: aviary.id,
                                                         name: '',
                                                         image: '',
                                                         gender: '',
                                                         weight: '',
                                                         growth: '',
                                                         color: '',
                                                         diet: '',
                                                         character: ''
                                                     }}/>
                                        }
                                        {filtederGiraffes.map((giraffe) =>
                                            <GiraffeCard deleteFunction={() => deleteGiraffe(giraffe.id)}
                                                         key={"giraffe-" + giraffe.id} giraffe={giraffe}/>
                                        )}
                                    </GiraffeList>
                                </GiraffeWrapper>
                                {visibleProgress &&
                                <ProgressBlock percent={percent} title={'Заполнение вольера'} button={'Информация'}
                                               handleClick={() => setIsVisibleUpdates(true)}
                                               visibleFunction={() => setIsVisibleProgress(false)}/>
                                }
                                {visibleUpdates &&
                                <Updates title={'Обновления'}
                                         data={updates.filter(update => update.avairysId === aviary.id)}
                                         visibleFunction={() => setIsVisibleUpdates(false) }/>
                                }
                            </div>
                        </React.Fragment>
                    }
                )}
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {giraffes: state.giraffes, aviarys: state.aviarys, updates: state.updates};
};

const mapDispatchToProps = (dispatch) => {
    return {
        newAviary: e => dispatch(newAviary(e)),
        deleteGiraffe: e => dispatch(deleteGiraffe(e))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(GiraffesScreen);
