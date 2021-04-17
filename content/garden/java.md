# java

- `class` is the fundamental unit in java
  - classes are located and loaded at runtime as needed`
- use double quotes always
- add members to a `List`

```java
private List<Product> products = new ArrayList<Product>();
products.addAll(List.of(
			new Product("1", "potato"),
			new Product("2", "onions"),
			new Product("3", "chips"),
			new Product("4", "fruits")
		));
```

- addAll function can add and use it with `List.of`
- [[Instant]] seems to be a good util provided natively with `java.time` package
- AtomicLong gives a thread safe way to generate unique ids and is present in the `java.util.concurrent` package
