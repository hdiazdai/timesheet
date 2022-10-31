import { IonAccordion, IonAccordionGroup, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import PickedDay from '../components/PickedDay/PickedDay';
import { calendar } from 'ionicons/icons'

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


        <IonAccordionGroup expand="inset">
          <IonAccordion value={'day'}>
            <IonItem slot="header" color="primary">
              <IonIcon icon={calendar} slot="start" ></IonIcon>
              <IonLabel slot="start">Week</IonLabel>
              <IonText slot="start">05/09 - 05/14</IonText>
            </IonItem>
            <div className="ion-padding" slot="content">
              <WeeklyPicker setSelectedDays={setSelectedDays} selectedDays={selectedDays} />
              <IonAccordionGroup expand="inset">
                {selectedDays.length > 0 && selectedDays.map((day: string, i) => (
                  <IonAccordion key={i} value={'day' + i}>
                    <PickedDay day={day} />
                  </IonAccordion>
                ))}
              </IonAccordionGroup>
            </div>
          </IonAccordion>

        </IonAccordionGroup>



      </IonContent>
    </IonPage>
  );
};

export default Tab2;
