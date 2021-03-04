# spring

- tenets of Spring boot

  - dependency management
  - auto-configuration
  - simple deployment - I know k8 and docker, heh

- main annotations
  - [[@SpringBootApplication]]
  - [[@Component]]
- [[REST]] is the way stuff works now
- #spring bean - is something that's created by Spring and its lifecycle is managed from within the Spring framework - user never specifies it's creation or GC #confirm
- wow you can create an api by just doing this

```java
@RestController
class ProductService {
	private List<Product> products = new ArrayList<Product>();
	public ProductService() {
		products.addAll(List.of(
			new Product("1", "potato"),
			new Product("2", "onions"),
			new Product("3", "chips"),
			new Product("4", "fruits")
		));
	}

	@GetMapping(value = "/products")
	Iterable<Product> getProducts() {
		return products;
	}
}

```

- you can use `Optional<type>` as the return param for an api if the value can be empty

```java
@GetMapping(value = "/products/{id}")
	Optional<Product> getProductById(@PathVariable String id) {
		for(Product p: products) {
			if(p.getId() == id) return Optional.of(p);
		}

		return Optional.empty();
	}
```

- java == operator tries to equate the references instead of the values - yikes
- use `.equals()` method to check on values

