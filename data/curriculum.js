window.CURRICULUM = [
  {
    id: "getting-started",
    title: "Start here: the model aircraft world",
    shortTitle: "Start here",
    category: "FOUNDATIONS",
    duration: "12 min",
    summary: "Learn what aeromodelling includes, how aircraft are controlled, and how to choose a sensible first project.",
    outcomes: ["Recognize the main model-aircraft disciplines", "Choose a beginner-friendly path", "Understand the build-test-learn cycle"],
    sections: [
      {
        title: "Aeromodelling is a complete design discipline",
        paragraphs: [
          "Aeromodelling is the design, construction, testing and operation of aircraft models. It combines applied physics with practical skills: a successful model is not just a small-looking airplane, but a system whose structure, aerodynamics, power, radio link and pilot all work together.",
          "The scale can range from a paper glider to a competition aircraft. The same engineering loop applies at every scale: define a mission, make a design, estimate its performance, build carefully, inspect it, test it safely, record what happened and improve one thing at a time."
        ],
        bullets: ["Start with a proven, forgiving trainer or a stable glider.", "Change one variable at a time so test results teach you something.", "Keep a notebook of weight, balance, control throws, battery condition and flight observations."]
      },
      {
        title: "Choose a type of flying that fits your goal",
        paragraphs: [
          "Free-flight models are trimmed to fly without continuous pilot input. Control-line models are connected to the pilot by lines and fly in a circle. Radio-controlled fixed-wing aircraft use a transmitter and onboard receiver to command control surfaces. Multirotors, helicopters, indoor models, slope gliders and FPV aircraft each have different equipment and skill demands.",
          "A trainer is generally designed to fly slowly and recover from small pilot errors more readily than a fast aerobatic model. A glider rewards energy management. A multirotor can hover but still needs sound setup, orientation and battery discipline. Match the airframe to the field, budget, local rules and the help available to you."
        ],
        callout: { label: "Beginner rule", text: "Choose the easiest aircraft to repair and learn with, not the fastest or most complex aircraft you can afford." }
      },
      {
        title: "A practical learning sequence",
        paragraphs: ["Use this course in order if you are new. Aerodynamics helps explain design; design helps explain the build; the radio and power lessons help you set the aircraft up; ground checks and supervised practice come before independent flying."],
        bullets: ["Understand the forces, airfoils and stall before tuning for speed.", "Learn to balance and inspect the aircraft before installing a powerful motor.", "Use a flight simulator and an experienced pilot for the first flights.", "Treat every crash or failed test as evidence to diagnose, not a reason to guess."]
      },
      {
        title: "Plan a complete beginner budget",
        paragraphs: ["Budget for the whole activity, not only the airframe: transmitter and receiver, battery and compatible charger, tools, consumables, replacement propellers, spare parts, protective equipment, club or site fees and travel can all contribute. Bundles differ in what they include. Compare compatible equipment and leave a reserve for repairs instead of spending the entire budget on the first model."]
      },
      {
        title: "History, learning value and future pathways",
        paragraphs: [
          "Model aviation grew from early experiments with gliders, rubber-powered models and tethered flight into modern free-flight, control-line, radio-control, indoor and autonomous systems. Its history is a sequence of practical experiments: lightweight structures, reliable control, better propulsion and safer operating practice.",
          "A project can teach measurement, geometry, physics, electronics, materials, teamwork and technical communication. Related professional pathways include aerospace engineering, mechanical design, robotics, avionics, manufacturing and maintenance. Building a model is useful experience, but it does not replace formal training, qualifications or supervised practice."
        ]
      },
      {
        title: "A note on clubs and competitions",
        paragraphs: ["Aeromodelling communities, clubs and university teams can provide mentors, workshop access and field procedures. Events may include free-flight, control-line, scale, aerobatic, glider, indoor and engineering-design categories. Names, dates, eligibility and scoring rules change, so use the current organizer's rulebook rather than an old event summary."]
      }
    ],
    quiz: [
      { q: "What is the most useful first-aircraft priority for a new pilot?", options: ["Maximum speed", "Forgiving handling and repairability", "The largest battery that fits"], answer: 1, why: "A predictable, repairable aircraft makes practice safer and helps you learn." },
      { q: "What makes an aeromodelling project a system?", options: ["Only the airframe matters", "Structure, aerodynamics, power, radio and pilot interact", "A model must be built from wood"], answer: 1, why: "The aircraft is a coupled system; changing one part can affect others." },
      { q: "Before attending a competition, which source should you check?", options: ["A previous year's social post", "The current organizer rulebook", "A generic model-aircraft checklist"], answer: 1, why: "Event formats and requirements can change from season to season." }
    ],
    references: ["Original learning site: Introduction, aircraft categories, getting started, aeromodelling communities and events."]
  },
  {
    id: "aerodynamics",
    title: "Aerodynamics: how models fly",
    shortTitle: "Aerodynamics",
    category: "FLIGHT SCIENCE",
    duration: "18 min",
    summary: "Connect angle of attack, lift, drag, Reynolds number and stall to the behavior you see in the air.",
    outcomes: ["Explain lift using pressure and momentum together", "Identify the four forces and main drag sources", "Describe why a stall is about angle of attack"],
    sections: [
      {
        title: "The air around a model",
        paragraphs: [
          "Air has density and viscosity. Density affects how much mass of air moves around a wing; viscosity creates friction and influences boundary-layer behavior. Temperature, pressure and altitude change density, so the same aircraft and airspeed can produce different performance on different days.",
          "A wing works by changing the flow around it. Pressure differences and the downward turning of air are complementary ways to describe the resulting force. Neither a single sentence about Bernoulli nor a cartoon equal-transit-time story is a complete explanation."
        ]
      },
      {
        title: "Lift, angle of attack and the four forces",
        paragraphs: [
          "Lift is the component of aerodynamic force perpendicular to the local airflow; drag is parallel to it. Weight acts toward the earth, and thrust is supplied by the propulsion system. In steady, level flight, lift approximately balances weight and thrust approximately balances drag. During a climb, turn, acceleration or glide, the balance changes.",
          "Angle of attack (AoA) is the angle between a wing's reference chord and the oncoming airflow. Increasing AoA usually increases lift up to a limit, but it also increases drag. If AoA exceeds the airfoil's critical value, flow separation causes a stall. A stall can happen at many airspeeds; it is not a fixed speed event."
        ],
        callout: { label: "Pilot connection", text: "A low-speed turn, gust or abrupt pull can raise AoA enough to stall. Reduce AoA first; adding power alone cannot instantly restore attached flow." }
      },
      {
        title: "Airfoil anatomy and selection",
        paragraphs: [
          "The leading edge meets the airflow; the trailing edge is where the upper and lower surfaces meet. Chord is the straight-line distance between those points. Camber describes curvature, thickness affects structure and flow, and the airfoil's lift and drag depend on Reynolds number, surface quality and AoA.",
          "A thick, cambered section can be useful for a slow model or structural depth, while a thinner or lower-drag section may suit another mission. There is no universally best airfoil. The S1223 plot in this workspace is a section profile with a labeled 0.28 m chord; it is a geometry reference, not proof that the section suits every model or flight condition."
        ],
        image: { src: "s1223.png", alt: "Plot of the S1223 airfoil section with a 0.28 metre chord", caption: "Reference image supplied with the project. Geometry alone does not show the full lift, drag or stall behavior." }
      },
      {
        title: "Drag and why small models behave differently",
        paragraphs: [
          "Profile drag comes from pressure and skin friction around surfaces. Induced drag is associated with producing lift and is especially important at higher lift coefficients; wingtip vortices are part of the three-dimensional flow. Interference drag comes from junctions and disturbed flows, while exposed wheels, antennas and rough surface steps add parasite drag.",
          "Reynolds number compares inertial effects with viscous effects: Re = rho V c / mu. A model's shorter chord often means a lower Reynolds number than a full-size aircraft at the same speed. That can change lift curves, drag and separation behavior. Use airfoil data that matches the model's Reynolds-number range rather than assuming full-scale data transfers unchanged."
        ],
        formula: "Re = rho x V x c / mu"
      },
      {
        title: "Wing geometry and stall awareness",
        paragraphs: [
          "Wing area, span, aspect ratio, taper, sweep, dihedral, incidence and twist all influence lift distribution, stability, structure and handling. Washout lowers the tip's geometric AoA relative to the root and can help the root stall first, preserving some aileron effectiveness; it is a design aid, not a guarantee against a stall.",
          "A stall is caused by excessive AoA, not simply by being slow. Warning signs vary by design and setup, but may include mushy controls, buffeting or a wing drop. Train with an instructor at a safe height and follow the aircraft's instructions; do not experiment near people or obstacles."
        ]
      }
    ],
    quiz: [
      { q: "What directly causes an aerodynamic stall?", options: ["Crossing one universal airspeed", "Exceeding the critical angle of attack", "Using a low battery"], answer: 1, why: "A stall is flow separation after critical AoA is exceeded; the airspeed at which that happens varies." },
      { q: "Which statement about lift is most accurate?", options: ["Only Bernoulli explains it", "Pressure and momentum descriptions are compatible parts of the flow picture", "Air travels equal distances over both sides"], answer: 1, why: "The flow field produces pressure forces and turns air downward; the descriptions are consistent." },
      { q: "Why may a model airfoil not behave like a full-size wing section?", options: ["Models have no viscosity", "The model often operates at a different Reynolds number", "Chord has no effect"], answer: 1, why: "Chord, speed, density and viscosity set Reynolds number, affecting low-Reynolds-number performance." }
    ],
    references: ["Basics of RC Design.pdf: airfoil selection and analysis, aerodynamic formulas, drag reduction, high-lift devices and safe-wing concepts (chapters 1-4, 12, 14-15, 20).", "s1223.png: supplied S1223 profile illustration; chord is labeled 0.28 m."]
  },
  {
    id: "aircraft-design",
    title: "Design fundamentals and sizing",
    shortTitle: "Design & sizing",
    category: "AIRCRAFT DESIGN",
    duration: "22 min",
    summary: "Turn a mission into a weight budget, wing planform, stable balance and testable performance estimates.",
    outcomes: ["Build a first-pass weight budget", "Calculate wing loading and aspect ratio", "Explain CG, tail volume and control authority"],
    sections: [
      {
        title: "Begin with a mission and constraints",
        paragraphs: [
          "Write down the payload, desired flight duration, field size, launch and landing method, target mass, transport limits, budget and builder experience. Rank the constraints: a short-field trainer and a fast aerobatic model need different compromises.",
          "Sketch more than one layout before choosing. Estimate mass from the airframe, motor, ESC, battery, servos, receiver, wiring and payload. Include glue, covering and mounting hardware: small omissions accumulate. Revisit the estimate as components are weighed."
        ]
      },
      {
        title: "Wing geometry and loading",
        paragraphs: [
          "For a rectangular wing, area S = span x chord. For a tapered wing, a useful planform estimate is S = span x (root chord + tip chord) / 2. Aspect ratio AR = span squared / area. Higher aspect ratio can reduce induced drag at a given lift, but increases bending moment and structural demands.",
          "Wing loading is aircraft weight divided by wing area. In metric design work, compare mass in grams to area in square decimetres (g/dm2), or use force in newtons and area in square metres (N/m2); state which convention you use. Lower loading often supports slower flight, but handling also depends on airfoil, planform, stiffness and control setup."
        ],
        formula: "Wing loading = mass / wing area (keep units explicit)"
      },
      {
        title: "Center of gravity and stability",
        paragraphs: [
          "The center of gravity (CG) is the balance point of the complete aircraft. A forward CG generally increases the restoring tendency but can require more tail load and elevator authority. An aft CG reduces the stability margin and can make pitch response sensitive or divergent. Never infer a safe CG from appearance alone: begin with the proven plan or manufacturer range and check the actual ready-to-fly aircraft.",
          "Longitudinal stability is primarily pitch stability; vertical-tail area and moment arm contribute to directional stability; dihedral, sweep and other effects influence lateral behavior. Tail volume coefficients relate tail area and moment arm to wing area and chord/span. They are comparison and sizing tools, not a substitute for a validated design or flight test."
        ],
        formula: "CG position = sum(component mass x component arm) / total mass",
        callout: { label: "Setup standard", text: "Balance with the complete flight battery and equipment installed. Verify the model's specified CG and control-surface directions with a second person before flight." }
      },
      {
        title: "Control surfaces, structure and drag",
        paragraphs: [
          "Ailerons create roll, the elevator controls pitch and the rudder controls yaw. Their size, position, hinge gap, linkage geometry and deflection determine authority and feel. Differential aileron travel can reduce adverse yaw; mixing should follow the design and be verified on the ground. Flaps increase lift and drag and require suitable structure and trim.",
          "The wing spar and skins carry bending and torsion; fuselage joints and landing-gear mounts transmit concentrated loads. Stressed-skin construction uses a bonded skin to carry part of the load. Reduce drag through clean alignment, smooth transitions and secure surfaces, but never remove required structural support to save weight."
        ]
      },
      {
        title: "Estimate performance, then validate",
        paragraphs: [
          "A first-order stall-speed estimate is Vs = sqrt(2W / (rho S CLmax)), where W is weight as a force, rho is air density, S is reference wing area and CLmax is a defensible maximum lift coefficient. Real model behavior can depart from the estimate because of low Reynolds number, surface condition, propwash, construction and uncertainty in CLmax.",
          "Propeller diameter, pitch, motor KV, voltage, current limit and airframe speed are coupled. Check manufacturer data and measure current with appropriate equipment; do not choose a propeller from a rule of thumb alone. Recalculate after mass or geometry changes, then test progressively in a controlled environment."
        ],
        formula: "Vs = sqrt(2 W / (rho x S x CLmax))"
      },
      {
        title: "Use the supplied airfoil drawing thoughtfully",
        paragraphs: ["The supplied S1223 drawing lets you inspect chord, camber and relative thickness as a two-dimensional profile. It does not state the model's wing area, span, twist, structural layup, target Reynolds number, or tested operating envelope. Those must come from the aircraft design and its verified data."]
      }
    ],
    quiz: [
      { q: "Why include wiring, adhesive and mounting hardware in the weight budget?", options: ["They do not affect flight", "Small omitted masses can shift the final mass and balance", "Only payload mass matters"], answer: 1, why: "The aircraft flies at its complete ready-to-fly mass, not the airframe-only estimate." },
      { q: "Which is the safest starting point for a model's CG?", options: ["A proven plan or manufacturer range, checked on the complete model", "Move it aft until the plane feels agile", "Use the CG from any similar-looking full-size aircraft"], answer: 0, why: "CG limits are design-specific. An aft shift can sharply reduce stability." },
      { q: "What does aspect ratio compare?", options: ["Span squared with wing area", "Battery voltage with current", "Tail area with fuselage length"], answer: 0, why: "AR = span squared / wing planform area." }
    ],
    references: ["Basics of RC Design.pdf: aerodynamic formulas, wing loading, wing design, CG and balancing, horizontal/vertical tail design, roll control, weight distribution, drag, stressed-skin construction, flaps, landing gear, propeller selection, aerobatic design, maneuverability, canards, tailless aircraft, floats and basic proportions (chapters 3-26)."]
  },
  {
    id: "aircraft-types",
    title: "Airframe types and missions",
    shortTitle: "Aircraft types",
    category: "AIRCRAFT DESIGN",
    duration: "14 min",
    summary: "Compare gliders, trainers, sport planes, scale models, multirotors, helicopters, flying wings and EDF jets.",
    outcomes: ["Match a platform to its mission", "Describe the main compromises of each type", "Identify why some aircraft demand more setup skill"],
    sections: [
      {
        title: "Fixed-wing aircraft",
        paragraphs: [
          "A glider trades altitude for distance and can use rising air to remain aloft. A high glide ratio means more horizontal distance per unit of height lost in steady conditions, but real performance depends on loading, trim, air quality and pilot technique. Trainers favor predictable handling and straightforward repairs. Sport and aerobatic aircraft may have greater control authority and speed, which leave less time to correct errors.",
          "Scale models reproduce the appearance of a full-size aircraft; scale fidelity can constrain the wing, gear, payload and access for maintenance. Flying wings have no conventional tail and need appropriate airfoil reflex, CG and elevon mixing. EDF jets use a ducted fan and usually demand careful mass, thrust, battery and landing-site planning."
        ]
      },
      {
        title: "Rotary-wing aircraft",
        paragraphs: [
          "Multirotors use multiple propellers to control lift and attitude through a flight controller. They can hover, but depend on correct motor order, propeller direction, sensor setup, radio configuration and failsafe behavior. A propeller installed or spun the wrong way can make a craft uncontrollable.",
          "A helicopter uses a main rotor and tail-rotor system, with collective and cyclic control on many designs. Rotor-head setup and mechanical interactions make helicopters more demanding than a basic fixed-wing trainer. Use the manufacturer's setup procedure and a qualified mentor."
        ]
      },
      {
        title: "Choose by mission, not by trend",
        paragraphs: ["Compare field space, wind tolerance, pilot skill, repair difficulty, noise, transport, parts availability, battery cost and applicable rules. Indoor aircraft need low mass and low speed; slope gliders depend on suitable terrain and wind; water models need secure float attachments and suitable water access. No category is automatically safe in every location."]
      },
      {
        title: "A note on full-size aircraft references",
        paragraphs: ["The supplied Cessna 337 owner's handbook describes a full-size, twin-engine airplane. It is useful as an example of how an aircraft manual organizes limitations, normal and emergency procedures, systems, performance, servicing and optional equipment. Its speeds, weights, checklists, fuel figures and procedures are specific to that aircraft and must never be applied to an RC model."]
      }
    ],
    quiz: [
      { q: "Which aircraft is typically a sensible first radio-controlled fixed-wing model?", options: ["A fast EDF jet", "A proven trainer with forgiving handling", "A highly loaded aerobatic design"], answer: 1, why: "A stable, repairable trainer provides more time to learn." },
      { q: "What is the Cessna 337 handbook useful for in this course?", options: ["Copying full-size speeds into an RC model", "Studying how a real aircraft manual organizes operations and systems", "Selecting an RC motor KV"], answer: 1, why: "It is a full-size aircraft-specific handbook, not a model design standard." },
      { q: "What is a major setup concern for a multirotor?", options: ["Correct motor order and rotation", "Only the wing washout", "The tail volume coefficient"], answer: 0, why: "Incorrect motor order or direction can prevent safe controlled flight." }
    ],
    references: ["Original learning site: gliders, trainers, sport and aerobatic models, scale aircraft, multirotors, flying wings, helicopters, EDF jets, comparison tables and aircraft chooser.", "Cessna-1971-Super-Skymaster-337-POH.pdf: full-size aircraft handbook; use only as an example of manual structure."]
  },
  {
    id: "materials",
    title: "Materials, tools and workshop practice",
    shortTitle: "Materials & tools",
    category: "BUILD & REPAIR",
    duration: "16 min",
    summary: "Select wood, foam, composites, adhesives, coverings and tools based on the load, finish and repair plan.",
    outcomes: ["Compare common airframe materials", "Select compatible adhesives", "Plan a safer, more repeatable workspace"],
    sections: [
      {
        title: "Wood, foam and composites",
        paragraphs: [
          "Balsa is light and easy to shape; its strength varies strongly with density and grain direction. Plywood is useful around mounts and local loads. Basswood and spruce can provide stiffer members where their mass is justified. Select stock by the load path, not by species name alone.",
          "Foam board and expanded or extruded foam are accessible for prototypes and trainers, but differ in stiffness, surface, solvent compatibility and temperature tolerance. Fiberglass, carbon fiber and other composites provide high stiffness or tailored strength, but require careful layup, bonding, dust control and personal protection. Carbon can also conduct electricity and interfere with antennas if installed carelessly."
        ]
      },
      {
        title: "Adhesives, covering and finishes",
        paragraphs: [
          "Use an adhesive compatible with both materials and the expected loads. Foam-safe cyanoacrylate, epoxy, PVA, hot glue and contact adhesives have different cure times, joint behavior, mass and solvent effects. Test on offcuts; follow the product safety data and ventilation guidance. A large glue fillet is not automatically a strong or light joint.",
          "Heat-shrink film can cover suitable structures but heat may warp a light frame or damage foam. Paper, tape and paint offer other finishes. Apply coverings symmetrically and keep inspection access for linkages, battery mounts and wiring. Finish quality matters, but structural alignment and mass come first."
        ],
        callout: { label: "Workshop habit", text: "Do a small material-and-adhesive compatibility test before committing a whole wing or fuselage." }
      },
      {
        title: "Tools and workspace",
        paragraphs: [
          "A flat building board, ruler, square, sharp knife, sanding blocks, clamps, pins, cutting mat, scale and reliable measuring tools form a useful basic kit. More advanced builds may need a temperature-controlled covering iron, soldering tools or composite equipment; use each only with training and suitable ventilation.",
          "Protect eyes and hands when cutting, sanding or soldering. Secure the work, cut away from yourself and keep batteries away from metal scraps and heat. Label containers, keep blades covered and separate a battery charging area from flammable materials."
        ]
      },
      {
        title: "Hardware and buying decisions",
        paragraphs: ["Control horns, pushrods, clevises, hinges, fasteners, wheels, landing gear and motor mounts should be sized for the loads and attached to structure that can carry them. Before ordering, confirm dimensions, compatibility, replacement availability and shipping lead time. The original site lists India-oriented purchasing and community topics; availability changes, so check current stock and local club advice."]
      }
    ],
    quiz: [
      { q: "Why should adhesive compatibility be tested on scrap?", options: ["Adhesives all behave identically", "Some solvents or cure conditions can damage foam or weak joints", "A test makes glue cure instantly"], answer: 1, why: "Material compatibility and joint quality depend on the particular product and substrate." },
      { q: "What is important when using balsa for a structural member?", options: ["Grain direction and load path", "Paint color", "How many stickers fit"], answer: 0, why: "Balsa strength is directional and varies with grain and density." },
      { q: "Where should battery charging take place?", options: ["Beside loose metal tools", "In a supervised, suitable area away from flammables", "Inside a sealed container with no monitoring"], answer: 1, why: "Follow the battery and charger instructions and keep the charging area controlled." }
    ],
    references: ["Original learning site: wood, foam, composite and covering materials; adhesives; tools; hardware and India-specific buying considerations."]
  },
  {
    id: "building",
    title: "Build an airframe that stays true",
    shortTitle: "Building techniques",
    category: "BUILD & REPAIR",
    duration: "20 min",
    summary: "Follow a repeatable build sequence: plans, alignment, wing structure, fuselage, controls, covering and inspection.",
    outcomes: ["Use a flat reference surface and verify alignment", "Build around a clear structural load path", "Inspect before covering and before flight"],
    sections: [
      {
        title: "Read the plan before cutting",
        paragraphs: ["Identify the datum, centerline, wing incidence, dihedral, control hinges, spar locations, grain directions, hardware and removable access. Make a parts list and label left/right components. A plan is a geometric reference; preserve symmetry and verify dimensions rather than trusting a rough drawing or phone screen scale."]
      },
      {
        title: "Build the wing and fuselage",
        paragraphs: [
          "Build on a flat board. Pin or fixture ribs and spars without twisting them; check the leading and trailing edges, root alignment and tip height before bonding. Install joiners, shear webs and skins according to the design so the bending and torsion loads have a continuous path.",
          "Keep the fuselage straight and square. Reinforce the firewall, landing-gear attachment, wing saddle and tail mounting where loads enter the structure. Dry-fit the motor, battery and radio components before closing the fuselage to confirm cooling, wiring paths and service access."
        ]
      },
      {
        title: "Linkages, hinges and surface geometry",
        paragraphs: ["Hinges must be secure and move freely without a large gap. Pushrods should not flex under load; control horns should be aligned so the linkage geometry does not bind. Check that each surface reaches its specified travel and that the hinge cannot pull free. Use the design's control throws and transmitter setup as the baseline."]
      },
      {
        title: "Cover, finish and inspect",
        paragraphs: [
          "Cover only after checking joints, alignment, wiring and access. Apply heat evenly and watch for warping. Keep the aircraft light but do not omit reinforcement at a real load path. Before the maiden, inspect the airframe for cracks, loose hinges, insecure fasteners, sharp edges, exposed wires, battery movement and blocked cooling.",
          "A repair should restore both geometry and strength. After a crash, remove power and inspect the motor mount, spar, wing joiner, tail, battery and control linkages; hidden cracks can make an apparently minor repair unsafe."
        ],
        callout: { label: "Build quality check", text: "A straight, light, well-bonded airframe is more useful than a beautiful finish over a twisted or weak structure." }
      },
      {
        title: "Repeatable build-test-improve workflow",
        paragraphs: ["Photograph each stage, record actual component masses and check dimensions against the drawing. Test electronics on the bench with the propeller removed. Make a controlled first flight only after a competent person has inspected the complete aircraft."]
      }
    ],
    quiz: [
      { q: "What should be verified before bonding a wing structure?", options: ["Symmetry, straightness and alignment", "Only the paint color", "Only the motor brand"], answer: 0, why: "Twist and asymmetry are difficult to correct after the structure is bonded." },
      { q: "Why dry-fit radio and power components before closing the fuselage?", options: ["To check access, cooling and wiring routes", "To increase the final mass", "To avoid balancing the model"], answer: 0, why: "Component access and routing should be planned before the structure is closed." },
      { q: "After a crash, what should happen before another flight?", options: ["Immediately increase control throws", "Inspect structure, battery, motor mount and linkages", "Cover visible damage and fly"], answer: 1, why: "Hidden structural and electrical damage can cause a second failure." }
    ],
    references: ["Original learning site: foam-board and balsa construction, composite construction, plans, covering, joining, finishing, common mistakes and repair."]
  },
  {
    id: "power-systems",
    title: "Electric power systems",
    shortTitle: "Power systems",
    category: "ELECTRONICS",
    duration: "18 min",
    summary: "Understand motor KV, ESC current, LiPo capacity, servos and propeller matching as one tested system.",
    outcomes: ["Interpret battery S and capacity labels", "Explain motor KV and ESC roles", "Plan a measured, compatible power train"],
    sections: [
      {
        title: "Motor, ESC and propeller form one system",
        paragraphs: [
          "A brushless motor's KV rating is its approximate no-load revolutions per minute per volt; it is not a power rating. Actual loaded RPM is lower and depends on propeller, voltage, motor characteristics and airflow. A lower-KV motor often pairs with a larger propeller at lower RPM than a higher-KV motor, but use manufacturer recommendations.",
          "The ESC commutates a brushless motor and must support the battery cell count and expected current with appropriate margin and cooling. The BEC, if present, supplies receiver and servo power; confirm its voltage and current capability for the installed servos. A receiver brownout can look like a radio problem."
        ]
      },
      {
        title: "Battery labels and safe handling",
        paragraphs: [
          "A LiPo battery's S count describes cells in series; nominal voltage is commonly treated as about 3.7 V per cell, while the exact charging limit comes from the battery maker. Capacity in mAh is stored charge. The C rating is a manufacturer discharge rating, not a guarantee that wiring, connectors, ESC or battery temperature are safe at the implied current.",
          "Use a charger with the correct chemistry and cell count, balance charge according to its instructions, inspect for swelling or damage, and never leave charging unattended. Do not puncture, short, over-discharge or heat a pack. Isolate a suspect battery and follow local hazardous-waste guidance."
        ],
        callout: { label: "Before connecting", text: "Confirm polarity, connector condition, cell count and that the propeller is removed during setup. A propeller can start unexpectedly." }
      },
      {
        title: "Servos, wires and connectors",
        paragraphs: ["Servo torque, speed, size, voltage and gear type must suit the surface load and linkage geometry. Binding linkages increase current and can overheat a servo. Wire gauge and connectors should tolerate the measured current without excessive voltage drop or heat. Keep high-current motor wiring and receiver antennas sensibly routed, and secure all leads against vibration."]
      },
      {
        title: "Estimate and measure",
        paragraphs: [
          "Electrical input power is approximately voltage multiplied by current (P = V x I). Flight time is not simply capacity divided by the motor's maximum current: current varies throughout the flight and capacity should not be used beyond the pack maker's safe limit. Use manufacturer data and a suitable wattmeter to test the actual motor, ESC and propeller combination.",
          "A static bench test does not equal in-flight performance. Secure the model, keep people outside the propeller arc, use eye protection and follow equipment instructions. Stop if connectors, motor, ESC or battery become unusually hot, vibrate, smell or swell."
        ],
        formula: "Electrical input power (W) = voltage (V) x current (A)"
      }
    ],
    quiz: [
      { q: "What does a motor KV rating approximately describe?", options: ["No-load RPM per volt", "Battery capacity", "Maximum safe propeller diameter in inches"], answer: 0, why: "KV is a speed constant; it is not the motor's wattage or a complete propeller recommendation." },
      { q: "What does an ESC need to be compatible with?", options: ["Battery voltage/cell count, current and cooling needs", "Only the receiver color", "Only the model wingspan"], answer: 0, why: "The ESC must handle the power system's voltage and current with suitable cooling." },
      { q: "When is the safest time to configure motor endpoints and radio controls?", options: ["With the propeller installed and battery connected", "With the propeller removed and aircraft restrained", "During the first flight"], answer: 1, why: "A motor can start unexpectedly; remove the propeller during bench setup." }
    ],
    references: ["Original learning site: brushed and brushless motors, KV, ESC/BEC, LiPo cell count, C rating, capacity, servos, propellers, wiring and power-system matching."]
  },
  {
    id: "radio-control",
    title: "Radio control and aircraft setup",
    shortTitle: "Radio control",
    category: "ELECTRONICS",
    duration: "17 min",
    summary: "Trace the command path from transmitter to receiver, then configure channels, direction, rates and failsafe.",
    outcomes: ["Explain the transmitter-receiver-servo signal path", "Check control directions and model memory", "Describe binding and failsafe verification"],
    sections: [
      {
        title: "How a radio-control link works",
        paragraphs: ["The transmitter sends coded commands over a radio link. The receiver decodes channels and sends signals to servos or a flight controller. Servos move control surfaces through horns and linkages. This chain includes power, antennas, connectors and mechanical parts; a radio signal cannot compensate for a loose pushrod or low receiver voltage."]
      },
      {
        title: "Channels and transmitter setup",
        paragraphs: [
          "A basic fixed-wing model commonly uses channels for throttle, aileron, elevator and rudder; extra channels may operate flaps, retracts or other equipment. Channel order, stick mode and transmitter menus differ between radios. Label the model memory clearly and verify the selected model before connecting a battery.",
          "The supplied FlySky FS-i6 user manual is a device-specific reference for that transmitter. Menu names, firmware behavior and receiver compatibility can vary. Follow the manual for the exact radio/receiver pair rather than assuming another brand's bind or failsafe sequence applies."
        ]
      },
      {
        title: "Bind, direction, neutral and range",
        paragraphs: [
          "Binding pairs a transmitter and receiver according to their protocol. After binding, verify every control surface by moving one stick at a time: the surface must move in the direction that produces the intended aircraft response. A reversed channel or servo can turn a small correction into a loss of control.",
          "Center trims and set mechanical linkages before relying on electronic trim. Check the specified range-test procedure, antenna placement, receiver power and failsafe behavior with the propeller removed. Verify failsafe by the manufacturer's safe ground procedure; do not test signal loss in flight."
        ],
        callout: { label: "Direction check", text: "The pilot's control input must produce the correct aircraft response, not merely a surface movement that looks intuitive while standing behind the model." }
      },
      {
        title: "Rates, expo, mixing and telemetry",
        paragraphs: ["Control rates limit surface travel; expo changes response around stick center but does not reduce the maximum travel. Begin with a proven setup, use the plan's recommended throws and change one setting at a time. Mixing combines channel commands, for example elevons on a flying wing; confirm every direction and endpoint on the ground. Telemetry may report voltage, signal quality or other sensor readings, but sensor alarms must be configured and understood."]
      },
      {
        title: "Troubleshooting signal and control problems",
        paragraphs: ["For a dead or jittering servo, stop and isolate power before checking connectors, linkage binding, servo condition, receiver supply and model programming. For intermittent control, inspect antenna placement, battery/receiver voltage, wiring, range-test results and interference sources with an experienced operator. Never dismiss repeated glitches as harmless."]
      }
    ],
    quiz: [
      { q: "What should you do immediately after binding a new model?", options: ["Fly to see which control is reversed", "Check each control direction and failsafe on the ground", "Increase every surface throw"], answer: 1, why: "Ground verification catches reversed channels and unsafe failsafe setup before flight." },
      { q: "What does expo change?", options: ["Response around stick center", "The battery's cell count", "The receiver's physical range"], answer: 0, why: "Expo changes stick response around center; it does not automatically limit maximum surface travel." },
      { q: "How should you treat instructions for a FlySky FS-i6?", options: ["Assume menus match all radios", "Use the manual for that transmitter and compatible receiver", "Skip the manufacturer manual"], answer: 1, why: "Binding, menus and compatibility are device-specific." }
    ],
    references: ["FS-i6+User+manual.pdf: supplied 27-page FlySky transmitter manual. Its scanned pages are preserved for direct reference; consult the manual for device-specific button and menu sequences.", "Original learning site: transmitter and receiver roles, channels, mixing, control linkages, binding, telemetry and troubleshooting."]
  },
  {
    id: "flight-operations",
    title: "Flight skills, checklists and first flights",
    shortTitle: "Flight operations",
    category: "FLIGHT PRACTICE",
    duration: "19 min",
    summary: "Prepare with simulation, a disciplined field check, a clear flight plan and supervised, incremental practice.",
    outcomes: ["Plan a safe first-flight session", "Explain the control axes and basic maneuvers", "Use a pre-flight and post-flight routine"],
    sections: [
      {
        title: "Practice before the field",
        paragraphs: ["A simulator helps build orientation and stick coordination without risking the airframe. Practice straight flight, gentle turns, figure eights and approaches in calm conditions. A simulator does not reproduce every model's feel, wind, radio setup or field hazards; it is preparation, not certification."]
      },
      {
        title: "Pre-flight briefing and checks",
        paragraphs: ["Choose a legal, approved site with adequate separation from people, roads, buildings and obstacles. Check weather and wind, agree on pilot/spotter roles, confirm a landing area and emergency plan, and keep spectators behind the agreed boundary. Use the aircraft manual and club rules for the checklist."]
        ,
        bullets: ["Airframe: wing, tail, fasteners, hinges, control horns and landing gear secure.", "Radio: correct model memory, charged transmitter/receiver, range check, correct directions and verified failsafe.", "Power: battery secure, connectors sound, propeller undamaged and correctly secured.", "Field: airspace/site permission, clear runway, wind and people accounted for."]
      },
      {
        title: "Basic control axes and maneuvers",
        paragraphs: ["Ailerons command roll, elevator commands pitch and rudder commands yaw; their effects interact. Begin with the control response and maneuvers specified for the model. Gentle coordinated turns, maintaining a safe height and returning to a predictable approach are more valuable early skills than aerobatics."]
      },
      {
        title: "Takeoff, landing and emergencies",
        paragraphs: ["Takeoff and landing technique depend on the aircraft, surface, wind and local procedure. Use an experienced pilot's guidance and the manufacturer's instructions. Maintain a clear go-around or abort plan; never continue a poor approach toward people or obstacles. If power is lost, prioritize a controlled landing area and keep the model away from people. Do not attempt unfamiliar recovery maneuvers close to the ground."]
      },
      {
        title: "After landing: record and reset",
        paragraphs: ["Disarm or disconnect propulsion before approaching the propeller. Inspect battery temperature and condition, motor mount, wing and linkages. Record trim changes, wind, flight duration and observed behavior. Recheck fasteners and battery restraint before another flight; do not fly a damaged or questionable aircraft."]
      }
    ],
    quiz: [
      { q: "What is the role of a simulator?", options: ["Replace all model-specific setup and field training", "Build coordination before flying while recognizing its limitations", "Prove the aircraft is airworthy"], answer: 1, why: "Simulation builds familiarity but does not check the real model or replace instruction." },
      { q: "When should the model's control directions be checked?", options: ["On the ground before flight", "Only after takeoff", "Only after a crash"], answer: 0, why: "Control direction checks are a core pre-flight item." },
      { q: "What should happen if the aircraft is damaged after landing?", options: ["Fly again if it still powers on", "Inspect and repair it before another flight", "Increase transmitter power"], answer: 1, why: "A visible or hidden structural fault can worsen in flight." }
    ],
    references: ["Original learning site: simulator training, pre-flight checks, first flights, takeoff, basic maneuvers, landing, weather, aerobatics and crash recovery.", "Cessna-1971-Super-Skymaster-337-POH.pdf: used only as an example of checklist, limitations and emergency-procedure organization; its procedures are not RC instructions."]
  },
  {
    id: "advanced-systems",
    title: "Advanced aircraft and systems",
    shortTitle: "Advanced systems",
    category: "BEYOND THE BASICS",
    duration: "20 min",
    summary: "Explore FPV, autopilots, telemetry, CAD, 3D printing, propulsion choices and advanced aerodynamic trade-offs.",
    outcomes: ["Identify the extra risks of autonomous/FPV systems", "Describe what a PID loop does", "Choose a tool based on an engineering requirement"],
    sections: [
      {
        title: "FPV and video systems",
        paragraphs: ["An FPV system typically combines a camera, video transmitter, antennas, receiver and display or goggles. Frequency, power, antenna orientation and local radio rules matter. Video latency, loss of signal, battery use and visual orientation all affect safety. Keep a visual observer where required, maintain a safe operating boundary and follow local aviation and radio regulations."]
      },
      {
        title: "Flight controllers, stabilization and PID",
        paragraphs: ["A flight controller combines sensor measurements with pilot commands to stabilize an aircraft. Stabilized, altitude-hold and navigation modes depend on sensors, calibration and correct configuration; they do not make an aircraft fail-safe or legally autonomous. A PID controller uses proportional, integral and derivative terms to reduce error. Tuning is aircraft- and firmware-specific; use the manufacturer's documentation and change settings incrementally in a safe test environment."]
      },
      {
        title: "Telemetry, logging and navigation",
        paragraphs: ["Useful logs can include battery voltage/current, receiver link quality, attitude, position, altitude, motor output and vibration. An on-screen display can surface warnings but only if alarms are set correctly. GPS navigation depends on satellite reception, home-position behavior, compass calibration and failsafe setup. Verify every mode on the ground and follow current rules for autonomous functions."]
      },
      {
        title: "CAD, 3D printing and advanced structures",
        paragraphs: ["CAD helps maintain dimensions and iterate components, but printed parts are anisotropic: layer direction, infill, material, temperature and fasteners affect strength. PLA, PETG, nylon and flexible materials behave differently; none is automatically suitable for a flight-critical part. Prototype non-critical parts first and validate loads, temperature and vibration before flight use."]
      },
      {
        title: "Advanced aerodynamics and propulsion choices",
        paragraphs: ["Low-Reynolds-number airfoil selection, boundary-layer transition, turbulator placement, washout, winglets and high-lift devices involve trade-offs rather than universal upgrades. The design reference discusses flaps, drag reduction, aerobatics, canards, tandem and three-surface layouts, tailless aircraft, floats, landing gear, cowls and propeller selection. Treat each as a design study requiring stability, structure and test evidence.",
          "Electric, glow/nitro, gasoline and turbine systems differ in mass distribution, vibration, noise, heat, maintenance, fuel handling and support needs. Large-scale and night-flying models add structural, visibility, lighting and site requirements. Night flying needs redundant orientation cues and a site-approved lighting plan; lights do not make an aircraft visible to other airspace users. Begin only with appropriate training, approved equipment and a suitable site."
        ]
      }
    ],
    quiz: [
      { q: "What does a PID controller attempt to do?", options: ["Reduce a measured error using proportional, integral and derivative terms", "Increase wing area automatically", "Replace the pilot's safety checks"], answer: 0, why: "PID terms combine responses to current, accumulated and changing error." },
      { q: "Is an autopilot automatically a safety guarantee?", options: ["Yes, once GPS is installed", "No; configuration, sensors, failsafe and rules still matter", "Yes, when using a large battery"], answer: 1, why: "Automation can fail and remains subject to configuration and operational limits." },
      { q: "What is a key concern for a 3D-printed structural part?", options: ["Layer direction and validated loads", "Only the color", "That it is printable"], answer: 0, why: "Printed strength depends on material, layer orientation, temperature and loading." }
    ],
    references: ["Original learning site: FPV, autopilot, stabilization and PID, GPS, telemetry, CAD, 3D printing, advanced aerodynamics, propulsion types, turbine models, large-scale and night flying.", "Basics of RC Design.pdf: specialist design topics including high-lift devices, aerobatics, alternative configurations and floats."]
  },
  {
    id: "maintenance",
    title: "Maintenance and troubleshooting",
    shortTitle: "Maintenance",
    category: "FIELD PRACTICE",
    duration: "13 min",
    summary: "Use observable evidence to find faults, keep a useful aircraft log and maintain the model between flights.",
    outcomes: ["Apply a repeatable post-flight inspection", "Separate mechanical, electrical and radio symptoms", "Record useful maintenance history"],
    sections: [
      {
        title: "Inspect before and after flying",
        paragraphs: ["Check the airframe, hinges, linkage security, propeller, motor mount, landing gear, battery restraint, connectors and wiring. Listen and feel for new vibration, rubbing or looseness. After a rough landing, remove power and check the whole load path rather than repairing only the visible crack."]
      },
      {
        title: "Troubleshoot from symptom to cause",
        paragraphs: [
          "A symptom is not a diagnosis. A weak climb can result from battery sag, an unsuitable propeller, excess mass, poor cooling, damaged motor or incorrect thrust alignment. Control jitter can come from binding linkages, an overloaded BEC, a damaged servo, poor connections or radio issues. Inspect one subsystem at a time and reproduce problems only under safe bench conditions.",
          "Before electrical work, disconnect the flight battery and remove the propeller. Use appropriately rated test equipment and follow its instructions. If a battery is swollen, punctured, hot or otherwise suspect, stop using it and follow safe handling and disposal guidance."
        ]
      },
      {
        title: "Keep records that help",
        paragraphs: ["Record date, aircraft configuration, battery identifier, charge/discharge observations, repairs, control throws, CG, weather and flight notes. Track the source and date of any setup change. The supplied Cessna handbook devotes sections to servicing intervals, inspections and operational data; model-specific maintenance intervals must still come from the model and equipment manufacturers."]
      }
    ],
    quiz: [
      { q: "What is the best troubleshooting method?", options: ["Change many settings at once", "Inspect one subsystem at a time and record evidence", "Ignore intermittent problems"], answer: 1, why: "A controlled process helps isolate a cause and avoid hiding another fault." },
      { q: "What should you do before working around a motor and propeller?", options: ["Keep the battery connected", "Disconnect power and remove the propeller", "Hold the propeller while testing throttle"], answer: 1, why: "Unexpected motor start can cause severe injury." },
      { q: "Why keep a flight and maintenance log?", options: ["To trace configuration changes and recurring faults", "To replace the aircraft manual", "To guarantee a specific flight time"], answer: 0, why: "Consistent records make changes, repairs and recurring symptoms easier to understand." }
    ],
    references: ["Original learning site: radio troubleshooting, crash recovery, LiPo health indicators, structural and electronics checks.", "Cessna-1971-Super-Skymaster-337-POH.pdf: servicing and inspection structure only; maintenance instructions are aircraft-specific."]
  },
  {
    id: "competitions",
    title: "Competition design and project delivery",
    shortTitle: "Competitions",
    category: "PROJECTS",
    duration: "15 min",
    summary: "Turn a rulebook into measurable requirements, a build schedule, a tested aircraft and a clear technical report.",
    outcomes: ["Translate scoring rules into design constraints", "Plan test iterations and team responsibilities", "Prepare for technical inspection and event day"],
    sections: [
      {
        title: "Know the category and rulebook",
        paragraphs: ["Aeromodelling includes FAI free-flight, control-line, radio-control and scale classes, indoor events, aerobatics, gliders, space models and engineering design challenges. SAE Aero Design and university competitions may specify mission payloads, dimensions, propulsion, documentation and inspection. Examples named in the original topic map and project context include SAE Aero Design, Boeing National Aeromodelling, IIT Bombay Techfest, IIT Madras Shaastra, Aerodash and ProjectX at IIT Mandi; event names, organizers and availability can change. Always read the current rules and organizer updates."]
      },
      {
        title: "Design for the scored mission",
        paragraphs: ["Convert each rule into a requirement with a verification method: dimension, mass, payload, flight task, safety limit, report item or deadline. Identify disqualifying constraints first. A scoring optimization is only useful after the aircraft is safe, legal and capable of completing the mission reliably."]
      },
      {
        title: "Run a disciplined team project",
        paragraphs: ["Assign owners for aerodynamics, structures, propulsion, avionics, manufacturing, testing, logistics and documentation. Keep interfaces explicit: mass, dimensions, connectors, mounting patterns and deadlines. Use a budget with prototype and replacement reserves. Record design changes and test results so the final aircraft can be traced to evidence."]
      },
      {
        title: "Test, document and present",
        paragraphs: ["Use staged tests: component checks, structural inspection, restrained power checks, taxi or glide tests when appropriate, then supervised flight tests in controlled conditions. Avoid making an unverified change on event day. Prepare drawings, calculations, mass and balance data, safety analysis, maintenance notes and an honest account of test evidence. Rehearse technical inspection and presentations."]
      },
      {
        title: "Event-day readiness",
        paragraphs: ["Bring the current rulebook, aircraft documentation, approved batteries, charging equipment, tools, spares, protective gear and a transport plan. Confirm event-specific charging and flight-line rules. Keep a go/no-go checklist: a deadline or score is never a reason to fly a damaged or non-compliant aircraft."]
      }
    ],
    quiz: [
      { q: "What is the first step after choosing a competition?", options: ["Build the aircraft from memory", "Translate current rules into requirements and checks", "Optimize only payload"], answer: 1, why: "Requirements and disqualifying constraints drive the design and verification plan." },
      { q: "When should you make an untested aircraft change?", options: ["Just before the scored flight", "Only after controlled tests and review", "Whenever a teammate suggests it"], answer: 1, why: "Unverified changes can introduce failures and should be tested before event day." },
      { q: "Which event information is authoritative?", options: ["A prior season's schedule", "Current organizer rulebook and updates", "An unrelated model forum"], answer: 1, why: "Competition rules and dates are season-specific." }
    ],
    references: ["Original learning site: FAI F1/F2/F3/F4/S categories, Indian and international competition examples, SAE Aero Design, scoring, team formation, testing, reports, technical inspection, budget and checklists."]
  },
  {
    id: "practical-workshops",
    title: "Practical workshops and project portfolio",
    shortTitle: "Practical workshops",
    category: "HANDS-ON PRACTICE",
    duration: "40 min",
    summary: "Turn the theory into safe, measurable workshop tasks: paper-glider experiments, wing geometry, build coupons, radio checks and a documented test plan.",
    outcomes: ["Run small experiments with recorded variables", "Practise safe unpowered mechanical checks", "Create a project portfolio with evidence and reflections"],
    sections: [
      {
        title: "Set up a learning portfolio",
        paragraphs: [
          "Create one project record for each experiment. Record the question, prediction, equipment, dimensions, mass, steps, observations, result and next change. Label measurements with units and identify which values were measured, estimated or copied from a manufacturer. A photograph with a ruler or scale in the frame is more useful than a photograph alone.",
          "Use a repeatable format: project name and date; goal; materials and tools; safety check; procedure; measurements; what happened; what might have caused it; and the next test. Keep a copy of the aircraft configuration so a later result can be traced to the correct wing, CG, transmitter setup and battery."
        ],
        visual: "build-loop"
      },
      {
        title: "Workshop 1 — paper glider trim experiment",
        paragraphs: [
          "Fold two paper gliders from identical sheets and keep their geometry as similar as possible. Mark one A and one B. Add only a small, symmetric adjustment to B's trailing edge, then make several gentle, repeatable hand glides in a clear indoor space away from faces, lights and fragile objects. Do not throw toward people or use a sharp or weighted nose.",
          "Compare straightness, left/right drift and approximate glide distance from a marked, consistent launch point. Repeat each configuration several times and record every result rather than choosing only the best throw. Change one feature at a time; a stronger throw, changed launch angle or indoor draft can outweigh a small trim change."
        ],
        bullets: ["State a prediction before each test.", "Use the same pilot, launch height, direction and launch effort as consistently as possible.", "Stop if the area is crowded or a glider could strike a person."]
      },
      {
        title: "Workshop 2 — measure wing geometry and loading",
        paragraphs: [
          "Measure the span of a flat wingtip-to-wingtip and record the reference area. For a rectangular planform use S = b c. For a simple trapezoid use S = b(cr + ct)/2. Convert to consistent units before calculating aspect ratio b²/S. Sketch the planform and label span, root chord, tip chord and the area convention.",
          "Weigh the complete model without the battery only if comparing that condition is useful, then weigh it again ready to fly with the specified battery and equipment. Calculate mass loading in g/dm² or force loading in N/m², clearly stating which one. The design lab can check arithmetic; it cannot declare the aircraft safe or predict exact flight speed."
        ],
        formula: "S(rectangular) = b x c  |  AR = b^2 / S  |  mass loading = mass / S",
        visual: "wing-planform"
      },
      {
        title: "Workshop 3 — balance point and mass moment",
        paragraphs: [
          "Begin with a paper glider or an unpowered, safe model. Mark a reference datum and measure each component's arm forward or aft using one consistent sign convention. For a complete model, CG is the sum of each component's mass times its arm divided by total mass. Compare the calculation with a physical balance point.",
          "Only use the published CG range for the exact aircraft when checking an RC model. Keep the correct battery, payload and accessories installed. This workshop teaches bookkeeping; it is not permission to move a flight-ready aircraft's CG outside its proven range. Secure loose mass before every supervised flight."
        ],
        formula: "xCG = sum(mi x xi) / sum(mi)",
        callout: { label: "Do not improvise a flying CG", text: "Use the exact plan or manufacturer's CG range. An aft shift can rapidly remove pitch stability." }
      },
      {
        title: "Workshop 4 — materials and adhesive test coupons",
        paragraphs: [
          "Use offcuts of the exact material and adhesive intended for a build. Make several identical small joints, label the adhesive, substrate, preparation and cure time, and follow the product safety data for ventilation, gloves and eye protection. Do not create fumes or use hot tools without an adult/qualified supervisor and appropriate controls.",
          "After full cure, compare the coupons using the same gentle loading method and observe whether failure occurred in the substrate, adhesive layer or an edge peel. This is a qualitative comparison, not a certified structural test. Never extrapolate the result to a wing spar, motor mount or flight-critical joint without engineering design and suitable testing."
        ]
      },
      {
        title: "Workshop 5 — control-surface geometry and direction",
        paragraphs: [
          "With a model restrained and all propulsion physically safe (remove the propeller and disconnect the battery when appropriate), inspect hinge security, horn attachment and pushrod movement. Check the surface travel against the aircraft plan at the specified measuring point. Photograph the neutral position and each endpoint so the setup is repeatable.",
          "With radio power only as required by the manual and a helper present, move one control at a time and confirm the surface produces the intended aircraft response. Check combined commands only after individual axes pass. Never test failsafe by switching off the transmitter while an aircraft is airborne; follow the receiver manufacturer's ground procedure."
        ],
        visual: "control-surfaces"
      },
      {
        title: "Workshop 6 — component and wiring map",
        paragraphs: [
          "Draw the command path from transmitter to receiver to servo/control surface, and draw the power path from battery to ESC to motor. Mark the BEC output to receiver/servos if the system has one. Label connectors, polarity, cell count, wire routing and the correct manual for each component.",
          "With the propeller removed, identify a safe physical battery disconnect and inspect that wiring is insulated, secured and clear of moving parts. Do not energize an unfamiliar setup or guess connector polarity. Current and power tests require appropriately rated instruments, a safe restraint and a trained supervisor."
        ],
        visual: "radio-chain"
      },
      {
        title: "Workshop 7 — simulator and field-brief practice",
        paragraphs: [
          "Use a simulator to practise a repeatable circuit: maintain orientation, make gentle turns, hold a chosen height, approach from a planned direction and go around when the approach is unstable. Set one goal per session and record how many attempts were stable. Simulator results build coordination but do not certify skill or aircraft readiness.",
          "Create a mock field briefing with a map: pilot station, spectator line, flight area, landing direction, spotter position, obstacles, emergency landing areas and the stop call. Discuss wind change, another aircraft entering the area and a dead-stick scenario. Actual flying must follow current rules, an approved site procedure and in-person instruction."
        ],
        visual: "field-layout"
      },
      {
        title: "Workshop 8 — assemble a supervised test card",
        paragraphs: [
          "A test card should identify the aircraft configuration, objective, environmental conditions, responsible pilot/spotter, sequence, pass criteria, abort criteria and data to record. Start with inspection and ground checks. A first flight should not simultaneously test a new wing, new CG, new motor, new radio mix and new flight controller.",
          "Stop when weather, equipment or pilot readiness falls outside the plan. After the test, note what was observed rather than only whether it 'felt good'. A qualified instructor or experienced builder should review any proposed flight-test change before the next flight."
        ],
        bullets: ["Configuration: airframe, mass, CG, battery, propeller, radio memory and control throws.", "Go/no-go: safe site, current permission, weather, airspace and all pre-flight checks passed.", "Abort: control anomaly, structural damage, abnormal vibration/heat, people in the area or lost situational awareness.", "Evidence: measured result, anomaly, action taken and reviewer."]
      }
    ],
    quiz: [
      { q: "Why change only one variable in a glider experiment?", options: ["To make the paper look neat", "To help isolate which change affected the result", "To guarantee a longer flight"], answer: 1, why: "Controlled experiments make cause and effect easier to interpret." },
      { q: "What should a workshop record distinguish?", options: ["Measured values from estimates and manufacturer data", "Only successful results", "Only photographs"], answer: 0, why: "Traceable data needs clear provenance and units." },
      { q: "For a trapezoidal wing with span b and root/tip chords cr and ct, area is approximately:", options: ["b(cr + ct)/2", "b² x cr", "cr/ct"], answer: 0, why: "The trapezoid area is span times average chord." },
      { q: "What determines the safe CG range of a completed aircraft?", options: ["The exact validated plan or manufacturer data", "A universal percentage for every model", "The position that feels most agile"], answer: 0, why: "CG range is design-specific; an aft shift can reduce stability." },
      { q: "What is the purpose of an adhesive test coupon?", options: ["Qualitatively compare compatible small joints before building", "Certify a full wing spar from one sample", "Skip safety data and ventilation"], answer: 0, why: "A coupon can reveal compatibility but is not a certified structural test." },
      { q: "What is essential before checking RC control directions?", options: ["Make the propulsion physically safe and follow the exact manual", "Install a larger propeller", "Test it in flight"], answer: 0, why: "Ground verification and propeller safety prevent a setup error becoming an injury." },
      { q: "In a power diagram, an ESC normally sits between:", options: ["Battery and motor", "Wing and tail", "Transmitter and pilot"], answer: 0, why: "The ESC controls power flow from the battery to an electric motor." },
      { q: "What does a simulator not prove?", options: ["That the real aircraft is airworthy or the site is legal", "That practice can improve orientation", "That a circuit can be rehearsed"], answer: 0, why: "The real aircraft, setup, site and supervision still need independent verification." },
      { q: "Which item belongs in a flight-test card?", options: ["Abort criteria and required observations", "Only the hoped-for result", "A guarantee that the test cannot fail"], answer: 0, why: "A test requires explicit pass/abort criteria and evidence to record." },
      { q: "When should a supervised test stop?", options: ["When a safety limit or abort condition is reached", "Only after using every battery", "Never during a planned test"], answer: 0, why: "Stop criteria protect people and equipment when assumptions no longer hold." }
    ],
    references: ["Practical learning activities are original educational exercises informed by the supplied RC design reference and the course's construction, radio, flight and safety topics. They are not certified construction drawings or flight-test approval."]
  },
  {
    id: "safety",
    title: "Safety, regulations and responsible flying",
    shortTitle: "Safety & rules",
    category: "FLIGHT PRACTICE",
    duration: "18 min",
    summary: "Build non-negotiable habits for propellers, LiPo batteries, field layout, weather, emergencies and legal operation.",
    outcomes: ["Apply a propeller-safe setup routine", "Recognize LiPo warning signs", "Find current rules for the place and aircraft you fly"],
    sections: [
      {
        title: "Propeller and motor safety",
        paragraphs: ["Treat every propeller as capable of severe injury. Remove it during radio, ESC and motor configuration; keep hands, clothing and people away from the propeller arc; restrain the model before any powered test; and never stand in line with a spinning propeller. Confirm propeller condition, direction, adapter and retention before flight."]
      },
      {
        title: "Lithium-polymer battery safety",
        paragraphs: ["Inspect packs for swelling, punctures, crushed corners, damaged leads, unusual heat or odor. Use a compatible balance charger, verify cell count and charging mode, follow the maker's voltage limits and monitor charging. Store and transport packs as instructed by their manufacturer and applicable transport rules. Do not charge unattended or near flammable material. For smoke, fire or a damaged pack, move people away and follow local emergency guidance; do not handle a failing pack."]
      },
      {
        title: "Field, weather and people",
        paragraphs: ["Use a recognized site with permission, a clear flight area, a defined pilot station, separation from spectators and a landing zone. Agree on calls and spotter duties. Do not fly toward people, roads, animals, buildings or other aircraft. Wind, gusts, rain, poor visibility, lightning, heat and cold can change control, battery performance and safe recovery. Stop when conditions exceed your skill, aircraft limits or site rules."]
      },
      {
        title: "Emergency planning",
        paragraphs: ["Before launch, agree how to call a stop, who takes control during buddy-box instruction, where to land after a power or radio problem and how to keep bystanders clear. Set and verify the manufacturer's failsafe behavior on the ground. If control is uncertain, prioritize people and a safe landing area; do not chase a flyaway into a restricted or hazardous area."]
      },
      {
        title: "Regulations change: verify official sources",
        paragraphs: ["Rules depend on country, aircraft classification, weight, operating purpose, airspace, radio equipment and location. Check the current aviation authority, airspace maps, event/site rules and radio-frequency requirements immediately before operating. A page on this site is educational and is not legal advice. Do not rely on old weight categories, thresholds or no-fly-zone summaries."]
        ,
        links: [
          { label: "India: DGCA Digital Sky", url: "https://digitalsky.dgca.gov.in/" },
          { label: "United States: FAA recreational flyers", url: "https://www.faa.gov/uas/recreational_flyers" },
          { label: "United Kingdom: CAA drones", url: "https://www.caa.co.uk/drones/" },
          { label: "Europe: EASA drones", url: "https://www.easa.europa.eu/en/domains/civil-drones-rpas" },
          { label: "FAI Aeromodelling Commission", url: "https://www.fai.org/commission/ciam" }
        ]
      },
      {
        title: "First aid, supervision and a go/no-go decision",
        paragraphs: ["Keep a stocked first-aid kit and know the site's emergency address and contact procedure. Learn first aid from a qualified provider; for serious propeller cuts, burns, smoke or chemical exposure, call local emergency services and follow professional instructions rather than relying on an online checklist. Beginners and young pilots need direct supervision. A buddy-box system lets an instructor transfer control through a compatible, correctly configured second transmitter; verify the transfer switch and model response on the ground before training.",
          "Ask the flying club and insurer what liability cover applies to the pilot, aircraft, event and location. A club membership or policy may have exclusions and may not cover every activity or jurisdiction. If the aircraft, radio, weather, field or pilot is not ready, do not fly."]
      }
    ],
    quiz: [
      { q: "What should you do while configuring a motor and ESC?", options: ["Remove the propeller", "Hold the model by its propeller", "Point the propeller toward people"], answer: 0, why: "Removing the propeller prevents unexpected startup from becoming a propeller strike." },
      { q: "What should you do with a swollen LiPo pack?", options: ["Continue flying until empty", "Stop using it and follow safe isolation/disposal guidance", "Puncture it to release pressure"], answer: 1, why: "A swollen pack is damaged and can be a fire hazard; do not puncture or keep using it." },
      { q: "Which rules should you follow?", options: ["An old online summary", "Current aviation, airspace, radio and site rules for your location", "The rules from a different country"], answer: 1, why: "Regulations vary and change; verify authoritative current rules for your operation." }
    ],
    references: ["Original learning site: propeller safety, LiPo risks and health, field layout, weather, inspections, Indian and international regulations, first aid, insurance, buddy-box training, emergency procedures and checklists.", "Official links above are starting points, not a replacement for current local rules."]
  }
];
