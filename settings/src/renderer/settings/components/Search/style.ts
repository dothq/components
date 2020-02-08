import styled, { css } from 'styled-components';

export const StyledSearch = styled.div`
    height: 48px;
    background-color: #ECECEC;
    width: 830px;
    padding-left: 48px;
    border-radius: 6px;
    display: flex;
`;

export const SearchIcon = styled.div`
    background-repeat: no-repeat;
    background-size: cover;

    width: 20px;
    height: 20px;
    display: inline-block;
    margin-left: -32px;
    margin-top: 14px;

    ${({ icon }: { icon: any }) => css`
        background-image: url(${icon});
    `}
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    font-size: 18px;
    margin-right: 8px;
    border: none;
    outline: none;
    background: transparent;
    margin-left: 14px;
    font-family: Roboto;
    font-weight: 300;
    color: #616161;

    &::placeholder {
        opacity: 0.5;
        transition: 0.5s opacity;
    }

    &:hover {
        &::placeholder {
            opacity: 0.7;
        }
    }
`;