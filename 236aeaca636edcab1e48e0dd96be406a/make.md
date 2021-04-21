# make

- it's used since the history of Unix to build programs since 1976 - wow
- works on a Makefile which has steps/targets

```text
.DEFAUL_GOAL := build

build: vet
	go build hello.go

vet: fmt
	go vet hello.go

fmt:
	go fmt hello.go
```

- Each target is specified with the command that runs for it, after the colon is the target that should run before it
- in the above example since default=build it will try and walk to build but will see `vet`
- so the sequence would be`
  - `fmt` -> `vet` -> `build`
