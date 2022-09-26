# convert pdf to eps

```bash
gs -dNOCACHE -dNOPAUSE -dBATCH -dSAFER -dNOTRANSPARENCY -sDEVICE=eps2write -dLanguageLevel=2 -r300 -sOutputFile=./design5.eps -f ./design.pdf
```

or

```bash
pdftops -eps -level3 d2.pdf
```
