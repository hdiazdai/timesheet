import { IonAccordion, IonAccordionGroup, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

import { calendar } from 'ionicons/icons'

import WeeklyPicker from '../components/WeeklyPicker/WeeklyPicker';
import './Tab2.css'
import PickedDays from '../components/PickedDays/PickedDays';


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
            <IonTitle className='ion-padding' size="large">Weekly Timesheet</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonAccordionGroup animated expand="compact">
          <IonAccordion value={'day'}>
            <IonItem slot="header" color="light">
              <IonIcon icon={calendar} style={{ padding: '20px 0' }} slot="start" ></IonIcon>
              <IonLabel >1st week</IonLabel>
              <IonText slot="start"><strong>OCTOBER </strong></IonText>
              <IonText>42hs</IonText>
            </IonItem>
            <div className="ion-padding" slot="content">
              <WeeklyPicker setSelectedDays={setSelectedDays} selectedDays={selectedDays} />
              <IonAccordionGroup expand="inset">
                {selectedDays.length > 0 && selectedDays.map((day: string, i) => (
                  <IonAccordion key={i} value={'day' + i}>
                    <PickedDays day={day} />
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
