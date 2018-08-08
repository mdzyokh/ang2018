import { Author } from "./author.model";

export interface CourseInterface {
    id: number;
    name: string;
    description: string;
    isTopRated?: boolean;
    date: Date;
    authors: Author[]
    length: number;
}