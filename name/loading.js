(function($){ 
    $.extend({  
        loadingShow: function(image) {  
			var loadingDiv ='<div id="loading" style="width:100%;height:100%;position: fixed;left: 0;top: 0;z-index:1001;background: rgba(0, 0, 0, 0.5);">'
                                +'<div style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;width: 100px;height:100px;margin: auto;background:url('+image+') center no-repeat;background-size: cover;"></div>'
                            +'</div>';
            $('body').append(loadingDiv);  
            $('html,body').css({"height":"100%","overflow":"hidden"});
		},  
        loadingHide: function() {  
            $('#loading').remove();
            $('html,body').css({"height":"auto","overflow":"auto"});
        }  
    })
})($);