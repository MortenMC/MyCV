import styled from 'styled-components';
import * as colors from '../../theme/color'

export const EducationPageBackground = styled.div`
    display: flex;
    margin-top: 30px;
    height: 100%;
    width: 100%;
    justify-content: center;
    max-width: 100%;
`;

export const EducationPageView = styled.div`
    height: 100%;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
    text-align: center;
    border-radius: 25px;
    margin-bottom: 30px;
    background-color: ${colors.modernLightGrey};
`;

export const EducationContentView = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const EducationHeader = styled.h1`
    text-align: center;
    color: #00000090;
    text-shadow: 1px 10px 20px #00000090, 0 0  25px #00000050;
    margin-bottom: 40px;
`;

export const EducationDescription = styled.p`
    font-size: 20px;
`;

export const TimeLineContainer = styled.div`
    width: 20%;
`;

export const WorkedWithContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap: wrap;

`;

export const WorkedWithDiv = styled.div`
    border: 2px solid #00000025;
    border-radius: 25px;
    margin-top: 10px;
    margin: 10px;
`;

export const WorkedWithElementDiv = styled.div`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const WorkedWithHeader = styled.h1`
    border-bottom: 1px solid black;
    margin: 40px;
    margin-bottom: 10px;
`;

export const InternshipDiv = styled.div`
    border: 2px solid #00000025;
    border-radius: 25px;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-right: 40px;
    margin-left: 40px;
    display: flex;
    align-items: center;
`;