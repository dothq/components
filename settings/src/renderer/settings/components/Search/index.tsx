import React from 'react';
import { observer } from "mobx-react";
import { StyledSearch, SearchIcon, Input } from "./style";
import { icons } from '../../constants/icons';
import store from '../../store';

const keywords = [
    "theme",
    "account",
    "id",
    "interface",
    "security",
    "avatar",
    "sync",
    "oled",
    "zoom",
    "search",
    "engine"
]

const placeholderText = `Try searching for "${keywords[~~(keywords.length * Math.random())]}"`

export const Search = observer(() => (
    <StyledSearch>
        <SearchIcon icon={icons.search} />
        <Input placeholder={placeholderText} ref={store.inputRef} onChange={() => store.onInputChange(event)} />
    </StyledSearch>
))