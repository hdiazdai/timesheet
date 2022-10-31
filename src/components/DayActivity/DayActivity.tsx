
import { IonTextarea } from '@ionic/react'
import React from 'react'
import TimePicker from '../TimePicker/TimePicker'

type Props = {
  day: string
  startTime: string
  setStartTime: React.Dispatch<React.SetStateAction<string>>
  finishTime: string
  setFinishTime: React.Dispatch<React.SetStateAction<string>>
}

const DayActivity: React.FC<Props> = ({ day, startTime, finishTime, setFinishTime, setStartTime }) => {
  return (
    <>
      <TimePicker
        day={day}
        label={'Start Time'}
        setSelectedTime={setStartTime}
        selectedTime={startTime}
      />
      <TimePicker
        day={day}
        label={'Finish Time'}
        setSelectedTime={setFinishTime}
        selectedTime={finishTime}
      />
      <IonTextarea className="custom-textarea" placeholder="Type something here"></IonTextarea>
    </>
  )
}

export default DayActivity