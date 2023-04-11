import styled from 'styled-components'
import { NavsWrapper, Nav } from './miniComponents/Nav'
import { TitleH4 } from './miniComponents/Titles'
import { P } from './miniComponents/Text'

import colorList from '../config/css/color'
import { linkList } from '../config/router'

// 圖檔
import LogoImg from '../assets/img/record.png'
import FacebookIcon from '../assets/img/Footer/facebook-gef43ff891_640.png'
import InstagramIcon from '../assets/img/Footer/instagram-g6111b1164_640.png'
import TwitterIcon from '../assets/img/Footer/twitter-g3f4c028b3_640.png'

const FooterWrapper = styled.div`
    position: relative;
    bottom: -100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: ${colorList.secondaryColorDarked};
    color: #ffffff;

    @media (min-width: 576px) {
        padding: 15px;
    }

    @media (min-width: 992px) {
        display: grid;
        align-items: flex-start;
        grid-template-columns: 35% 65%;
        padding: 30px;
    }
`

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 992px) {
        grid-column: 1;
    }
`

const RightWrapper = styled.div`
    display: none;

    @media (min-width: 992px) {
        position: static;
        grid-column: 2;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        opacity: 1;
    }
`

const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    @media (min-width: 992px) {
        grid-column: 1 / 4;
    }
`

const LogoWrapper = styled.div`
    height: 50px;
    margin-bottom: 5px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (min-width: 576px) {
        height: 70px;
        margin-bottom: 10px;
    }
    @media (min-width: 992px) {
        height: 100px;
        margin-bottom: 15px;
    }
`

const ContactInfoWrapper = styled.div``

const InfoWrapper = styled.div`
    margin-bottom: 15px;
    > div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 300px;
        margin-bottom: 10px;
    }
`

const SocialMediaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const SocialMediaIconWrapper = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 10px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

function Footer() {
    return (
        <FooterWrapper>
            <LeftWrapper>
                <LogoWrapper>
                    <img src={LogoImg} alt="" srcSet="" />
                </LogoWrapper>
                <ContactInfoWrapper>
                    <InfoWrapper>
                        <P>PHONE：+886 8888 8888</P>
                        <P>MAIL：goody@goody.com</P>
                        <P>ADDRESS：No. 1, Apple Rd., Fruit Dist., Taipei City</P>
                    </InfoWrapper>
                    <SocialMediaWrapper>
                        <SocialMediaIconWrapper>
                            <img src={FacebookIcon} alt="" srcSet="" />
                        </SocialMediaIconWrapper>
                        <SocialMediaIconWrapper>
                            <img src={InstagramIcon} alt="" srcSet="" />
                        </SocialMediaIconWrapper>
                        <SocialMediaIconWrapper>
                            <img src={TwitterIcon} alt="" srcSet="" />
                        </SocialMediaIconWrapper>
                    </SocialMediaWrapper>
                </ContactInfoWrapper>
            </LeftWrapper>

            <RightWrapper>
                {linkList.length > 0 &&
                    linkList.map((data) => (
                        <NavsWrapper key={data.id} height={'100%'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'} padding={'30px 0 0'} margin={'0 20px'}>
                            <TitleH4>{data.title}</TitleH4>
                            <NavsWrapper flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                {data.subTitles.length > 0 &&
                                    data.subTitles.map((item) => (
                                        <Nav key={item.id} to={item.url}>
                                            {item.title}
                                        </Nav>
                                    ))}
                            </NavsWrapper>
                        </NavsWrapper>
                    ))}
            </RightWrapper>

            <BottomWrapper>
                <P>Copyright © 2023 All Rights Reserved.</P>
            </BottomWrapper>
        </FooterWrapper>
    )
}

export default Footer
