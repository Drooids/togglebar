enquire
.register("screen and (max-width:480px)", function() { 
        console.log("handler 1 matched");
        $__G__collapse_sidebar();
    })
// Register multiple instances
.register("screen and (min-width:500px)", function() {
    $__G__collapse_sidebar(true);
    })
.register("screen and (max-width:799px)", function() {
    $__G__collapse_sidebar(true);
    $("#id-cat-sidebar").hide();
    if(typeof document.getElementById('id-spots-container') != 'undefined' && document.getElementById('id-spots-container') != null) {
	document.getElementById('id-spots-container').className = "small-12 medium-12 large-12 columns spots-container";
	}
    });
function $__G__collapse_sidebar(state) {
    var _side_bar_body = document.getElementById('id-sidebar-body'),
    _side_bar_foot = document.getElementById('id-sidebar-footer');

    if(_side_bar_foot == null) return;
    _chervon = _side_bar_foot.childNodes[1].childNodes[1].childNodes[1].childNodes[1];

    if(_side_bar_body.style.display == 'none') {
	if(typeof state != 'undefined') {
	    $("#id-sidebar-body").slideDown("slow", function() {
		_chervon.className = "fa fa-chevron-up fa-2x toggle-icon";
		});
	    }
	} else {
	    $("#id-sidebar-body").slideUp("slow", function() {
		_chervon.className = "fa fa-chevron-down fa-2x toggle-icon";
		});
	    }
}
