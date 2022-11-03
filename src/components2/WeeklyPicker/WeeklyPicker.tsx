import {
  IonContent,
  IonDatetime,
} from "@ionic/react";
import { useState } from "react";
import './style.css'

interface WeeklyPickerProps {
  setIsOpenCalendar: React.Dispatch<React.SetStateAction<boolean>>
  setIsOpenActivity: React.Dispatch<React.SetStateAction<boolean>>
  onWeekSelected: (selectedDays: string[]) => void
}

const WeeklyPicker: React.FC<WeeklyPickerProps> = ({ setIsOpenCalendar, setIsOpenActivity, onWeekSelected }) => {

  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const onWeekChange = (e: any) => {
    console.log(e.target.value)
    if (e.target.value) {
      setSelectedDays(e.target.value)
      setIsOpenCalendar(false)
      setIsOpenActivity(true)
      onWeekSelected(e.target.value)
    } else {
      setSelectedDays([])
      setIsOpenCalendar(false)
    }
  };
  const onCancel = () => setIsOpenCalendar(false)
  return (
    <>
      {/* <IonItem button detail detailIcon={caretForwardOutline} id="date-modal" color="primary" className="weakly-content">
        <IonIcon icon={calendar} slot="start" ></IonIcon>
        <IonLabel > Select days</IonLabel>
        <IonIcon icon={penCalendarcil} slot="end" ></IonIcon>

      </IonItem> */}
      <IonContent id="date-content">
        <IonDatetime
          value={selectedDays.length > 0 ? selectedDays : ''}
          presentation="date"
          showDefaultButtons
          multiple
          size="cover"
          onIonChange={onWeekChange}
          onIonCancel={onCancel}
        ></IonDatetime>
      </IonContent>
    </>
  );
};

export default WeeklyPicker;
