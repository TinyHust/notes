# Advanced YAML syntax cheatsheet
[REF](https://www.educative.io/blog/advanced-yaml-syntax-cheatsheet)

## yaml anchor, alias

```
definitions: 
  steps:
    - step: &build-test
        name: Build and test
        script:
          - mvn package
        artifacts:
          - target/**

pipelines:
  branches:
    develop:
      - step: *build-test
    master:
      - step: *build-test
```

### Overrides and Extensions
```
definitions: 
  steps:
    - step: &build-test
        name: Build and test
        script:
          - mvn package
        artifacts:
          - target/**


pipelines:
  branches:
    develop:
      - step: *build-test
    master:
      - step: 
          <<: *build-test
          name: Testing on Master #override
          ongoing: false #extension
```

## YAML separators and directives
YAML documents begin with `---`
YAML documents end  with `...`


