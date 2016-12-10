/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myclass')
        .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

    /** @ngInject */
    function DashboardCalendarCtrl(baConfig,$rootScope) {
        var dashboardColors = baConfig.colors.dashboard;
        var $element = $('#calendar').fullCalendar({
            //height: 335,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            //defaultDate: '2016-03-08',
            //selectable: true,
            //selectHelper: true,
            select: function (start, end) {
                var title = prompt('Event Title:');
                var eventData;
                if (title) {
                    eventData = {
                        title: title,
                        start: start,
                        end: end
                    };
                    $element.fullCalendar('renderEvent', eventData, true); // stick? = true
                }
                $element.fullCalendar('unselect');
            },
            //editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'math',
                    id:1,
                    start: '10:00',
                    end: '12:00',
                    dow: [1, 4],
                    ranges: [{
                        start: '2016-12-01',
                        end: '2017-02-01'
                    }]
                    //color: dashboardColors.silverTree
                },
                {
                    title: 'website',
                    id:2,
                    start: '14:00',
                    end: '16:00',
                    dow: [3, 5],
                    ranges: [{
                        start: '2016-12-12',
                        end: '2017-02-01'
                    }]
                },
                {
                    title: 'app',
                    start: '08:00',
                    end: '10:00',
                    dow: [2, 6],
                    ranges: [{
                        start: '2016-12-11',
                        end: '2017-02-01'
                    }]
                },
                {
                    title: 'finance',
                    start: '18:00',
                    end: '20:00',
                    dow: [3, 7],
                    ranges: [{
                        start: '2016-12-21',
                        end: '2017-02-01'
                    }]
                }
            ],
            eventRender: function(event){
                return (event.ranges.filter(function(range){ // test event against all the ranges

                        return (event.start.isBefore(range.end) &&
                        event.end.isAfter(range.start));

                    }).length)>0; //if it isn't in one of the ranges, don't render it (by returning false)
            },
            eventClick: function (calEvent, jsEvent, view) {
                $rootScope.title = calEvent.title;
                console.log(calEvent);
                console.log(jsEvent);
                console.log(view);
                console.log($rootScope);

                //$('title')[0]. nodeName = 'ahdsfsdf'
                //alert('Event: ' + calEvent.title);
                //alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                //alert('View: ' + view.name);

                // change the border color just for fun
                //$(this).css('border-color', 'red');

            }
        });
    }
})();