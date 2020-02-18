import * as React from 'react';
import { connect } from 'react-redux';

import { setSelectedPage } from '../../redux/actions';
import { ExperiencePageBackground, ExperiencePageView, TimeLineContainer, ExperienceHeader, TimeLine, TimeLineCircle } from './Styled'
import { experienceArray } from '../../cvArrays/arrays'


interface Props {
    selectedPage: string;

    setSelectedPage: any;
}

type State = {

}

class ExperiencePage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.setSelectedPage('Erfaring')
    }

    render() {
        const experiences = experienceArray;
        return (
            <ExperiencePageBackground>
                
                <div style={{width: '70%'}}>
                    <ExperienceHeader>Erhvervserfaring</ExperienceHeader>
                    {experiences.map((element: any) =>
                        <div style={{width: '100%', display: 'flex'}}>
                            <TimeLineContainer/>
                            <ExperiencePageView>
                                <div style={{ width: '50%'}}>
                                    <div style={{margin: '40px'}}>
                                        <div style={{textAlign: 'right'}}>{element.dateFrom} - {element.dateTo}</div>
                                        <div style={{textAlign: 'right'}}>{element.firm}</div>
                                    </div>
                                </div>
                                
                                <div style={{height: '100px', width: '2px', backgroundColor: '#00000025', margin: '20px'}}></div>
                                <div style={{ width: '50%'}}>
                                    <div style={{margin: '40px', textAlign: 'left'}}>{element.description}</div>
                                </div>
                            </ExperiencePageView>
                            <TimeLineContainer/>
                        </div>
                    )}

                </div>
                
                
            </ExperiencePageBackground>
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

export default connect(mapStateToProps, { setSelectedPage })(ExperiencePage);