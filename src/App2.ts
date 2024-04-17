import styled from "styled-components";

interface PurschaseButtonType {
    background: string;
    color: string;
    underline?: boolean;
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
    height: 700px;
    display flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    text-align: center;

    h1 {
       Font-Size: 56px;
       Color: #1d1d1f;
       font-family: 'Bold';
       font-Weight: Bold;
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