import * as React from 'react';
import {BottomBarView, BottomBarContent} from './Styled'

class BottomBar extends React.Component {
    render() {
        return (
        <div style={{display: 'flex', marginTop: '30px', justifyContent: 'center', marginBottom: '40px'}}>
            <BottomBarView>
                <BottomBarContent>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                        <div style={{fontSize: '10px', color: 'black', fontWeight: 600}}>
                                Dette CV er udviklet af Morten Marcussen Cramer, i teknologierne React og TypeScript
                        </div>
                    </div>
                </BottomBarContent> 
            </BottomBarView>
        </div>
            
        )
    }
}

export default BottomBar