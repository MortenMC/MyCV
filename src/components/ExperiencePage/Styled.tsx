import styled from 'styled-components';
import * as colors from '../../theme/color'

export const ExperiencePageBackground = styled.div`
    display: flex;
    margin-top: 30px;
    height: 100%;
    width: 100%;
    justify-content: center;
`;

export const ExperiencePageView = styled.div`
    height: 100%;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
    text-align: center;
    border-radius: 25px;
    margin-bottom: 30px;
    background-color: ${colors.modernLightGrey};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ExperienceHeader = styled.h1`
    text-align: center;
    color: #00000090;
    text-shadow: 1px 10px 20px #00000090, 0 0  25px #00000050;
    margin-bottom: 40px;
`;

export const TimeLineContainer = styled.div`
    width: 20%;
`;

export const TimeLine = styled.div`
    height: 100%;
    width: 1px;
    background-color: black;
`;

export const TimeLineCircle = styled.div`

`;
