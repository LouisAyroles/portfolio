export enum Type {
    Perso = 1,
    Pro = 2
}
export class Project {
    id: number;
    name: string;
    type: Type
    description: string;
    profilPicture: string;
    pictures: Array<string>;
    created: Date;
  }