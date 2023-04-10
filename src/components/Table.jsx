import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Table, THead, Tbody, THeadTr, Tr, TCell, TableLabel, TableSortLabel } from './miniComponents/TableComponents'
import { PaginationRaw } from './miniComponents/Pagination'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 30px;
    overflow-x: scroll;
`

export default function UseTable(data, headCells) {
    const [page, setPage] = useState(1)
    const [numberPerPage, setNumberPerPage] = useState(10)
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()
    const [dataAfterPagingAndSorting, setDataAfterPagingAndSorting] = useState([])
    const maxPage = Math.floor((data.length - 1) / numberPerPage) + 1

    // 確定「經過排序與分頁處理的資料(dataAfterPagingAndSorting)」在頁面 mounted 以及 order, orderBy, page, numberPerPage 有異動時，會一起更新，確保顯示在畫面上的資料內容有正確被排序並依分頁顯示。
    useEffect(() => {
        const tempDataAfterPagingAndSorting = stableSort(data, comparator).slice((page - 1) * numberPerPage, page * numberPerPage)
        setDataAfterPagingAndSorting(tempDataAfterPagingAndSorting)
    }, [order, orderBy, page, numberPerPage])

    // ===== TblContainer =====
    const TblContainer = (props) => (
        <Wrapper>
            <Table>{props.children}</Table>
        </Wrapper>
    )

    // ===== TblHead =====
    // 啟動 sort 資料
    function handleSortRequest(cellId) {
        // 如果是同樣的資料 column，則切換 order("desc" or "asc")；如果使用者切換資料 column，則以 "asc" 來排序
        const isAsc = orderBy === cellId && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(cellId)
    }

    const TblHead = () => {
        return (
            <THead>
                <THeadTr>
                    {headCells.map((headCell) => (
                        <TCell key={headCell.id}>
                            {headCell.disableSorting ? (
                                <TableLabel>{headCell.label}</TableLabel>
                            ) : (
                                <TableSortLabel
                                    active={orderBy === headCell.label}
                                    direction={orderBy === headCell.label ? order : 'asc'}
                                    onClick={() => {
                                        handleSortRequest(headCell.label)
                                    }}
                                >
                                    {headCell.label}
                                </TableSortLabel>
                            )}
                        </TCell>
                    ))}
                </THeadTr>
            </THead>
        )
    }

    // ===== TblBody =====
    // 排序資料
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index])
        stabilizedThis.sort((a, b) => {
            const order = comparator(a, b) // order 只會是 -1、0、1 這三種
            if (order !== 0) return order
            return a[1] - b[1] // 如果 a[0] b[0] 相等，則用 index(即 a[1] b[1])來比較排序
        })
        return stabilizedThis.map((el) => el[0])
    }

    function comparator(a, b) {
        if (order === 'desc') {
            if (b[0][orderBy] < a[0][orderBy]) return -1
            if (b[0][orderBy] > a[0][orderBy]) return 1
            return 0
        } else {
            if (b[0][orderBy] < a[0][orderBy]) return 1
            if (b[0][orderBy] > a[0][orderBy]) return -1
            return 0
        }
    }

    const TblBody = () => {
        return (
            <Tbody>
                {dataAfterPagingAndSorting.length > 0 &&
                    dataAfterPagingAndSorting.map((item, rowIndex) => (
                        <Tr key={rowIndex}>
                            {Object.keys(item).map((key, index) => (
                                <TCell key={index}>{item[key]}</TCell>
                            ))}
                        </Tr>
                    ))}
            </Tbody>
        )
    }

    // ===== TblPagination =====
    // 切換頁面
    function handleChangePage(newPage) {
        if (newPage <= 0) {
            setPage(1)
        } else if (newPage >= maxPage) {
            setPage(maxPage)
        } else {
            setPage(newPage)
        }
    }

    // 切換每頁顯示筆數
    function handleChangeNumberPerPage(newNumberPerPage) {
        // 計算出「改變 numberPerPage」後，應在第幾頁
        const currentPageFirstItemIndex = (page - 1) * numberPerPage
        const newPage = Math.floor(currentPageFirstItemIndex / Number(newNumberPerPage)) + 1
        setPage(newPage)
        // 改變 numberPerPage
        setNumberPerPage(Number(newNumberPerPage))
    }

    const TblPagination = () => {
        return <PaginationRaw page={page} maxPage={maxPage} numberPerPage={numberPerPage} handleChangePage={handleChangePage} handleChangeNumberPerPage={handleChangeNumberPerPage}></PaginationRaw>
    }

    // ===== return =====
    return {
        TblContainer,
        TblHead,
        TblBody,
        TblPagination,
    }
}
