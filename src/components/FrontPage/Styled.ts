import styled from 'styled-components';
import * as colors from '../../theme/color'

export const FrontPageBackground = styled.div`
    display: flex;
    margin-top: 30px;
    height: 100%;
    width: 100%;
    justify-content: center;
`;

export const FrontPageView = styled.div`
    height: 2000px;
    width: 90%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
    text-align: center;
    border-radius: 25px;
    margin-bottom: 30px;
    background-color: ${colors.modernLightGrey}
`;

export const StickyElement = styled.img`
    position: -webkit-sticky;
    position: sticky;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
    border-radius: 25px;
    height: 355px;
    width: 10%px;
    top: 50px;
    margin-left 50px;

`;

