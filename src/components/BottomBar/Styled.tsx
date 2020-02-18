import styled from 'styled-components';
import * as colors from '../../theme/color'

export const BottomBarView = styled.div`
    height: 40px;
    width: 70%;
`;

export const BottomBarContent = styled.div`
    height: 100%;
    justify-content: center;
    display: flex;
    background-color: ${colors.modernLightGrey};
    border-radius: 25px;
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
`;