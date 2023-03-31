import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colorList from '../config/css/color'
import fontFamilyList from '../config/css/fontFamily'
import fontSizeAndWeightList from '../config/css/fontSizeAndWeight'

const HeaderWrapper = styled.div`
    width: 100%;
    padding: 20px;
    background-color: ${colorList.secondaryColor};
`

const Nav = styled(Link)`
    margin: 0 10px;

    color: ${colorList.mainColor};
    font-family: ${fontFamilyList.NotoSans};
    font-size: ${fontSizeAndWeightList.medium.fontSize};
    font-weight: ${fontSizeAndWeightList.medium.fontWeight};

    text-decoration: none;
    cursor: pointer;

    :hover {
        text-decoration: underline;
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
        title: 'TitlesPage',
        url: '/TitlesPage',
    },
    {
        title: 'TextPage',
        url: '/TextPage',
    },
    {
        title: 'TablePage',
        url: '/TablePage',
    },
]

function Header() {
    return (
        <HeaderWrapper>
            {linkList.length > 0 &&
                linkList.map((link) => (
                    <Nav key={link.title} to={link.url}>
                        {link.title}
                    </Nav>
                ))}
        </HeaderWrapper>
    )
}

export default Header
