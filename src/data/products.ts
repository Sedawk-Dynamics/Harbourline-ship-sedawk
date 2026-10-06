import { IMG } from '../lib/images';

/** Product photography served from /public. */
const LOCAL = {
  automation:   '/automation.avif',
  auxEngine:    '/4-strokes.jpeg',
  mainEngine:   '/2-stokes.jpeg',
  radar:        '/sophisticated-radar-screen-illuminates-dimly-lit-ships-bridge-aiding-maritime-navigation-concept-maritime-technology-radar-navigation-ship39s-bridge-dim-lighting-navigation-aid_918839-77706.avif',
  shipMachine:  '/ship-machinary.jpg',
};

export type Product = {
  slug: string;
  title: string;
  short: string;          // shown on cards
  long: string[];         // shown on detail page
  highlights: string[];   // bullet list on detail page
  image: string;
  fallback: string[];
  /** Product page on the external catalogue site. */
  catalogUrl?: string;
};

export const CATALOG_URL = 'https://product.harbourlineshipmanagement.com/products/';

export const PRODUCTS: Product[] = [
  {
    slug: 'automation',
    catalogUrl: 'https://product.harbourlineshipmanagement.com/products/automation/',
    title: 'Automation',
    short:
      'Engine room automation, alarm and monitoring panels, PLC-driven control systems, remote stations and bridge integration units sourced from established marine brands and supported by our technical team.',
    long: [
      'Modern vessels run on automation — alarm and monitoring on the main engine, remote control from the bridge, integrated cargo and ballast systems, and engine room safety logic stitched together by PLCs and dedicated control panels. When a card or sensor fails in the middle of a voyage, the bottleneck is rarely the diagnosis but the availability of a matching replacement.',
      'Harbourline holds a curated automation stock built around the systems our clients actually run — ABB, Kongsberg, Nabtesco, Pleiger, Lyngso, NK and others — covering engine remote control modules, AMS panels, cargo monitoring PLCs and the smaller building blocks like I/O cards, relays and HMI panels. Each unit is bench-tested before dispatch and shipped with its configuration notes where available.',
      'For owners undertaking retrofits or upgrades, our technical team can advise on compatible replacements and source the right firmware revision rather than just the matching part number.',
    ],
    highlights: [
      'Engine alarm and monitoring systems (AMS)',
      'Bridge remote control and telegraph units',
      'PLC-based engine room automation',
      'Integrated cargo and ballast control',
      'Safety, shutdown and overspeed panels',
      'I/O cards, HMI panels and control PCBs',
    ],
    image: LOCAL.automation,
    fallback: [IMG.automation, IMG.pcb, IMG.fallbackNavigation],
  },
  {
    slug: 'auxiliary-engine-4-stroke',
    catalogUrl: 'https://product.harbourlineshipmanagement.com/products/auxiliary-engine-4-stroke/',
    title: 'Auxiliary Engine & Spares (4 Stroke)',
    short:
      'Tested 4-stroke auxiliary engine spares for Yanmar, Daihatsu, Wartsila, MAN and Caterpillar generator sets — keeping onboard power, hotel load and cargo handling running without interruption.',
    long: [
      'Auxiliary generator sets are the silent backbone of vessel operations — they keep navigation electronics live, cargo gear powered and accommodation comfortable through every leg of the voyage. A single auxiliary engine going offline can disrupt loading windows and force unscheduled bunker stops, so spare-part reliability matters as much as the part itself.',
      'Harbourline maintains a deep 4-stroke spares inventory for the engine families most commonly fitted across the merchant fleet — Yanmar, Daihatsu, Wartsila Vasa and Auxpac, MAN L/V series and Caterpillar 3500 and 3600 ranges. We supply new components alongside reconditioned units that carry full inspection reports.',
      'Where reconditioned parts are involved we share photographs, measurement records and clearance values with the buyer before invoicing — no surprises when the crate is opened onboard.',
    ],
    highlights: [
      'Cylinder heads, liners and pistons',
      'Fuel injection pumps, nozzles and valves',
      'Connecting rods, crankshafts and bearings',
      'Cooling water, lube oil and circulating pumps',
      'Governors, actuators and overspeed trips',
      'Turbocharger rotors, nozzle rings and bearings',
    ],
    image: LOCAL.auxEngine,
    fallback: [IMG.engineRoom, IMG.inspection, IMG.fallbackEngine],
  },
  {
    slug: 'main-engine-2-stroke',
    catalogUrl: 'https://product.harbourlineshipmanagement.com/products/main-engine-2-stroke/',
    title: 'Main Engine (2 Stroke)',
    short:
      'Genuine and reconditioned 2-stroke main engine spares for MAN B&W, Sulzer, Wartsila and Mitsubishi propulsion units — pistons, liners, cylinder covers, fuel pumps, turbocharger components and complete overhaul kits, every item inspected before dispatch.',
    long: [
      'The 2-stroke main engine is the prime mover of nearly every ocean-going commercial vessel — and its uptime decides whether your ship sails on schedule or sits idle. At Harbourline Ship Management we maintain a working inventory of new and carefully reconditioned 2-stroke main engine spares that lets owners and operators get critical parts moving the same day an enquiry lands with us.',
      'Our stock covers the major propulsion OEMs in service today — MAN B&W, Sulzer, Wartsila NSD and Mitsubishi — and we source through certified suppliers as well as the renowned ship recycling yards at Alang. Every component is cleaned, dimensionally checked and pressure or load tested where applicable, with photographs and condition notes shared with the buyer before packing.',
      'For chief engineers and superintendents this means one less variable in the planning of a port call: predictable parts, honest condition reporting and shipping documentation that clears customs without back-and-forth.',
    ],
    highlights: [
      'Cylinder covers, liners and cylinder heads',
      'Pistons, piston rod assemblies and ring sets',
      'Fuel pumps, plungers, barrels and fuel valves',
      'Turbocharger spares — ABB, MET, Napier, KBB',
      'Main bearings, crosshead bearings and guide shoes',
      'Complete overhaul kits with gaskets and seals',
    ],
    image: LOCAL.mainEngine,
    fallback: [IMG.twoStrokeEngine, IMG.fallbackEngine, IMG.shipRepair],
  },
  {
    slug: 'marine-radar-and-navigation-equipment',
    title: 'Marine Radar & Navigation Equipment',
    short:
      'Complete bridge packages — X-band and S-band radar systems, scanners, transceivers and magnetrons alongside gyrocompasses, autopilots, ECDIS, GPS, AIS, speed logs and echo sounders from Furuno, JRC, Sperry, Tokimec and Anschutz.',
    long: [
      'Bridge equipment is the difference between a confident watch and a tense one. Harbourline supplies the full bridge picture — from radar systems and their critical spares through to the primary and secondary navigation aids that watchkeepers depend on every hour at sea.',
      'On the radar side we hold X-band (3 cm) and S-band (10 cm) systems and the parts behind them: scanners and antennas, transceivers, magnetrons, PCBs, motor and gearbox assemblies, display units and bridge control panels — spanning Furuno FAR, JRC JMA, Kelvin Hughes SharpEye and Manta, and Simrad. On the navigation side we trade in gyrocompasses, autopilots, ECDIS units, GPS and AIS receivers, speed logs, echo sounders and integrated bridge consoles from the manufacturers most commonly approved by flag states and class societies.',
      'Every item leaves our store with a functional test record and, where applicable, the original manuals and accessories — so the onboard electrical officer can commission the unit without a workshop rebuild first. Where a complete unit is not in stock, we work through our supplier and recycling-yard network to locate the exact model and revision your bridge needs.',
    ],
    highlights: [
      'X-band and S-band radar systems, complete',
      'Scanners, antennas, transceivers and magnetrons',
      'Radar PCBs, processor cards and display units',
      'Gyrocompasses, autopilots and ECDIS units',
      'GPS, AIS and DGPS receivers',
      'Speed logs, echo sounders and GMDSS equipment',
    ],
    image: LOCAL.radar,
    fallback: [IMG.radarTower, IMG.navigation, IMG.fallbackNavigation],
  },
  {
    slug: 'ship-machinery',
    title: 'Ship Machinery',
    short:
      'Complete ship machinery solutions — pumps, purifiers, compressors, heat exchangers, steering gear, deck equipment and propulsion components, supplied new or reconditioned for all major marine brands.',
    long: [
      'Beyond the main and auxiliary engines sits the wider machinery that actually keeps a vessel working: the pumps moving ballast, bilge and fuel, the purifiers keeping oil clean, the compressors charging the starting air bottles, the heat exchangers holding temperatures in range and the deck equipment handling mooring and cargo. When any one of them fails, the vessel is not fully operational — regardless of how healthy the engines are.',
      'Harbourline supplies this full machinery spread, sourced through certified suppliers and the controlled dismantling operations at Alang. Our range covers centrifugal and positive-displacement pumps, Alfa Laval and Mitsubishi purifiers, marine air compressors and starters, fresh water generators, plate and shell-and-tube heat exchangers, steering gear, and deck machinery including winches, windlasses and capstans.',
      'Every machinery item is stripped, cleaned, measured and function-tested where the equipment allows, and we share the inspection record with the buyer before dispatch. For superintendents planning a docking or a scheduled replacement, that means the unit arriving on the quay is the unit described in the quotation.',
    ],
    highlights: [
      'Ballast, bilge, fuel and cooling water pumps',
      'Oil and fuel purifiers — Alfa Laval, Mitsubishi',
      'Marine air compressors and air starters',
      'Fresh water generators and heat exchangers',
      'Steering gear and hydraulic power packs',
      'Deck machinery — winches, windlasses, capstans',
    ],
    image: LOCAL.shipMachine,
    fallback: [IMG.shipMachine, IMG.shipRepair, IMG.fallbackEngine],
  },
];

export const findProduct = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);
