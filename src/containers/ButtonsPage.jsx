import styled from 'styled-components'
import { Button } from '../components/miniComponents/Buttons'
import colorList from '../config/css/color'
import fontFamilyList from '../config/css/fontFamily'
import fontSizeAndWeightList from '../config/css/fontSizeAndWeight'

const Table = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    background-color: #eeeeee;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 25px 0;
`

const Cell = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

function ButtonsPage() {
    return (
        <div>
            <h1>ButtonsPage</h1>
            <Table>
                {/* 表頭 */}
                <Row>
                    <Cell></Cell>
                    {Object.keys(colorList).length > 0 && Object.keys(colorList).map((key) => <Cell key={key}>{key}</Cell>)}
                </Row>

                <Row>
                    <Cell>
                        RWD <br />
                        &lt; 576 <br />
                        &gt;= 576 & 992 &lt; <br />
                        &gt;= 992
                    </Cell>
                    {Object.keys(colorList).length > 0 &&
                        Object.keys(colorList).map((key) => (
                            <Cell key={key}>
                                <Button
                                    backgroundColor={colorList[key]}
                                    color={key === 'mainColor' ? colorList.contrastingColor : colorList.mainColor}>
                                    Button 按鈕
                                </Button>
                            </Cell>
                        ))}
                </Row>

                {
                    // 字型
                    Object.keys(fontFamilyList).length > 0 && Object.keys(fontFamilyList).map((fontFamily) => {
                        // 字體大小、粗度
                        return Object.keys(fontSizeAndWeightList).length > 0 &&
                            Object.keys(fontSizeAndWeightList).map((fontSizeAndWeight) =>
                            (
                                <Row key={fontFamily + fontSizeAndWeight}>
                                    <Cell>字型: {fontFamilyList[fontFamily]} <br />
                                        size: {fontSizeAndWeightList[fontSizeAndWeight].fontSize} <br />
                                        weight: {fontSizeAndWeightList[fontSizeAndWeight].fontWeight}
                                    </Cell>
                                    {/* 顏色 */}
                                    {Object.keys(colorList).length > 0 &&
                                        Object.keys(colorList).map((key) => (
                                            <Cell key={key}>
                                                <Button backgroundColor={colorList[key]}
                                                    color={key === 'mainColor' ? colorList.contrastingColor : colorList.mainColor}
                                                    fontSize={fontSizeAndWeightList[fontSizeAndWeight].fontSize}
                                                    fontWeight={fontSizeAndWeightList[fontSizeAndWeight].fontWeight}
                                                    fontFamily={fontFamilyList[fontFamily]}>
                                                    Button 按鈕
                                                </Button>
                                            </Cell>
                                        ))
                                    }
                                </Row>
                            ))
                    })
                }
            </Table>
        </div>
    )
}

export default ButtonsPage
