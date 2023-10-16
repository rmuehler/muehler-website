import { Project } from "../models/project";
import { Observable, of } from "rxjs";

export abstract class ProjectsServiceAbstract {
  // constructor() { }

  public getProjects(atHome: boolean): Observable<Project[]> {
      return of([
          {
            id: 1,
            name: "Project 1",
            description: "This is project 1",
            stack: { iconClasses: "fab fa-angular", name: "Angular" },
            sourceUrl: "https://github.com",
            previewUrl: "https://preview.com"
          },
          {
            id: 2,
            name: "Project 2",
            description: "This is project 3",
            stack: { iconClasses: "fab fa-react", name: "React" },
            sourceUrl: "https://github.com",
            previewUrl: "https://preview.com"
          }
        ] as unknown  as Project[]);
    }
  }

