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
    height: 100%;
    width: 90%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
    text-align: center;
    border-radius: 25px;
    margin-bottom: 30px;
    background-color: ${colors.modernLightGrey};
`;

export const FrontPageHeader = styled.h1`
    border-bottom: 1px solid black;
    margin: 40px;
    text-transform: uppercase;
`;

export const InformationHeader = styled.h1`
    border-bottom: 1px solid black;
    margin: 40px;
    margin-top: 100px;
    text-transform: uppercase;
`;

export const InformationDiv = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid #00000025;
    border-radius: 25px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const ElementTypeDiv = styled.div`
    font-size: 20px;
    width: 150px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    padding-left: 10px;
    margin: 10px;
`;

export const RealElementDiv = styled.div`
    font-size: 20px;
    width: 250px;
    text-align: left;
    margin: 10px;
`;

export const StickyElement = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 50px;
    height: 10px;
    width: auto;
    margin-left 50px;
`;


export const Picture = styled.img`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
    border-radius: 25px;
    height: 355px;
`;

export const LinkLogo = styled.img`
    height: 50px;
    margin: 40px;
`;

export const SkillsAndToolsContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
    border-radius: 25px;
    height: auto;
    background-color: ${colors.modernLightGrey};
    margin-top: 20px;
    padding-bottom: 10px;
`;

export const SkillsAndToolsHeader = styled.h1`
    border-bottom: 1px solid black;
    margin: 20px;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
`;

export const SkillsAndToolsElements = styled.p`
    text-align: center

`;


