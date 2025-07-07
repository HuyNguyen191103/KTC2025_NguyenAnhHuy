"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = require("./course");
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
        this.nextId = 1;
    }
    // Thêm khóa học mới
    CourseManager.prototype.addCourse = function (name, instructor, duration) {
        if (name === void 0) { name = "Chưa đặt tên"; }
        if (instructor === void 0) { instructor = "Chưa rõ"; }
        if (duration === void 0) { duration = 1; }
        var course = new course_1.default(this.nextId++, name, instructor, duration);
        this.courses.push(course);
    };
    // Hiển thị danh sách khóa học
    CourseManager.prototype.showCourses = function () {
        if (this.courses.length === 0) {
            console.log("Không có khóa học nào.");
            return;
        }
        console.log("Danh sách khóa học:");
        for (var i = 0; i < this.courses.length; i++) {
            var course = this.courses[i];
            console.log("".concat(i + 1, ". ID: ").concat(course.id, ", T\u00EAn: ").concat(course.name, ", Gi\u1EA3ng vi\u00EAn: ").concat(course.instructor, ", Th\u1EDDi l\u01B0\u1EE3ng: ").concat(course.duration, " gi\u1EDD"));
        }
    };
    // Cập nhật khóa học theo ID
    CourseManager.prototype.updateCourse = function (id, updatedData) {
        var index = this.findIndexPolyfill(this.courses, function (c) { return c.id === id; });
        if (index === -1) {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y kh\u00F3a h\u1ECDc v\u1EDBi ID ".concat(id));
            return;
        }
        var course = this.courses[index];
        var _a = updatedData.name, name = _a === void 0 ? course.name : _a, _b = updatedData.instructor, instructor = _b === void 0 ? course.instructor : _b, _c = updatedData.duration, duration = _c === void 0 ? course.duration : _c;
        this.courses[index] = __assign(__assign({}, course), { name: name, instructor: instructor, duration: duration });
        console.log("\u0110\u00E3 c\u1EADp nh\u1EADt kh\u00F3a h\u1ECDc c\u00F3 ID ".concat(id));
    };
    // Xóa khóa học theo ID
    CourseManager.prototype.deleteCourse = function (id) {
        var index = this.findIndexPolyfill(this.courses, function (c) { return c.id === id; });
        if (index === -1) {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y kh\u00F3a h\u1ECDc v\u1EDBi ID ".concat(id));
            return;
        }
        this.courses.splice(index, 1);
        console.log("\u0110\u00E3 x\u00F3a kh\u00F3a h\u1ECDc c\u00F3 ID ".concat(id));
    };
    CourseManager.prototype.findIndexPolyfill = function (arr, predicate) {
        for (var i = 0; i < arr.length; i++) {
            if (predicate(arr[i]))
                return i;
        }
        return -1;
    };
    return CourseManager;
}());
exports.default = CourseManager;
