import {makeAutoObservable} from "mobx";

export class SidebarStore {
    searchValue: string = ""

    setSearchValue(value: string) {
        this.searchValue = value
    }

    constructor() {
        makeAutoObservable(this)
    }
}
