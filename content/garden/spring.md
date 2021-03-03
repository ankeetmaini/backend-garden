# spring

- tenets of Spring boot
  - dependency management
  - auto-configuration
  - simple deployment - I know k8 and docker, heh

```java
package com.fun.shop.shoppingapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ShoppingAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingAppApplication.class, args);
	}

}

```
