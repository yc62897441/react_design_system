import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colorList from '../config/css/color'
import { linkList } from '../config/router'
import logoImg from '../assets/img/record.png'

import { NavsWrapper, Nav } from './miniComponents/Nav'

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: ${colorList.secondaryColor};

    @media (min-width: 576px) {
        padding: 15px;
    }

    @media (min-width: 992px) {
        padding: 20px;
    }
`

const LogoWrapper = styled.div`
    display: flex;
    flex-shrink: 0;
    width: 25px;
    height: 25px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: 576px) {
        width: 30px;
        height: 30px;
    }

    @media (min-width: 992px) {
        width: 40px;
        height: 40px;
    }
`

const linkListTransforms = []
linkList.forEach((obj) => {
    obj.subTitles.forEach((item) => {
        linkListTransforms.push(item)
    })
})

function Header() {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Link to="/">
                    <img src={logoImg} alt="" srcSet="" />
                </Link>
            </LogoWrapper>
            <NavsWrapper>
                {linkListTransforms.length > 0 &&
                    linkListTransforms.map((link) => (
                        <Nav key={link.title} to={link.url}>
                            {link.title}
                        </Nav>
                    ))}
            </NavsWrapper>
        </HeaderWrapper>
    )
}

export default Header
