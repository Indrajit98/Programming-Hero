
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import '../../Style/Banner.css'

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

    return (
        <section className='my-6 bg-image'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist chair' className="md:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AppointmentBanner;