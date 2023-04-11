import styled, { css } from 'styled-components'
import { Button } from './miniComponents/Buttons'
import { TitleH3, TitleH4 } from './miniComponents/Titles'
import { P } from './miniComponents/Text'
import colorList from '../config/css/color'

const ModalWrapper = styled.div`
    display: none;

    ${({ show }) =>
        show &&
        css`
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 5000;
        `}
`

const ModalMask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.2;
`

const ModalContainer = styled.div`
    position: fixed;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 100;
    overflow-y: scroll;

    @media (min-width: 576px) {
        padding: 20px;
    }

    @media (min-width: 992px) {
        padding: 30px;
    }
`

const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;

    @media (min-width: 576px) {
        margin-bottom: 20px;
    }

    @media (min-width: 992px) {
        margin-bottom: 30px;
    }
`

const ModalBody = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'column')};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};
    width: 100%;
`

function Modal({ show, setShow }) {
    return (
        <ModalWrapper show={show}>
            {/* 半透明背景遮罩，點擊可以關閉 Modal */}
            <ModalMask onClick={() => setShow(false)} />

            <ModalContainer>
                <ModalHeader>
                    <TitleH3 color={colorList.secondaryColorDarked}>標題</TitleH3>
                    <div>
                        <Button margin={'0 5px'}>儲存</Button>
                        <Button margin={'0 5px'} onClick={() => setShow(false)}>
                            取消
                        </Button>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <TitleH4 color={colorList.contrastingColor}>內容 1</TitleH4>
                    <P color={colorList.contrastingColor}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nibh ac nunc porta pulvinar. Morbi a feugiat arcu. Sed vestibulum pretium nisi vel porta. Proin pellentesque vitae enim euismod vestibulum. Maecenas malesuada arcu a nulla varius molestie. Praesent ac aliquam augue, in rutrum dolor. Aliquam erat volutpat. Vivamus in porta nunc. Morbi elementum quam ac ligula convallis, in hendrerit risus condimentum. Vestibulum elementum, mi ac efficitur aliquet, ex eros hendrerit nibh, vitae pulvinar metus elit id quam.</P>
                    <br />

                    <TitleH4 color={colorList.contrastingColor}>內容 2</TitleH4>
                    <P color={colorList.contrastingColor}>Ut quis consectetur augue. Vestibulum sit amet metus id velit tristique facilisis. Curabitur finibus sem sit amet metus ornare ultricies. Curabitur id dignissim mi. Cras eu tortor quis erat tincidunt semper. Praesent justo nulla, tempor quis eros sed, vestibulum hendrerit mauris. Duis tincidunt massa non bibendum fringilla. Aenean efficitur elementum massa nec vulputate. Curabitur malesuada faucibus lorem vitae iaculis. Morbi dignissim velit et elementum dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</P>
                    <br />

                    <TitleH4 color={colorList.contrastingColor}>內容 3</TitleH4>
                    <P color={colorList.contrastingColor}>Sed pulvinar est eget velit viverra, non gravida enim maximus. Vivamus interdum felis ac dui ultrices gravida. Aliquam erat volutpat. Quisque mauris nulla, bibendum vel consequat non, finibus nec neque. Donec auctor vitae turpis ut tempus. Ut ac enim viverra, molestie mauris et, mollis justo. Quisque bibendum cursus eros, sit amet mattis nibh convallis fermentum. Integer eros arcu, ultricies id ante a, iaculis dignissim est. Phasellus quis lacus bibendum, posuere elit quis, tincidunt metus. Pellentesque vel hendrerit sem, eget pharetra quam. Phasellus at augue sed odio blandit ultricies malesuada et leo. Pellentesque efficitur massa nec nisi ultrices, eu tincidunt purus iaculis.</P>

                    <TitleH4 color={colorList.contrastingColor}>內容 4</TitleH4>
                    <P color={colorList.contrastingColor}>
                        Aenean sit amet ornare mi. Nam aliquet egestas metus et tempor. Morbi quis dictum elit, sit amet elementum nunc. Morbi ac vehicula est. Vivamus pretium leo et mattis rhoncus. Mauris porta, elit et semper molestie, nisl velit ullamcorper nisi, quis lacinia nulla libero ac dolor. Fusce tempor fringilla neque vel feugiat. Cras pretium mi urna, sed maximus justo mollis quis. Cras dictum laoreet nisi quis feugiat. Pellentesque ut sagittis orci. Suspendisse diam orci, accumsan at ante ac, cursus pulvinar dui. Vestibulum tincidunt mi ac gravida ultricies. Nunc sed tincidunt nisi, nec tincidunt ante. Suspendisse ac diam ac elit semper aliquam id vitae risus. Sed ante lacus, auctor et sollicitudin nec, mollis ut est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                    </P>

                    <TitleH4 color={colorList.contrastingColor}>內容 5</TitleH4>
                    <P color={colorList.contrastingColor}>
                        Quisque non ex id massa pellentesque lobortis eu in est. Aenean mattis tristique lacus nec fermentum. Integer pellentesque mauris ac sem fermentum, consequat varius tortor molestie. Donec leo purus, volutpat quis erat sed, eleifend dapibus felis. Donec blandit, tortor quis tincidunt facilisis, velit diam sollicitudin eros, id rhoncus lacus ante vitae ante. Nullam sit amet odio ac ligula molestie egestas a ut elit. Cras aliquam dolor at ex faucibus efficitur. Quisque rutrum dolor a tellus vestibulum elementum. Duis egestas posuere elementum. Nam cursus, mi eget scelerisque pretium, justo metus eleifend libero, eu sodales neque diam nec est. Praesent ultricies nisi erat, at lobortis nibh gravida ut. Quisque bibendum lacus nec ornare vulputate. Vivamus id consequat
                        libero.
                    </P>
                </ModalBody>
            </ModalContainer>
        </ModalWrapper>
    )
}

export default Modal
