import { useState } from "react";
import Header from "./Header";
import ItineraryList from "./ItineraryList";
import DragDropContextProvider from "./DragDropContextProvider";
import MapView from "./MapView";
import { attractionsData, itineraryMetadata } from "../data/mockItineraryData";
import { AlignJustify } from "lucide-react";

export default function ItineraryPage() {
  const [attractions, setAttractions] = useState(attractionsData);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(attractions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index + 1,
    }));

    setAttractions(updatedItems);
  };

  return (
    <div className="relative h-screen">
      <div className="lg:hidden flex justify-between items-center p-4 bg-white shadow-md">
        <Header brandName={itineraryMetadata.brand} />
        <button className="text-3xl text-gray-700 focus:outline-none">
        <AlignJustify size={16}/>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] h-full lg:h-[calc(100%-0px)]">
        <div className="overflow-y-auto scroll-content p-4 bg-white font-sans">
          <div className="hidden lg:block">
        <Header brandName={itineraryMetadata.brand} />
      </div>

      <div className="flex items-center gap-3 mb-2 ml-4 lg:ml-12">
        <h1 className="text-2xl font-bold text-gray-800 m-0">
          {itineraryMetadata.title}
        </h1>
      </div>

      <div className="text-sm text-gray-500 mb-4 ml-4 lg:ml-12">
        {itineraryMetadata.subtitle}
      </div>

      <DragDropContextProvider onDragEnd={handleDragEnd}>
        <ItineraryList attractions={attractions} />
      </DragDropContextProvider>
    </div>

    {/* Right Side - MapView (hidden on mobile) */}
    <div className="hidden lg:block w-full h-full">
      <MapView />
    </div>
  </div>
</div>

  );
}
