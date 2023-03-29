import styled from 'styled-components'
import colorList from '../../config/css/color'
import fontFamilyList from '../../config/css/fontFamily'
import fontSizeAndWeightList from '../../config/css/fontSizeAndWeight'

const Button = styled.button`
    padding: ${({ padding }) => (padding ? padding : '5px')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    border: none;
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
    outline: none;
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colorList.secondaryColor)};

    color: ${({ color }) => (color ? color : colorList.mainColor)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.medium.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.medium.fontWeight)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : fontFamilyList.NotoSans)};

    cursor: pointer;
`

const ConfirmButton = styled(Button)`
    color: ${({ color }) => (color ? color : colorList.mainColor)};
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colorList.secondaryColorLighted)};
`

const DeleteButton = styled(Button)`
    color: ${({ color }) => (color ? color : colorList.mainColor)};
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'red')};
`

export { Button, ConfirmButton, DeleteButton }
