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

        width: 325px;
        height: 385px;
        background: rgba(1, 22, 39, 0.8);
        box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        margin-top: -1100px;
        margin-left: 780px;
    }

    input {
        width: 250px;
        height: 30px;
        padding: 10px;

        background: #D9D9D9;
        border-radius: 5px;
        border: none;

        font-size: 16px;
        font-family: 'Roboto', sans-serif;

        margin-bottom: 20px;
    }

    button {
        width: 250px;
        height: 50px;
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        color: #000;
        background: #C5FFFD;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
        margin-top: 50px;
    }

    button:hover {
        background: #272727;
        color: #fff;
        transform: translateY(-7px);
    }
`;

export default LoginStyle;
