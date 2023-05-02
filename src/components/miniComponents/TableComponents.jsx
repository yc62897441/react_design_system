import styled, { css } from 'styled-components'
import colorList from '../../config/css/color'
import fontFamilyList from '../../config/css/fontFamily'
import fontSizeAndWeightList from '../../config/css/fontSizeAndWeight'

const Table = styled.table`
    width: 100%;
    padding: 0;
    margin: 0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

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

const THead = styled.div`
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colorList.secondaryColorDarked)};
    color: ${({ color }) => (color ? color : colorList.mainColor)};
`

const Tbody = styled.div`
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colorList.mainColor)};
    color: ${({ color }) => (color ? color : colorList.contrastingColor)};
`

const THeadTr = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0;
`

const Tr = styled(THeadTr)`
    :hover {
        background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colorList.secondaryColorLighted)};
        color: ${({ color }) => (color ? color : colorList.contrastingColor)};
    }
`

const TCell = styled.div`
    width: 100%;
    margin: 0;
    padding: 0 5px;
    outline: none;
`

const TableLabel = styled.label`
    width: 100%;
    margin: 0;
    padding: 0;
    outline: none;
`

const TableSortLabel = styled(TableLabel)`
    position: relative;
    cursor: pointer;

    :after {
        position: relative;
        top: -10%;
        content: ' ↑ ';
        color: ${colorList.mainColor};
        font-weight: 900;

        ${({ active, direction }) =>
            active &&
            direction == 'desc' &&
            css`
                content: ' ↓ ';
            `}
    }

    :hover {
        color: ${colorList.complementaryColor};
        :after {
            color: ${colorList.complementaryColor};
        }
    }

    ${({ active }) =>
        active &&
        css`
            color: ${colorList.complementaryColor};
            :after {
                color: ${colorList.complementaryColor};
            }
        `}
`
export { Table, THead, Tbody, THeadTr, Tr, TCell, TableLabel, TableSortLabel }
