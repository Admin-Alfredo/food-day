import {  Soup } from 'lucide-react';
import { NavBar, NavBarLeft, NavBarRight, WpLogo, WpText } from './styles'


export default function Header() {
    return (
        <NavBar>
            <NavBarLeft>
                <WpLogo>
                    <Soup color="red" size={48} />
                </WpLogo>
                <WpText><span>COOK DAY</span></WpText>
            </NavBarLeft>
            <NavBarRight>
                
            </NavBarRight>
        </NavBar>
    )
}
