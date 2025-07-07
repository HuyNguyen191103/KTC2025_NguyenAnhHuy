"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Students = /** @class */ (function () {
    function Students(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Students.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "setAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Students;
}());
exports.default = Students;
