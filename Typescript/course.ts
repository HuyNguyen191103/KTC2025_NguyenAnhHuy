class Course {
    id: number;
    name: string;
    instructor: string; 
    duration: number;

    constructor(id: number, name: string, instructor: string, duration: number) {
        this.id = id;
        this.name = name;
        this.instructor = instructor;
        this.duration = duration;
    }
}
export default Course;