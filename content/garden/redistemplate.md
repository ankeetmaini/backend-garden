# RedisTemplate

- to play and auto-configure the Redis with your app
- no-code needed if only `String` values in your app

```
(class)                   (interface)
RedisAccessor ----------- RedisOperations
                   |      this contains the
                   |      functionality needed
                   |      to interact with Redis
                   |
                   ↓
                (class)
              RedisTemplate
```
