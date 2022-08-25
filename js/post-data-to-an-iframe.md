## post data to an iframe

```html
<form action="iframe.php" target="my-iframe" method="post">
  <label for="text">Some text:</label>
  <input type="text" name="text" id="text" />

  <input type="submit" value="post" />
</form>

<iframe name="my-iframe" src="about:blank"></iframe>
```
