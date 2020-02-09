import React from 'react';
import { observable } from "mobx";
import { icons } from '../constants/icons';

interface IUser {
    username: string,
    avatar: any,
    email: string
}

class Store {
    @observable
    public inputRef: HTMLInputElement = React.createRef<HTMLInputElement>();

    @observable
    public indicatorPosition: number = 10;

    @observable
    public selectedCategory: string;

    @observable
    public isToggled: boolean = false;

    @observable
    public isSearchToggled: boolean = false;

    @observable
    public fssValue: string = '';

    public constructor() {
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 1601) {
                this.isToggled = false;
                this.isSearchToggled = false;

                const node: HTMLInputElement = this.inputRef.current;

                node.value = this.fssValue;
            }
        })

        window.addEventListener('keydown', (e) => {
            if(e.keyCode == 27) {
                this.isToggled = false;
            }
        })
    }

    @observable
    public session: IUser = {
        username: "Guest",
        avatar: icons.defaultAvatar,
        email: "guest@dothq.co"
    }

    public onInputChange = (e) => {
        const stripped = window.location.href.split("?")[0];

        if(this.inputRef.current.value.length == 0) {
            return window.history.replaceState(null, null, stripped);
        }

        this.fssValue = this.inputRef.current.value

        window.history.replaceState(null, null, `${stripped}?q=${this.inputRef.current.value}`);
    }
}

export default new Store();