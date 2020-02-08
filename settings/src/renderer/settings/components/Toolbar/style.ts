import styled, { css } from 'styled-components';

export const StyledToolbar = styled.div`
    height: 72px;
    width: 100%;
    background-color: #fafafa;
    align-items: center;
    display: flex;
`;

export const Container = styled.div`
    padding: 0 32px;
    user-select: none;
    align-items: center;
    display: flex;
    flex: 1;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex: 1 1 0;
    justify-content: center;
`;

export const AvatarContainer = styled.div`
    display: flex;
    flex: 1 1 1;
    justify-content: center;
`;

export const Title = styled.div`
    font-family: Roboto;
    font-weight: 300;
    font-size: 28px;
`;

export const AvatarIcon = styled.div`
    background-repeat: no-repeat;
    background-size: cover;

    width: 42px;
    height: 42px;
    display: inline-block;
    border-radius: 50px;

    ${({ icon }: { icon: any }) => css`
        background-image: url(${icon});
    `}
`;