# Portfolio
Siobhan Whyte Portfolio

# how to get this code onto your macbook

```bash
    # install git
    brew install git    
    brew install --cask iterm2
    brew install zsh
    brew install python@3.8

    # install virtualenv

    # add github key to .ssh
    https://docs.github.com/articles/generating-an-ssh-key/

    # change dir to where you want to develop
    mkdir dev
    cd dev
    git clone git@github.com:siobhanPortfolio/portfolio.git
    cd portfolio
    virtualenv -p python3 venv
    source venv/bin/activate
    pip install -r requirements.txt

    # launch vscode 
    code .
```


### Run

```bash
    python app.py
```

### Push and deploy code

```bash
    git push
    ./remote_pull.sh
```
