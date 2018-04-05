(function () {
	$('#SlotA', parent.document).find('#workflowView-cardViewer').css('padding-bottom', '80px').addClass("padding-viewport");
})();

$(window).load(() => { 
	$('#SlotA', parent.document).find('#workflowView-cardViewer').attr("style", function (i, s) { return s + 'padding-left: 15px !important' });
	
})