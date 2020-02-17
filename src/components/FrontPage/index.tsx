import * as React from 'react';
import { connect } from 'react-redux';

import { FrontPageView, FrontPageBackground, StickyElement } from './Styled'

import { setSelectedPage } from '../../redux/actions';
import picture from '../../theme/pictures/mig.png'

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
        return (
            <FrontPageBackground>
                <div style={{border: '2px solid black', display: 'flex', width: '90%', justifyContent: 'space-between'}}>  
                    <FrontPageView>
                        FrontPage
                    </FrontPageView>

                    <StickyElement src={picture} alt={picture}/>

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