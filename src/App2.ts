import styled from "styled-components";

interface PurschaseButtonType {
    background: string;
    color: string;
    underline?: boolean;
}

interface OptionMacType {
    selected: boolean;
}

interface ColorOptionMacType {
    background: string;
 }

export const AppleEducationBlock = styled.div`
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f5f5f7;
    color: rgba(0,0,0,0.8);
    margin-top: 20px;
    letter-spacing: -.016em;

    p {
        Font-family: 'Arial';
        font-size: 14px;
        font-weight: 400;
    
        a {
            color: #06c;
            text-decoration: none;
        }


        a:hover {
            text-decoration: underline;
        }
    }
`; 


export const BannerArea = styled.div`
    height: 690px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    text-align: center;

    h1 {
       Font-Size: 56px;
       Color: #1d1d1f;
       font-family: 'Bold';
       font-Weight: Bold;
       margin-top: 2px;
    }

    h2 {
        Font-Size: 28px;
        Color: #1d1d1f;
        font-family: 'Bold';
        font-Weight: Bold;     
        margin-top: -40px;   

    }

    p{
        Font-Size: 17px;
        Color: #1d1d1f;
        font-family: 'Light';
        font-weight: 600;
    }
`;

export const PurschaseButton = styled.button<PurschaseButtonType>`
    cursor: pointer;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    font-size: 17px;
    line-height: 1.17648;
    font-height: 400;
    color: ${(props) => props.color};
    background: ${(props) => props.background};
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 980px;
    border: none;
    font-family: 'Regular';

    &:hover {
        text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
    }


;`

export const BannerAreaButtons = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap: 10px;


;`

export const SelectMac = styled.div`
    height: 800px;
    display: flex; /* Correção: display: flex em vez de display flex */
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Adicionado para centralizar horizontalmente */
    padding: 100px 30px;
    text-align: center;


    h1 {
        Font-Size: 40px;
        Color: black;
        font-family: 'Bold';
        font-Weight: Bold;
        margin-top: 2px;
        
    }
`;

export const OptionsMac = styled.div`
    height: 40px;
    width: 250px;
    border-bottom: 1px solid #d2d2d7;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    cursor: pointer;
    padding: 0px;
    margin: 0px;
;`

export const OptionMac = styled.div<OptionMacType>`
    color: ${(props) => (props.selected ? '#1d1d1F' : '#6e6e73')};
    font-family: 'Regular';
    font-size: 17px;
    width: 95px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: ${(props) => (props.selected ? '2px solid #1d1d1F' : '1px solid #d2d2d7')};
    width: 100%; /* Garante que a linha se estenda completamente */
;`

export const OptionsMacc= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;


;`

export const OptionMacc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 70px;

    h1 { 
        font-size: 25px;
        text-align: center;
        margin-top: -1px;
    }

    h2 {
        font-size: 15px;
        color: #6e6e73;
        text-align: center;
        font-family: 'Regular';
    }


;`

export const ColorOptionsMac = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    gap: 5px;
    width: 200px;
;`

export const ColorOptionMac = styled.div<ColorOptionMacType>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



;`