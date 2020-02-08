import React from 'react';
import { observable } from "mobx";

class Store {
    @observable
    public inputRef = React.createRef<HTMLInputElement>();

    @observable
    public indicatorPosition: number = 10;

    public onInputChange = (e) => {
        const stripped = window.location.href.split("?")[0];

        if(this.inputRef.current.value.length == 0) {
            return window.history.replaceState(null, null, stripped);
        }

        window.history.replaceState(null, null, `${stripped}?q=${this.inputRef.current.value}`);
    }
}

export default new Store();