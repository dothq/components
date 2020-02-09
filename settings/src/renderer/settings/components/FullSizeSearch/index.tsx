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

interface Props {
    isSearchToggled?: boolean;
}

const placeholderText = `Try searching for "${keywords[~~(keywords.length * Math.random())]}"`

const onFSSearchChange = (event) => {
    const stripped = window.location.href.split("?")[0];

    if(event.target.value.length == 0) {
        return window.history.replaceState(null, null, stripped);
    }

    window.history.replaceState(null, null, `${stripped}?q=${event.target.value}`);
    store.fssValue = event.target.value
}

export const FSSearch = observer(({ isSearchToggled }: Props) => (
    <StyledSearch isSearchToggled={isSearchToggled}>
        <SearchIcon icon={icons.search} />
        <Input placeholder={placeholderText} value={store.fssValue} onChange={(event) => onFSSearchChange(event)} />
    </StyledSearch>
))