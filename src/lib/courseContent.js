
// This file will hold the curriculum data: Levels and Lessons.

export const courseContent = [
  {
    id: 'hidden-python',
    title: 'The Hidden Python Interpreter',
    description: 'Version 1.1.0',
    lessons: [
      {
        id: 'PHASE_1_BOOT',
        title: 'The Boot: Setting the Anchor',
        content: `
### The Boot: Setting the Anchor

How does a universe start? Before your code even breathes, the OS grants a plot of land called RAM. But memory is chaos. To create order, Python plants its first flag: the Root Metaclass. It is the Factory Manager that will build all other factories.
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_1_BOOT',
            xRayContent: "OS Action: Map `python.exe`.\nTarget: Static RAM (`.data`).\nAsset: `PyType_Type` (The Root).\nAddress: Fixed at `0x100A`.\nNote: This is the only object strictly hard-coded in C."
        },
        instructions: 'Watch the OS Truck dump the Anchor.'
      },
      {
        id: 'PHASE_2_COMPILATION',
        title: 'The Compilation: The Whistle',
        content: `
### The Compilation: The Whistle

Think your code is special? To the CPU, \`class person:\` is just graffiti. We need a translator. The Parser chews up your text and spits out a raw command: Opcode 71. It’s the mechanical whistle that yells, 'Start Building!'
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_2_COMPILATION',
            xRayContent: "Input: 'class' (Text).\nProcess: Tokenize -> Compile.\nOutput: Opcode 71 (`LOAD_BUILD_CLASS`).\nStack: Pushes name 'person'."
        },
        instructions: 'See the Shredder turn text into Gears.'
      },
      {
        id: 'PHASE_3_ALLOCATION',
        title: 'Construction: Breaking Ground',
        content: `
### Construction: Breaking Ground

The whistle blows! Opcode 71 wakes the C-Engine. First, it screams at the OS for a fresh block of Heap memory. Once allocated, it must answer the ultimate question: 'What am I?' It answers by wiring itself back to the Manager at \`0x100A\`.
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_3_ALLOCATION',
            xRayContent: "Syscall: `malloc` (Request Heap).\nNew Home: Address `0x8000`.\nIdentity: `ob_type` set to `0x100A`.\nMeaning: The object at `0x8000` is now a Type."
        },
        instructions: 'Watch the Crane build and the Welder connect.'
      },
      {
        id: 'PHASE_3_INHERITANCE',
        title: 'Construction: The Copy-Paste',
        content: `
### Construction: The Copy-Paste

But wait—you wrote \`pass\`. The blueprint is blank! Panic? No. The Engine steals the defaults. It hot-wires the Creator (\`tp_new\`) and Setup (\`tp_init\`) circuits to the standard \`object\` models. It’s a generic factory, but it works.
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_3_INHERITANCE',
            xRayContent: "Problem: No methods defined.\nFix: Pointer Copy.\n`tp_new` -> `object_new`.\n`tp_init` -> `object_init`.\nNamespace: Empty Dict created."
        },
        instructions: 'Observe the robotic arms installing default parts.'
      },
      {
        id: 'PHASE_4_INSTANCE',
        title: 'The Instance: Body & Soul',
        content: `
### The Instance: Body & Soul

Time to launch. You call \`person()\`. Watch the two-step shuffle: 1. The Allocator builds the body (Grey Box). 2. The Initializer gives it a soul. Since you used \`pass\`, the soul is empty, but the body is ready for business.
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_4_INSTANCE',
            xRayContent: "Trigger: `()` Operator.\nStep 1: `tp_new` calls `malloc` -> `0x9050`.\nStep 2: `tp_init` runs (No-op).\nLink: `0x9050` type -> `0x8000`."
        },
        instructions: 'Press Run and watch the Conveyor Belt.'
      }
    ]
  }
];
