/*-------------------------------------------------------------------- 
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
 * Usage Example: $(element).jCenter();
 * Version: 1.0, 22.05.2012
 * Changelog:
 *  22.05.2012 initial Version 1.0
--------------------------------------------------------------------*/
(function($){
    $.fn.jCenter = function(){
        return this.each(function(){
            $(this).css({
                'position': 'absolute',
                'top': '50%',
                'left': '50%',
                'margin-top': ($(this).height()/-2)+'px',
                'margin-left': ($(this).width()/-2)+'px'
            });
        });
    };
})(jQuery);