$(document).ready(function() {

     window.contentfulExtension.init(function (extension) {
     extension.window.startAutoResizer()

     var existingValue = extension.field.getValue();
     $('.summernote').html(existingValue);

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
    callbacks: {
      onInit: function() {
        console.log('Summernote is launched');
   },
      onChange: function(contents, $editable) {
           var markupStr = $(this).summernote('code');
           extension.field.setValue(markupStr);

      },
      onBlur: function() {
           var markupStr = $(this).summernote('code');
           extension.field.setValue(markupStr);
      }
     }
     });

})

});
