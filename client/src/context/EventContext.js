import { createContext, useState } from "react";


export const EventContext = createContext();


const EventProvider = ({children}) => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);


    return <EventContext.Provider value = {{events, setEvents, showModal, setShowModal}}>
         {children}
    </EventContext.Provider>
} 


export default EventProvider;