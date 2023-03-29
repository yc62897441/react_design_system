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
    margin: 10px 0;
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
                <Row>
                    <Cell></Cell>
                    {Object.keys(colorList).length > 0 && Object.keys(colorList).map((key) => <Cell key={key}>{key}</Cell>)}
                </Row>
                <Row>
                    <Cell>樣式：</Cell>
                    {Object.keys(colorList).length > 0 &&
                        Object.keys(colorList).map((key) => (
                            <Cell key={key}>
                                <Button backgroundColor={colorList[key]} color={key === 'mainColor' ? colorList.contrastingColor : colorList.mainColor}>
                                    Button
                                </Button>
                            </Cell>
                        ))}
                </Row>
                <Row>
                    <Cell>使用情境：</Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell>取消/刪除</Cell>
                    <Cell>確認</Cell>
                    <Cell></Cell>
                </Row>
            </Table>
        </div>
    )
}

export default ButtonsPage
