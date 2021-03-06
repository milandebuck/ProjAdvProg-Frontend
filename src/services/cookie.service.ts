// user.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

    constructor(){}

    setCookie(token){
        let d=new Date();
        d.setTime(d.getTime() + (24*60*60*1000));
        document.cookie="auth_token=" + token + ";expires="+d.toUTCString()+";";
    }

    //method to get cookies
    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                if(c.substring(name.length,c.length) == "") return false;
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    deleteCookie(cname){
        let d=new Date();
        d.setTime(-1);
        document.cookie= cname + "=''" + ";expires="+d.toUTCString()+";";
    }
}