import { DragDropContext } from "@hello-pangea/dnd";

export default function DragDropContextProvider({ children, onDragEnd }) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {children}
    </DragDropContext>
  );
}