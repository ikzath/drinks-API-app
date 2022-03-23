import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../GlobalStyles';
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    NavbarIcon,
    NavbarList,
    NavbarItem,
    NavbarLink,
    NavbarItemBtn,
    NavbarLinkBtn,
} from './NavbarElemnets';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            Drinks 4 Life
                        </NavLogo>
                        <NavbarIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </NavbarIcon>
                        <NavbarList onClick={handleClick} click={click}>
                            <NavbarItem>
                                <NavbarLink onClick={closeMenu} to="/">Hot Getränke</NavbarLink>
                            </NavbarItem>
                            <NavbarItem>
                                <NavbarLink onClick={closeMenu} to="/about">Kalte Getränke</NavbarLink>
                            </NavbarItem>
                            <NavbarItem>
                                <NavbarLink onClick={closeMenu} to="/offers">Special Offers</NavbarLink>
                            </NavbarItem>
                            <NavbarItemBtn>
                                {button?(
                                    <NavbarLinkBtn to="/order-now">
                                        <Button primary>Order Now</Button>
                                    </NavbarLinkBtn>
                                ): (
                                    <NavbarLinkBtn to="/order-now">
                                        <Button primary bigFont onClick={closeMenu}>Order Now</Button>
                                    </NavbarLinkBtn>
                                )}                                
                            </NavbarItemBtn>
                        </NavbarList>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar; 