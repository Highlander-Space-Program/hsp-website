// Team descriptions from HSP-Website-Information/JSON flies/team-structure.json.
export const teamGroups = [
  {
    id: "structures",
    name: "Structures",
    subteams: [
      {
        name: "Airframe",
        image: "airframe.webp",
        alt: "Rocket airframe resting on its launch rail in the desert.",
        description:
          "The Airframe subteam designs and fabricates composite body structures optimized for weight, strength, and aerodynamics. They perform structural simulations and material testing to ensure flight readiness.",
      },
      {
        name: "Recovery",
        image: "recovery.webp",
        alt: "HSP members retrieving a rocket from the desert.",
        description:
          "The Recovery subteam develops parachute deployment and recovery mechanisms to ensure safe rocket retrieval post-launch. They conduct ground and drop tests to validate system reliability.",
      },
      {
        name: "Payload",
        image: null,
        alt: null,
        description:
          "The Payload subteam designs and integrates scientific or experimental payloads while managing data collection and sensor integration. They ensure payload stability and functionality during flight.",
      },
    ],
  },
  {
    id: "propulsion",
    name: "Propulsion",
    subteams: [
      {
        name: "Combustion Devices",
        image: "combustion-devices.webp",
        alt: "Rocket engine mounted on a horizontal test stand.",
        description:
          "The Combustion Devices subteam designs and manufactures the combustion chamber, injector, and nozzle while analyzing thermal and structural properties. They optimize injector design for efficient fuel and oxidizer mixing.",
      },
      {
        name: "Fluid Systems",
        image: "fluid-systems.webp",
        alt: "Valves and plumbing in the rocket propellant feed system.",
        description:
          "The Fluids Systems subteam designs and assembles the rocket's propellant feed system, handling cryogenic and high-pressure propellants. They create plumbing layouts and select valves and regulators for precise fuel and oxidizer flow control.",
      },
    ],
  },
  {
    id: "controls",
    name: "Controls",
    subteams: [
      {
        name: "Firmware",
        image: "firmware.webp",
        alt: "Team members connecting and testing rocket electronics.",
        description:
          "The Firmware subteam writes embedded software for rocket operations including fill, ignition, and launch sequences using C/C++ and Python. They implement safety checks and automation systems for reliable rocket operations.",
      },
      {
        name: "Hardware",
        image: "hardware.webp",
        alt: "Wiring and electronics inside a rocket control enclosure.",
        description:
          "The Hardware subteam designs and tests electronic systems for the rocket, working with microcontrollers, wiring, and PCB design. They ensure communication between sensors and control systems.",
      },
    ],
  },
  {
    id: "ground-support-equipment",
    name: "Ground Support Equipment",
    subteams: [
      {
        name: "Data Acquisition",
        image: "data-acquisition.webp",
        alt: "Computers and equipment at the ground control station.",
        description:
          "The DAQ subteam collects and analyzes real-time flight and engine data including thrust, temperature, and pressure measurements. They develop sensor systems for monitoring and performance analysis.",
      },
      {
        name: "GSE Hardware",
        image: "gse-hardware.webp",
        alt: "Ground support plumbing and hardware beside the launch tower.",
        description:
          "The GSE Hardware subteam designs, manufactures, and assembles the engine test stand for static fire testing. They integrate structural, electrical, and fluid systems while handling launch pad setup during test days.",
      },
    ],
  },
  {
    id: "operations",
    name: "Operations",
    subteams: [
      {
        name: "Manufacturing",
        image: "manufacturing.webp",
        alt: "An HSP member machining a component on a lathe.",
        description:
          "The Manufacturing subteam designs, manufactures, and assembles our hardware. They integrate structural, electrical, and fluid systems while handling launch pad setup during test days.",
      },
    ],
  },
];
