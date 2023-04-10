import styled from 'styled-components'
import { Table, THead, Tbody, THeadTr, Tr, TCell } from '../components/miniComponents/TableComponents'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 30px;
    overflow-x: scroll;
`

function TablePageNoPagination() {
    return (
        <div>
            <h1>Table No Pagination</h1>
            <Wrapper>
                <Table>
                    <THead>
                        <THeadTr>
                            {Array.from({ length: 12 }, (v, i) => i).map((item, index) => (
                                <TCell key={index}>Column {index + 1}</TCell>
                            ))}
                        </THeadTr>
                    </THead>
                    <Tbody>
                        {Array.from({ length: 20 }, (v, i) => i).map((row, rowIndex) => (
                            <Tr key={rowIndex}>
                                {Array.from({ length: 12 }, (v, i) => i).map((item, index) => (
                                    <TCell key={index}>
                                        Row {rowIndex + 1} - {index + 1}
                                    </TCell>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Wrapper>
        </div>
    )
}

export default TablePageNoPagination
