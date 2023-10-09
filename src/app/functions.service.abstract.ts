import { Observable, of } from "rxjs";

export abstract class FunctionsServiceAbstract {
  // constructor() { }

  public getName(): Observable<string>{
    return of('Test message');
  }
}