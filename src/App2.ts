import styled from "styled-components";


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