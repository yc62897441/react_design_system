import UseTable from '../components/Table'

// 建立測試用假資料
const dummyDataHeader = Array.from({ length: 12 }, (v, i) => i).map((item, index) => {
    return {
        id: index,
        label: `Column ${index + 1}`,
        disableSorting: index !== 5 ? false : true,
    }
})
const dummyData = Array.from({ length: 177 }, (v, i) => i).map((row, rowIndex) => {
    const result = {}
    dummyDataHeader.forEach((item) => {
        result[item.label] = `Row ${numberToString(Number(rowIndex) + 1)} - ${item.id + 1}`
    })
    return result
})
function numberToString(number) {
    let text = number.toString()
    while (text.length < 3) {
        text = '0' + text
    }
    return text
}

function TablePage() {
    const { TblContainer, TblHead, TblBody, TblPagination } = UseTable(dummyData, dummyDataHeader)

    return (
        <div>
            <h1>Table</h1>
            <TblContainer>
                <TblHead></TblHead>
                <TblBody></TblBody>
                <TblPagination></TblPagination>
            </TblContainer>
        </div>
    )
}

export default TablePage
