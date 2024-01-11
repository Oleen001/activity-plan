import Button from '@atlaskit/button';
import Calendar from '@atlaskit/calendar';
import Textfield from '@atlaskit/textfield';
import DynamicTable from '@atlaskit/dynamic-table';
import "./style.css";

const days = ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


function RegistBadminton() {

    const head = {
        cells: days.map((day) => ({
            key: day,
            content: day,
        })),
    };

    const rows = [
        {
            key: `morning-row`,
            cells: ['9:00', 'Math', 'History', 'Science', 'Computing', 'Math'].map(
                (content, index) => ({
                    key: index,
                    content,
                }),
            ),
        },
        {
            key: 'midday-row',
            cells: [
                {
                    key: 0,
                    content: '12:00',
                },
                {
                    key: 1,
                    content: 'LUNCH',
                    colSpan: 5,
                },
            ],
        },
        {
            key: 'afternoon-row',
            cells: [
                '13:00',
                'Science',
                'History',
                'Psychology',
                'Computing',
                'Business',
            ].map((content, index) => ({
                key: index,
                content,
            })),
        },
    ];


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
                <div className='form'>
                    <div className='input-name'>
                        <div className='input'>
                            <Textfield
                                appearance="standard"
                                placeholder="ชื่อจ้า"
                                style={{ height: "30px" ,borderRadius: "16px"}}
                            />
                        </div>
                        <div className='btn'>
                            <Button appearance="primary" shouldFitContainer >เพิ่มชื่อเลยจ้า</Button>
                        </div>
                    </div>
                    <DynamicTable
                        head={head}
                        rows={rows}
                        rowsPerPage={5}
                        defaultPage={1}
                        loadingSpinnerSize="large"
                        isRankable
                    />
                </div>

            </div>
        </div>
    );
}

export default RegistBadminton;