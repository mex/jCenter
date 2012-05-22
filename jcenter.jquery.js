/*-----------------------------------------------------------------------
 * JQuery Plugin: "jCenter"
 * by:
   Michael Storgaard (js@michaelstorgaard.com)
   http://www.michaelstorgaard.com
 *
 * Copyright (c) 2012 Michael Storgaard
 * Licensed under GPLv3 (http://www.opensource.org/licenses/gpl-3.0.html)
 *
 * Description: Centers an element vertically in the browser window
 * Dependencies: jQuery library                               
 * Usage Example:
   $(element).jCenter();
   Optional: Define top and left offset (to the center of the element) by
   adding parameters like this: $(element).jCenter(10, 30);

 * Version: 1.0, 22.05.2012
 * Changelog:
 *  22.05.2012 initial Version 1.0
-----------------------------------------------------------------------*/
(function($){
    $.fn.jCenter = function(top, left){
        return this.each(function(){
			top = (top) ? top : 50;
			left = (left) ? left : 50;
            $(this).css({
                'position': 'absolute',
                'top': top+'%',
                'left': left+'%',
                'margin-top': ($(this).height()*-(top/100))+'px',
                'margin-left': ($(this).width()*-(left/100))+'px'
            });
        });
    };
})(jQuery);