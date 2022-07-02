## Redirect only domain
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{QUERY_STRING} =""
RewriteRule ^$ https://solution.printcart.com/ [L,R=301]
</IfModule>

# BEGIN WordPress
```

---


## RewriteRule  flags
REF: [https://svn.apache.org/repos/asf/httpd/httpd/tags/2.3.6/docs/manual/rewrite/flags.html.en](https://svn.apache.org/repos/asf/httpd/httpd/tags/2.3.6/docs/manual/rewrite/flags.html.en)

### F|forbidden
ex: forbid .exe files from being downloaded from your server.
```
RewriteRule \.exe - [F]
```