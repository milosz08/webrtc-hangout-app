# Contributing

## Setting linter
1. In Visual Studio Code press Ctrl+Shift+P and type `Restart ESLint server`.
2. Then, press Ctrl+J and open output -> Eslint. If you have any errors after invoke ESlint daemon, try reload window
   (Ctrl+Shift+P, type `Reload window`) or rerun entire Visual Studio Code app.
3. Once ESlint server is running, toggle default formatter to Right-Click -> Format Document With -> Configure default
   formatted and choose ESlint (in any .js file).

## Code continuity

1. Husky will prevent you for pushing code with errors (protip: if `git commit` command throw exception, check error
   log).
2. Default `master` branch is locked and protected (any push at this branch invoking CI/CD build pipeline for client and
   server), so you cannot push commits directly at this branch.
3. For any task from board, you should create separated branch:
```bash
git checkout -b <branchname>
```
1. Once the task is completed, mark pull request as "ready to review" via Github UI.
2. When task is done and reviewed, I will merge with `master` branch. Provided changes will be automatically deployed to
   server.
