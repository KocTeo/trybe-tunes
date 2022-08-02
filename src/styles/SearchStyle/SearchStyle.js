import styled from 'styled-components';

const SearchStyle = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    input {
        background: #D9D9D9;
        border: 2px solid #000000;
        border-radius: 20px;
        width: 790px;
        height: 30px;
        padding: 16px;
        margin-right: 10px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 19px;
    }

    button {
        width: 243px;
        height: 65px;
        padding: 16px;

        background: #D9D9D9;
        border: 2px solid #000000;
        border-radius: 20px;
    }
`;

export default SearchStyle;
