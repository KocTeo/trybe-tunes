import styled from 'styled-components';

const CardAlbumStyle = styled.div`
    width: 15em;
    height: 20em;

    margin: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(1, 22, 39, 0.8);
    border-radius: 10px;

    .link-album {
        text-decoration: none;
        color: #FFFFFF;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 9em;
            height: 9em;
            border-radius: 10px;
        }

        h3 {
            font-size: 15px;
        }
    
        h5 {
            font-size: 12px;
        }
    }

    
`;

export default CardAlbumStyle;
