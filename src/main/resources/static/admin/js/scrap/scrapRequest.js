$(function(){
			$('.approval-action').click(function(){
				//this = 버튼
				var bnt = $(this); 
				// pk 값
				var scrapSaleRequestCode = $('#scrapSaleRequestCode').val();
				//승인버튼
				var scrapRequestResultTextSpan = $('.scrapRequestResultText');
				// 승인 버튼 밸류 값을 문자열에서 -> 넘버로 바꿈
				var scrapRequestResult = Number($(this).val());
				//상태값 반대로 변경
				var modifyScrapRequestResult = 0;
				if(scrapRequestResult == 0){
					modifyScrapRequestResult = 1;
				}else{
					modifyScrapRequestResult = 0;						
				}
				
				var request = $.ajax({
					url: "/admin/scrap/ScrapRequestApprovalAjax", //요청 url
					method: "POST", //요청방식
					data: { scrapSaleRequestCode: scrapSaleRequestCode, scrapRequestResult : modifyScrapRequestResult }, //요청하는 곳에 전달될 데이터
					dataType: "json" //응답되어 받은 데이터를 parsing 시킬방식
				});
				 //반환된 객체에는 done 메서드가 있으며 , 요청과 응답이 정상적으로
				 //이루어 졌을 경우 해당 메서드가 실행
				request.done(function( data ) {
					var result = data.result;
					//result가 0보다 크면
					if(result > 0){
						if(scrapRequestResult == 0){	
							bnt.addClass('btn-danger').removeClass('btn-primary');
							//버튼 텍스트 '승인 취소'로 바뀜
							bnt.text('취소');
							//버튼 클릭시 밸류 값 1로 바꿈
							bnt.val(1);
							//승인여부 값이 Y로 바뀜
							scrapRequestResultTextSpan.val('Y');
						}else{
							bnt.addClass('btn-primary').removeClass('btn-danger');
							bnt.text('승인');				
							bnt.val(0);
							scrapRequestResultTextSpan.val('N');
						}	
					}else{
						if(scrapRequestResult == 0){								
							alert('승인 변경에 실패 하였습니다.');	
						}else{
							alert('승인취소 변경에 실패 하였습니다.');									
						}								
					}
					
				});
				 //반환된 객체에는 fail메서드가 있으며
				 //응답 중 에러가 발생하거나, 데이타 parsing 에러시 해당 메서드가 실행
				request.fail(function( jqXHR, textStatus ) {
					alert( "Request failed: " + textStatus );
				});
			});
		});