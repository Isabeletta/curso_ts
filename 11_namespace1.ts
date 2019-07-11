// tslint:disable-next-line: no-namespace
namespace MySpace {
    let a = 2;
    export class MyClass {
        public static myProperty: number = 12;
    }
}

// tslint:disable-next-line: no-namespace
namespace OtroSpace {
    export let a = 23;
}

namespace MySpace {
    let a = 2;
    export class MyClass2 {
        public static myProperty: number = 26;
    }
}

console.log(MySpace.MyClass.myProperty);
console.log(OtroSpace.a);

console.log(MySpace.MyClass.myProperty);
console.log(MySpace.MyClass2.myProperty);
