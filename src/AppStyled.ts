import styled from "styled-components";

interface SpamNewOptionProductAppleProps {
    marginTop?: string;
    type?: string;
    fontSize?: string;

}

export const Header = styled.div`
    height: 48px;
    max-height: 44px;
    width: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 45px;
`;

export const ItemHeader = styled.div`
    display: flex;
    flex-direction: row;
    jistify-content: center;

`;

export const TextHeader = styled.div`
    font-size: 14px;
    color: #f5f5f7;
    font-family: 'Myriad Pro';
    opacity: .8;
    cursor: pointer;
    letter-spacing: -.01em;
;`

export const OptionsProductsApple = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 120px;
    background-color: white;
    gap: 45px;
;`

export const ItemOptionProductApple = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    cursor: pointer;
;`

export const TextOptionProductApple = styled.a`
    color: rgba(0,0,0,0.8);
    font-family: 'Myriad Pro';
    font-size: 14px;
;`

export const SpamNewOptionProductApple = styled.span<SpamNewOptionProductAppleProps>`
    font-family: 'Myriad Pro';
    color: orange;
    font-size: ${(props) => props.type === 'span-new-option' ? '13px' : '15px'};
    font-weight: ${(props) => props.type === 'span-new-option' ? '400' : 'bold'};
    position: ${(props) => props.type === 'span-new-option' ? 'absolute' : 'relative'};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: 0;
`;

export const BannerMacPro = styled.div`
    height: 608px;
    background-color: black;
    display flex;
    flex-direction: column;
    align-items: center;
    padding: 54px 0;
    text-align: center;

    h1 {
       Font-Size: 56px;
       Color: white;
       font-family: 'Myriad Pro';
       font-Weight: Bold;
       margin-top: 2px;
    }

    h2 {
        Font-Size: 28px;
        Color: white;
        font-family: 'Myriad Pro';
        font-Weight: Bold;     
        margin-top: -40px;   

    }

    p{
        Font-Size: 17px;
        Color: white;
        font-family: 'Myriad Pro';
        font-weight: 600;
    }


;`