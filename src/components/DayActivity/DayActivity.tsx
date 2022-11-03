import { IonContent, IonIcon, IonItem, IonLabel, IonModal, IonText } from '@ionic/react'
import { pencil } from 'ionicons/icons'
import React, { useRef } from 'react'
import ActivityModal from './ActivityModal/ActivityModal'

type Props = {
  activity: any
  day: string
  i: number
  onChangeActivity: (id?: string) => void
  finishTime: string
  setFinishTime: React.Dispatch<React.SetStateAction<string>>
  setStartTime: React.Dispatch<React.SetStateAction<string>>
  startTime: string
}

const DayActivity: React.FC<Props> = ({
  activity, day, i,
  onChangeActivity,
  finishTime, startTime,
  setFinishTime, setStartTime,
}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const dismiss = () => {
    modal.current?.dismiss();
  }
  const onAccept = (id?: string) => {
    onChangeActivity(id)
    dismiss()
  }

  return (
    <>
      <IonItem slot="header" color="medium" id={"edit-modal" + day + i}>
        <IonLabel slot="start">{i + 1}-</IonLabel>
        <IonText slot="start">(4hs)</IonText>
        <IonText slot="start" >{activity.startTime} - {activity.finishTime}</IonText>
        <IonIcon icon={pencil} slot="end" ></IonIcon>
      </IonItem>

      <IonModal id="example-modal" ref={modal} trigger={"edit-modal" + day + i} mode="md">
        <ActivityModal
          id={activity.id}
          onChangeActivity={onAccept}
          dismiss={dismiss}
          day={day}
          finishTime={finishTime}
          setFinishTime={setFinishTime}
          setStartTime={setStartTime}
          startTime={startTime}
          edit={true}
        />
      </IonModal>
    </>
  )
}

export default DayActivity