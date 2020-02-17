import * as React from 'react';
import { connect } from 'react-redux';

import { setSelectedPage } from '../../redux/actions';

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
        this.props.setSelectedPage('Uddannelse')
    }

    render() {
        return (
            <div>
                EducationPage 
            </div>
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