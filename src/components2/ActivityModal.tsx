import { IonButton, IonButtons, IonContent, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import ActivityModalContent from './WeeklyPicker/ActivityModalContent'




type Props = {
    onChangeActivity: (id?: string) => void
    id?: string
    edit: boolean
}

const ActivityModal: React.FC<Props> = ({
    onChangeActivity, edit, id
}) => {
    return (
        <IonContent id="date-content">
            <IonToolbar>
                <IonTitle><strong>{edit ? 'Edit activity' : 'Complete your activity'}</strong></IonTitle>
                <IonButtons slot="end">
                    <IonButton color="primary">
                        Close
                    </IonButton>
                </IonButtons>
            </IonToolbar>
            <ActivityModalContent
                onChangeActivity={onChangeActivity}
                buttonText={edit ? 'edit' : 'add'}
                id={id ? id : ''}
            />
        </IonContent>


    )
}

export default ActivityModal