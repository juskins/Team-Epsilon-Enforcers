"use client"

import { useEffect, useRef, useState } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

interface Report {
   id: string
   title: string
   location: string
   lat: number
   lng: number
   type: "Alert" | "High Priority" | "Reported"
   description: string
   votes: number
   timestamp: string
   image: string
   status: "Critical" | "High" | "Normal"
   impact: string
}

const reports: Report[] = [
   {
      id: "1",
      title: "Ikorodu Road Overflow",
      location: "Ojota Interchange, Lagos",
      lat: 6.591,
      lng: 3.372,
      type: "Alert",
      description: "Large illegal dumping site near the main junction. Causing traffic and odor issues.",
      votes: 124,
      timestamp: "2 hours ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc8PObBlXfg7ALXQ7VQeF_1VMpSvJnULwKXQEeT7xNYP2jQ1wGksyV3reF5zNBb_OPFzn-7ELgCaigbykBFtS05d3pl9_BGRu_4IjP3VjE5Krrrw-gqOcvWrndHpEwl-pYSIbS4qXQqm6igt9kyRlG6gJb74M7nnHFxAIs5LNUcCd7U59JNCCkFHsMYcKKeLl3fdh2txsHzw3-IOmF3CNJX5DmgMKiXGyeFNT2TA3DnSxlsMZ_Y2bN-fEqv6EWwxELbjltCSjDj1k",
      status: "Critical",
      impact: "High (Traffic)"
   },
   {
      id: "2",
      title: "Lekki Phase 1 Drainage Block",
      location: "Lekki Phase 1, Lagos",
      lat: 6.444,
      lng: 3.473,
      type: "High Priority",
      description: "Plastic waste clogging primary drainage channels before the rainy season.",
      votes: 85,
      timestamp: "5 hours ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASnsmtPokFcy0d-iRYrVin8d_T1czXG98IN0RDB3AbJV2IVKKMhX-cKhXP9pAHPRW-htjKfBWLOGHGgd6fzmrkZ-8xU5sazck8vzpALxOd02JXVAT5UEPvnwLdMZ3sUsXq8ZV_cr9kUECWbGm9Y4o1ypk4d5GpiRw4DZGl7IUEkI-GJ0NCv8jdNVHVd7mNWj37NfGI1fGe-3M9qTP81c_gOiMTbTjCM9P1v97fr64SlxnSOpWPv1ZadWsW6cRhBfpGzF53NMCCunk",
      status: "High",
      impact: "Moderate"
   },
   {
      id: "3",
      title: "Victoria Island Bin Collection",
      location: "Adeola Odeku St, VI",
      lat: 6.427,
      lng: 3.424,
      type: "Reported",
      description: "Public bins haven't been emptied for 3 days on Adeola Odeku St.",
      votes: 32,
      timestamp: "Yesterday",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw59qnyie_wSPp9N_oUB8giHnXIQH3og220y-XfW-OoFKIEXjlD4I2p4OkuHGFzkW_Z2E_pshS34TCerH0cFhJe3T0nZ-HV89HZ-aMOIFFHfy8TbiXXNH1WqBh5vFlbpYu15r78FHbcPPNn3pSPKIH1NZ9HAfA5GGAFHqiER3daralPqUFbAo1TTfBMh9Iz4-pFmA_0qs1rv9WDzHcU4vVVcm39kJsbvjcT-0wLplzdefaPC7_UJW_VD-Ulok0HuP0mhU4lYSJis8",
      status: "Normal",
      impact: "Low"
   }
]

const mapStyles = {
   streets: "https://tiles.openfreemap.org/styles/liberty",
   bright: "https://tiles.openfreemap.org/styles/bright",
   dark: "https://tiles.openfreemap.org/styles/dark",
   satellite: {
      version: 8,
      sources: {
         "raster-tiles": {
            type: "raster",
            tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
            tileSize: 256,
            attribution: "Esri, Maxar, Earthstar Geographics, and the GIS User Community"
         }
      },
      layers: [
         {
            id: "simple-tiles",
            type: "raster",
            source: "raster-tiles",
            minzoom: 0,
            maxzoom: 22
         }
      ]
   }
}

export default function CommunityPage() {
   const mapContainer = useRef<HTMLDivElement>(null)
   const map = useRef<maplibregl.Map | null>(null)
   const [selectedReport, setSelectedReport] = useState<Report | null>(reports[0])
   const [currentStyle, setCurrentStyle] = useState<keyof typeof mapStyles>("streets")
   const [lng] = useState(3.3792)
   const [lat] = useState(6.5244)
   const [zoom] = useState(11)

   useEffect(() => {
      if (map.current) return
      if (!mapContainer.current) return

      const mapInstance = new maplibregl.Map({
         container: mapContainer.current,
         style: mapStyles[currentStyle] as any,
         center: [lng, lat],
         zoom: zoom,
         attributionControl: false
      })

      map.current = mapInstance

      mapInstance.addControl(new maplibregl.NavigationControl(), "bottom-right")

      const markers: maplibregl.Marker[] = []

      reports.forEach((report) => {
         const el = document.createElement("div")
         el.className = "marker-container"
         el.style.width = "48px"
         el.style.height = "48px"
         el.style.cursor = "pointer"

         // Determine icon path and ping
         let iconPath = "/assets/icons/location-pin.png"
         let hasPing = false

         if (report.type === "Alert") {
            iconPath = "/assets/icons/red_marker.png"
            hasPing = true
         } else if (report.type === "High Priority") {
            iconPath = "/assets/icons/orange_marker.png"
         }

         el.innerHTML = `
            <div class="relative flex items-center justify-center w-full h-full">
               ${hasPing ? '<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>' : ""}
               <img src="${iconPath}" class="relative z-10 w-full h-full object-contain filter drop-shadow-lg transform transition-transform hover:scale-110 duration-300 pointer-events-none" />
            </div>
         `

         const marker = new maplibregl.Marker({ element: el })
            .setLngLat([report.lng, report.lat])
            .addTo(mapInstance)

         el.addEventListener("click", () => {
            setSelectedReport(report)
            mapInstance.flyTo({
               center: [report.lng, report.lat],
               zoom: 14,
               essential: true
            })
         })

         markers.push(marker)
      })

      return () => {
         markers.forEach(m => m.remove())
         if (map.current) {
            map.current.remove()
            map.current = null
         }
      }
   }, [lng, lat, zoom])

   const [isSidebarOpen, setIsSidebarOpen] = useState(true)

   const switchStyle = (styleKey: keyof typeof mapStyles) => {
      setCurrentStyle(styleKey)
      if (map.current) {
         map.current.setStyle(mapStyles[styleKey] as any)
      }
   }

   const handleReportClick = (report: Report) => {
      setSelectedReport(report)
      map.current?.flyTo({
         center: [report.lng, report.lat],
         zoom: 14,
         essential: true
      })
      // Auto-close sidebar on mobile when a report is selected
      if (window.innerWidth < 1024) {
         setIsSidebarOpen(false)
      }
   }

   return (
      <div className="flex-1 flex overflow-hidden relative">
         {/* Mobile Sidebar Overlay */}
         {isSidebarOpen && (
            <div
               className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
               onClick={() => setIsSidebarOpen(false)}
            />
         )}

         {/* Community Sidebar */}
         <aside className={`absolute lg:relative w-80 max-w-[85vw] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-full z-50 transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:hidden lg:w-0 lg:border-none lg:-translate-x-full"
            }`}>
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between min-w-[320px]">
               <div>
                  <h2 className="text-lg font-bold font-outfit">Active Reports</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Showing top issues in your area</p>
               </div>
               <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors lg:hidden"
               >
                  <span className="material-icons-round">close</span>
               </button>
               <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="hidden lg:flex p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  title="Close Sidebar"
               >
                  <span className="material-icons-round text-xl">menu_open</span>
               </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar min-w-[320px]">
               {reports.map((report) => (
                  <div
                     key={report.id}
                     onClick={() => handleReportClick(report)}
                     className={`group p-4 rounded-xl border transition-all cursor-pointer ${selectedReport?.id === report.id
                        ? "bg-primary/5 border-primary/30"
                        : "bg-white dark:bg-slate-800/20 border-slate-100 dark:border-slate-800 hover:border-primary/30"
                        }`}
                  >
                     <div className="flex justify-between items-start mb-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${report.type === "Alert"
                           ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                           : report.type === "High Priority"
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                           }`}>
                           {report.type}
                        </span>
                        <div className={`flex items-center gap-1 ${report.votes > 100 ? "text-primary" : "text-slate-400"}`}>
                           <span className="material-icons-round text-sm">thumb_up</span>
                           <span className="text-sm font-bold">{report.votes}</span>
                        </div>
                     </div>
                     <h3 className={`font-semibold text-sm mb-1 group-hover:text-primary transition-colors ${selectedReport?.id === report.id ? "text-primary" : ""
                        }`}>
                        {report.title}
                     </h3>
                     <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{report.description}</p>
                     <div className="mt-3 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">{report.timestamp}</span>
                        <button className="text-[10px] font-bold text-primary hover:underline">VIEW DETAILS</button>
                     </div>
                  </div>
               ))}
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 min-w-[320px]">
               <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  <span className="material-icons-round text-sm">add_circle</span>
                  REPORT NEW WASTE
               </button>
            </div>
         </aside>

         {/* Map Section */}
         <section className="flex-1 relative overflow-hidden flex flex-col bg-slate-100 dark:bg-slate-900 transition-all">
            {/* Sidebar Toggle & Search */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-3">
               {!isSidebarOpen && (
                  <button
                     onClick={() => setIsSidebarOpen(true)}
                     className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 flex items-center justify-center"
                     title="Open Sidebar"
                  >
                     <span className="material-icons-round text-xl">menu</span>
                  </button>
               )}

               <div className="relative group hidden sm:block">
                  <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm group-focus-within:text-primary transition-colors">search</span>
                  <input
                     className="pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border-none rounded-xl shadow-lg text-sm w-72 focus:ring-2 focus:ring-primary transition-all outline-none"
                     placeholder="Search areas (e.g., Ikeja, Surulere)..."
                     type="text"
                  />
               </div>
            </div>

            <div className="absolute top-4 right-4 z-10 flex flex-col gap-3">
               {/* Style Switcher */}
               <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col p-1">
                  <button
                     onClick={() => switchStyle("streets")}
                     className={`p-2 rounded-xl transition-all flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 ${currentStyle === "streets" ? "bg-primary/10 text-primary" : "text-slate-500"}`}
                     title="Streets"
                  >
                     <span className="material-icons-round text-xl">map</span>
                  </button>
                  <button
                     onClick={() => switchStyle("satellite")}
                     className={`p-2 rounded-xl transition-all flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 ${currentStyle === "satellite" ? "bg-primary/10 text-primary" : "text-slate-500"}`}
                     title="Satellite"
                  >
                     <span className="material-icons-round text-xl">layers</span>
                  </button>
                  <button
                     onClick={() => switchStyle("dark")}
                     className={`p-2 rounded-xl transition-all flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 ${currentStyle === "dark" ? "bg-primary/10 text-primary" : "text-slate-500"}`}
                     title="Dark"
                  >
                     <span className="material-icons-round text-xl">dark_mode</span>
                  </button>
               </div>

               {/* Map Controls */}
               <div className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden p-1">
                  <button
                     onClick={() => map.current?.zoomIn()}
                     className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 transition-colors rounded-xl"
                  >
                     <span className="material-icons-round">add</span>
                  </button>
                  <div className="h-px bg-slate-100 dark:bg-slate-800 mx-1" />
                  <button
                     onClick={() => map.current?.zoomOut()}
                     className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 transition-colors rounded-xl"
                  >
                     <span className="material-icons-round">remove</span>
                  </button>
               </div>

               <button
                  onClick={() => {
                     if ("geolocation" in navigator) {
                        navigator.geolocation.getCurrentPosition(pos => {
                           map.current?.flyTo({ center: [pos.coords.longitude, pos.coords.latitude], zoom: 15 })
                        })
                     }
                  }}
                  className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:text-primary"
               >
                  <span className="material-icons-round">my_location</span>
               </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 overflow-x-auto max-w-[90vw] pb-2 sm:pb-0 scrollbar-hide">
               <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Community Alerts
               </button>
               <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Recent Reports
               </button>
               <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Resolved
               </button>
            </div>

            <div ref={mapContainer} className="flex-1 w-full h-full"></div>

            {/* Selected Report Card Overlay */}
            {selectedReport && (
               <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in slide-in-from-bottom-4 z-10 transition-all">
                  <div className="p-5">
                     <div className="flex justify-between items-start mb-4">
                        <div>
                           <h3 className="text-lg font-bold font-outfit">{selectedReport.title}</h3>
                           <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                              <span className="material-icons-round text-xs">location_on</span>
                              {selectedReport?.location}
                           </p>
                        </div>
                        <button
                           onClick={() => setSelectedReport(null)}
                           className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                           <span className="material-icons-round">close</span>
                        </button>
                     </div>

                     <div className="aspect-video rounded-xl bg-slate-100 dark:bg-slate-800 mb-4 overflow-hidden group border border-slate-200 dark:border-slate-700">
                        <img
                           alt={selectedReport.title}
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           src={selectedReport.image}
                        />
                     </div>

                     <div className="flex gap-4 mb-4">
                        <div className="flex-1 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800/50">
                           <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-tighter sm:tracking-normal">Status</span>
                           <span className={`flex items-center gap-1 font-bold text-sm ${selectedReport.status === "Critical" ? "text-red-600" : "text-emerald-600"
                              }`}>
                              <span className={`w-2 h-2 rounded-full ${selectedReport.status === "Critical" ? "bg-red-600" : "bg-emerald-600"
                                 }`}></span>
                              {selectedReport.status}
                           </span>
                        </div>
                        <div className="flex-1 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800/50">
                           <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-tighter sm:tracking-normal">Impact</span>
                           <span className="font-bold text-sm">{selectedReport.impact}</span>
                        </div>
                     </div>

                     <div className="flex items-center gap-3">
                        <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                           <span className="material-icons-round text-lg">thumb_up</span>
                           UPVOTE ISSUE ({selectedReport.votes})
                        </button>
                        <button className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors">
                           <span className="material-icons-round">share</span>
                        </button>
                     </div>
                  </div>

                  <div className="bg-primary/5 dark:bg-primary/10 p-3 px-5 flex items-center gap-2 border-t border-primary/10">
                     <div className="flex -space-x-2">
                        <img alt="User" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN2QR0UPnSBZ7NYj0VP_4bTmr_cKQyEdOLnm_AfB7fiq-9I2PnMRxoYorbGbqlIeRiYRzyCmITcyvqTTL_95gjLchn0GRo4_KW636qzhPjZAx-lKwvLGyQc4jaM4GhURnQhQUEr1iN5uvVm_ZMuzEzQXs8ZWSSRq26geZ1Ij6J8T6Uu2DCzP6F1lKV238BjZtNndy3GXGvDtPo4ISR4s_IHbmaEPU-u-nbyfi1SdCHiPsLGqnR7LerA3BQxIijXJAu3QzhxyT49rU" />
                        <img alt="User" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS-8PQMIut_7HrbzPIc0dXBbx_p_bQulFBo8PdW8QLHwgPPE3uAkbEERH7FGwpsqHA25XldZSVrJ3uhcLIFabtlLfRRiighmijzz9lZAv3DL5Zqft3bS-TaUEDuEZk9ig1skPQRholWxJ5YPmmJpBxKw4V3Z6ATUlHYSp3hyjZnrJW2Ufrx9fcLJOqbvMTsY_VOFe_Y2Nx--0i57WzWI2aKAUZ1qdzyq3xy2sgIdyphbBkMs719QFUk3QxdAg4IBNHG9CmufcfzsY" />
                        <img alt="User" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV7vQPVQHGkqHn3AxU0NhEiJCAntSAnyee6s0MerqFb_Zwc6H3AJ5NKGdXlX8tCVzGEY7TThtIe2rladSPDB6v0jjITk8LQqxyWmBod8KnzLeuRm-oBajR0iGTPVFo_PR7OYlGkSF3tbzOjkDg6pxgcT9Id_OvTDGRazamjyRgLMKtP0skGcRgp5d8Jj1MSqdth_fmBksV0j_D1wjI0HGr-T6bOWV8N-Z6SIz9uARLZauMblT8lwKt_uzF4yZ-Z75nO_J1u50deCs" />
                     </div>
                     <p className="text-[10px] text-primary font-medium">+121 community members prioritized this</p>
                  </div>
               </div>
            )
            }
         </section >
      </div >
   )
}
