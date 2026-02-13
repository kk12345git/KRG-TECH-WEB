import React, { useEffect } from 'react';
import { ViewColumnsIcon, CubeIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

export function Product3DViewer({ modelUrl, posterUrl, name }) {
    useEffect(() => {
        // Load model-viewer only on client side to avoid build-time node environment issues
        import('@google/model-viewer').catch(err => console.error("Failed to load 3D engine", err));
    }, []);
    // Generic medical gown model for demonstration if none provided
    const demoModel = "https://modelviewer.dev/shared-assets/models/Astronaut.glb"; // Fallback demo
    const finalModel = modelUrl || demoModel;

    return (
        <div className="relative w-full aspect-square bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden group">
            {/* 3D Model Viewer */}
            <model-viewer
                src={finalModel}
                poster={posterUrl}
                alt={`3D Model of ${name}`}
                shadow-intensity="1"
                camera-controls
                auto-rotate
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-orbit="45deg 55deg 2.5m"
                field-of-view="30deg"
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                className="cursor-grab active:cursor-grabbing"
            >
                <div slot="poster" className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50">
                    <CubeIcon className="w-16 h-16 text-slate-200 animate-pulse mb-4" />
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Initializing 3D Engine...</p>
                </div>

                {/* Custom Controls Overlay */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-none">
                    <div className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 flex items-center gap-2 pointer-events-auto">
                        <ViewColumnsIcon className="w-4 h-4 text-medical-700" />
                        <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest leading-none">360° Inspection</span>
                    </div>
                    <button
                        slot="ar-button"
                        className="px-6 py-2 bg-medical-700 text-white rounded-full shadow-xl shadow-medical-700/20 text-[9px] font-black uppercase tracking-[0.2em] pointer-events-auto hover:bg-medical-800 transition-all"
                    >
                        Launch AR
                    </button>
                </div>

                {/* Info Pointers (Hotspots) - Simulated */}
                <button
                    className="w-4 h-4 bg-medical-500 rounded-full border-2 border-white shadow-lg cursor-pointer"
                    slot="hotspot-visor"
                    data-position="0.2m 1.5m 0.2m"
                    data-normal="0.2m 0m 1m"
                >
                    <div className="hidden group-hover:block absolute left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-xl shadow-xl w-48 border border-slate-100">
                        <p className="text-[9px] font-black text-medical-700 uppercase mb-1">Reinforced Zone</p>
                        <p className="text-[10px] text-slate-500 font-medium leading-tight">High-absorbency SMS material with specialized barrier coating.</p>
                    </div>
                </button>
            </model-viewer>

            {/* Feature Badges */}
            <div className="absolute top-8 left-8 flex flex-col gap-2">
                <div className="bg-medical-700 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">AAMI Level 4</div>
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-slate-500 border border-white/50 shadow-sm">True-Scale 1:1</div>
            </div>

            <div className="absolute top-8 right-8">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400">
                    <CubeIcon className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}
