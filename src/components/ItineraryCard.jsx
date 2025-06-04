import { Draggable } from "@hello-pangea/dnd";
import {
  Star,
  EllipsisVertical,
  Paperclip,
  Trash2,
  Pencil,
  Equal,
  Dot,
  CircleEllipsis,
} from "lucide-react";

export default function ItineraryCard({ attraction, index }) {
  return (
    <Draggable key={attraction.id} draggableId={attraction.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white p-4 transition-all duration-200 ${
            snapshot.isDragging ? "shadow-2xl rotate-1" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Drag handle */}
            <div className="flex items-center justify-center h-full">
              <Equal size={16} className="text-gray-400" />
            </div>

            {/* Attraction image */}
            <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center mt-3">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 mt-4 relative">
              {/* Header with title and actions */}
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight m-0">
                  {attraction.title}
                </h3>

                <div className="flex gap-0.5 items-center">
                  <button className="bg-transparent hover:bg-gray-100 text-gray-500 rounded p-1">
                    <img
                      src="/pics/google-maps.png"
                      alt="pin"
                      className="w-4"
                    />
                  </button>

                  {/* For large screens only */}
                  <div className="hidden lg:flex gap-0.5">
                    <button className="bg-transparent hover:bg-gray-100 text-gray-500 rounded p-1">
                      <Paperclip size={16} className="text-gray-400" />
                    </button>
                    <button className="bg-transparent hover:bg-gray-100 text-gray-500 rounded p-1">
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>

                  {/* Mobile-only more button */}
                  <button className="lg:hidden bg-transparent hover:bg-gray-100 text-gray-500 rounded p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <span className="font-semibold text-sm text-gray-900">
                  {attraction.rating}
                </span>
                <Star
                  size={14}
                  fill="#FFD700"
                  color="#FFD700"
                  className="flex-shrink-0"
                />
                <span className="text-xs text-gray-500">
                  {attraction.reviews}
                </span>
              </div>

              {/* Description with edit button */}
              <div className="bg-slate-50 py-3 px-3 rounded-md flex items-start gap-3">
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {attraction.description}
                </p>
                <button className="text-gray-500 hover:bg-gray-100 rounded p-1 flex-shrink-0 mt-0.5">
                  <Pencil size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
