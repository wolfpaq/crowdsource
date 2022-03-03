// import { API, Auth } from 'aws-amplify';
// import { Observable, Subject } from 'rxjs';
// import { Project } from '../data/models/project.model';
// import { APIService } from '../API';

// export class ProjectService {
//   constructor(private api: APIService) {}

//   private projects: Project[] = [
//     {
//       id: '1',
//       name: 'Impacts',
//       description: 'Impacts',
//       isActive: false,
//     },
//     {
//       id: '2',
//       name: 'Cartoons',
//       description: 'Cartoons',
//       isActive: false,
//     },
//     {
//       id: '3',
//       name: 'Fight',
//       description: 'Fight',
//       isActive: true,
//     },
//     {
//       id: '4',
//       name: 'Sports',
//       description: 'Sports',
//       isActive: true,
//     },
//   ];

//   public getProjects(): Observable<Project[]> {
//     const projectsSubject = new Subject<Project[]>();
//     this.api.ListIncidents().then((list) => {
//       const incidents = list.items.map((incident) => {
//         return {
//           ...incident,
//           operationPeriodConfig: JSON.parse(incident.operationPeriodConfig),
//           availableResources: JSON.parse(incident.availableResources),
//           availableOperationalPeriods: JSON.parse(incident.availableOperationalPeriods),
//         }
//       });
//       const result = { incidents, nextToken: list.nextToken };
//       incidentListSubject.next(result);
//       incidentListSubject.complete();
//     });
//     setTimeout(() => {
//       projectsSubject.next(this.projects);
//       projectsSubject.complete();
//     });

//     return projectsSubject;
//   }
// }

// const projectService = new ProjectService();

// export default projectService;
import { API, graphqlOperation } from 'aws-amplify';
import { Project } from '../data/models/project.model';
import { listProjects } from '../graphql/queries';
import { createProject } from '../graphql/mutations';

class ProjectService {
  public async getProjects(): Promise<Project[]> {
    // const projectsSubject$ = new Subject<Project>();
    const result = await API.graphql(graphqlOperation(listProjects));
    return new Promise((resolve, reject) => {
      resolve((result as any).data.listProjects.items);
    });
    // return projectsSubject$;
    // return new Promise((resolve, reject) => {
    //   Storage.get((result as any).data.getSettlement.file, { download: true })
    //     .then(result => {
    //       (result as any).Body.text().then((json: string) => {
    //         resolve(JSON.parse(json));
    //       });
    //     })
    //     .catch(err => {
    //       reject(err);
    //     });
    // });
  }

  public async addProject(project: Project): Promise<Project> {
    const result = await API.graphql(
      graphqlOperation(createProject, { input: project }),
    );
    return new Promise((resolve, reject) => {
      resolve((result as any).data.createProject);
    });
  }
}

const projectService = new ProjectService();

export default projectService;
