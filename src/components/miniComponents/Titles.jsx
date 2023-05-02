import styled from 'styled-components'
import colorList from '../../config/css/color'
import fontFamilyList from '../../config/css/fontFamily'
import fontSizeAndWeightList, { titleH1FontSizeAndWeightList, titleH2FontSizeAndWeightList, titleH3FontSizeAndWeightList, titleH4FontSizeAndWeightList } from '../../config/css/fontSizeAndWeight'

const Title = styled.h1`
    margin: 0;

    color: ${({ color }) => (color ? color : colorList.mainColor)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.medium.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.medium.fontWeight)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : fontFamilyList.NotoSans)};

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.large.fontWeight)};
    }
`

const TitleH1 = styled.h1`
    margin: 0;

    color: ${({ color }) => (color ? color : colorList.mainColor)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH1FontSizeAndWeightList.medium.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH1FontSizeAndWeightList.medium.fontWeight)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : fontFamilyList.NotoSans)};

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH1FontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH1FontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH1FontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH1FontSizeAndWeightList.large.fontWeight)};
    }
`

const TitleH2 = styled.h2`
    margin: 0;

    color: ${({ color }) => (color ? color : colorList.mainColor)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH2FontSizeAndWeightList.medium.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH2FontSizeAndWeightList.medium.fontWeight)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : fontFamilyList.NotoSans)};

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH2FontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH2FontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH2FontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH2FontSizeAndWeightList.large.fontWeight)};
    }
`

const TitleH3 = styled.h3`
    margin: 0;

    color: ${({ color }) => (color ? color : colorList.mainColor)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH3FontSizeAndWeightList.medium.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH3FontSizeAndWeightList.medium.fontWeight)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : fontFamilyList.NotoSans)};

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH3FontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH3FontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH3FontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH3FontSizeAndWeightList.large.fontWeight)};
    }
`

const TitleH4 = styled.h4`
    margin: 0;

    color: ${({ color }) => (color ? color : colorList.mainColor)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH4FontSizeAndWeightList.medium.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH4FontSizeAndWeightList.medium.fontWeight)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : fontFamilyList.NotoSans)};

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH4FontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH4FontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : titleH4FontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : titleH4FontSizeAndWeightList.large.fontWeight)};
    }
`

export { Title, TitleH1, TitleH2, TitleH3, TitleH4 }
