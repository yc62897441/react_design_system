import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colorList from '../config/css/color'
import fontFamilyList from '../config/css/fontFamily'
import fontSizeAndWeightList from '../config/css/fontSizeAndWeight'
import logoImg from '../assets/img/record.png'

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

const NavsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Nav = styled(Link)`
    margin: 0 5px;

    color: ${colorList.mainColor};
    font-family: ${fontFamilyList.NotoSans};
    font-size: ${fontSizeAndWeightList.small.fontSize};
    font-weight: ${fontSizeAndWeightList.small.fontWeight};

    text-decoration: none;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }

    @media (min-width: 576px) {
        margin: 0 7px;
        font-size: ${fontSizeAndWeightList.medium.fontSize};
        font-weight: ${fontSizeAndWeightList.medium.fontWeight};
    }

    @media (min-width: 992px) {
        margin: 0 10px;
        font-size: ${fontSizeAndWeightList.large.fontSize};
        font-weight: ${fontSizeAndWeightList.large.fontWeight};
    }
`

const linkList = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'ButtonsPage',
        url: '/ButtonsPage',
    },
    {
        title: 'FormPage',
        url: '/FormPage',
    },
    {
        title: 'ModalPage',
        url: '/ModalPage',
    },
    {
        title: 'TablePage',
        url: '/TablePage',
    },
    {
        title: 'TablePageNoPagination',
        url: '/TablePageNoPagination',
    },
    {
        title: 'TextPage',
        url: '/TextPage',
    },
    {
        title: 'TitlesPage',
        url: '/TitlesPage',
    },
]

function Header() {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Link to="/">
                    <img src={logoImg} alt="" srcSet="" />
                </Link>
            </LogoWrapper>
            <NavsWrapper>
                {linkList.length > 0 &&
                    linkList.map((link) => (
                        <Nav key={link.title} to={link.url}>
                            {link.title}
                        </Nav>
                    ))}
            </NavsWrapper>
        </HeaderWrapper>
    )
}

export default Header
