import styled from 'styled-components';

export const FrontPageBackground = styled.div`
    display: flex;
    margin-top: 20px;
    height: 100%;
    width: 100%;
    border: 1px solid red;
    justify-content: center;
`;

export const FrontPageView = styled.div`
    height: 2000px;
    width: 700px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
    text-align: center;
    border-radius: 25px;
`;

export const StickyElement = styled.img`
    position: -webkit-sticky;
    position: sticky;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50);
    border-radius: 25px;
    height: 355px;
    width: 200px;
    top: 50px;

`;

