import {makeAutoObservable} from "mobx";
import {SidebarStore} from "@/stores/sidebarStore";

export class AppStore {
    sidebar: SidebarStore

    constructor() {
        this.sidebar = new SidebarStore()
        makeAutoObservable(this)
    }
}

export const appStore = new AppStore()
