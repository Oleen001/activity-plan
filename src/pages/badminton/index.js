import Button from '@atlaskit/button';
import Calendar from '@atlaskit/calendar';
import "./style.css";

const defaultPreviouslySelected = ['2020-12-06'];
const defaultSelected = ['2020-12-08'];

function RegistBadminton() {
    return (
        <div className='page-body'>
            <div className='card'>
                <Calendar
                    className='calendar'
                    defaultMonth={1}
                    defaultYear={2024}
                    testId={'calendar'}
                    disabled='true'
                />
                <Button appearance="primary">เพิ่มชื่อเลยจ้า</Button>
            </div>
        </div>
    );
}

export default RegistBadminton;