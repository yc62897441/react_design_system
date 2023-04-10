import styled from 'styled-components'
import colorList from '../../config/css/color'
import { Button } from './Buttons'
import { Label, Select, Option, FormGroup } from './FormComponents'

const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 5px;
`

function PaginationRaw({ page, maxPage, numberPerPage, handleChangePage, handleChangeNumberPerPage }) {
    return (
        <PaginationWrapper>
            <Button
                margin={'5px'}
                onClick={() => {
                    handleChangePage(1)
                }}
            >
                第一頁
            </Button>
            <Button
                margin={'5px'}
                onClick={() => {
                    handleChangePage(Number(page) - 1)
                }}
            >
                上一頁
            </Button>

            {/* 建立數字頁籤 */}
            {Array.from({ length: maxPage }, (v, i) => i).map((i, index) => {
                if (page - 5 <= Number(i + 1) && Number(i + 1) <= page + 5) {
                    const isActive = Number(i + 1) === page ? true : false
                    return (
                        <Button
                            key={index}
                            margin={'5px'}
                            onClick={() => {
                                handleChangePage(Number(i) + 1)
                            }}
                            backgroundColor={isActive && colorList.complementaryColor}
                        >
                            {Number(i) + 1}
                        </Button>
                    )
                }
            })}

            <Button
                margin={'5px'}
                onClick={() => {
                    handleChangePage(Number(page) + 1)
                }}
            >
                下一頁
            </Button>
            <Button
                margin={'5px'}
                onClick={() => {
                    handleChangePage(Number(maxPage))
                }}
            >
                最後頁
            </Button>

            <FormGroup flexDirection={'row'}>
                <Label>每頁顯示筆數</Label>
                <Select onChange={(e) => handleChangeNumberPerPage(e.target.value)} value={numberPerPage} faultValue={numberPerPage}>
                    <Option value={10}>10</Option>
                    <Option value={25}>25</Option>
                    <Option value={50}>50</Option>
                </Select>
            </FormGroup>
        </PaginationWrapper>
    )
}

export { PaginationRaw }
