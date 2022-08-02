const { default: styled } = require('styled-components');

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #011627;
    color: #C5FFFD;

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 39px;
        letter-spacing: 0.08em;
    }

    nav {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    }

    .links {
        margin: 11px;
        text-decoration: none;
        color: #C5FFFD;
        
    }

    .links:hover {
        color: #133A5A
    }
`;

export default HeaderStyle;
