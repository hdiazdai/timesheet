
import { IonButton, IonTextarea } from '@ionic/react'
import React from 'react'
import TimePicker from '../TimePicker/TimePicker'

type Props = {
    day: string
    startTime: string
    setStartTime: React.Dispatch<React.SetStateAction<string>>
    finishTime: string
    setFinishTime: React.Dispatch<React.SetStateAction<string>>
    onChangeActivity: (id?: string) => void
    id?: string
    buttonText: string
}

const ActivityModalContent: React.FC<Props> = ({ day, startTime, finishTime, setFinishTime, buttonText, setStartTime, onChangeActivity, id }) => {
    return (
        <div style={{ backgroundColor: 'var(--ion-color-medium)', padding: '25px 5px' }}>
            <TimePicker
                day={day}
                label={'Start Time'}
                setSelectedTime={setStartTime}
                selectedTime={startTime}
            />
            <TimePicker
                day={day}
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