# Description

This is a minimal setup of a possible Micro-Frontend architecture.

It uses module federation

# To Run

## Requirements
This project uses docker so you'll need docker installed.

You'll also need yarn globally installed on your machine.

Also, there are some commands that are 'nix platform only, sorry windows users - use WSL.


## 'Nix Platforms
Run the shell script
```shell
./run.sh
```

Start the recipe-app and recipe-book app from their respective directories with `yarn start`

This should launch both apps on their respective ports and share a navigation component/routes between them via module federation.

# Exploring