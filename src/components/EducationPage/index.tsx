import * as React from 'react';
import { connect } from 'react-redux';

import { setSelectedPage } from '../../redux/actions';
import { EducationPageBackground, EducationPageView, EducationHeader, EducationDescription, EducationContentView, TimeLineContainer, WorkedWithDiv, WorkedWithElementDiv, WorkedWithHeader, WorkedWithContainer, InternshipDiv} from './Styled';
import { educationArray, developmentArray, technologiesArray, programmingArray, othersArray, internshipArray } from '../../cvArrays/arrays';

interface Props {
    selectedPage: string;

    setSelectedPage: any;
}

type State = {

}


class EducationPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.setSelectedPage('Uddannelser')
    }

    render() {
        return (
            <EducationPageBackground>
                <div style={{width: '70%', maxWidth: '70%'}}>
                    <EducationHeader>Uddannelser</EducationHeader>
                    {educationArray.map((element: any) =>
                    <div style={{width: '100%', display: 'flex'}}>
                        <TimeLineContainer/>
                        <EducationPageView>
                            <EducationContentView>
                                <div style={{ width: '50%'}}>
                                    <div style={{margin: '30px', textAlign: 'center', fontSize: '20px'}}>{element.year}</div>
                                </div>
                                    
                                <div style={{height: '80px', width: '2px', backgroundColor: '#00000025', margin: '20px'}}></div>
                                <div style={{ width: '50%'}}>
                                    <div style={{margin: '30px', textAlign: 'center', fontSize: '20px'}}>{element.title}</div>
                                </div>
                            </EducationContentView>

                            {element.education === 'Datamatiker' ?
                            <div>
                                <EducationDescription>{element.description}</EducationDescription>
                                <WorkedWithHeader>Datamatiker studiet</WorkedWithHeader>
                                <p style={{marginBottom: '50px'}}>
                                    Metoder og teknologier jeg har arbejdet med under studiet
                                </p>

                                <h2>Agile arbejdsmetoder</h2>
                                <WorkedWithContainer>
                                    {developmentArray.map((element: any) => 
                                    <WorkedWithDiv>
                                        <WorkedWithElementDiv>{element.method}</WorkedWithElementDiv>
                                    </WorkedWithDiv>)}
                                </WorkedWithContainer>

                                <h2>Sprog</h2>
                                <WorkedWithContainer>
                                    {programmingArray.map((element: any) => 
                                    <WorkedWithDiv>
                                        <WorkedWithElementDiv>{element.language}</WorkedWithElementDiv>
                                    </WorkedWithDiv>)}
                                </WorkedWithContainer>

                                <h2>Teknologier</h2>
                                <WorkedWithContainer>
                                    {technologiesArray.map((element: any) => 
                                    <WorkedWithDiv>
                                        <WorkedWithElementDiv>{element.tech}</WorkedWithElementDiv>
                                    </WorkedWithDiv>)}
                                </WorkedWithContainer>

                                <h2>Andet</h2>
                                <WorkedWithContainer>
                                    {othersArray.map((element: any) => 
                                    <WorkedWithDiv>
                                        <WorkedWithElementDiv>{element.software}</WorkedWithElementDiv>
                                    </WorkedWithDiv>)}
                                </WorkedWithContainer>

                                <WorkedWithHeader>Praktikperiode</WorkedWithHeader>
                                {internshipArray.map((element: any) =>
                                <InternshipDiv>
                                    <div style={{ width: '30%', margin: '20px' }}>
                                        <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '40px', textTransform: 'uppercase' }}>
                                            {element.firm}
                                        </div>
                                        <div style={{ fontSize: '20px', fontWeight: 700 }}>
                                            {element.dateFrom} - {element.dateTo}
                                        </div>
                                    </div>
                                    <div style={{ width: '70%', margin: '20px' }}>
                                        <p style={{fontSize: '20px'}}>
                                            {element.description}
                                        </p>
                                    </div>
                                </InternshipDiv>)}

                                <WorkedWithHeader>Hovedopgave</WorkedWithHeader>
                                <InternshipDiv>
                                    <p style={{margin: '20px', fontSize: '20px'}}>
                                        Jeg og tre klassekammerater dannede et team i forbindelse med vores hovedopgave, hvor vi i samarbejde med firmaet, Infomedia, på baggrund af deres ønsker, har udviklet systemet, ARMA (Approve Reject Media Analysis). Systemet vi har udviklet, er grundstenene for et redesign af deres allerede eksisterende system, GAMA (Godkendt Afvist Media Analysis), som det er tiltænkt at skulle erstatte. Vi havde fordelt arbejdet således, at to arbejdede på backenden og to på frontenden. Jeg var en af de to, som tog sig af frontend, hvilket vi har udviklet i sprogene, React og TypeScript
                                    </p>
                                </InternshipDiv>
                                
                            </div>
                            :
                            null
                            }

                        </EducationPageView>
                        <TimeLineContainer/>
                    </div>)}
                </div>
            </EducationPageBackground>
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

export default connect(mapStateToProps, { setSelectedPage })(EducationPage);