import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
class ViewNotification extends React.Component {
    constructor() {
        super(...arguments);
        this.data = [{
                Id: 2,
                Subject: 'Hearing date',
                StartTime: new Date(2021, 2, 10, 10),//based on the selected data we can set start and end time

                EndTime: new Date(2021, 2, 10, 12),//[11(month)-> december],[16->date],[10-12->time]
                IsAllDay: false,
                Status: 'Completed',
                Priority: 'High'
            }];
    }
    render() {
       
            return <ScheduleComponent height='450px' selectedDate={new Date(2021, 2, 10)} eventSettings={{ dataSource: this.data,
                fields: {
                    id: 'Id',
                    subject: { name: 'Subject' },
                    isAllDay: { name: 'IsAllDay' },
                    startTime: { name: 'StartTime' },
                    endTime: { name: 'EndTime' }
                }
            }}>
                
         <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>

                </ScheduleComponent>
       
       
    }
}
;
export default ViewNotification;
