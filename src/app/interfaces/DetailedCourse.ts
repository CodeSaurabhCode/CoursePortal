import { Instructor } from "./instructors";

export interface DetailedCourse{
    id: number;
    title: string;
    category: string;
    instructor: Instructor;
    description: string;
    duration: number;
    price: number;
    imageUrl: string;
    rating: number;
    studentsEnrolled: number;
    modules : Modules[];
}

export interface Modules{
    weekNumber : number;
    module: Module
}

export interface Module{
    title: string;
    description: string;    
    lectures: number;
    assignment : string;
    quizes: string
}

