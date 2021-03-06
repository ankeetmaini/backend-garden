# RedisTemplate

- to play and auto-configure the Redis with your app
- no-code needed if only `String` values in your app

```text
(class)                   (interface)
RedisAccessor ----------- RedisOperations
                   |      this contains the
                   |      interfaces, dummy contracts needed
                   |      to interact with Redis
                   |
                   ↓
                (class)
              RedisTemplate
```

- sample java code for using spring redis operations

```java
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;
@Bean
  public RedisOperations<String, Aircraft>
  redisOperations(RedisConnectionFactory factory) {
      // custom serializer from jackson to json
      Jackson2JsonRedisSerializer<Aircraft> serializer =
              new Jackson2JsonRedisSerializer<>(Aircraft.class);

      RedisTemplate<String, Aircraft> template = new RedisTemplate<>();
      // giving RedisTemplate some mandatory params
      // 1. redis connection factory - maybe to optimise connection pooling?
      // 2. serializer that we just instantiated above
      // 3. not sure atm
      template.setConnectionFactory(factory);
      template.setDefaultSerializer(serializer);
      template.setKeySerializer(new StringRedisSerializer());

      return template;
  }

```

- [[todo]] understand 3rd argument to `template` as to why a new key serializer needs to be passed in?

[//begin]: # "Autogenerated link references for markdown compatibility"
[todo]: todo.md "todo"
[//end]: # "Autogenerated link references"
