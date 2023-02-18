import {makeAutoObservable} from "mobx";
import {sidebarRoutes} from "@/routes/sidebarRoutes";

export class SidebarStore {
    searchValue: string = ""

    setSearchValue(value: string) {
        this.searchValue = value
    }

    isMatch(path: string) {
        return path === this.matchingRoute?.path
    }

    get isSearching() {
        return !!this.matchingRoute
    }

    get matchingRoute() {
        if (this.searchValue.length < 3) {
            return null
        }
        return sidebarRoutes
            .map(route => route.children ? route.children : route)
            .flat()
            .find(route => route.name.toLowerCase().includes(this.searchValue.toLowerCase()))
    }

    constructor() {
        makeAutoObservable(this)
    }
}
