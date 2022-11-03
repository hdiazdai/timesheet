import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useState } from 'react';
import ActivityModal from '../components2/ActivityModal';
import WeeklyPicker from '../components2/WeeklyPicker/WeeklyPicker';
import { Activity, CompleteDay, CompleteWeek } from '../models/user';
import './Tab3.css';
import { v4 } from 'uuid'

const Tab3: React.FC = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false)
  const [isOpenActivity, setIsOpenActivity] = useState(false)
  const [completeWeek, setCompleteWeek] = useState<CompleteWeek>()
  const [completeDay, setCompleteDay] = useState<CompleteDay>()
  const [activity, setActivity] = useState<Activity>({
    startTime: '',
    finishTime: '',
    text: ''
  })

  const onChangeActivity = () => {

  }
  const onWeekSelected = (selectedDays: string[]) => {
    if (!Array.isArray(selectedDays)) return
    const completeWeek = selectedDays.map((day: string) => {
      return {
        id: v4(),
        totalHs: 0,
        date: day,
        activities: [activity]
      }
    })
    setCompleteWeek({ days: completeWeek, idWeek: v4() })
  }


  return (
    <IonPage>
      <IonHeader mode='ios' className='ion-no-border'>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader mode='ios' collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setIsOpenCalendar(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonModal id="example-modal" isOpen={isOpenCalendar} mode="md">
          <WeeklyPicker
            onWeekSelected={onWeekSelected}
            setIsOpenCalendar={setIsOpenCalendar}
            setIsOpenActivity={setIsOpenActivity}
          />
        </IonModal>

        <IonModal isOpen={isOpenActivity} id="example-modal" mode="md">
          <ActivityModal
            onChangeActivity={onChangeActivity}
            id={completeWeek?.idWeek}
            edit={false}
          />
        </IonModal>



      </IonContent>
    </IonPage>
  );
};

export default Tab3;
