import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonText,
} from "@ionic/react";
import './style.css'
import { calendar, caretForwardOutline, pencil } from 'ionicons/icons'
import { useRef } from "react";
interface WeeklyPickerProps {
  setSelectedDays: React.Dispatch<React.SetStateAction<never[]>>
  selectedDays: never[]
}

const WeeklyPicker: React.FC<WeeklyPickerProps> = ({ setSelectedDays, selectedDays }) => {
  const onWeekChange = (e: any) => {
    setSelectedDays(e.target.value ? e.target.value : [])

  };
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  const modal = useRef<HTMLIonModalElement>(null);

  const dismiss = () => {
    modal.current?.dismiss();
  }
  const cancel = () => {
    datetime.current?.cancel();
    dismiss()
  }
  const confirm = () => {
    datetime.current?.confirm();
    dismiss()
  }
  return (
    <>
      <IonItem button detail detailIcon={caretForwardOutline} id="date-modal" color="primary" className="weakly-content">
        <IonIcon icon={calendar} slot="start" ></IonIcon>
        <IonLabel > Select days</IonLabel>
        <IonIcon icon={pencil} slot="end" ></IonIcon>

      </IonItem>

      <IonModal id="example-modal" ref={modal} trigger="date-modal" mode="md">
        <IonContent id="date-content">
          <IonDatetime
            ref={datetime}
            value={selectedDays.length > 0 ? selectedDays : ''}
            presentation="date"
            multiple
            size="cover"
            onIonChange={onWeekChange}
          >
            <IonButtons slot="buttons">
              <IonButton color="primary" onClick={cancel}>Never mind</IonButton>
              <IonButton color="primary" id="newmodal" onClick={confirm}>All Set</IonButton>
            </IonButtons>
            <IonModal id="example-modal" ref={modal} trigger="newmodal" mode="md">

              <IonContent id="date-content">
                contetn
              </IonContent>
            </IonModal>

          </IonDatetime>

        </IonContent>
      </IonModal>



    </>
  );
};

export default WeeklyPicker;
