```
name: frontend

on: [push]

defaults:
  run:
    working-directory: web

jobs:

  test:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: scripts

    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: Set Node.js 10.x
      uses: actions/setup-node@master
      with:
        version: 10.x

    - name: Install dependencies
      working-directory: ./frontend
      run: |
        npm install
```