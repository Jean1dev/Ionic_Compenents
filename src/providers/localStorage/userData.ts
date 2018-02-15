import { Injectable } from '@angular/core';
const key_name = 'data'
/*
util
-- LocalStorage.clear()  ** limpa
*/
@Injectable()
export class UserDataProvider {

    private data = {
        showSlides: false,
        name: '',
        username: ''
    }

    constructor() {

    }

    getLocalData(): any {
        return localStorage.getItem(key_name) 
    }

    setLocalData(showSlides?: boolean, name?: string, username?: string) {
        let obj = {
            showSlides: false,
            name: '',
            username: ''
        }

        if(showSlides){
            obj.showSlides = showSlides
        }

        if(name){
            obj.name = name
        }

        if(username){
            obj.username = username
        }

        localStorage.setItem(key_name, JSON.stringify(obj))
    }
}
