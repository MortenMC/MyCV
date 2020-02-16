import * as React from 'react';
import {TopBarView} from './Styled'
import SelectedPageDropDown from './topBarComponents/SelectedPageDropDown'

class TopBar extends React.Component {
    render() {
        return (
            <TopBarView>
                <div style={{height: '100%', justifyContent: 'space-between', display: 'flex', backgroundColor: '#015000'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                        <div style={{fontSize: '25px', color: '#747474', fontWeight: 600}}>
                            CV - Morten Marcussen Cramer
                        </div>
                    </div>

                    <SelectedPageDropDown/> 
                </div> 
            </TopBarView>
        )
    }
}

export default TopBar