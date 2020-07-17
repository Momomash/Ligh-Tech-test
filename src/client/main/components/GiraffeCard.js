import React, {useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import {connect} from "react-redux";
import noImage from '@/assets/image/no-image.jpg';
import {newGiraffe, editGiraffe} from '../redux/actionCreators';
import {
    MoreIcon,
    GenderIcon,
    WeightIcon,
    HeightIcon,
    EditIcon,
    DeleteIcon
} from '../utils/icons';

const CardWrapper = styled.form`
        display: flex;
        flex-direction: column;
        width: 236px;
        min-width: 236px;
        min-height: 495px;
        height: 100%;
        margin-right: 33px;
        padding: 14px 23px 21px 14px;
        background: #F3DBC7;
        border-radius: 28px;
        &.boxshadow{
            box-shadow: 0px 4px 15px #869CB0;
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
const Img = css`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 12px auto;
    background: gray;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
    input:first-of-type{
        text-align: left;
    }
    input:last-of-type{
        text-align: right;
    }
`;
const Description = styled.div`
    font-size: 15px;
    color: #000;
    padding-left: 12px;
    b{
        font-weight: bold;
        color: #435F40;
    }
    div:not(last-child){
        margin: 8px 0;
    }
`;
const TransparentInput = css`
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
    &:focus{
        border: none;
        outline: 0;
    }
`;
const InputName = styled.input`
    ${TransparentInput};
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    color: #435F40;
    margin-bottom: 30px;
`;
const InputBold = styled.input`
    ${TransparentInput};
    max-width: 40px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #333333;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
const Input = styled.input`
    ${TransparentInput};
    max-width: 103px;
    &[type="file"] {
        display: none;
    }
`;
const SaveButton = styled.button`
    max-width: 130px;
    margin: 0 auto;
    padding: 10px 24px;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    background: #567354;
    border-radius: 33px;
    border: none;
    &:hover{
        cursor: pointer;
    }  
    &:focus{
        outline: 0;
    }  
    &:disabled{
        background-color: #B4B4B4;
    }
`;
const getImageFromField = (input) => {
    return URL.createObjectURL(input.files[0]);
};
const GiraffeCard = (props) => {
    const [giraffe, setGiraffe] = useState(props.giraffe);
    const {id, name, image, gender, weight, growth, color, diet, character} = giraffe;
    const [edited, setEdited] = useState(props.isNewGiraffe);
    const FileLabel = styled.label`
        ${Img};
        background-image: url(${image}), url(${noImage});
    `;
    return (
        <CardWrapper className={edited ? 'boxshadow' : ''} onSubmit={(e) => {
            e.preventDefault();
            if (props.isNewGiraffe) {
                props.newGiraffe(giraffe);
                props.deleteFunction();
            } else {
                props.editGiraffe(giraffe);
            }
            setEdited(false);
        }}>
            <DropdownBlock className="dropdown">
                <ButtonDropdown type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {MoreIcon}
                </ButtonDropdown>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {!props.isNewGiraffe &&
                    <span className="dropdown-item" onClick={() => setEdited(!edited)}>{EditIcon} Редактировать</span>
                    }
                    <span className="dropdown-item" onClick={props.deleteFunction}>{DeleteIcon} Удалить</span>
                </div>
            </DropdownBlock>
            <FileLabel htmlFor={'file-upload' + id} className="custom-file-upload"/>
            <Input id={'file-upload' + id} disabled={!edited && 'disabled'} type="file" name="giraffeImage"
                   onChange={(e) => setGiraffe({...giraffe, image: getImageFromField(e.target)})}/>
            <InputName type="text" disabled={!edited && 'disabled'} name="giraffeName" required value={name}
                       onChange={(e) => setGiraffe({...giraffe, name: e.target.value})}/>
            <Infographics>
                {GenderIcon}
                {WeightIcon}
                {HeightIcon}
            </Infographics>
            <Specifications>
                <InputBold type="text" required disabled={!edited && 'disabled'} name="giraffeGenger" value={gender}
                           onChange={(e) => setGiraffe({...giraffe, gender: e.target.value})}/>
                <InputBold type="number" required disabled={!edited && 'disabled'} name="giraffeWeight" value={weight}
                           onChange={(e) => setGiraffe({...giraffe, weight: e.target.value})}/>
                <InputBold type="number" required disabled={!edited && 'disabled'} name="giraffeGrowth" value={growth}
                           onChange={(e) => setGiraffe({...giraffe, growth: e.target.value})}/>
            </Specifications>
            <Description>
                <div>
                    <b>Цвет: </b>
                    <Input type="text" required disabled={!edited && 'disabled'} name="giraffeColor" value={color}
                           onChange={(e) => setGiraffe({...giraffe, color: e.target.value})}/>
                </div>
                <div>
                    <b>Диета: </b>
                    <Input type="text" required disabled={!edited && 'disabled'} name="giraffeDiet" value={diet}
                           onChange={(e) => setGiraffe({...giraffe, diet: e.target.value})}/>
                </div>
                <div>
                    <b>Характер: </b>
                    <Input type="text" required disabled={!edited && 'disabled'} name="giraffeCharacter"
                           value={character}
                           onChange={(e) => setGiraffe({...giraffe, character: e.target.value})}/>
                </div>
            </Description>
            {edited &&
            <SaveButton disabled={!Object.keys(giraffe).every(key => giraffe[key])}>Сохранить</SaveButton>
            }
        </CardWrapper>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        editGiraffe: giraffe => dispatch(editGiraffe(giraffe)),
        newGiraffe: giraffe => dispatch(newGiraffe(giraffe))
    };
};
export default connect(null, mapDispatchToProps)(GiraffeCard);

