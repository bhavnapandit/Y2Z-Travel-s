import { Droppable } from "@hello-pangea/dnd";
import ItineraryCard from "./ItineraryCard";

export default function ItineraryList({ attractions }) {
  return (
    <Droppable droppableId="attractions">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="flex flex-col gap-3"
        >
          {attractions.map((attraction, index) => (
            <ItineraryCard
              key={attraction.id}
              attraction={attraction}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
