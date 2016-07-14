# Angular CRUD sample
This is an angular v1 crud operations sample

# Install
Nothing is needed, as I didn't use any npm, bower, ...

Anyway you may try this to get sources
```
npm install
```
You could run it directly and locally in Firefox.
Chrome support not yet.

# phantomjs
When you change to phantomjs, install
```
npm install --save-dev phantomjs
```

In the conf.js set these lines:
```
   browserName: 'phantomjs',
   'phantomjs.binary.path': require('phantomjs').path,
```

The second is required to locate the binary of
phantomjs

It Worked today.