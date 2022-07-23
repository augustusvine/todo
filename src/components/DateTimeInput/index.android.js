import React, { useState }from 'react';
import { TouchableOpacity, Image, TextInput, DatePickerAndroid, TimePickerAndroid } from 'react-native';

import styles from './stlyles';

import iconCalendar from  '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function DateTimeInputAndroid({ type}){
    const [datetime, setDateTime] = useState();

    async function selectDataOrHour(){
        if(type == 'date'){
            const {action, year, month, day} = await DatePickerAndroid.open({
                mode: 'calendar'
            });

            if(action == DatePickerAndroid.dateSetAction)
                setDate(`${day} - ${month} - ${year}`);
        }else{
            const { action, hour, minuto } = await TimePickerAndroid.open({
                is24Hour: true
            });

            if(action != TimePickerAndroid.dismissedAction)
            setDateTime(`${houer}:${minuto}`);
        }
    }

    return (
        <TouchableOpacity on onPress={selectDataOrHour}>
            <TextInput style={styles.input} 
            placeholder={type == 'date' ? 'Clique aqui para definir a data' : 'Cique aqui para definir a hora'}
            editable={false}
            valu={datetime}
            />
        
           <Image 
           style={styles.iconTextInput}
           source={type == 'date' ? iconCalendar : iconClock}>
           </Image>

        </TouchableOpacity>
    )
}