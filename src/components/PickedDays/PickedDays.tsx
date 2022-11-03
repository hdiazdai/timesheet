import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonContent, IonDatetime, IonIcon, IonItem, IonLabel, IonModal, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react'
import { pencil } from 'ionicons/icons'
import { Fragment, useRef, useState } from 'react'
import DayActivity from '../DayActivity/DayActivity'
import ActivityModal from '../DayActivity/ActivityModal/ActivityModal'
import { v4 } from 'uuid';
import './style.css'

type Props = {
  day: string
}
interface Activity {
  startTime: string
  finishTime: string
  description: string
  id: string
}

const PickedDays: React.FC<Props> = ({ day }) => {
  const [startTime, setStartTime] = useState('08:00')
  const [finishTime, setFinishTime] = useState('17:00')
  const [activities, setActivities] = useState<Activity[]>([])
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }
  const onAddActivity = (_?: string) => {
    console.log('onAddActivity')
    const activity: Activity = {
      startTime,
      finishTime,
      description: 'descriotiin',
      id: v4()
    }
    setActivities(state => [...state, activity])
    dismiss()
  }
  const onEditActivity = (id?: string) => {
    setActivities(state => state.map(activity => {
      if (activity.id === id) {
        activity.finishTime = finishTime
        activity.startTime = startTime
        activity.description = 'changed description'
      }
      return activity
    }))
    const editActivity = activities.find(activity => activity.id === id)
    console.log(editActivity)
    dismiss()
  }


  return (
    <>
      <IonItem slot="header" color="light" >
        <IonText slot='start'>Mon</IonText>
        <IonLabel slot='start'>{day}</IonLabel>
        <IonText>(8hs)</IonText>
      </IonItem>
      <div slot="content" style={{ paddingTop: '1px', backgroundColor: 'var(--ion-color-light)' }}>
        {activities.map((activity, i) => (
          <Fragment key={i}>
            <DayActivity
              finishTime={finishTime}
              setFinishTime={setFinishTime}
              setStartTime={setStartTime}
              startTime={startTime}
              onChangeActivity={onEditActivity}
              i={i}
              activity={activity}
              day={day}
            />
          </Fragment>
        ))}

        <IonButton style={{ padding: '5px 55px' }}
          id={"activity-modal" + day}
          expand='block'
        >ADD activity</IonButton>

        <IonModal id="example-modal" ref={modal} trigger={"activity-modal" + day} mode="md">
          <ActivityModal
            dismiss={dismiss}
            onChangeActivity={onAddActivity}
            day={day}
            finishTime={finishTime}
            setFinishTime={setFinishTime}
            setStartTime={setStartTime}
            startTime={startTime}
            edit={false}
          />
        </IonModal>

      </div>
    </>


  )
}

export default PickedDays