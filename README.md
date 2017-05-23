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

## Using the extension in production

To minimize all dependencies and upload the extension to Contentful:

```bash
gulp bundle
contentful-extension update --srcdoc ./dist/index.min.html --force --space-id <space-id>
```
