import * as React from 'react';
import { DropDownLi, DropDownBody, ArrowDown, ArrowUp } from '../Styled';
import { Link } from "react-router-dom";

interface Props {
}

type State = {
    showMenu: boolean
    currentState: string;
    arrow: boolean;
    pageState: string;
}

class SelectStateDropDown extends React.Component<Props, State>{
    dropdownMenu: any;
    constructor(props: Props) {
        super(props);
        this.state = {
            showMenu: false,
            currentState: 'Forside',
            arrow: false,
            pageState: ''
        };
    }


    showMenu = () => {
        this.setState({ showMenu: true, arrow: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = () => {
        this.setState({ showMenu: false, arrow: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    setSelectedStateView = (temp: String) =>  {
        this.setState({ currentState: temp.toString(), showMenu: false, arrow: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        })
    }

    render() {

        return (
            <div onMouseLeave={this.closeMenu}>
                <DropDownBody >
                    <DropDownLi onMouseEnter={this.showMenu} style={{background: '#015000', display: "flex" }}>
                        <div style={{ display: "flex", justifyContent: "flex-start", minWidth: "90%"}}>
                            {this.state.currentState === "Forside" ? "Forside" : this.state.currentState}
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", maxWidth: "10%", alignItems: 'center'}}>
                            {this.state.arrow && <ArrowUp/> || <ArrowDown/>}
                        </div>
                    </DropDownLi>
                </DropDownBody>
                {
                    this.state.showMenu
                        ? (
                            < DropDownBody
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <div style={{textAlign: 'center'}}>
                                    <Link to='/' style={{textDecoration: 'none'}}>
                                        <DropDownLi onClick={() => this.setSelectedStateView("Forside")} style={{display: this.state.currentState !== "Forside" ? "flex" : "none"}}>
                                            Forside 
                                        </DropDownLi>
                                    </Link>
                                    <Link to='/Erfaring' style={{textDecoration: 'none'}}>
                                        <DropDownLi onClick={() => this.setSelectedStateView("Erfaring")} style={{display: this.state.currentState !== "Erfaring" ? "flex" : "none"}}> 
                                            Erfaring 
                                        </DropDownLi>
                                    </Link>
                                    <Link to='/Uddannelse' style={{textDecoration: 'none'}}>
                                        <DropDownLi onClick={() => this.setSelectedStateView("Uddannelse")} style={{display: this.state.currentState !== "Uddannelse" ? "flex" : "none"}}>
                                            Uddannelse 
                                        </DropDownLi>
                                    </Link>
                                </div>
                            </ DropDownBody>
                        )
                        : (
                            null
                        )
                }
            </div>

        );
    }
}

export default SelectStateDropDown;