window.DEEP_DIVES = {
  "getting-started": [
    {
      title: "A short history of model flight",
      paragraphs: [
        "Model aircraft developed alongside the science of flight. Before powered, piloted aircraft became practical, experimenters used kites, gliders, rubber-powered models and tethered demonstrations to study lift and stability. Later, small internal-combustion engines and mechanical control systems enabled longer powered flights. Reliable miniature radio equipment then let a pilot steer from the ground.",
        "Modern aeromodelling includes free-flight, control-line, radio-control, indoor duration, slope soaring, scale, aerobatic, electric, turbine and multirotor disciplines. Each branch emphasizes a different balance of endurance, precision, realism, maneuverability, payload or engineering innovation. Learning the history is useful because today's designs still solve familiar problems: reduce mass, create enough lift, control the aircraft and make the structure reliable."
      ]
    },
    {
      title: "How to choose the first aircraft",
      paragraphs: [
        "A good first aircraft is not defined by a single wingspan or motor rating. Look for a manufacturer-supported trainer with a published center-of-gravity range, recommended control throws, a well-documented power system and replacement parts. A high-wing trainer with a stable, conventional tail and a protected propeller is often easier to inspect and repair than a fast, low-wing aerobatic design.",
        "A glider is a useful first project when there is open space and experienced help. A small indoor model belongs in a large, calm indoor venue, not a crowded outdoor park. A multirotor teaches a different skill set from fixed-wing flight. Before buying, ask a local instructor whether the aircraft is appropriate for the field, pilot, climate, rules and available support."
      ],
      bullets: ["Prefer proven plans and known CG/control settings over speculative design claims.", "Check replacement airframe parts, propellers, batteries and receiver compatibility.", "Ask how the aircraft launches, lands and behaves when power is reduced."]
    },
    {
      title: "What the first equipment list really means",
      paragraphs: [
        "The complete system may include the airframe, transmitter, compatible receiver, servos, motor, electronic speed controller (ESC), battery, charger, propeller, connectors and mounting hardware. A ready-to-fly label does not mean a model needs no inspection. A bind-and-fly model still needs a compatible transmitter, correct model setup and a verified radio link; an almost-ready-to-fly kit may need assembly, adhesive and tools.",
        "Avoid purchasing a charger based only on connector shape. Confirm battery chemistry, cell count, balance lead, charging current limits and the charger maker's instructions. The battery, ESC, motor and propeller must be compatible as a set. Keep a written inventory so missing connectors, adapters or safe charging equipment are discovered before field day."
      ]
    },
    {
      title: "Set goals, keep a log and learn from tests",
      paragraphs: [
        "Write a simple project brief: what the model should do, where it will be operated, how it will be launched, what payload it carries and how success will be measured. Examples of measurable goals include achieving a specified glide distance in still air or completing a supervised circuit with stable approaches. Avoid a goal such as 'fly perfectly'; it cannot guide a design decision.",
        "Log the aircraft's ready-to-fly mass, CG location, battery identity, control throws, transmitter model, propeller, weather, flight duration and observed trim. Date every change. If a model pitches up after a battery move, a record of the old and new CG is more useful than changing elevator trim without diagnosis. A repeatable build-test-review cycle turns mistakes into engineering evidence."
      ]
    },
    {
      title: "Aeromodelling in India: clubs and pathways",
      paragraphs: [
        "In India, aeromodelling activity takes place through local clubs, schools, university teams, workshops and organized competitions. A club can help beginners with model selection, field etiquette, radio setup, first flights and current rules. University teams may work on fixed-wing design, propulsion, payload delivery, fabrication and design reports; competition formats are set by the current organizer.",
        "Examples listed in the original course and project context include Aerodash, ProjectX at IIT Mandi, SAE Aero Design, Boeing National Aeromodelling, IIT Bombay Techfest and IIT Madras Shaastra. These names are not a guarantee that an event is running now or that its rules remain unchanged. Confirm dates, eligibility, organizer details and scoring through the official current event announcement."
      ],
      callout: { label: "Your first action", text: "Find a local, authorized flying site and ask an experienced pilot to review your aircraft before the first powered test." }
    }
  ],
  aerodynamics: [
    {
      title: "The lift equation and what each variable changes",
      paragraphs: [
        "A useful engineering relationship is L = 1/2 rho V^2 S CL. Lift L depends on air density rho, speed V squared, reference wing area S and lift coefficient CL. The coefficient changes with angle of attack, airfoil shape, Reynolds number and surface condition. Doubling speed while holding other quantities fixed increases dynamic pressure by a factor of four, not two.",
        "In steady, level flight, lift must approximately equal aircraft weight. If mass increases and wing area stays fixed, the aircraft must fly faster, operate at a higher lift coefficient, or both. The equation is not a pilot's direct command law: CL cannot increase without limit, and the actual lift curve changes near stall. For model-scale design, use data appropriate to the model's size and flight regime."
      ],
      formula: "L = 0.5 x rho x V^2 x S x CL"
    },
    {
      title: "Airfoil geometry, NACA notation and section data",
      paragraphs: [
        "An airfoil is commonly described by its leading edge, trailing edge, chord, camber line and thickness distribution. Thickness ratio is maximum thickness divided by chord; mean camber describes the curvature of the mean line. A four-digit NACA designation conventionally encodes maximum camber, its chordwise position and maximum thickness as percentages, but this notation describes a family geometry—not a complete performance guarantee.",
        "An airfoil polar plots lift coefficient and drag coefficient against angle of attack or another condition. Read the Reynolds number, turbulence assumptions and surface condition before applying the curves. Model wings may have rough seams, exposed spars, hinges and propeller wash that make real performance differ from a clean two-dimensional analysis. The supplied S1223 drawing is a profile illustration; its coordinates alone do not prove stall speed, efficiency or suitability."
      ]
    },
    {
      title: "Boundary layers, laminar flow and separation",
      paragraphs: [
        "The boundary layer is the thin region next to a surface where viscosity strongly influences air speed. A laminar boundary layer has orderly layers but may be sensitive to disturbance; a turbulent layer mixes more strongly and can resist an adverse pressure gradient longer, while generally creating more skin-friction drag. Transition depends on Reynolds number, surface roughness, vibration and pressure distribution.",
        "When pressure rises in the direction of flow, the near-surface air loses momentum. If the boundary layer can no longer follow the surface, it separates and the airfoil's lift and drag can change sharply. Turbulators and vortex generators intentionally alter local flow; they can help in a particular design condition but may increase drag elsewhere. They are not universal upgrades and should be tested against relevant data."
      ]
    },
    {
      title: "Finite wings, induced drag and lift distribution",
      paragraphs: [
        "A real wing has finite span. Pressure differences near the tip create a three-dimensional flow field and trailing vortices, contributing to induced drag. At a fixed lift requirement, induced drag generally grows as aspect ratio is reduced and as lift coefficient increases. That is one reason high-aspect-ratio gliders can be efficient, although they need structure to resist greater bending loads.",
        "The idealized elliptical lift distribution is a useful reference, not a build instruction. Taper, twist, airfoil choice, fuselage interference and control surfaces alter the spanwise loading. Winglets and fences change local flow but add wetted area and structural loads. Evaluate the whole configuration, including weight, stall progression, stiffness, field size and the model's operating Reynolds number."
      ]
    },
    {
      title: "Stalls, turns and load factor",
      paragraphs: [
        "The wing stalls when its critical angle of attack is exceeded. In a coordinated level turn, the aircraft must produce more lift than its weight to support the increased load factor; the stall speed therefore rises with load factor. A steeply banked turn made at low speed can reach the critical AoA even though the aircraft was not slow in straight flight.",
        "A tip stall is especially disruptive because a wing drop can produce a rapid roll while control authority is reduced. Washout, a suitable planform and correct CG may influence stall progression, but pilot technique and design details still matter. Learn stall recognition and recovery only with a qualified instructor, at a safe height, using an aircraft approved for that training."
      ],
      formula: "Turn stall speed (idealized) = straight stall speed x sqrt(load factor)"
    },
    {
      title: "Ground effect and local operating conditions",
      paragraphs: [
        "Near the ground, a finite wing's downwash and induced-flow pattern change, often reducing induced drag and changing handling during takeoff or landing. Ground effect does not eliminate the need for a safe approach speed or correct alignment. A model that floats along the runway can still stall or veer into obstacles if the pilot responds abruptly.",
        "Wind gradient, turbulence, gusts, temperature and air density change what a pilot experiences. Wind speed can be significantly different close to the surface than at the model's flight height. Hot conditions reduce air density and can increase battery and electronics temperature; cold conditions can reduce LiPo performance. Use field observations, local rules and manufacturer limits rather than a generic 'safe wind speed' from an unrelated aircraft."
      ]
    }
  ],
  "aircraft-design": [
    {
      title: "Turn the mission into a design specification",
      paragraphs: [
        "Separate requirements from preferences. A requirement is measurable and verifiable—for example, fit within a transport box, carry a defined payload, use an available battery, operate from a particular runway, or comply with a current competition limit. Preferences such as appearance, easy repair and low cost matter, but should not contradict safety-critical requirements.",
        "Make a constraint table with the requirement, target, tolerance, verification method, owner and source. Identify the highest-risk unknowns early: payload mass, motor current, structural attachment loads, available runway or a new control layout. A concept sketch is not yet a design. Compare at least two layouts and document why the chosen one best satisfies the mission."
      ]
    },
    {
      title: "Weight budget and center-of-gravity arithmetic",
      paragraphs: [
        "Create a mass budget for wing, fuselage, tail, covering, motor, ESC, propeller, battery, receiver, servos, linkages, wires, fasteners, payload and finish. Estimate each item, then replace estimates with actual measured masses as parts become available. Maintain a reserve: if the model exceeds target mass, a designer needs to revisit the mission or structure before the battery is installed.",
        "For components on a common longitudinal datum, CG location xCG = sum(mi xi) / sum(mi), where mi is component mass and xi is its signed distance from the datum. Example: a 200 g component at 100 mm and a 100 g component at 400 mm have a combined CG at (200x100 + 100x400)/300 = 200 mm. The coordinate arithmetic does not set the safe CG range; use the validated aircraft design and confirm the complete model physically."
      ],
      formula: "xCG = sum(mi x xi) / sum(mi)"
    },
    {
      title: "Wing area, aspect ratio, taper and planform",
      paragraphs: [
        "For a rectangular wing, S = b c. For a simple trapezoid, S = b(cr + ct)/2, where b is span and cr/ct are root and tip chord. Aspect ratio AR = b^2/S. A larger span can reduce induced drag at a given lift, but it raises bending loads, transport size and sensitivity to structural stiffness. A smaller chord can lower Reynolds number and change low-speed behavior.",
        "Taper ratio is tip chord divided by root chord. Sweep, dihedral, polyhedral and wing twist affect stability, packaging, structure and stall progression. A first-order planform should be checked against target mass, expected speed, airfoil data and spar depth. Do not copy a proportion from a full-size aircraft without considering model-scale Reynolds number and the different construction."
      ]
    },
    {
      title: "Select an airfoil for the operating range",
      paragraphs: [
        "Set the model's expected chord and airspeed before comparing airfoils; these determine the Reynolds-number range. Compare lift, drag and pitching-moment behavior at more than one Reynolds number and angle of attack. Also account for construction: a thin section may be aerodynamically attractive yet difficult to build stiffly, while a thicker section can provide spar depth and a practical structure.",
        "A high-lift section may suit a slow mission but can have more drag at cruise. A symmetrical section can be appropriate for some aerobatic models but is not automatically the best trainer airfoil. The S1223 profile image in this workspace supplies shape only. Do not infer its model performance from the image; consult measured or analyzed data and an experienced designer."
      ]
    },
    {
      title: "Tail volume, neutral point and static margin",
      paragraphs: [
        "Tail size must be considered together with its moment arm. A common horizontal-tail volume coefficient is VH = Sh lh / (S cbar), with horizontal-tail area Sh, tail moment arm lh, wing area S and mean aerodynamic chord cbar. A vertical-tail volume coefficient uses vertical-tail area, vertical moment arm, wing area and span. Such ratios help compare layouts but are not universal safe values.",
        "The neutral point is a reference CG location for longitudinal stability. Static margin is often expressed as (xNP - xCG)/cbar using a consistent sign convention. A positive margin generally indicates static longitudinal stability for a conventional configuration; excessive margin can make the aircraft nose-heavy and reduce elevator authority. Canards, tailless aircraft, tandem wings and three-surface layouts need configuration-specific analysis rather than conventional tail rules."
      ],
      formula: "VH = Sh x lh / (S x cbar)"
    },
    {
      title: "Design control surfaces and linkages",
      paragraphs: [
        "Control-surface authority depends on area, spanwise location, hinge geometry, deflection, airspeed, servo torque and linkage stiffness. Ailerons command roll but also create yaw through drag differences. Differential travel can reduce adverse yaw. Elevators or elevons command pitch; rudder commands yaw and can support coordinated turns. Mixes must be matched to the airframe and checked for correct direction and travel.",
        "Oversized surfaces can create sensitive response and high hinge loads; undersized surfaces can lack authority, especially at low speed. The control horn position and servo arm radius determine mechanical advantage and travel. Use the aircraft plan's throws, measure at the specified location, and secure hinges against pullout. Avoid using transmitter endpoints to conceal a binding linkage or weak structure."
      ]
    },
    {
      title: "Wing structure and load paths",
      paragraphs: [
        "Wing lift bends the spar; drag, torsion, motor forces and control-surface loads introduce additional stresses. A spar cap carries tension/compression, while a web maintains separation and transfers shear. Shear webs, ribs, skins and joiners must form a continuous load path into the fuselage. A stressed skin contributes structurally only when its material, bonding and geometry are designed to do so.",
        "Landing gear, motor mounts and payload attachments concentrate loads into small areas. Reinforcement should spread those loads into adequate surrounding structure rather than create a hard point beside a weak joint. Weight reduction should target unnecessary mass without removing critical support. If loads are uncertain, use a proven design or qualified structural review and test incrementally."
      ]
    },
    {
      title: "Fuselage, landing gear and propulsion integration",
      paragraphs: [
        "Place the battery, receiver, ESC and servos so that the CG can be achieved without ballast and the components remain accessible. Plan cooling airflow, antenna location, wire strain relief and battery restraint before closing the fuselage. A motor mount must carry thrust and vibration without loosening; thrust-line angles are design choices, not universal corrections.",
        "Tricycle and tailwheel gear layouts affect ground handling, nose-over risk, takeoff rotation and attachment loads. Retracts add mass and complexity. Float or hull designs add drag, water loads, sealing and center-of-buoyancy considerations. Cowls and ducts affect cooling as well as drag. Check the complete ground and flight configuration, including propeller clearance and access for maintenance."
      ]
    },
    {
      title: "Performance estimates and design iteration",
      paragraphs: [
        "Estimate stall speed using Vs = sqrt(2W/(rho S CLmax)) and remember W is force in newtons. Estimate drag only with appropriate coefficients and conditions. Propeller selection must account for motor KV, cell count, current, pitch speed, diameter, ground clearance and intended flight speed. Manufacturer test data and a wattmeter are more reliable than a generic watts-per-kilogram slogan.",
        "Run sensitivity checks: how does the design change if mass is 10% higher, the battery is heavier, the air density is lower or the payload shifts? Mark assumptions explicitly. A prototype test is an experiment with a purpose, a safe configuration and a measurable pass/fail criterion. Keep a flight-test card and change one primary variable at a time."
      ]
    },
    {
      title: "Specialized configurations from the design reference",
      paragraphs: [
        "The RC design reference extends beyond conventional trainers: aerobatic models, high-lift and flap designs, landing gear, ducted cowls, propeller selection, canards, tandem and three-surface aircraft, tailless wings, floatplanes and basic aircraft proportions. Each configuration changes the distribution of lift, pitching moments, structure and control interactions.",
        "For aerobatics, design for maneuver loads, adequate control authority and secure mass retention. For flaps, account for hinge moment, servo load, trim and increased drag. For a canard or tandem wing, both lifting surfaces interact through downwash and must be balanced as a system. For tailless aircraft, airfoil reflex, CG and elevon setup are central. These are advanced design studies—not plug-in modifications to an unrelated airframe."
      ]
    },
    {
      title: "Three useful conceptual examples",
      paragraphs: [
        "Trainer concept: prioritize predictable pitch behavior, moderate loading, robust landing gear, a well-documented CG range and repairable construction. Glider concept: prioritize low structural mass, sufficient span and stiffness, efficient cruise trim and a safe landing strategy. Sport concept: define target maneuver loads, control response and power before choosing a more responsive airfoil and structure.",
        "These examples are design directions, not build plans. Exact dimensions, airfoil, spar, motor and CG must be calculated or taken from a validated plan for the intended scale and materials. A designer should use measured component masses and inspect the completed model before flight."
      ]
    }
  ],
  "aircraft-types": [
    {
      title: "Gliders and sailplanes: energy management",
      paragraphs: [
        "A glider converts height into forward distance while losing energy to drag. Glide ratio is horizontal distance divided by height lost in still air; a 10:1 ratio ideally corresponds to roughly ten units forward for one unit down in the stated condition. Wind changes ground distance, and sink rate changes how long a glider can remain aloft.",
        "Hand-launch gliders, thermal sailplanes and slope-soaring models have different launch methods and structures. High-aspect-ratio wings can be efficient but require bending stiffness. A glider needs an appropriate CG and pitch trim; using elevator to hold an inefficient attitude can increase drag. Thermal and slope flight require airspace awareness and suitable terrain."
      ]
    },
    {
      title: "Trainer, sport and aerobatic aircraft",
      paragraphs: [
        "A trainer typically uses predictable stability, moderate control response and forgiving flight speed so that a student has time to recognize and correct errors. High-wing placement can contribute to a restoring roll tendency in some configurations, but wing position alone does not make an aircraft stable. CG, dihedral, tail volume, airfoil and control setup all matter.",
        "Sport and aerobatic aircraft prioritize maneuverability and may use larger surfaces, stronger structures and higher power. A 3D model may fly at very high angles of attack and requires a specialized design and pilot skill. Do not begin with these aircraft simply because they have more power; a fast or highly responsive model can exceed a beginner's reaction time and field space."
      ]
    },
    {
      title: "Scale models and judging considerations",
      paragraphs: [
        "A scale model reproduces the appearance or proportions of a full-size aircraft. Scale landing gear, fuselage, canopy, cockpit and surface details can add mass and drag or constrain battery access. A full-size aircraft's airfoil and proportions do not automatically scale to low Reynolds number; an RC version may need a different structure and control setup to fly safely.",
        "Scale competition classes can judge static appearance, documentation, flight performance or some combination, according to the current rules. Keep a traceable reference set for colors, markings and geometry. Event-specific scoring varies: consult the current governing class rules rather than relying on an old summary."
      ]
    },
    {
      title: "Flying wings, canards and tailless layouts",
      paragraphs: [
        "A flying wing removes the conventional tail, so the wing must provide lift, longitudinal stability and control. Reflex airfoils or upward elevon trim can contribute to pitching-moment balance. CG range is often narrow; move it only within validated limits. Elevon mixing combines pitch and roll commands, and both directions must be checked on the ground.",
        "A canard places a lifting surface ahead of the main wing. It introduces aerodynamic interaction, sequencing and CG constraints. Tandem and three-surface designs distribute lift among multiple surfaces. These layouts can work well when designed as a system but are not simplified versions of a conventional trainer. Use tested plans or aerodynamic review."
      ]
    },
    {
      title: "Multirotors and helicopters",
      paragraphs: [
        "A multirotor controller changes motor thrust to control pitch, roll and yaw. Before flight, verify frame orientation, motor numbering and rotation, propeller orientation, sensor calibration, receiver mapping, arming behavior and failsafe. Remove propellers for firmware setup and motor-order checks. A flight controller may stabilize attitude but cannot detect every mechanical or configuration fault.",
        "A helicopter's rotor disc produces lift and control through collective/cyclic mechanisms; many designs also use a tail rotor for yaw control. Rotor-head geometry, blade tracking, pitch curves, vibration and mechanical setup make this discipline demanding. Follow the exact model manual, use suitable restraint and seek a qualified helicopter mentor before powered operation."
      ]
    },
    {
      title: "EDF jets, turbine models and high-speed aircraft",
      paragraphs: [
        "An electric ducted fan accelerates air through a fan and duct. Fan diameter, motor, ESC, battery, inlet area, exhaust area and airframe drag interact; installation losses can make bench expectations misleading. EDF models often need higher airspeed and more runway than a trainer and may be less forgiving during landing.",
        "Turbine models add heat, fuel handling, pressurized systems, high noise, specialized maintenance and strict site procedures. Large-scale aircraft increase structural and kinetic-energy consequences. Use the manufacturer procedures, trained support crew and approved site; do not treat a generic model-aircraft lesson as turbine qualification."
      ]
    },
    {
      title: "Indoor, park, slope and water aircraft",
      paragraphs: [
        "Indoor models use very low mass and power so they can operate in calm, large venues. Outdoor park flyers still require legal airspace, separation and permission; a small aircraft is not automatically exempt from rules. Slope gliders depend on suitable terrain and wind direction, and the landing area can be constrained.",
        "Water models need float/hull volume, lateral stability on water, secure attachment, water-resistant electronics protection and a recovery plan. Water ingress can damage batteries and electronics after a landing. Test in suitable shallow conditions with a safety observer and retrieval method; never fly over people or beyond a safe recovery area."
      ]
    },
    {
      title: "Compare aircraft with a mission matrix",
      paragraphs: [
        "Before selecting a type, compare pilot experience, operating site, launch/recovery method, weather, transport, noise, repair skills, radio needs, battery costs and legal constraints. Score each option against the same mission criteria rather than comparing a glider's endurance with a jet's top speed as if they were the same objective.",
        "A useful beginner decision often favors a proven trainer or simple glider supported by a local instructor. For a competition, choose the category first and aircraft second. For a scratch build, validate the design concept in a low-risk prototype before investing in a complex finish or expensive propulsion."
      ]
    }
  ],
  materials: [
    {
      title: "Wood selection and grain direction",
      paragraphs: [
        "Balsa is available in different densities and stiffnesses. Light stock is useful for lightly loaded structure; denser stock may suit spars, mounts or highly loaded fittings where appropriate. Grain direction determines how a strip resists bending and splitting. Orient members according to the drawing and inspect each piece for cracks, runout and soft spots.",
        "Plywood offers useful strength in thin sheets around firewalls, servo trays and landing-gear plates. Spruce or basswood can serve as stiffer longerons or spars but may add mass. Sanding should preserve the intended section rather than reduce a spar below its design dimensions. Weigh parts as you select them so a light build stays within the mass budget."
      ]
    },
    {
      title: "Foams: compare properties, not names",
      paragraphs: [
        "Expanded polystyrene (EPS), extruded polystyrene (XPS), EPP, EPO, Depron and foam-board products differ in density, resilience, surface finish and response to heat and solvents. A foam that survives impact may still deform under load or heat. Paper-faced foam board can be stiff as a panel but vulnerable to moisture and edge damage.",
        "Make small test joints with the exact foam, adhesive and covering you intend to use. Check whether a solvent attacks the surface, whether hot glue shrinks or dents a thin sheet, and whether the covering iron temperature is safe. Design spars and reinforcement around the foam's actual load capacity rather than assuming the foam alone carries every flight load."
      ]
    },
    {
      title: "Composites: fibers, resin and safe process",
      paragraphs: [
        "Fiberglass, carbon fiber and aramid fabrics provide reinforcement when combined with a compatible resin system. Fiber orientation is selected to carry tension, bending or torsion in a desired direction; random scraps do not necessarily create a strong laminate. Carbon fiber is electrically conductive, so keep it from shorting exposed electrical connections and plan receiver antennas appropriately.",
        "Resins can cause skin sensitization and dust from cured composites can irritate or harm lungs and eyes. Follow the product safety data, wear appropriate protective equipment, use ventilation and contain sanding dust. Composite layup requires controlled resin ratio, wet-out, orientation and cure. Do not use a visually neat laminate as proof of flight-load strength."
      ]
    },
    {
      title: "Adhesive selection and joint design",
      paragraphs: [
        "Cyanoacrylate cures quickly but can be brittle; epoxy allows time for alignment and forms useful structural joints when prepared and cured correctly; PVA suits many wood joints but needs suitable clamping and drying; hot glue is convenient for some foam builds but can add mass and soften in heat. Foam-safe formulations matter because common solvents can dissolve some foams.",
        "A joint's strength depends on fit, surface preparation, bond area, alignment and load direction as well as adhesive chemistry. Shear and peel loads behave differently. Follow mix ratios and cure times, clamp without squeezing away all adhesive, and test representative joints. Use ventilation and eye/skin protection as required by the product label."
      ]
    },
    {
      title: "Tools, measuring and a safe workshop",
      paragraphs: [
        "A practical bench includes a flat building board, cutting mat, straightedge, square, sharp knife, sanding block, pins or clamps, scale, calipers, angle gauge and measuring tape. Soldering equipment, covering irons, hot-wire cutters and rotary tools need tool-specific training. A digital scale is particularly valuable for matching components and tracking the mass budget.",
        "Cut away from the body, secure the work and cap blades when not in use. Use eye protection when cutting, drilling or sanding; control dust and fumes; keep batteries away from soldering heat and metal debris. Organize the bench so that the flight battery, propeller and powered tools cannot be activated accidentally while linkages or electronics are being adjusted."
      ]
    },
    {
      title: "Hardware, covering and finish",
      paragraphs: [
        "Hinges, clevises, pushrods, control horns, threaded fasteners, wheels and connectors must suit the expected load and fit. A small control horn should be anchored into structure, not just thin covering. Use locking hardware where appropriate and inspect it periodically; vibration can loosen screws and fasteners.",
        "Heat-shrink film, fabric, tissue, tape and paint all change mass and surface finish. Apply heat evenly and support light structures to prevent warping. Seal edges, avoid excessive paint and keep service access to the battery, receiver and linkages. A smooth finish helps airflow, but structural alignment, secure hinges and reliable access come first."
      ]
    }
  ],
  building: [
    {
      title: "Decode a plan and prepare a build sequence",
      paragraphs: [
        "Identify the drawing scale, datum, centerline, station references, airfoil sections, dihedral, incidence, grain direction and material callouts. Check whether dimensions are full size or scaled. A printed plan can change size when printed; measure a known dimension before cutting parts. Mark left/right components to avoid mirror-image mistakes.",
        "Make a bill of materials, label each part and order the build so hidden hardware is installed before skins or covering close access. Dry-fit a wing joiner, motor mount, landing gear and battery before permanent bonding. Photograph the work at stages; later, the photographs can help locate wiring or structure during repair."
      ]
    },
    {
      title: "Build a straight wing on a reference board",
      paragraphs: [
        "Use a verified flat board and pin ribs/spars without twisting them. Check root and tip incidence, leading-edge alignment, tip height and left-right symmetry before glue cures. The main spar carries bending; a web transfers shear; ribs establish airfoil shape; skins and shear webs contribute torsional stiffness when bonded as designed.",
        "A wing joiner and center section must transfer load into both panels and the fuselage. Do not sand a structural spar or notch it for a wire without checking the design. A small twist can change trim and cause one wing to stall differently. Measure both panels from the same datum rather than relying on visual judgment."
      ]
    },
    {
      title: "Build fuselage, tail and load-bearing attachments",
      paragraphs: [
        "Keep the fuselage centerline straight and check that the wing saddle, tail mount and motor thrust line agree with the plan. Square the vertical fin to the stabilizer and align the tail to the wing reference; a crooked tail can require persistent trim and may couple yaw and roll.",
        "The firewall, landing gear plate, wing attachment, battery tray and payload mounts transfer loads into the structure. Spread concentrated loads with properly bonded doublers or designed reinforcement. Use removable access panels where maintenance is expected. Ensure a battery cannot shift during a maneuver or impact."
      ]
    },
    {
      title: "Hinges, control horns and linkage geometry",
      paragraphs: [
        "Hinges must be aligned along a straight axis and bonded or installed to the specified depth. Check that the control surface moves smoothly across its full travel without catching on covering or the airframe. Seal hinge gaps where the design requires it, but do not glue a hinge solid with covering adhesive.",
        "A pushrod should resist compression without bowing; unsupported long rods can flex. Align servo arm, linkage and control horn to reduce unwanted nonlinear travel. Check that the linkage is not over-center or binding at endpoints. Attach horns through sufficient surface structure and use retainers that cannot vibrate loose."
      ]
    },
    {
      title: "Foam-board, balsa and composite build choices",
      paragraphs: [
        "Foam-board construction is accessible for prototypes: score folds carefully, reinforce spar paths and use compatible adhesive. Paper skins may need sealing from moisture, and concentrated loads around the motor and landing gear need reinforcement. Balsa construction is light and repairable when grain direction, alignment and joint quality are controlled.",
        "Composite construction can form smooth, stiff parts but demands mold preparation, fiber orientation, resin control, cure management and dust protection. Do not interchange construction methods casually: a balsa spar arrangement, foam-board fold and composite shell carry loads differently. Follow a proven design for the selected material system."
      ]
    },
    {
      title: "Covering and finishing without adding avoidable mass",
      paragraphs: [
        "Prepare a clean, smooth structure and round sharp edges where the covering process requires it. Attach film according to its maker's temperature guidance, work symmetrically and support the structure against heat-induced warping. Shrinking one side of a thin wing more than the other can introduce twist.",
        "Finish adds mass aft or forward depending on application, so weigh the aircraft and recheck CG after covering. Paint and decals should not obscure cracks, hinges or inspection points. Keep control-surface gaps and moving joints clear. A finish is complete only after a full structural and mechanical inspection."
      ]
    },
    {
      title: "Common build faults and how to prevent them",
      paragraphs: [
        "Common faults include a twisted wing, misaligned tail, weak motor mount, poorly bonded spar, loose control horn, unsupported pushrod, excessive adhesive, misrouted antenna and inaccessible battery. Prevent them with a dry-fit, measured datum checks, photos and a checklist before closing the structure.",
        "If a part does not fit, stop and determine why. Forcing it into place can preload the airframe and create warping. Rework a weak or misaligned joint rather than hiding it beneath covering. After a crash, inspect beyond the visible damage: a bent spar, cracked firewall, crushed foam or loose battery tray can be hidden by paint."
      ]
    },
    {
      title: "Bench inspection before installing a propeller",
      paragraphs: [
        "With the propeller removed, check receiver binding, servo direction, endpoints, transmitter model memory, motor rotation, throttle cut and failsafe. Restrain the model for a powered test and keep hands out of moving linkages. The propeller is installed only after all setup checks are complete and its direction, balance, adapter and retention have been verified.",
        "Measure ready-to-fly mass and CG using the specified battery and accessories. Record control throws at the plan's measurement point. Inspect every hinge and linkage under gentle hand load. Ask a second experienced builder to review the aircraft before its maiden flight; a fresh set of eyes often catches overlooked asymmetry."
      ]
    }
  ],
  "power-systems": [
    {
      title: "Brushed and brushless motor behavior",
      paragraphs: [
        "A brushed motor commutates current mechanically through brushes and a commutator; a brushless motor uses an ESC to switch current through its windings. Brushless outrunners commonly have a rotating outer can and are used for direct-drive model propellers; inrunners have an inner rotor and may be used with a gearbox or ducted fan.",
        "KV is an approximate no-load speed constant in rpm per volt. It does not state torque, efficiency or safe power. Winding resistance, cooling, battery sag and the load determine real behavior. Select using the manufacturer's voltage, current and propeller data rather than comparing KV alone."
      ]
    },
    {
      title: "Propeller diameter, pitch and load",
      paragraphs: [
        "A propeller accelerates air to produce thrust. Diameter influences the volume of air acted on and motor load; pitch is a geometric advance per revolution in an idealized no-slip interpretation. Real advance is lower due to slip and varies with airspeed. A larger or higher-pitch propeller can sharply increase current and temperature.",
        "Use only a propeller recommended for the motor and voltage, then measure the actual setup with a suitable wattmeter. Check rotation direction, propeller orientation, hub fit, balance and clearance. Never stand in the propeller plane during a powered test. A propeller's labeled dimensions and material limits should come from its manufacturer."
      ]
    },
    {
      title: "ESC ratings, BEC and cooling",
      paragraphs: [
        "An ESC must support battery cell count/voltage, expected current and motor type. Current ratings depend on cooling and manufacturer test conditions; a stated rating is not permission to run hot inside an unventilated fuselage. Provide airflow and inspect connectors for heat damage.",
        "A BEC supplies receiver and servo power. Its output voltage must match the receiver and servo rating, and its current capacity must handle simultaneous servo loads. Digital or high-torque servos may draw high current under load. For multiple servos, consult the equipment specifications and avoid powering the receiver through incompatible sources at the same time."
      ]
    },
    {
      title: "LiPo cells, capacity, C rating and voltage",
      paragraphs: [
        "Cells in series add voltage; an S count denotes the number of series cells. Nominal LiPo voltage is often approximated as 3.7 V per cell, but charge limits and storage voltage must follow the battery maker's instructions. Capacity in mAh describes charge capacity, not safe continuous current or guaranteed flight time.",
        "A printed C rating multiplied by capacity is sometimes used for a theoretical current estimate, but the real discharge capability depends on pack construction, age, temperature, wiring and maker test method. Voltage sag under load can cause low-voltage cutoff or receiver problems. Use a compatible balance charger, inspect the pack and never exceed its stated voltage or current limits."
      ]
    },
    {
      title: "Current, power, wiring and connectors",
      paragraphs: [
        "Electrical input power is approximately P = V I. If a setup draws 20 A at 11 V under test, input power is about 220 W at that measurement point; it is not all converted into useful thrust because the motor, ESC, propeller and airflow have losses. Battery voltage also drops under load.",
        "Connectors and wire must carry current with acceptable voltage drop and temperature rise. Confirm polarity before connecting; reverse polarity can damage equipment immediately. Solder joints should be mechanically supported and insulated. Keep wiring away from moving controls and hot motor parts, secure it against vibration and route receiver antennas according to the radio maker."
      ]
    },
    {
      title: "Servos: torque, speed and mechanical load",
      paragraphs: [
        "Servo torque is commonly specified at a particular voltage and test condition. Actual hinge load varies with airspeed, surface area, hinge gap, deflection and linkage geometry. A servo that is sufficient for a small trainer may be inadequate for a large control surface or high-speed model.",
        "Metal gears can improve impact resistance but do not automatically provide enough torque. Check operating voltage, current demand, travel, spline compatibility and mounting. A binding hinge or over-tight linkage wastes servo torque and increases current. Verify that the servo cannot stall at the transmitter endpoint."
      ]
    },
    {
      title: "Power-system selection and bench verification",
      paragraphs: [
        "Choose motor, battery, ESC and propeller as a matched combination. Define the aircraft mass and intended speed first, then use manufacturer tables and measured current to verify the system. Confirm that battery discharge, ESC current, motor temperature, BEC output, connector rating and propeller speed are all acceptable.",
        "For a restrained bench test, remove people from the propeller arc, secure the model, use eye protection and increase throttle progressively only as instructed. Monitor voltage, current, vibration and temperature. Stop immediately for swelling, unusual noise, smoke, severe vibration, hot connectors or unexplained current. Static thrust and current do not guarantee in-flight performance."
      ],
      callout: { label: "Never guess a propeller", text: "A seemingly small propeller change can overload a motor or ESC. Follow the motor maker's data and verify with a meter." }
    }
  ],
  "radio-control": [
    {
      title: "Transmitter, receiver, protocol and model memory",
      paragraphs: [
        "A transmitter sends coded channel commands over a radio protocol; the receiver must support the same protocol and bind procedure. Frequency band, regional approvals, antenna arrangement, firmware and receiver features can differ. A plug that fits does not prove electrical or protocol compatibility.",
        "Create a separate, clearly named transmitter model memory for each aircraft. Verify channel order, stick mode, trims, rates, mixes, endpoints and throttle behavior before connecting the flight battery. An old model memory can silently apply the wrong mix or reversed channel to a new aircraft."
      ]
    },
    {
      title: "Four primary channels and control mapping",
      paragraphs: [
        "A conventional fixed-wing setup commonly has throttle, aileron, elevator and rudder channels. Additional channels may control flaps, retracts, lights or a flight controller. Mode 1/Mode 2 stick assignments and channel order vary; identify what each stick physically commands on the chosen transmitter and document the mapping.",
        "With the model pointed away in the pilot's view, move one stick axis at a time and observe the actual surface. Check the aircraft response, not just the apparent direction of the servo horn. Aileron should command the intended roll; elevator should command the intended pitch; rudder should command the intended yaw; throttle should increase propulsion only when deliberately commanded."
      ]
    },
    {
      title: "The FlySky FS-i6 manual: exact setup is model-specific",
      paragraphs: [
        "The supplied FS-i6 manual is the authority for its specific buttons, menus, model memory and supported functions. Transmitter versions, receiver models and firmware can differ, so first identify the exact hardware combination. This course does not invent page-by-page button sequences where the scanned manual's text is not searchable.",
        "Use the manual's actual procedure for binding, channel assignment, endpoints, mixes and range checking. After a menu change, recheck every control surface and the failsafe with the propeller removed. Save and verify the correct model memory before each session; keep a written setup sheet for the aircraft."
      ],
      callout: { label: "Device-specific reference", text: "Open FS-i6+User+manual.pdf from the Sources page for its exact diagrams and menu instructions." }
    },
    {
      title: "Servo reversal, trims, endpoints and rates",
      paragraphs: [
        "Servo reversal changes which way a servo moves for a channel command. Set direction first and verify the aircraft response. Mechanical linkage geometry should center surfaces correctly; electronic sub-trim is for small final corrections, not to compensate for an incorrectly installed servo arm.",
        "Endpoints limit commanded travel and must not cause binding. Dual rates select different maximum travel values; exponential changes sensitivity around stick center without necessarily changing maximum deflection. Begin with the aircraft maker's recommended throws and rates. Make a single documented adjustment only after a qualified pilot identifies a handling need."
      ]
    },
    {
      title: "Mixes for elevons, V-tails, flaperons and crow",
      paragraphs: [
        "Mixers combine pilot inputs so a surface can perform more than one function. Flying wings use elevon mixing: pitch moves both elevons together and roll moves them differentially. V-tails combine elevator and rudder commands. Flaperons combine aileron operation with flap deployment; crow mixes flaps and raised ailerons to increase glider drag.",
        "A correct mix can still have reversed surfaces or excessive travel. Test each input independently, including combined stick commands, then verify endpoints and mechanical clearance. Deploying flaps changes trim and hinge load; follow the airframe setup. Never discover a reversed elevon mix on the maiden flight."
      ]
    },
    {
      title: "Binding, range test, antennas and failsafe",
      paragraphs: [
        "Binding establishes a link between compatible transmitter and receiver. The range-test procedure is radio-specific: follow its reduced-power or distance instructions and check for reliable control while the aircraft is in its intended orientation. Inspect antenna damage and routing; carbon structures, batteries and wiring can affect antenna performance.",
        "Failsafe defines the receiver's behavior if the link is lost. Configure it according to the aircraft and radio instructions, then verify it on the ground with propulsion made safe. Do not test signal loss in flight. A failsafe is not a substitute for keeping within visual, legal and radio range."
      ]
    },
    {
      title: "Telemetry and systematic troubleshooting",
      paragraphs: [
        "Telemetry can return receiver link quality, battery voltage/current, temperature, altitude or GPS data where supported. Set alarms using sensor documentation and understand whether a reading is measured at the battery, ESC or receiver. A silent sensor failure or incorrect alarm threshold can create false confidence.",
        "For jitter, failsafe events or receiver resets, inspect power supply and BEC load, connectors, servo binding, antenna placement, transmitter model selection and the range-test result. Change one factor at a time and record what happens. If a control glitch repeats, stop flying until the cause is found."
      ]
    }
  ],
  "flight-operations": [
    {
      title: "Pilot orientation and a flight-box briefing",
      paragraphs: [
        "A model's apparent direction changes as it turns toward or away from the pilot. This can reverse the visual intuition for aileron inputs, especially when the model approaches. Practice orientation in a simulator and at altitude with an instructor before attempting close passes. Keep a consistent pilot station so the field's left/right calls remain meaningful.",
        "Before each flight, identify pilot, spotter, launch assistant, active runway, landing direction, boundaries and emergency landing areas. Agree on simple calls such as 'taking off', 'landing', 'go around' and 'stop'. Keep spectators behind the approved boundary and do not fly behind the pilot line or toward people."
      ]
    },
    {
      title: "Weather, wind direction and go/no-go limits",
      paragraphs: [
        "Observe wind direction and gusts at the field, not just a weather app. A headwind can reduce groundspeed during landing but changes the air-relative and ground-relative picture; a crosswind can cause drift. Trees, buildings and terrain create turbulence and wind gradients. A beginner's comfortable wind is lower than an experienced pilot's, and some aircraft are unsuitable in gusts.",
        "Rain, moisture, poor visibility, sun glare, extreme heat, cold and lightning introduce distinct hazards. Moisture can reach electronics; heat can raise battery temperature; cold can reduce battery voltage under load; glare can hide orientation. Do not use a single generic wind-speed threshold for every model. Apply the strictest of pilot skill, aircraft manual and site policy."
      ]
    },
    {
      title: "Takeoff, circuit and approach planning",
      paragraphs: [
        "The launch method depends on airframe, propeller position, landing gear, runway and wind. Follow the model's instructions and have an experienced pilot handle the first launch. Keep launch assistants clear of the propeller and agree on the moment control is transferred. Do not throw a model by its control surfaces or launch it into an unsafe crowd.",
        "A predictable circuit maintains separation and sets up a stable approach. Plan the landing before launch: choose direction, touchdown area and go-around path. Avoid low, tight turns that increase stall risk; use adequate height to correct alignment. A go-around is a normal decision when the model is too high, too fast, drifting or poorly aligned."
      ]
    },
    {
      title: "Basic maneuvers and coordination",
      paragraphs: [
        "Start with straight-and-level flight, gentle turns, climbing and descending at a safe height. Aileron establishes bank, elevator helps manage pitch and lift, and rudder can coordinate yaw. Control inputs interact, so abrupt large commands can cause speed changes, altitude loss or excessive load.",
        "Practice a maneuver only after the preceding one is repeatable. An instructor can demonstrate coordinated turns and recovery at a safe height. Aerobatic figures such as loops, rolls, stall turns, inverted flight, knife-edge, harrier and split-S need suitable aircraft and sufficient energy/altitude; some have high load factors and are not beginner exercises."
      ]
    },
    {
      title: "Energy management and landing",
      paragraphs: [
        "An aircraft exchanges kinetic energy (speed) and potential energy (height). Pulling sharply can trade speed for climb and raise load; diving adds speed and may exceed structural or propeller limits. A glider's sink rate and headwind affect its reachable landing area. Plan a conservative approach rather than using the last moment to force the aircraft onto a point.",
        "Flaps may increase lift and drag but can change pitch trim and stall behavior. Deploy them only according to the design and training. Maintain a stable approach, avoid steep low turns and go around when the approach is not safe. After landing, disarm and disconnect propulsion before approaching the propeller."
      ]
    },
    {
      title: "Loss of power, control issues and recovery priorities",
      paragraphs: [
        "If the motor stops, use the remaining energy to reach a safe landing area; a fixed-wing aircraft can often glide, but its glide ratio and wind matter. If controls become unreliable, prioritize avoiding people and obstacles, call the problem clearly and follow the site's emergency plan. Do not chase a flyaway into restricted airspace or hazardous terrain.",
        "A dead battery, failed servo, loose link, receiver brownout and radio-link loss can look similar from a distance. Once safely on the ground, disconnect power and diagnose before another flight. A crash is not permission to make an untested control change; inspect the airframe, power system and radio, then seek a second-person review."
      ]
    },
    {
      title: "Simulator practice as a measured curriculum",
      paragraphs: [
        "Use the simulator to build muscle memory for orientation and basic circuit shapes. Practice in both left and right patterns, approaches from different sides, go-arounds and recovering a model that drifts. Use a similar aircraft model and transmitter mode when possible, but remember that simulator physics and wind may not match the real aircraft.",
        "Set a goal for each session, such as five consistent circuits at a chosen altitude or stable approaches without an instructor prompt. Do not use simulated success as proof the real aircraft is airworthy. The real model still needs a correct setup, field checks and supervised instruction."
      ]
    }
  ],
  "advanced-systems": [
    {
      title: "FPV system blocks and operating discipline",
      paragraphs: [
        "An FPV system may include a camera, video transmitter (VTX), antennas, receiver and goggles or display. The camera's view, latency, video-link quality and aircraft orientation are separate from the control link. A clear video image does not prove that the control radio or battery is healthy.",
        "VTX frequency and output power are subject to local radio rules and may interfere with other users. Use compatible antennas and connectors, keep an antenna attached where required by the transmitter, monitor temperature and follow the equipment manual. Maintain the visual observer and line-of-sight requirements applicable to the site and jurisdiction."
      ]
    },
    {
      title: "Flight modes, sensors and failsafe design",
      paragraphs: [
        "A flight controller may offer manual, stabilized, altitude, position or return-to-home modes, but mode names do not guarantee behavior. Stabilization depends on gyro orientation, accelerometer calibration, correct frame setup, motor mapping and control direction. GPS navigation additionally depends on position quality, compass setup, home point and a safe programmed response.",
        "Plan a failure analysis: what if GPS is unavailable, the compass is disturbed, the battery sags, telemetry drops or the control link is lost? Test each supported mode and failsafe on the ground according to the firmware and aircraft manual. Do not rely on autonomous return near obstacles or people without controlled validation and a legal operating basis."
      ]
    },
    {
      title: "PID loops and tuning responsibly",
      paragraphs: [
        "A proportional term responds to current error, an integral term accumulates persistent error and a derivative term responds to the rate of change. Together, PID terms can reduce attitude error, but poor tuning may cause oscillation, sluggish response, motor heating or instability. The aircraft's mass distribution, frame stiffness, propellers, firmware and filter settings all influence the response.",
        "Use the firmware's supported defaults and documented tuning process. Change one parameter group at a time, log the result and stop if oscillation or overheating appears. A tuning guide for one frame or firmware release may be unsafe for another. Autotune functions, where available, still require a safe site and an aircraft capable of the test maneuvers."
      ]
    },
    {
      title: "Telemetry, black-box logs and OSD interpretation",
      paragraphs: [
        "Telemetry can expose battery voltage, current, consumed capacity, link quality, GPS position, altitude, attitude and vibration. Each sensor has limits and calibration needs. A voltage alarm must account for cell count and load sag; a current sensor may have offset error; a GPS fix does not establish that navigation is safe.",
        "An on-screen display should show only data the pilot can interpret in time. Log enough data to troubleshoot but protect privacy and follow local rules for recording. Review warnings and vibration after landing. A data trace can suggest a fault, but inspect the actual airframe, connectors and motor before returning to flight."
      ]
    },
    {
      title: "CAD, airfoil tools and simulation boundaries",
      paragraphs: [
        "CAD software helps define dimensions, mass properties, interfaces and manufacturing drawings. XFLR5/Profili and airfoil databases can support preliminary aerodynamic comparisons; OpenVSP supports aircraft geometry; CFD tools such as OpenFOAM model fluid flow. Each tool relies on assumptions and user setup, and numerical output is not certification.",
        "Cross-check calculations with hand estimates, published experimental data and physical inspection. A clean computational model omits real hinges, roughness, flex, motor interference, leaks and construction tolerances unless modeled. Document units, mesh/solver settings, boundary conditions and Reynolds number so an analysis can be repeated and challenged."
      ]
    },
    {
      title: "3D printing: anisotropy and flight loads",
      paragraphs: [
        "Fused-filament printed parts are often weaker between layers than along a continuous filament path. Print orientation, wall count, infill, temperature, filament condition and fastener preload all influence strength. A printed part can crack around a hole or soften in a hot car even when its nominal material is suitable.",
        "Use printed parts first for noncritical fixtures, fairings or prototypes. For a motor mount, control horn or wing connector, validate load paths, vibration and heat with appropriate engineering review. Avoid printing a flight-critical component merely because it fits the printer. Inspect layer separation and reject damaged parts."
      ]
    },
    {
      title: "Night flying, large models and advanced propulsion",
      paragraphs: [
        "Night flying requires a site-approved operating plan, clear orientation cues, lighting visible from multiple attitudes, a spotter and sufficient visibility to maintain safe separation. LEDs can identify attitude but do not make the aircraft visible to other airspace users. Do not fly in darkness unless the rules and site explicitly permit it and the pilot is trained.",
        "Large-scale models amplify structural, kinetic-energy and transport concerns. Glow/nitro and gasoline engines add fuel, exhaust, vibration and hot-surface hazards; turbine propulsion adds extreme heat, specialist equipment and strict procedures. Each system needs the manufacturer's training and maintenance process. A more powerful system increases consequences and does not replace design validation."
      ]
    }
  ],
  maintenance: [
    {
      title: "Build a maintenance schedule around equipment instructions",
      paragraphs: [
        "There is no universal service interval for every RC model. Create a schedule from the airframe, motor, ESC, battery, servo, charger and radio manufacturer's instructions, then add inspections appropriate to your flying frequency and conditions. Record the date and result of each inspection so repeated wear or loosening is noticed.",
        "Inspect after transport damage, hard landings, rain exposure, high-vibration flights and any unusual sound or control behavior. Check fasteners, hinge security, control horns, pushrods, propeller, motor mount, landing gear, battery strap and wire insulation. Retire a damaged component rather than waiting for a scheduled service date."
      ]
    },
    {
      title: "Diagnose power and performance symptoms",
      paragraphs: [
        "Short flight duration could result from high average current, aged battery, increased mass, binding controls, poor propeller matching or a different flight profile. A weak climb could be an unsuitable propeller, low battery voltage, excess drag, damaged motor, incorrect CG or a pilot technique issue. Measure and inspect before changing components.",
        "If a connector or ESC becomes hot, stop using the combination until current, airflow and wiring have been checked. Unusual vibration can come from a damaged propeller, bent shaft, loose motor mount or imbalance. Remove the propeller before powered troubleshooting and use a secure test fixture with trained assistance."
      ]
    },
    {
      title: "Servo, linkage and radio fault isolation",
      paragraphs: [
        "For a jittering or weak servo, disconnect power and inspect for binding, damaged gears, loose horns, cracked servo arms and high hinge friction. Measure whether the receiver/BEC supply can support the total servo load. A mechanically jammed servo can draw enough current to reset the receiver.",
        "For intermittent radio behavior, verify model memory, antenna condition and placement, receiver power, connector retention, range-test procedure and failsafe. Change one item at a time and record tests. If repeated signal loss or control glitches occur, ground the aircraft until a competent person identifies and fixes the cause."
      ]
    },
    {
      title: "LiPo health, storage and end of life",
      paragraphs: [
        "Record battery identity, charge cycles if known, storage condition, flight use and observed voltage sag. Retire a pack that is swollen, punctured, crushed, leaking, unusually hot or otherwise damaged. Never attempt to flatten or puncture a swollen pack. Follow the battery maker's instructions for storage voltage and transport.",
        "Use a compatible balance charger and a supervised, nonflammable charging location away from loose metal. Do not leave a pack charging unattended. For disposal, use local battery-recycling or hazardous-waste guidance; do not place damaged lithium packs in ordinary household waste."
      ]
    },
    {
      title: "Crash inspection and structural repair",
      paragraphs: [
        "After impact, disconnect the battery and remove the propeller. Check the wing spar and joiner, fuselage longerons, firewall, tail attachment, landing gear, battery tray and control linkage anchors. Foam can delaminate beneath an intact skin; wood can split along grain; composite can hide internal crushing or delamination.",
        "A repair should restore alignment and a continuous load path using compatible materials and curing conditions. Recheck CG after adding reinforcement. Replace a bent propeller or damaged battery instead of attempting an improvised repair. Before another flight, have an experienced builder inspect the repair and repeat all control and power checks."
      ]
    },
    {
      title: "Use a configuration log as a diagnostic tool",
      paragraphs: [
        "Keep one record per aircraft with serial/identifier, mass, CG, battery, propeller, control throws, radio model, firmware/configuration and repairs. Add date, weather, flight duration, warnings, trim change and observed behavior after each session. Identify measured values versus estimates.",
        "The supplied Cessna 337 handbook shows how a full-size aircraft manual separates operating limitations, checklists, emergency actions, system descriptions, performance and servicing. That is a useful documentation pattern only; its maintenance intervals, performance tables and procedures are specific to the full-size Cessna and are not RC instructions."
      ]
    }
  ],
  competitions: [
    {
      title: "Competition families and what they reward",
      paragraphs: [
        "FAI classes include free-flight, control-line, radio-control, scale and space-model disciplines, with subcategories defined by current rules. Indoor duration events reward lightweight efficiency; aerobatic classes judge precision and sequence; scale classes may assess appearance and flight. Glider events can test duration, distance or landing precision.",
        "Engineering competitions such as SAE Aero Design typically define a mission and constraints, potentially including payload, dimensions, takeoff distance, documentation and technical inspection. Competition format and scoring change. The current event rulebook, official clarifications and safety procedures supersede any generic lesson or prior-year post."
      ]
    },
    {
      title: "Translate rules into a verification matrix",
      paragraphs: [
        "For every rule, record the exact requirement, source section, responsible owner, verification method and evidence. A dimensional limit might be checked with a jig; a mass limit with a calibrated scale; an electrical constraint with component documents; a flight requirement with a rehearsed test. Mark disqualifying constraints before performance optimizations.",
        "Make a compliance matrix and update it after every design change. If a rule is ambiguous, ask the organizer in writing and preserve the response. Do not infer a rule from another competition class. A technically excellent aircraft can fail inspection if a mandatory document, label or configuration is missing."
      ]
    },
    {
      title: "Score optimization, reliability and margins",
      paragraphs: [
        "Build a simple score model from the current published formula and identify which variables the team can actually control. Perform sensitivity analysis: if payload increases, does takeoff distance, climb margin or structural load become unacceptable? Optimize expected score, not theoretical maximum score with no operational margin.",
        "Reliability earns value indirectly by completing flights. Include mass, current, temperature, structural and takeoff-distance margins. A design that just meets a limit on a calm test day may fail in hot weather, crosswind or repeated runs. Keep safety constraints as hard requirements even when the scoring formula rewards aggressive performance."
      ]
    },
    {
      title: "Team roles, interfaces and project schedule",
      paragraphs: [
        "Assign owners for aerodynamics, structures, propulsion, avionics, manufacturing, testing, documentation, logistics and finance. Define interfaces explicitly: component dimensions, mass, connectors, mounting holes, cooling paths, data formats and delivery dates. Hold design reviews at concept, preliminary and detailed stages.",
        "Create a schedule with procurement lead times, prototype builds, component tests, flight-test windows, report drafts and contingency time. Maintain a decision log and risk register. Reserve budget for replacement parts, failed prototypes, travel and freight; a plan that spends every rupee on the first build has no recovery path."
      ]
    },
    {
      title: "Test cards, design reports and technical inspection",
      paragraphs: [
        "A test card should name the configuration, objective, environment, sequence, observer, pass criteria and abort criteria. Begin with bench and structural inspections, then progress to restrained power tests and supervised flight tests as appropriate. Record measured results, anomalies and corrective actions. Never ask a first-flight test to prove many untested design assumptions at once.",
        "A strong report explains requirements, trade studies, calculations, drawings, manufacturing choices, mass properties, power-system measurements, risk controls and flight results. Distinguish simulation, estimate and measurement. Prepare the aircraft and paperwork for inspection before travel; labels, battery restraint, fail-safe behavior and mechanical condition may all be checked."
      ]
    },
    {
      title: "Event-weekend and logistics planning",
      paragraphs: [
        "Confirm the current event schedule, venue permissions, technical inspection time, battery charging policy, radio frequency procedures and approved flight area. Prepare a transport case and a packing list for aircraft, current rulebook, spares, tools, approved charging equipment, protective gear, documents and team contact details.",
        "Assign a pilot, safety lead, spotter and mechanic for each flight. Use a written go/no-go check even under time pressure. If the aircraft is damaged, the weather is outside limits or a required check fails, withdraw or repair and re-inspect. Event points are never worth an uncontrolled aircraft."
      ]
    }
  ],
  safety: [
    {
      title: "Risk assessment before the aircraft reaches the field",
      paragraphs: [
        "Identify hazards, who could be exposed, how likely and severe harm could be, and what controls reduce the risk. Typical hazards include propellers, battery fires, loss of control, failed structure, weather, spectators, roads, power lines and other aircraft. Prefer eliminating a hazard—such as removing the propeller during setup—over relying only on a warning.",
        "Use a site briefing, barriers or a defined spectator line, spotter, clear landing zone and emergency communication plan. Assign authority to call 'stop' and make sure everyone understands it. Reassess when the weather, aircraft, pilot or field layout changes; a checklist completed under different conditions may no longer be sufficient."
      ]
    },
    {
      title: "Propeller, motor and restraint safety",
      paragraphs: [
        "Remove the propeller for radio setup, ESC calibration, servo direction checks and most motor troubleshooting. A throttle-cut switch or software arm state can be misconfigured or bumped; it is not a physical safeguard. Disconnect the battery when working on the airframe and keep the transmitter on only when a test procedure requires it.",
        "For powered testing, restrain the model using a safe fixture, keep people outside the propeller arc and plane, wear eye protection and follow the equipment maker's method. Inspect blades for cracks and secure the hub correctly. Never hold a powered model by a wing or stand directly in front of a propeller."
      ]
    },
    {
      title: "LiPo fire prevention and emergency response",
      paragraphs: [
        "A damaged, overcharged, shorted or overheated lithium battery can enter thermal runaway, releasing heat, flame and hazardous smoke. Inspect before charging and use the correct chemistry, cell count and balance mode. Charge under supervision on a suitable nonflammable surface away from fuel, paper and workshop clutter.",
        "If a pack swells, becomes unusually hot, hisses, smokes or emits an unusual odor, stop handling it, warn others, move away and follow local emergency-service guidance. Do not carry a failing pack through a crowd or inhale smoke. For skin or eye exposure, injury or fire, seek emergency assistance and follow professional instructions. Dispose of damaged packs through local hazardous-waste guidance."
      ]
    },
    {
      title: "Flying-site layout, calls and airspace awareness",
      paragraphs: [
        "Operate only at a permitted location with adequate separation and a defined pilot station, flight area, landing area and spectator boundary. Identify hazards such as roads, buildings, power lines, people, animals, trees and occupied airspace before launch. Use a spotter when required by rules, site procedures or the operation.",
        "Agree on clear calls for launch, landing, go-around, dead-stick, lost model and stop. Keep visual awareness of other model aircraft and airspace users. If manned aircraft or another hazard approaches, follow the site procedure and yield by landing or reducing risk. Never assume a quiet sky or app display guarantees the airspace is clear."
      ]
    },
    {
      title: "Weather and human factors",
      paragraphs: [
        "Wind, gusts, turbulence, rain, visibility, sun glare, temperature and lightning each affect safety. A flight beyond the pilot's skill or the model's demonstrated capability is a no-go. Avoid thunderstorms and stop outdoor operation when lightning or unsafe conditions are present. Protect batteries and electronics from heat, cold and moisture according to manufacturer guidance.",
        "Fatigue, distraction, pressure to demonstrate, unfamiliar equipment and poor communication increase risk. Brief the flight, confirm who has control, and avoid troubleshooting in an active flight line. Use buddy-box training only with compatible radios and a ground-verified transfer switch. Young or inexperienced pilots need direct adult supervision."
      ]
    },
    {
      title: "Pre-flight, emergency and post-flight checklist",
      paragraphs: [
        "Before flight, verify the correct radio model, charged transmitter and receiver, binding, range procedure, failsafe, control directions, hinge security, linkage, battery restraint, propeller condition and current weather/site permission. Confirm the flight area is clear and the landing plan is understood. A checklist is a memory aid; inspect the actual aircraft rather than checking boxes from habit.",
        "Plan for loss of power or control and know how to call an emergency. After landing, disarm, disconnect power and keep clear of the propeller. Inspect the wing, tail, landing gear, motor mount, battery and wiring; record any damage or abnormal heat. Do not fly again until a questionable aircraft is repaired and rechecked."
      ]
    },
    {
      title: "Regulations, permissions and liability",
      paragraphs: [
        "Rules vary by jurisdiction, aircraft category, mass, purpose, altitude, airspace, radio equipment and site. Check current official aviation-authority guidance, airspace maps, radio-frequency rules and local landowner or club permission before each new operation. Registration, remote identification, training, visual-line-of-sight, altitude and insurance requirements can change.",
        "The original site lists Indian and international regulatory topics, but fixed thresholds can become outdated. Use current DGCA/Digital Sky information in India, FAA rules in the United States, CAA rules in the United Kingdom, and EASA rules in Europe where applicable. Ask a club and insurer what liability cover applies; membership may have exclusions. This educational course is not legal advice."
      ],
      links: [
        { label: "India: DGCA Digital Sky", url: "https://digitalsky.dgca.gov.in/" },
        { label: "United States: FAA recreational flyers", url: "https://www.faa.gov/uas/recreational_flyers" },
        { label: "United Kingdom: CAA drones", url: "https://www.caa.co.uk/drones/" },
        { label: "Europe: EASA drones", url: "https://www.easa.europa.eu/en/domains/civil-drones-rpas" }
      ]
    },
    {
      title: "First aid, incident reporting and safety culture",
      paragraphs: [
        "Keep a stocked first-aid kit, know the site's address and emergency contact method, and have trained people available. Online instructions cannot diagnose a serious injury. For major bleeding, eye injuries, burns, smoke inhalation or chemical exposure, call local emergency services and follow a qualified responder's directions.",
        "Report near misses and equipment faults to the club or organizer so the risk is understood before another flight. A safety pledge is meaningful only when it changes decisions: ground a damaged aircraft, disclose a radio problem, stop charging a suspect pack and say no when conditions are unsuitable. No competition score, video or schedule is more important than people."
      ]
    }
  ]
};
