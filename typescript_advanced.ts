interface IClassA<T, U> {
    method: () => T
    prop: U
}

abstract class AbstractClass<T, U> implements IClassA<T, U> {
    abstract method(): T
    abstract prop: U
}

class ClassA extends AbstractClass<number, string>{
    method = () => 100
    prop: 'class A'
}