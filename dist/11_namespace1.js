// tslint:disable-next-line: no-namespace
var MySpace;
(function (MySpace) {
    let a = 2;
    class MyClass {
    }
    MyClass.myProperty = 12;
    MySpace.MyClass = MyClass;
})(MySpace || (MySpace = {}));
// tslint:disable-next-line: no-namespace
var OtroSpace;
(function (OtroSpace) {
    OtroSpace.a = 23;
})(OtroSpace || (OtroSpace = {}));
(function (MySpace) {
    let a = 2;
    class MyClass2 {
    }
    MyClass2.myProperty = 26;
    MySpace.MyClass2 = MyClass2;
})(MySpace || (MySpace = {}));
console.log(MySpace.MyClass.myProperty);
console.log(OtroSpace.a);
console.log(MySpace.MyClass.myProperty);
console.log(MySpace.MyClass2.myProperty);
//# sourceMappingURL=11_namespace1.js.map