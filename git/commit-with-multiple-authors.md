# commit with multiple authors
[REF](https://docs.github.com/en/github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)

Type your commit message and a short, meaningful description of your changes. After your commit description, instead of a closing quotation, add two empty lines.

```
git commit -m "Refactor usability tests.
>
>
Co-authored-by: name <name@example.com>
Co-authored-by: another-name <another-name@example.com>"
```