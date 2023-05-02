import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colorList from '../../config/css/color'
import fontFamilyList from '../../config/css/fontFamily'
import fontSizeAndWeightList from '../../config/css/fontSizeAndWeight'

const NavsWrapper = styled.div`
    height: ${({ height }) => (height ? height : '')};
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'row')};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};
    flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : 'wrap')};
    padding: ${({ padding }) => (padding ? padding : '')};
    margin: ${({ margin }) => (margin ? margin : '')};

`

const Nav = styled(Link)`
    margin: 0 5px;

    color: ${colorList.mainColor};
    font-family: ${fontFamilyList.NotoSans};
    font-size: ${fontSizeAndWeightList.medium.fontSize};
    font-weight: ${fontSizeAndWeightList.medium.fontWeight};

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

export { NavsWrapper, Nav }
