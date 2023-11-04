import styled from "styled-components";

export const NavBar = styled.header`
    height: 60px;
    border-bottom: 1px solid #ccc;
    padding: 5px 15px;
`

export const NavBarLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`
export const WpLogo = styled.div`
    width: 50px;
    height: 50px;
    & > img {
        width: 100%;
        height: 100%;
    }

`
export const WpText = styled.div`
font-family: Poppins-Bold;
font-size: 1.3rem;
`
export const NavBarRight = styled.div`

`