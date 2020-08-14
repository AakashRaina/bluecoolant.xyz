---
title: Hello World 😎 👋
slug: hello-world
description: Finally here comes hello world
date: 2020-08-13
---

***Finally*** was able to `create` my own blog, will be writing blog posts soon 🎉🤞🏻

[Sample Link](https://www.example.com)

## Why `prefer-const`

* **One Way to Do It**: It is mental overhead to have to choose between `let` and `const` every time. A rule like "always use `const` where it works" lets you stop thinking about it and can be enforced by a linter.
* **Reassignments May Cause Bugs**: In a longer function, it can be easy to miss when a variable is reassigned. This may cause bugs. Particularly in closures, `const` gives you confidence you'll always "see" the same value.
* **Learning About Mutation**: Folks new to JavaScript often get confused thinking `const` implies immutability. However, one could argue that it's important to learn the difference between variable mutation and assignment anyway, and preferring `const` forces you to confront this distinction early on.
* **Meaningless Assignments**: Sometimes, an assignment doesn't make sense at all. For example, with React Hooks, the values you get from a Hook like `useState` are more like parameters. They flow in one direction. Seeing an error on their assignment helps you learn earlier about the React data flow.
* **Performance Benefits**: There are occasional claims that JavaScript engines could make code using `const` run faster due to the knowledge the variable won't be reassigned.