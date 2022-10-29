import { IonContent, IonDatetime, IonIcon, IonItem, IonLabel, IonModal, IonText } from '@ionic/react'
import { time } from 'ionicons/icons'
import './style.css'

type Props = {
    day: string
}

const PickedDay: React.FC<Props> = ({ day }) => {
    return (
        <>
            <IonItem slot="header" color="light">
                <IonLabel>{day}</IonLabel>
                <IonText>(8hs)</IonText>
            </IonItem>
            <div className="ion-padding" slot="content">

                <IonItem id={"time-modal" + day} color="primary">
                    <IonIcon icon={time} slot="start" ></IonIcon>
                    <IonText>12-03.1212</IonText>
                    <IonLabel slot="end">Start</IonLabel>
                </IonItem>

                <IonModal id="clock-modal" trigger={"time-modal" + day} mode="md">
                    <IonContent id="time-content">
                        <IonDatetime
                            // value={selectedDays.length > 0 ? selectedDays : ''}
                            showDefaultButtons
                            presentation="time"
                            size="cover"
                        // onIonChange={onWeekChange}
                        ></IonDatetime>
                    </IonContent>
                </IonModal>


            </div>
        </>


    )
}

export default PickedDay