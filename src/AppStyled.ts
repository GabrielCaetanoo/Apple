import styled from "styled-components";

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
    font-size: 12px;
    color: #f5f5f7;
    font-family: 'Arial';
    opacity: .8;
    cursor: pointer;
    letter-spacing: -.01em;
;`

export const OptionsProductsApple = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 130px;
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
    font-family: 'Courier New';
    font-size: 12px;
;`

export const SpamNewOptionProductApple = styled.span`
    font-family: 'arial';
    color: Orange;
    font-size: 10px;
    font-weight: 400px;
    position: absolute;
    margin-top: 70px;

;`