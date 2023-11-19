import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ) : Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': '6a3a400d13msh97faeb893eec66fp1c003cjsn0cd6a73d57e0',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: '5bd093f76807443f8428d5fc3d3364bd'
            }
        })
        return next.handle(req)
    }
}