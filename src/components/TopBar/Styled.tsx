import styled from 'styled-components';
import * as colors from '../../theme/color'

export const TopBarView = styled.div`
    height: 80px;
    width: 70%;
`;

export const TopBarContent = styled.div`
    height: 100%;
    justify-content: space-between;
    display: flex;
    background-color: ${colors.modernLightGrey};
    border-radius: 25px;
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
`;

export const DropDownBody = styled.div`
    width: 250px;
    max-width : 100%;
`;

export const DropDownLi = styled.li`
    z-index: 1;
    position: relative;
    margin-right: 50px;
    padding-right: 20px;
    padding-left: 20px;
    align-items: center;
    color: black;
    font-size: 25px;
    font-weight: 600;
    height: 80px;
    list-style-type: none;
    cursor: pointer;
    background: ${colors.modernLightGrey};

    &:hover{
        background: ${colors.modernMediumGrey};
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

