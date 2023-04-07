import styled from 'styled-components'
import { P } from '../components/miniComponents/Text'
import colorList from '../config/css/color'

const Wrapper = styled.div`
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
    /* flex-shrink: 0; */
    max-width: 100%;
    padding: 0 5px;
`

function TextPage() {
    return (
        <div>
            <h1>改變視窗大小，看 paragraph 的 RWD</h1>
            <Wrapper>
                {/* 表頭 */}
                {/* <Row>
                    <Cell></Cell>
                    {Object.keys(colorList).length > 0 && Object.keys(colorList).map((key) => <Cell key={key}>{key}</Cell>)}
                </Row> */}

                {Object.keys(colorList).length > 0 &&
                    Object.keys(colorList).map((key) => (
                        <Row>
                            <Cell>
                                RWD <br />
                                &lt; 576 <br />
                                &gt;= 576 & 992 &lt; <br />
                                &gt;= 992
                            </Cell>
                            <Cell key={key}>
                                <P
                                    color={colorList[key]}>
                                    文字段落：<br />
                                    臣亮言：先帝創業未半，而中道崩殂。今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衛之臣，不懈於內；忠志之士，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。<br />
                                    English Paragraph：<br />
                                    I, your servant, would like to speak: our late emperor had only just begun to establish his reign when he tragically passed away. Now the realm is divided into three, and the province of Yizhou is exhausted and weakened. This is truly a perilous time for the survival of the state.
                                </P>
                            </Cell>
                        </Row>
                    ))}
            </Wrapper>
        </div>
    )
}

export default TextPage
