import styled from 'styled-components'
import colorList from '../../config/css/color'
import fontFamilyList from '../../config/css/fontFamily'
import fontSizeAndWeightList from '../../config/css/fontSizeAndWeight'

const P = styled.p`
    color: ${({ color }) => (color ? color : colorList.mainColor)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.medium.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.medium.fontWeight)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : fontFamilyList.NotoSans)};
    margin: 0;
    padding: 0;

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.large.fontWeight)};
    }
`

export { P }
