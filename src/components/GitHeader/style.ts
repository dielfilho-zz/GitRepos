import styled from 'styled-components';

const Header = styled.u`
    display: flex;
    position: fixed;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-weight: bold;
    font-size: 40px;
    width: 100%;
    text-decoration: none;
    background: white;
    color: black;
    top:0;
    left: 0;
    right: 0;
    z-index : 999;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export default Header;