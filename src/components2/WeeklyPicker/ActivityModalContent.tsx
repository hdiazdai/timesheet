
import { IonButton, IonTextarea } from '@ionic/react'
import React, { useState } from 'react'
import TimePicker from '../../components2/TimePicker/TimePicker'


type Props = {
    onChangeActivity: (id?: string) => void
    id: string
    buttonText: string
}

const ActivityModalContent: React.FC<Props> = ({ buttonText, onChangeActivity, id }) => {

    const [startTime, setStartTime] = useState('8:00')
    const [finishTime, setFinishTime] = useState('17:00')
    return (
        <div style={{ backgroundColor: 'var(--ion-color-medium)', padding: '25px 5px' }}>
            <TimePicker
                id={id}
                label={'Start Time'}
                setSelectedTime={setStartTime}
                selectedTime={startTime}
            />
            <TimePicker
                id={id}
                label={'Finish Time'}
                setSelectedTime={setFinishTime}
                selectedTime={finishTime}
            />
            <IonTextarea className="custom-textarea" placeholder="Type something here"></IonTextarea>
            <IonButton onClick={() => onChangeActivity(id)}>{buttonText}</IonButton>
        </div>
    )
}

export default ActivityModalContent