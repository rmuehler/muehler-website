import { of } from "rxjs";

export abstract class
HeaderServiceAbstract
{
    // constructor() { }
    isHome() {
        return of(true);
    }

    checkForHomeUrl(url: string): boolean {
        return url.startsWith('/#') || url == '/';
    }
}
