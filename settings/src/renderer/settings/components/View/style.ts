import styled, { css } from 'styled-components';

export const StyledView = styled.div`
    padding-left: 400px;
    background-color: white;
    min-height: calc(100vh - 72px);
    overflow-y: hidden;
    display: flex;

    @media only screen and (max-width: 1600px) {
        padding-left: 0;
    }

    ${({ isMenuToggled }: { isMenuToggled?: boolean }) => css`
        ${isMenuToggled ? `
            * {
                pointer-events: none;
                user-select: none;
            }
        ` : ''}
    `}
`;

export const ViewContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    flex: 1;
    overflow-y: scroll;
    display: block;
    height: calc(100vh - 72px);
    scroll-behavior: smooth;
`;

export const ViewDisplay = styled.div`
    max-width: 878px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 0 50px 0;
`;

export const Spacer = styled.div`
    height: 28px;
`;

export const SectionTitle = styled.div`
    font-size: 18px;
    font-family: Roboto;
    font-weight: 300;
    color: #404040;
    padding: 28px 0;

    transition: 0.4s font-weight, 0.4s color;
`;