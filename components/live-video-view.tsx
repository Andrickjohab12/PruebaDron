"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Play, Pause, Maximize, Gauge, MapPin, Compass, Wind, Activity, Signal } from "lucide-react"

export function LiveVideoView() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div className="mx-auto max-w-[1800px] space-y-4 p-4 md:space-y-6 md:p-8">
      <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-white p-4 shadow-lg md:p-6">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Video en Vivo</h2>
        <p className="mt-2 text-sm text-muted-foreground">Transmisión en tiempo real desde el dron</p>
      </div>

      <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <Activity className="mx-auto h-12 w-12 animate-pulse text-blue-400 md:h-16 md:w-16" />
                  <p className="mt-4 font-mono text-base text-blue-300 md:text-lg">Video Feed: Esperando conexión...</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="gradient-blue shadow-lg hover:scale-105"
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4 md:h-5 md:w-5" />
                      ) : (
                        <Play className="h-4 w-4 md:h-5 md:w-5" />
                      )}
                    </Button>
                    <span className="rounded-lg bg-black/50 px-3 py-1.5 font-mono text-sm font-bold text-white backdrop-blur-sm md:px-4 md:py-2 md:text-lg">
                      00:00:00
                    </span>
                  </div>
                  <Button
                    size="lg"
                    onClick={handleFullscreen}
                    className="bg-white/90 text-foreground shadow-lg hover:scale-105 hover:bg-white"
                  >
                    <Maximize className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4 md:space-y-6">
          <Card className="border-0 bg-white p-4 shadow-xl md:p-6">
            <div className="mb-4 flex items-center gap-3 md:mb-6">
              <div className="rounded-xl bg-blue-100 p-3">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-foreground md:text-lg">Datos en Vivo</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-transparent p-3 md:p-4">
                <div className="flex items-center gap-3">
                  <Gauge className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />
                  <span className="text-sm font-semibold text-foreground md:text-base">Altitud</span>
                </div>
                <span className="font-mono text-lg font-bold text-blue-600 md:text-xl">0.00 m</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-transparent p-3 md:p-4">
                <div className="flex items-center gap-3">
                  <Gauge className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />
                  <span className="text-sm font-semibold text-foreground md:text-base">Velocidad</span>
                </div>
                <span className="font-mono text-lg font-bold text-blue-600 md:text-xl">0.00 m/s</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-transparent p-3 md:p-4">
                <div className="flex items-center gap-3">
                  <Compass className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />
                  <span className="text-sm font-semibold text-foreground md:text-base">Rumbo</span>
                </div>
                <span className="font-mono text-lg font-bold text-blue-600 md:text-xl">0.00°</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-transparent p-3 md:p-4">
                <div className="flex items-center gap-3">
                  <Wind className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />
                  <span className="text-sm font-semibold text-foreground md:text-base">Viento</span>
                </div>
                <span className="font-mono text-lg font-bold text-blue-600 md:text-xl">0.00 m/s</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-transparent p-3 md:p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />
                  <span className="text-sm font-semibold text-foreground md:text-base">Distancia</span>
                </div>
                <span className="font-mono text-lg font-bold text-blue-600 md:text-xl">0.00 m</span>
              </div>
            </div>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-blue-600 to-blue-700 p-4 shadow-xl md:p-6">
            <div className="mb-4 flex items-center gap-3 md:mb-6">
              <Signal className="h-6 w-6 text-white" />
              <h3 className="text-base font-bold text-white md:text-lg">Calidad de Video</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-white/10 p-2.5 backdrop-blur-sm md:p-3">
                <span className="text-sm font-semibold text-blue-100 md:text-base">Resolución</span>
                <span className="font-mono text-sm font-bold text-white md:text-base">1920x1080</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/10 p-2.5 backdrop-blur-sm md:p-3">
                <span className="text-sm font-semibold text-blue-100 md:text-base">FPS</span>
                <span className="font-mono text-sm font-bold text-white md:text-base">30</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/10 p-2.5 backdrop-blur-sm md:p-3">
                <span className="text-sm font-semibold text-blue-100 md:text-base">Bitrate</span>
                <span className="font-mono text-sm font-bold text-white md:text-base">0 Mbps</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/10 p-2.5 backdrop-blur-sm md:p-3">
                <span className="text-sm font-semibold text-blue-100 md:text-base">Latencia</span>
                <span className="font-mono text-sm font-bold text-white md:text-base">0 ms</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
