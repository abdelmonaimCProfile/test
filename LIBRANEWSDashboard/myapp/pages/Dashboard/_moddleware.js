

import { NextResponse } from "next/server";
import {verify} from "jsonwebtoken"

const secret = process.env.SEcRET;

export default function middleware(req){
    const {cookies} = req;

    const jwt = cookies.OursiteJWTf;

    const url = req.url;

    if(url.includes("/Dashboard")){
        if(jwt === undefined){
            return NextResponse.redirect("/");
        }
        try{
            verify(jwt , secret);
            return NextResponse.next();
        }catch(e){
            return NextResponse.redirect("/");
        }
    }
    return NextResponse.next();
}