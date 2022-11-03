import { IonButton, IonButtons, IonContent, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import ActivityModalContent from '../ActivityModalContent'



type Props = {
    onChangeActivity: (id?: string) => void
    dismiss: () => void
    day: string
    finishTime: string
    setFinishTime: React.Dispatch<React.SetStateAction<string>>
    setStartTime: React.Dispatch<React.SetStateAction<string>>
    startTime: string
    id?: string
    edit: boolean
}

const ActivityModal: React.FC<Props> = ({
    dismiss, onChangeActivity,
    day, finishTime, edit,
    setFinishTime, setStartTime, startTime, id }) => {
    return (
        <IonContent id="date-content">
            <IonToolbar>
                <IonTitle><strong>{edit ? 'Edit activity' : 'Complete your activity'}</strong></IonTitle>
                <IonButtons slot="end">
                    <IonButton color="primary" onClick={() => dismiss()}>
                        Close
                    </IonButton>
                </IonButtons>
            </IonToolbar>
            <ActivityModalContent
                onChangeActivity={onChangeActivity}
                buttonText={edit ? 'edit' : 'add'}
                day={day}
                finishTime={finishTime}
                setFinishTime={setFinishTime}
                setStartTime={setStartTime}
                startTime={startTime}
                id={id}
            />
        </IonContent>


    )
}

export default ActivityModal