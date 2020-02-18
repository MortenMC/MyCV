import * as React from 'react';
import { connect } from 'react-redux';

import { FrontPageView, FrontPageBackground, FrontPageHeader, StickyElement, InformationHeader, InformationDiv, ElementTypeDiv, RealElementDiv, SkillsAndToolsContainer, Picture, SkillsAndToolsHeader, SkillsAndToolsElements, LinkLogo } from './Styled'

import { information, kontaktInformation, skillsArray, toolsArray } from '../../cvArrays/arrays'
import { setSelectedPage } from '../../redux/actions';
import pictureMe from '../../theme/pictures/mig.png'
import linkedInLogo from '../../theme/pictures/LI-In-Bug.png'

interface Props {
    selectedPage: string;

    setSelectedPage: any;
}

type State = {

}

class FrontPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.setSelectedPage('Forside')
    }

    render() {

        const informations = information;
        const kontakt = kontaktInformation;
        const skills = skillsArray;
        const tools = toolsArray;
        return (
            <FrontPageBackground>
                <div style={{ display: 'flex', width: '70%', justifyContent: 'space-between'}}>  
                    <FrontPageView>
                        <FrontPageHeader>Mig</FrontPageHeader>
                            <div style={{ marginLeft: '40px', marginRight: '40px', fontSize: '20px'}}>
                                <p>Jeg er en ung mand på 25 år der pr. 27. januar 2020 kan kalde sig nyuddannet datamatiker. 
                                    Jeg søger et arbejde, hvor jeg kan bidrage med teknologierne; React, React-Native, JavaScript og TypeScript,
                                    men jeg er samtidigt også villig til at lære nye ting og blive udfordret.
                                    Jeg syntes at processen fra idé til realisering er spændende og samtidigt har jeg det sjovt med at udvikle og designe brugergrænseflader rent kodemæssigt. </p>
                            </div>
                        <InformationHeader>Personlig Information</InformationHeader>
                        <div style={{ marginRight: '20px', marginLeft: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                            {informations.map((element: any) => 
                            <InformationDiv>
                                <ElementTypeDiv>{element.type}</ElementTypeDiv>
                                <RealElementDiv>{element.content}</RealElementDiv>
                            </InformationDiv>)}
                        </div>
                        <InformationHeader>Kontakt Info</InformationHeader>
                        <div style={{ marginRight: '20px', marginLeft: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                            {kontakt.map((element: any) => 
                            <InformationDiv>
                                <ElementTypeDiv>{element.type}</ElementTypeDiv>
                                <RealElementDiv>{element.content}</RealElementDiv>
                            </InformationDiv>)}
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/morten-marcussen-cramer-991344181' target="_blank">
                                <LinkLogo src={linkedInLogo} alt={linkedInLogo}/>
                            </a>
                        </div>  
                    </FrontPageView>
                    <StickyElement>
                        <Picture src={pictureMe} alt={pictureMe}/>
                        <SkillsAndToolsContainer>
                            <SkillsAndToolsHeader>Skills</SkillsAndToolsHeader>
                                {skills.map((element: any) =>
                                    <SkillsAndToolsElements>{element.skill}</SkillsAndToolsElements>
                                )}
                                
                            <SkillsAndToolsHeader>Tools</SkillsAndToolsHeader>
                                {tools.map((element: any) =>
                                    <SkillsAndToolsElements>{element.tool}</SkillsAndToolsElements>
                                )}
                        </SkillsAndToolsContainer>
                    </StickyElement>
                    

                </div>
            </FrontPageBackground>
 
        )
    }
}


type MapState = {
    app: {
        selectedPage: string;
    }
}

const mapStateToProps = (state: MapState) => {
    return {
        selectedPage: state.app.selectedPage
    };
};

export default connect(mapStateToProps, { setSelectedPage })(FrontPage);