import CourseManager from "./courseManage";

const manager = new CourseManager();

// Tạo khóa học (có thể thiếu thông tin)
manager.addCourse("Toán", "Thầy An", 30);
manager.addCourse("Lý"); // thiếu thông tin → dùng default
manager.addCourse();      // toàn bộ mặc định

// In danh sách
manager.showCourses();

// Cập nhật
manager.updateCourse(1, { name: "Toán cao cấp", duration: 40 });

// Xóa khóa học
manager.deleteCourse(2);

// In lại danh sách
manager.showCourses();