window.onload = function () {

    // alle Links öffnen in neuer Seite
    var links = document.getElementsByTagName("a")
    for (const element of links) {
        element.setAttribute("target", "_blank")
    }

    //src https://stackoverflow.com/questions/27860507/listing-files-of-a-directory-in-a-static-webpage
    var pdfFilesDirectory = 'ressources/';
    var pdfs = document.getElementById("pdfs")

    // get auto-generated page 
    $.ajax({ url: pdfFilesDirectory }).then(function (html) {
        // create temporary DOM element
        var document = $(html);
        
        // find all links ending with .pdf 
        document.find('a[href$=".pdf"]').each(function () {
            var pdfName = $(this).text();
            var pdfUrl = $(this).attr('href');
            pdfName = pdfName.split('.pdf')[0] + ".pdf"
            // do what you want here 
            $("#pdfs").append(`<div> <a href=ressources/${pdfUrl}>${pdfName}</a></div>`)
        })
        $('#loadingMask').fadeOut();
    });
}







