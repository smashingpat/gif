function gifBlockDir() {
    function link(scope,element,attrs) {

        var image = element.find('img');

        image.on('load', function() {
            element
                .removeClass('image-not-loaded')
                .addClass('image-is-loaded');
        });

        element.on('mousedown', function() {
            var imageUrl = window.location.href + (element.attr('data-image')).substring(1);
            events.emit('buttonAnimation', element);
            window.prompt("Copy to clipboard: Ctrl+C, Enter", imageUrl);
        });
    }

    return {
        restrict: 'E',
        link: link,
        templateUrl: 'app/templates/gif-item.html',
        replace: true
    };
}