import {
  IonContent,
  IonDatetime,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonText,
} from "@ionic/react";
import './style.css'
import { calendar } from 'ionicons/icons'
interface WeeklyPickerProps {
  setSelectedDays: React.Dispatch<React.SetStateAction<never[]>>
  selectedDays: never[]
}

const WeeklyPicker: React.FC<WeeklyPickerProps> = ({ setSelectedDays, selectedDays }) => {
  const onWeekChange = (e: any) => {
    setSelectedDays(e.target.value ? e.target.value : [])
  };

  return (
    <>

      <IonItem id="date-modal" color="primary" className="weakly-content">
        <IonIcon icon={calendar} slot="start" ></IonIcon>
        <IonLabel slot="end">Select days</IonLabel>
        <IonText>12-03.1212</IonText>
      </IonItem>

      <IonModal id="example-modal" trigger="date-modal" mode="md">
        <IonContent id="date-content">
          <IonDatetime
            value={selectedDays.length > 0 ? selectedDays : ''}
            showDefaultButtons
            presentation="date"
            multiple
            size="cover"
            onIonChange={onWeekChange}
          ></IonDatetime>
        </IonContent>
      </IonModal>



    </>
  );
};

export default WeeklyPicker;
