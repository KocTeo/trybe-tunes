const { default: styled } = require('styled-components');

const LoginStyle = styled.div`
    img {
        backgroundSize: cover;
        height: 100em;
        filter: blur(8px);
        position: relative;
        z-index: -1;
        margin: -10px;
        margin-top: -200px;
    }

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        width: 325px;
        height: 382px;
        background: #011627;
        box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        margin-top: -1100px;
        margin-left: 800px;
    }

    input {
        font-size: 20px;
        width: 272px;
        height: 54px;
        background: #D9D9D9;
        border-radius: 5px;
        margin: 15px;
    }

    button {
        width: 250px;
        height: 60px;
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        color: #000;
        background-color: #fff;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
        margin-top: 50px;
    }

    button:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 190, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
`;

export default LoginStyle;
