# chromebug

## How to recreate the bug

Start the node script from the repository root:

```bash
node ./index.js
```

Go to your Chrome or Chromium browser and go to http://localhost:3000/html/nonworking.html

The background should be red

Click the submit button.

The background turns white, since the base href becomes empty and the CSS file is not loaded properly (notice the 404 when opening developer tools).

To see working base href test the other urls:

* http://localhost:3000/html/working1.html
* htpp://localhost:3000/html/working2.html

Notice how it is the combination of the name attribute on the textarea and an a-tag inside the textarea that creates this issue.

## Tested on

* Google Chrome Version 52.0.2743.82 (64-bit) (Linux Arch)
* Chromium Version 52.0.2743.82 (64-bit) (Linux Arch)
* Chromium Version 51.0.2704.79 Ubuntu 16.04 (64-bit)
