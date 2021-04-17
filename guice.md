# guice

- dependency injection
- you don't declare a hard dependency on the objects

```java
Dep dep = new Dep();
```

- never do `new` as it'll be hard to mock the dependency for tests etc
- [[frontend]] somehow this is not a problem in UI as [[jest]] is able to mock but that's perhaps it passes a babel preprocessor to the code and JS is an interpreted language and not a compiled one

## factories?
- so instead of creating objects you instantiate a static or some other class which in turn gives you that object - lol
- example of a factory - pseudo code 

```java

public class SomeFactory {
  private object;
  setObject(ob) {
    this.object = ob;
  }
  getObject() {
    return this.object
  }
}

```

- now you can just use `SomeFactory` to get the actual instance and easily mock it for tests
- easy



