# submodule

[REF](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

## add submodule

```bash
git submodule add <URL repo.git> <path_to_submodule_folder>
git config -f .gitmodules submodule.<path_to_submodule_folder>.branch main
```

## remove submodule

```bash
git submodule deinit <path_to_submodule_folder> -f
git rm <path_to_submodule_folder>
git commit -m "Remove submodule" .
rm -rf .git/modules/<path_to_submodule_folder>
```

## after clone man project

```bash
git submodule update --init
git submodule update --recursive --remote
git pull --recurse-submodules
```

or

```bash
git clone --recurse-submodules <URL repo.git>
```

## pull

```bash
git pull
git submodule update --remote --init --recursive
```

## select submodule branch

```bash
git config -f .gitmodules submodule.<path_to_submodule_folder>.branch stable
git submodule update --remote
```

## push submodule

```bash
git submodule foreach "git add . && git commit -m 'update sub v6' && git push origin main"
```
