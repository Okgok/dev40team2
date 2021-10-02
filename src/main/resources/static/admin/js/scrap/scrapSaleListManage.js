$(function(){
	$('.approval-action').click(function(){
		var bnt = $(this); 
		//승인여부
		var scrapRequestResultTextSpan = $(this).parents('tr').find('.scrapRequestResultText');
		//승인버튼
		var scrapRequestResultInput = $(this).parent().children('.scrapRequestResult');
		// 승인 버튼 밸류 값을 문자열에서 -> 넘버로 바꿈
		var scrapRequestResult = Number(scrapRequestResultInput.val());
		//상태값 반대로 변경
		var modifyScrapRequestResult = 0;
		if(scrapRequestResult == 0){
			modifyScrapRequestResult = 1;
		}else{
			modifyScrapRequestResult = 0;						
		}
		
		var scrapSaleRequestCode = $(this).val();
		var request = $.ajax({
			url: "/admin/scrap/ScrapRequestApprovalAjax",
			method: "POST",
			data: { scrapSaleRequestCode: scrapSaleRequestCode, scrapRequestResult : modifyScrapRequestResult },
			dataType: "json"
		});
		 
		request.done(function( data ) {
			var result = data.result;
			//result가 0보다 크면 실행
			if(result > 0){
				//scrapRequestResult가 0이랑 같으면
				if(scrapRequestResult == 0){	
					bnt.addClass('btn-danger').removeClass('btn-primary');
					//버튼 텍스트 '승인 취소'로 바뀜
					bnt.text('취소');
					//버튼 클릭시 밸류 값 1로 바꿈
					scrapRequestResultInput.val(1);
					//승인여부 값이 Y로 바뀜
					scrapRequestResultTextSpan.text('Y');
				//result가 0이면
				}else{
					bnt.addClass('btn-primary').removeClass('btn-danger');
					//버튼 텍스트 '승인'로 바뀜
					bnt.text('승인');			
					//버튼 클릭시 밸류 값 0로 바꿈
					scrapRequestResultInput.val(0);
					//승인여부 값이 N로 바뀜
					scrapRequestResultTextSpan.text('N');
				}	
			}else{
				if(scrapRequestResult == 0){								
					alert('승인 변경에 실패 하였습니다.');	
				}else{
					alert('승인취소 변경에 실패 하였습니다.');									
				}								
			}
			
		});
		 
		request.fail(function( jqXHR, textStatus ) {
			alert( "Request failed: " + textStatus );
		});
	});
	
});