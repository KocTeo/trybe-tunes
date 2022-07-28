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
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 300px;
        height: 300px;
        border-radius: 45px;
        background-color: black;

        margin-top: -1100px;
        margin-left: 780px;
    }

    input {
        width: 250px;
        border: 1px solid #2EE59D;
        border-radius: 40px;
        padding: 10px;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 20px;
    }

    button {
        width: 250px;
        height: 45px;
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
        margin-top: 20px;
    }

    button:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 190, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
`;

export default LoginStyle;
