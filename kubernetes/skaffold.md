## Install
```
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/v1.22.0/skaffold-linux-amd64 && chmod +x skaffold && sudo mv skaffold /usr/local/bin
```

## Start
```
skaffold dev
```
## or for image pruning
```
skaffold dev --no-prune=false --cache-artifacts=false
```
## file-watching on a per-artifact
```
skaffold dev --trigger polling
skaffold dev --no-prune=false --cache-artifacts=false --trigger polling
```