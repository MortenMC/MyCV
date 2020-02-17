import * as React from 'react';
import {TopBarView} from './Styled'
import SelectedPageDropDown from './topBarComponents/SelectedPageDropDown'

class TopBar extends React.Component {
    render() {
        return (
        <div style={{display: 'flex', marginTop: '10px'}}>
            <div style={{width: '5%'}}></div>
                <TopBarView>
                    <div style={{height: '100%', justifyContent: 'space-between', display: 'flex', backgroundColor: '#015000', borderRadius: '25px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50)'}}>
                        <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                            <div style={{fontSize: '25px', color: '#747474', fontWeight: 600}}>
                                CV - Morten Marcussen Cramer
                            </div>
                        </div>

                        <SelectedPageDropDown/> 
                    </div> 
                </TopBarView>
            <div style={{width: '5%'}}></div>
        </div>
            
        )
    }
}

export default TopBar