
# Itinerary Planner

A modern, interactive drag-and-drop itinerary planner built with React. Create and organize your travel plans with an intuitive interface that allows you to reorder attractions and destinations seamlessly.

## 🌟 Features

* **Drag & Drop Interface** : Easily reorder attractions in your itinerary
* **Interactive Cards** : Each attraction displays ratings, reviews, and descriptions
* **Responsive Design** : Works seamlessly across desktop and mobile devices
* **Real-time Updates** : Order changes are reflected immediately
* **Clean UI** : Modern, user-friendly interface with smooth animations

## 🚀 Quick Start

### Prerequisites

* Node.js (version 16 or higher)
* npm or yarn package manager

### Installation

1. **Clone the repository**
   <pre><div class="relative group/copy rounded-lg"><div class="sticky opacity-0 group-hover/copy:opacity-100 top-2 py-2 h-12 w-0 float-right"><div class="absolute right-0 h-8 px-2 items-center inline-flex"><button class="inline-flex
     items-center
     justify-center
     relative
     shrink-0
     can-focus
     select-none
     disabled:pointer-events-none
     disabled:opacity-50
     disabled:shadow-none
     disabled:drop-shadow-none text-text-300
             border-transparent
             transition
             font-styrene
             duration-300
             ease-[cubic-bezier(0.165,0.85,0.45,1)]
             hover:bg-bg-400
             aria-pressed:bg-bg-400
             aria-checked:bg-bg-400
             aria-expanded:bg-bg-300
             hover:text-text-100
             aria-pressed:text-text-100
             aria-checked:text-text-100
             aria-expanded:text-text-100 h-8 w-8 rounded-md active:scale-95 backdrop-blur-md" type="button" aria-label="Copy to clipboard" data-state="closed"><div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all opacity-100 scale-100"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="absolute top-0 left-0 transition-all opacity-0 scale-50"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg></div></button></div></div><div class="text-text-500 text-xs p-3.5 pb-0">bash</div><div class=""><pre class="code-block__code !my-0 !rounded-lg !text-sm !leading-relaxed"><code class="language-bash"><span><span class="token">git</span><span> clone </span><span class="token"><</span><span>your-repo-url</span><span class="token">></span><span>
   </span></span><span><span></span><span class="token">cd</span><span> itinerary-planner</span></span></code></pre></div></div></pre>
2. **Install dependencies**
   <pre><div class="relative group/copy rounded-lg"><div class="sticky opacity-0 group-hover/copy:opacity-100 top-2 py-2 h-12 w-0 float-right"><div class="absolute right-0 h-8 px-2 items-center inline-flex"><button class="inline-flex
     items-center
     justify-center
     relative
     shrink-0
     can-focus
     select-none
     disabled:pointer-events-none
     disabled:opacity-50
     disabled:shadow-none
     disabled:drop-shadow-none text-text-300
             border-transparent
             transition
             font-styrene
             duration-300
             ease-[cubic-bezier(0.165,0.85,0.45,1)]
             hover:bg-bg-400
             aria-pressed:bg-bg-400
             aria-checked:bg-bg-400
             aria-expanded:bg-bg-300
             hover:text-text-100
             aria-pressed:text-text-100
             aria-checked:text-text-100
             aria-expanded:text-text-100 h-8 w-8 rounded-md active:scale-95 backdrop-blur-md" type="button" aria-label="Copy to clipboard" data-state="closed"><div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all opacity-100 scale-100"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="absolute top-0 left-0 transition-all opacity-0 scale-50"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg></div></button></div></div><div class="text-text-500 text-xs p-3.5 pb-0">bash</div><div class=""><pre class="code-block__code !my-0 !rounded-lg !text-sm !leading-relaxed"><code class="language-bash"><span><span class="token">npm</span><span></span><span class="token">install</span></span></code></pre></div></div></pre>
3. **Start the development server**
   <pre><div class="relative group/copy rounded-lg"><div class="sticky opacity-0 group-hover/copy:opacity-100 top-2 py-2 h-12 w-0 float-right"><div class="absolute right-0 h-8 px-2 items-center inline-flex"><button class="inline-flex
     items-center
     justify-center
     relative
     shrink-0
     can-focus
     select-none
     disabled:pointer-events-none
     disabled:opacity-50
     disabled:shadow-none
     disabled:drop-shadow-none text-text-300
             border-transparent
             transition
             font-styrene
             duration-300
             ease-[cubic-bezier(0.165,0.85,0.45,1)]
             hover:bg-bg-400
             aria-pressed:bg-bg-400
             aria-checked:bg-bg-400
             aria-expanded:bg-bg-300
             hover:text-text-100
             aria-pressed:text-text-100
             aria-checked:text-text-100
             aria-expanded:text-text-100 h-8 w-8 rounded-md active:scale-95 backdrop-blur-md" type="button" aria-label="Copy to clipboard" data-state="closed"><div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all opacity-100 scale-100"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="absolute top-0 left-0 transition-all opacity-0 scale-50"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg></div></button></div></div><div class="text-text-500 text-xs p-3.5 pb-0">bash</div><div class=""><pre class="code-block__code !my-0 !rounded-lg !text-sm !leading-relaxed"><code class="language-bash"><span><span class="token">npm</span><span> start</span></span></code></pre></div></div></pre>
4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 📦 Available Scripts

* `npm start` - Runs the app in development mode
* `npm run dev` - Alternative command to start development server
* `npm run build` - Builds the app for production
* `npm test` - Launches the test runner
* `npm run eject` - Ejects from Create React App (use with caution)

## 🛠️ Built With

### Core Technologies

* **React 18.2.0** - Frontend framework
* **React DOM 18.2.0** - DOM rendering

### Key Libraries

* **@hello-pangea/dnd 16.3.0** - Modern drag-and-drop functionality
* **lucide-react 0.263.1** - Beautiful, customizable icons
* **tailwind-scrollbar-hide 4.0.0** - Enhanced scrollbar styling

### Development Tools

* **React Scripts 5.0.1** - Build tools and development server
* **TypeScript Support** - Type definitions for React components

## 📁 Project Structure

<pre><div class="relative group/copy rounded-lg"><div class="sticky opacity-0 group-hover/copy:opacity-100 top-2 py-2 h-12 w-0 float-right"><div class="absolute right-0 h-8 px-2 items-center inline-flex"><button class="inline-flex
  items-center
  justify-center
  relative
  shrink-0
  can-focus
  select-none
  disabled:pointer-events-none
  disabled:opacity-50
  disabled:shadow-none
  disabled:drop-shadow-none text-text-300
          border-transparent
          transition
          font-styrene
          duration-300
          ease-[cubic-bezier(0.165,0.85,0.45,1)]
          hover:bg-bg-400
          aria-pressed:bg-bg-400
          aria-checked:bg-bg-400
          aria-expanded:bg-bg-300
          hover:text-text-100
          aria-pressed:text-text-100
          aria-checked:text-text-100
          aria-expanded:text-text-100 h-8 w-8 rounded-md active:scale-95 backdrop-blur-md" type="button" aria-label="Copy to clipboard" data-state="closed"><div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all opacity-100 scale-100"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="absolute top-0 left-0 transition-all opacity-0 scale-50"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg></div></button></div></div><div class=""><pre class="code-block__code !my-0 !rounded-lg !text-sm !leading-relaxed"><code><span><span>src/
</span></span><span>├── components/
</span><span>│   ├── ItineraryPage.jsx        # Main container component
</span><span>│   ├── ItineraryList.jsx        # Droppable list wrapper
</span><span>│   ├── ItineraryCard.jsx        # Individual attraction card
</span><span>│   ├── Header.jsx               # App header component
</span><span>│   └── DragDropContextProvider.jsx # Drag & drop context
</span><span>├── data/
</span><span>│   └── mockItineraryData.js     # Sample data and configuration
</span><span>├── App.jsx                     # Root application component
</span><span>└── index.js                    # Application entry point</span></code></pre></div></div></pre>
