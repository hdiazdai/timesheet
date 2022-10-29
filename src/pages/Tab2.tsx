import { IonAccordion, IonAccordionGroup, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import PickedDay from '../components/PickedDay/PickedDay';

import WeeklyPicker from '../components/WeeklyPicker/WeeklyPicker';


const Tab2: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState([])
  console.log(selectedDays);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weekly</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Weekly</IonTitle>
          </IonToolbar>
        </IonHeader>

        <WeeklyPicker setSelectedDays={setSelectedDays} selectedDays={selectedDays} />

        <IonAccordionGroup expand="inset">
          {selectedDays.length > 0 && selectedDays.map((day: string, i) => (
            <IonAccordion key={i} value={'day' + i}>
              <PickedDay day={day} />
            </IonAccordion>
          ))}


        </IonAccordionGroup>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
