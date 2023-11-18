### install virtual env and requirements
```bash
python3 -m venv .venv

# windows
.venv\Scripts\activate

# *nix
source .venv/bin/activate

pip install -r requirements.txt
```

### run
```bash
# windows
python -m uvicorn app:app --reload --host=0.0.0.0 --port=8080

# *nix
python3 -m uvicorn app:app --reload --host=0.0.0.0 --port=8080
```

### create nextjs app
```bash
yarn create next-app  # defaults ok
cd new-app
yarn add axios
yarn dev
```