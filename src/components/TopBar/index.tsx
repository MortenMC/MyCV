import * as React from 'react';
import {TopBarView, TopBarContent} from './Styled'
import SelectedPageDropDown from './topBarComponents/SelectedPageDropDown'

class TopBar extends React.Component {
    render() {
        return (
        <div style={{display: 'flex', marginTop: '10px'}}>
            <div style={{width: '5%'}}></div>
                <TopBarView>
                    <TopBarContent>
                        <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                            <div style={{fontSize: '25px', color: 'black', fontWeight: 600}}>
                                CV - Morten Marcussen Cramer
                            </div>
                        </div>

                        <SelectedPageDropDown/> 
                    </TopBarContent> 
                </TopBarView>
            <div style={{width: '5%'}}></div>
        </div>
            
        )
    }
}

export default TopBar