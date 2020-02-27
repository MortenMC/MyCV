import * as React from 'react';
import {TopBarView, TopBarContent} from './Styled';
import SelectedPageDropDown from './topBarComponents/SelectedPageDropDown';
import MMCLogoBlack from '../../theme/pictures/MMCLogoSort.png'

class TopBar extends React.Component {
    render() {
        return (
        <div style={{display: 'flex', marginTop: '10px', justifyContent: 'center'}}>
            <TopBarView>
                <TopBarContent>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}>
                        <img style={{height: '50px', margin: '10px'}} src={MMCLogoBlack} alt={MMCLogoBlack}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{fontSize: '25px', color: 'black', fontWeight: 600}}>
                            Curriculum Vitae
                        </div>
                    </div>

                    <SelectedPageDropDown/> 
                </TopBarContent> 
            </TopBarView>
        </div>
            
        )
    }
}

export default TopBar