import Course from "./course";

class CourseManager {
  private courses: Course[] = [];
  private nextId: number = 1;

  // Thêm khóa học mới
  addCourse(
    name: string = "Chưa đặt tên",
    instructor: string = "Chưa rõ",
    duration: number = 1
  ): void {
    const course = new Course(this.nextId++, name, instructor, duration);
    this.courses.push(course);
  }

  // Hiển thị danh sách khóa học
  showCourses(): void {
    if (this.courses.length === 0) {
      console.log("Không có khóa học nào.");
      return;
    }

    console.log("Danh sách khóa học:");
    for (let i = 0; i < this.courses.length; i++) {
      const course = this.courses[i];
      console.log(
        `${i + 1}. ID: ${course.id}, Tên: ${course.name}, Giảng viên: ${
          course.instructor
        }, Thời lượng: ${course.duration} giờ`
      );
    }
  }

  // Cập nhật khóa học theo ID
  updateCourse(
    id: number,
    updatedData: { name?: string; instructor?: string; duration?: number }
  ): void {
    const index = this.findIndexPolyfill(this.courses, (c) => c.id === id);
    if (index === -1) {
      console.log(`Không tìm thấy khóa học với ID ${id}`);
      return;
    }

    const course = this.courses[index];
    const {
      name = course.name,
      instructor = course.instructor,
      duration = course.duration,
    } = updatedData;
    this.courses[index] = { ...course, name, instructor, duration };
    console.log(`Đã cập nhật khóa học có ID ${id}`);
  }

  // Xóa khóa học theo ID
  deleteCourse(id: number): void {
    const index = this.findIndexPolyfill(this.courses, (c) => c.id === id);
    if (index === -1) {
      console.log(`Không tìm thấy khóa học với ID ${id}`);
      return;
    }

    this.courses.splice(index, 1);
    console.log(`Đã xóa khóa học có ID ${id}`);
  }
  
  private findIndexPolyfill<T>(
    arr: T[],
    predicate: (value: T) => boolean
  ): number {
    for (let i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) return i;
    }
    return -1;
  }
}
export default CourseManager;
