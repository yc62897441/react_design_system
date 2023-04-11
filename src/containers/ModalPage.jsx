import { useState } from 'react'
import Modal from '../components/Modal'
import { Button } from '../components/miniComponents/Buttons'

function ModalPage() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <br />
            <br />
            <Button onClick={() => setShow(true)}>顯示 Modal</Button>
            <Modal show={show} setShow={setShow}></Modal>
        </div>
    )
}

export default ModalPage
