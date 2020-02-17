import styled from 'styled-components';

export const TopBarView = styled.div`
    height: 80px;
    width: 100%;
    
`;

export const DropDownBody = styled.div`
    width: 250px;
    max-width : 100%;
`;

export const DropDownLi = styled.li`
    margin-right: 50px;
    padding-right: 20px;
    padding-left: 20px;
    align-items: center;
    color: #747474;
    font-size: 25px;
    font-weight: 600;
    height: 80px;
    list-style-type: none;
    cursor: pointer;
    background: #015000;

    &:hover{
        background: #029000;
    }
`;

export const ArrowDown = styled.div`
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 9px solid #747474;
`;

export const ArrowUp = styled.div`
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #747474;
`;

