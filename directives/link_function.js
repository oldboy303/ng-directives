(function() {

  var linkDemo = function() {
    return {
      restrict: 'A',
      link: function(scope, ielem, attrs) {

        ielem.on('click', function() {
          ielem.html('I was clicked!');
        });

        ielem.on('mouseenter', function() {
          ielem.css('background-color', 'red');
        });

        ielem.on('mouseleave', function() {
          ielem.css('background-color', 'white');
        });

      }
    };
  };

  angular.module('directivesApp')
    .directive('linkDemo', linkDemo);

}());
