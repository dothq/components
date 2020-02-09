import styled, { css } from 'styled-components';

export const StyledSearch = styled.div`
    height: 48px;
    background-color: #ECECEC;
    width: 830px;
    padding-left: 48px;
    border-radius: 6px;
    display: flex;
    margin-left: 385px;

    @media only screen and (max-width: 1600px) {
        opacity: 0;
        pointer-events: none;
        width: 0px;
    }

    ${({ isSearchToggled }: { isSearchToggled: any }) => css`
        ${isSearchToggled ? `
            opacity: 1 !important;
            pointer-events: all !important;
            width: calc(100% - 90px) !important;
            margin-left: 0px !important;
            margin-right: 25px;
        ` : ''}
    `}
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

