/**
 * 
 */

// 1-1 캘린더 이벤트 추가 
document.addEventListener('DOMContentLoaded', function() {

	// 1-2 캘린더 객체 검색 후 변수에 담기 
	var calendarEl = document.getElementById('calendar');
	// 1-3 현재 날짜를 가져오기 위한 변수
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var today = "2020-09-01";
			//  year + "-" + month + "-" + day;
	
	// 1-4 캘린더 객체에 대한 이벤트 내용
	var calendar = new FullCalendar.Calendar(calendarEl, {
		
		/************************************ OPTIONS STRAT ********************************/
		
		//********************************** 달력에 대한 설정  **********************************//
		locale						: 'ko',    			// 화면에 출력될 경우 한글로 나오게 설정함
		//timezone                  : 'local',			// 각 나라마다 시간대에서 현재 컴퓨터가 위치하고 있는 시간대를 표시함
		nextDayThreshold        	: "09:00:00",		// 이벤트의 종료 시간이 다른 날인 경우 최소 시간을 설정함
		
		//********************************** 슬롯에 대한 설정  **********************************//
		allDaySlot             	 	: true,				// 하루종일 슬롯(시간대)을 표시할 지 여부
		displayEventTime        	: true,				// 시간 표시가 있는 막대가 있는 경우 텍스트를 표시한다
		displayEventEnd				: true,				// 시간 표시가 이쓴 막대가 있는 경우 이벤트의 종료 시간을 표시할 지 설정한다.
		
		//********************************** 주에 대한 설정  **********************************//
		firstDay                	: 0,				// 월요일이 먼저 오도록하는 경우(1)
		weekNumbers             	: false,			// 달력에 첫 주마다 몇 째주인지 표시하는 지 알려줌 (W~)
		weekNumberCalculation   	: "local",			// local(현지 사용하고 있는 컴퓨터위치의 시간)에 따라 계산에 사용
		weekends                  	: true,				// 일정 관리에서 토요일 / 일요일까지 볼 지 설정
		
		//**************************** 시간출력 형식에 대한 설정  **********************************//
		//timeFormat               	: 'HH:mm',			// 시간을 어떻게 형식으로 보여질지 설정한다.
		//minTime                   : '00:00:00',		// 매일 표시할 첫번째 시간대를 설정한다.
		//maxTime                   : '24:00:00',		// 매일 표시할 마지막 시간대를 설정한다.
		defaultTimedEventDuration 	: '01:00:00',		// 지정된 시간 없이 시간 초과된 이벤트 개체의 제한 기간 
		slotLabelFormat           	: 'HH:mm',			// 시간대의 시간을 어떤 형식으로 보여질지 설정한다
		dayPopoverFormat          	: 'MM/DD dddd',		// moreLinkClick 옵션에 의해 생성된 팝오버 제목 날짜 형식을 결정한다.
		
		
		//**************************** 이벤트에 관련된 설정  **********************************//
		selectable              	: true,				// 달력의 일정을 드래그하면 색상이 변경이 된다.
		navLinks                	: true,				// 해당 날짜에 대한 이벤트를 볼 수 있도록 링크를 걸어준다.
		editable                  	: true,				// 일정 관리의 이벤트를 수정할 수 있는지 여부 설정
		nowIndicator              	: true,				// 현재 시간을 표시하는 마커를 표시할 지에 대한 여부 (캘린더 시간 표시기)
		
		//views : { 
		//	   month : { eventLimit : 12 } 				// 한 날짜에 최대 이벤트 12개, 나머지는 + 처리됨
	    //								 	},
	    //eventLimit                : true,				// 이벤트 개수 제한을 걸어둔다.
	    //eventLimitClick           : true,				// eventLimit 옵션에 의해 만들어진 "more" 링크를 클릭할 때 취하는 액션을 결정한다 ( 머리글의 보기에 따른 주 보기로 이동 )
		
		//**************************** 대기시간(delay)에 관련된 설정  **********************************//
		longPressDelay            	: 0,				// 터치 장치의 경우 이벤트를 끄거나  날짜를 선택하기 전 사용자가 대기하는 시간
		eventLongPressDelay       	: 0,				// 터치 장치의 경우 이벤트를 끄기 전에 사용자가 대기하는 시간
		selectLongPressDelay      	: 0,				// 터치 장치의 경우 사용자가 날짜를 선택할 수 있을 때까지 기다려야 하는 시간
		
		/************************************ OPTIONS END ********************************/
		
		
		/************************************ header STRAT ********************************/
		
		
		initialDate	: today,					// 달력의 기준점을 잡아준다 initial(초기) + Date(날짜)
		headerToolbar: {				 
			left	: 'prev,next today',		// pre 버튼 next 버튼 today 버튼 (타이틀좌측)
			center	: 'title',					// 타이틀
			right	: 'agendaWeek, dayGridMonth, listYear'	// 달력형식, 리스트형식 (타이틀우측)
		},
	
		/************************************ 실패 EVENT ********************************/
		events: {
			url		: 'ics/feed.ics',
			format	: 'ics',
			failure	: function() {			
				document.getElementById('script-warning').style.display = 'block';
			}
		},
		
		/************************************ 로딩 EVENT ********************************/
			loading	: function(bool) {		
				document.getElementById('loading').style.display =
			bool ? 'block' : 'none';	
		},
		
		/************************************ 테스트용 EVENT ********************************/
		events: [
	        {
	          title: 'Business Lunch',
	          start: '2021-10-03T13:00:00',
	          constraint: 'businessHours'
	        },
	        {
	          title: 'Meeting',
	          start: '2021-10-13T11:00:00',
	          constraint: 'availableForMeeting', // defined below
	          color: '#257e4a'
	        },
	        {
	          title: 'Conference',
	          start: '2021-10-18',
	          end: '2021-10-20'
	        },
	        {
	          title: 'Party',
	          start: '2021-10-29T20:00:00'
	        },

	        // areas where "Meeting" must be dropped
	        {
	          groupId: 'availableForMeeting',
	          start: '2021-10-11T10:00:00',
	          end: '2021-10-11T16:00:00',
	          display: 'background'
	        },
	        {
	          groupId: 'availableForMeeting',
	          start: '2021-10-13T10:00:00',
	          end: '2021-10-13T16:00:00',
	          display: 'background'
	        },

	        // red areas where no events can be dropped
	        {
	          start: '2021-09-24',
	          end: '2021-09-28',
	          overlap: false,
	          display: 'background',
	          color: '#ff9f89'
	        },
	        {
	          start: '2021-09-06',
	          end: '2021-09-08',
	          overlap: false,
	          display: 'background',
	          color: '#ff9f89'
	        }
	      ]
	    
	});
		calendar.render();	// .render() 달력을 초기화하기 위하여 사용한다.
});
