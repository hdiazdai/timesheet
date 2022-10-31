import { IonAccordion, IonAccordionGroup, IonButton, IonContent, IonDatetime, IonIcon, IonItem, IonLabel, IonModal, IonText, IonTextarea } from '@ionic/react'
import { useState } from 'react'
import DayActivity from '../DayActivity/DayActivity'
import TimePicker from '../TimePicker/TimePicker'
import './style.css'

type Props = {
  day: string
}

const PickedDay: React.FC<Props> = ({ day }) => {
  const [startTime, setStartTime] = useState('08:00')
  const [finishTime, setFinishTime] = useState('17:00')
  return (
    <>
      <IonItem slot="header" color="light">
        <IonText slot='start'>Mon</IonText>
        <IonLabel slot='start'>{day}</IonLabel>
        <IonText>(8hs)</IonText>
      </IonItem>
      <div slot="content">
      <IonButton expand='block' >ADD  Day activity</IonButton>
        <IonAccordionGroup expand="inset">
          <IonAccordion value={'day'}>
            <IonItem slot="header" color="light">
              <IonLabel slot="start">Activity  (1)</IonLabel>
              <IonText slot="start">4hs</IonText>
            </IonItem>
            <div style={{ backgroundColor: 'red', padding: '5px' }} slot="content">
              <DayActivity
                day={day}
                finishTime={finishTime}
                setFinishTime={setFinishTime}
                setStartTime={setStartTime}
                startTime={startTime}
              />
            </div>
          </IonAccordion>
        </IonAccordionGroup>


      </div>
    </>


  )
}

export default PickedDay