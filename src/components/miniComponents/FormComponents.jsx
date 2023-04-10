import styled from 'styled-components'
import colorList from '../../config/css/color'
import fontFamilyList from '../../config/css/fontFamily'
import fontSizeAndWeightList, { labelFontSizeAndWeightList } from '../../config/css/fontSizeAndWeight'

// mainColor: '#FEFEFE', // 主色調
// secondaryColor: '#668BC4', // 輔助色調
// secondaryColorLighted: '#A5BECF', // 輔助色調
// secondaryColorDarked: '#335495', // 輔助色調
// contrastingColor: '#040A1B', // 強調色調
// complementaryColor: '#c49f66', // 補充色調

const Form = styled.form`
    width: ${({ width }) => (width ? width : '100%')};
    padding: ${({ padding }) => (padding ? padding : '30px')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    /* border: ${({ border }) => (border ? border : '1px solid black')}; */
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colorList.mainColor)};
    color: ${({ color }) => (color ? color : colorList.contrastingColor)};

    font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.small.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.small.fontWeight)};
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

const FormGroup = styled.form`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'column')};
`

const Label = styled.label`
    margin: ${({ margin }) => (margin ? margin : '5px 5px')};
    padding: ${({ padding }) => (padding ? padding : '0')};
    color: ${({ color }) => (color ? color : colorList.secondaryColorDarked)};

    font-size: ${({ fontSize }) => (fontSize ? fontSize : labelFontSizeAndWeightList.small.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : labelFontSizeAndWeightList.small.fontWeight)};

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : labelFontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : labelFontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : labelFontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : labelFontSizeAndWeightList.large.fontWeight)};
    }
`

const Input = styled.input`
    margin: ${({ margin }) => (margin ? margin : '0')};
    padding: ${({ padding }) => (padding ? padding : '5px')};
    border: 1px solid black;
    border-color: ${({ borderColor }) => (borderColor ? borderColor : colorList.contrastingColor)};
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
    outline: none;

    background-color: #ffffff;
    color: ${({ color }) => (color ? color : colorList.secondaryColorDarked)};

    font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.small.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.small.fontWeight)};

    :focus {
        outline: 1px solid black;
        outline-color: ${({ borderColor }) => (borderColor ? borderColor : colorList.contrastingColor)};
    }

    :checked,
    :active {
        border: none;
        outline: none;
    }

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.large.fontWeight)};
    }
`

const InputRange = styled(Input)`
    padding: 0;

    :focus {
        outline: none;
    }
    :checked,
    :active {
        border: 1px solid black;
        border-color: ${({ borderColor }) => (borderColor ? borderColor : colorList.contrastingColor)};
        outline: none;
    }
`

// Select + Option
const Select = styled.select`
    margin: ${({ margin }) => (margin ? margin : '0')};
    padding: ${({ padding }) => (padding ? padding : '5px')};
    border: 1px solid black;
    border-color: ${({ borderColor }) => (borderColor ? borderColor : colorList.contrastingColor)};
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
    outline: none;

    background-color: #ffffff;
    color: ${({ color }) => (color ? color : colorList.secondaryColorDarked)};

    font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.small.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.small.fontWeight)};

    :focus {
        outline: 1px solid black;
        outline-color: ${({ borderColor }) => (borderColor ? borderColor : colorList.contrastingColor)};
    }

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.large.fontWeight)};
    }
`
const Option = styled.option`
    background-color: #ffffff;
`

// Fieldset (checkbox、radio)
const Fieldset = styled.fieldset``
const Legend = styled.legend``

// Textarea
const Textarea = styled.textarea`
    margin: ${({ margin }) => (margin ? margin : '0')};
    padding: ${({ padding }) => (padding ? padding : '5px')};
    border: 1px solid black;
    border-color: ${({ borderColor }) => (borderColor ? borderColor : colorList.contrastingColor)};
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
    outline: none;

    background-color: #ffffff;
    color: ${({ color }) => (color ? color : colorList.secondaryColorDarked)};

    font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.small.fontSize)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.small.fontWeight)};

    resize: none;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 7px;
    }
    ::-webkit-scrollbar-button {
        /* background: transparent; */
        /* border-radius: 4px; */
    }
    ::-webkit-scrollbar-track-piece {
        /* background: transparent; */
        border-radius: 4px;
        background-color: rgba(225, 225, 225, 1);
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(180, 180, 180, 1);
        border: 1px solid slategrey;
    }
    ::-webkit-scrollbar-track {
        box-shadow: transparent;
    }

    :focus {
        outline: 1px solid black;
        outline-color: ${({ borderColor }) => (borderColor ? borderColor : colorList.contrastingColor)};
    }

    @media (min-width: 576px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.medium.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.medium.fontWeight)};
    }

    @media (min-width: 992px) {
        font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizeAndWeightList.large.fontSize)};
        font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : fontSizeAndWeightList.large.fontWeight)};

        ::-webkit-scrollbar {
            width: 10px;
        }
    }
`

export { Form, FormGroup, Label, Input, InputRange, Select, Option, Fieldset, Legend, Textarea }
