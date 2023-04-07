import styled from 'styled-components'
import { TitleH1, TitleH2, TitleH3, TitleH4 } from '../components/miniComponents/Titles'
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
    width: 100%;
`

function TitlesPage() {
    return (
        <div>
            <h1>改變視窗大小，看 h1~h4 各元件的 RWD</h1>
            <Wrapper>
                {/* 表頭 */}
                <Row>
                    <Cell></Cell>
                    {Object.keys(colorList).length > 0 && Object.keys(colorList).map((key) => <Cell key={key}>{key}</Cell>)}
                </Row>

                <Row>
                    <Cell>
                        一般文字 RWD <br />
                        &lt; 576 <br />
                        &gt;= 576 & 992 &lt; <br />
                        &gt;= 992
                    </Cell>
                    {Object.keys(colorList).length > 0 &&
                        Object.keys(colorList).map((key) => (
                            <Cell key={key}>
                                <P
                                    color={colorList[key]}>
                                    Text 一般文字
                                </P>
                            </Cell>
                        ))}
                </Row>

                <Row>
                    <Cell>
                        TitleH4 RWD <br />
                        &lt; 576 <br />
                        &gt;= 576 & 992 &lt; <br />
                        &gt;= 992
                    </Cell>
                    {Object.keys(colorList).length > 0 &&
                        Object.keys(colorList).map((key) => (
                            <Cell key={key}>
                                <TitleH4
                                    color={colorList[key]}>
                                    TitleH4 標題
                                </TitleH4>
                            </Cell>
                        ))}
                </Row>

                <Row>
                    <Cell>
                        TitleH3 RWD <br />
                        &lt; 576 <br />
                        &gt;= 576 & 992 &lt; <br />
                        &gt;= 992
                    </Cell>
                    {Object.keys(colorList).length > 0 &&
                        Object.keys(colorList).map((key) => (
                            <Cell key={key}>
                                <TitleH3
                                    color={colorList[key]}>
                                    TitleH3 標題
                                </TitleH3>
                            </Cell>
                        ))}
                </Row>

                <Row>
                    <Cell>
                        TitleH2 RWD <br />
                        &lt; 576 <br />
                        &gt;= 576 & 992 &lt; <br />
                        &gt;= 992
                    </Cell>
                    {Object.keys(colorList).length > 0 &&
                        Object.keys(colorList).map((key) => (
                            <Cell key={key}>
                                <TitleH2
                                    color={colorList[key]}>
                                    TitleH2 標題
                                </TitleH2>
                            </Cell>
                        ))}
                </Row>

                <Row>
                    <Cell>
                        TitleH1 RWD <br />
                        &lt; 576 <br />
                        &gt;= 576 & 992 &lt; <br />
                        &gt;= 992
                    </Cell>
                    {Object.keys(colorList).length > 0 &&
                        Object.keys(colorList).map((key) => (
                            <Cell key={key}>
                                <TitleH1
                                    color={colorList[key]}>
                                    TitleH1 標題
                                </TitleH1>
                            </Cell>
                        ))}
                </Row>
            </Wrapper>
        </div>
    )
}

export default TitlesPage
