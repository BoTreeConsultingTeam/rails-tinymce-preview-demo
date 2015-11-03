tinymceOptions = {


     // Borrowed from http://fiddle.tinymce.com/
	selector: "textarea",
	plugins: [
		"advlist autolink lists link image charmap print preview anchor",
		"searchreplace visualblocks code fullscreen",
		"insertdatetime media table contextmenu paste"
    ],
    toolbar: "bold italic | styleselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
    
    // Allow image drag and drop
    // Dropped images are embedded with data uris
    //http://www.tinymce.com/wiki.php/Configuration:paste_data_images
	paste_data_images: true,
	menubar:false,

  // Check events section for more details
  // http://www.tinymce.com/wiki.php/api4:class.tinymce.Editor

  setup : function(ed) {
        ed.on('change', function(e) {
           console.log('change event');
           // console.log('the editor object '+ed);
           // console.log('the content '+ed.getContent());
           $('#preview').html(ed.getContent());
        });
        ed.on('keyup', function(e) {
           console.log('keyup event');
           // console.log('the editor object '+ed);
           // console.log('the content '+ed.getContent());
           $('#preview').html(ed.getContent());
        });
     }


}

tinymce.init(tinymceOptions);

// $(function(){
//   $('#content').on('keyup', function(){
//     $('#preview').html(ed.getContent());
//   })
// });