# Contentful WYSIWYG Editor

[https://www.contentful.com](Contentful) is a content management platform for web applications, mobile apps and connected devices. It allows you to create, edit & manage content in the cloud and publish it anywhere via powerful API. Contentful offers tools for managing editorial teams and enabling cooperation between organizations.

This extension provides a JSON form editor based on the [Summernote](http://summernote.org/) library. You can use this extension with 'Text' and 'Symbol' field types.


## Getting started with local development

[Check you have the requirements needed](../README.md#extensions-samples) to use our extensions and [have the extensions SDK installed](https://github.com/contentful/ui-extensions-sdk).

Install the dependencies needed with `npm install`.

Create the extension on Contentful:

```bash
contentful-extension create --space-id <space-id>
```

Serve on _<http://localhost:3000>_ using Gulp, automatically watching and reserving any changes:

```bash
gulp watch
```

The [same constraints](../README.md#debugging-on-your-local-environment) apply to loading unsafe scripts.

## Change the Extension Name
If you wish to change the name of the extension that will appear in Contentful, you can do so by editing the extension.json file that is located in the root. If you open the file, you will see a few options like the example below.

```javascript
{
  "id": "summerNoteEditor",
  "name": "Summernote WYSIWYG Editor",
  "srcdoc": "http://localhost:3000/",
  "fieldTypes": ["Symbol", "Text"]
}
```

## Change the WYSIWYG Settings
You can change the settings of the WYSIWYG for what gets included in the toolbar. The options are available here: http://summernote.org/deep-dive/

The default settings are in /src/app.js as below:

```javascript
$('.summernote').summernote({
     height: 300, // set editor height
     minHeight: null, // set minimum height of editor
     maxHeight: null, // set maximum height of editor
     focus: true,
     toolbar: [
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['fontsize', ['fontsize']],
          ['insert',['picture', 'link']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph', 'style']],
          ['height', ['height']],
          ['code',['codeview']]
     ],
```


## Using the extension in production

To minimize all dependencies and upload the extension to Contentful for the first time:

```bash
$ gulp bundle
# creates `dist` directory and outputs index.min.html in there
$ contentful-extension create --srcdoc ./dist/index.min.html --space-id <space-id>
# uploads the extension to contentful
```

For any subsequent updates, use this command:
```bash
$ gulp bundle
# *updates* `dist` directory and outputs index.min.html in there
$ contentful-extension update --srcdoc ./dist/index.min.html --force --space-id <space-id>
# uploads the extension in contentful
```
