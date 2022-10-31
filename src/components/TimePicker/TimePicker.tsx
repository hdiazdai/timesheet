import { IonContent, IonDatetime, IonIcon, IonItem, IonLabel, IonModal, IonText } from '@ionic/react'
import { time } from 'ionicons/icons'
import React from 'react'
import './style.css'

type Props = {
  day: string;
  label: string;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>
}

const TimePicker: React.FC<Props> = ({ day, label, selectedTime, setSelectedTime }) => {
  const id = "time-modal" + label + day

  const onTimeChange = (event: any) => {
    console.log(event.target.value)
    // console.log(new Date(event.target.value), 'HH:mm')
    // setSelectedTime(format(new Date(event.target.value), 'HH:mm'))
    setSelectedTime(event.target.value)
  }

  return (
    <>
      <IonItem id={id} color="primary" className='time-item'>
        <IonIcon icon={time} slot="start" ></IonIcon>
        <IonText>{selectedTime}</IonText>
        <IonLabel slot="end">{label}</IonLabel>
      </IonItem>

      <IonModal id="clock-modal" trigger={id} mode="md">
        <IonContent id="time-content">
          <IonDatetime
            value={selectedTime}
            showDefaultButtons
            presentation="time"
            size="cover"
            onIonChange={onTimeChange}
          ></IonDatetime>
        </IonContent>
      </IonModal>
    </>
  )
}

export default TimePicker