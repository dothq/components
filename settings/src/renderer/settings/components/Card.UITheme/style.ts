import styled, { css } from 'styled-components';
import { icons } from '../../constants/icons';

export const Flexy = styled.div`
    display: flex;
    overflow-x: auto;
`;

export const Theme = styled.div`
    background-repeat: no-repeat;
    background-size: cover;

    width: 300px;
    height: 160px;
    display: inline-block;
    border-radius: 3px;

    background-color: white;

    flex: 1;
    justify-content: space-between;
    margin-right: 18px;
    max-width: 300px;
    max-height: 160px;
    min-height: 160px;
    min-width: 300px;
    transition: 0.2s box-shadow;

    ${({ tone }: { tone: 'light' | 'dark' | 'oled' }) => css`
        background-image: url(${icons.themes[tone]});

        ${tone == "light" ? `
            &:hover {
                box-shadow: inset 0 0 0 3px #dddddd;
            }
        ` : `
            &:hover {
                box-shadow: inset 0 0 0 3px #515151;
            }
        `}
    `}
`;