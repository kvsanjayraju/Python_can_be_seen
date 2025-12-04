
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
  },
  {
    id: 'level-3',
    title: 'Level 3 – The Hidden Python Interpreter',
    description: 'A deep dive into the hidden C-Engine, Memory allocation, and Object Creation.',
    lessons: [
      {
        id: 'phase-1-boot',
        title: 'The Boot: Static Origins',
        content: `
### The Boot: Static Origins

When you run a script, the Operating System wakes up. It grants memory to the application, but it has no idea what 'Python' is—it only sees bytes. In this chaos, the Interpreter hard-codes its first anchor: the Root Metaclass. This is the 'God Object' from which all other types will eventually be born.
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_1_BOOT',
            xRayContent: "OS Loader: Maps `python.exe` to RAM.\nTarget: `.data` segment (Static Memory).\nEntity: `PyType_Type` (The Metaclass).\nAddress: Fixed at `0x100A`.\nConstraint: The CPU executes instructions here blindly; only the Python Runtime understands that data at `0x100A` represents a Type."
        },
        instructions: 'Watch as the OS grants memory and the Root Metaclass is anchored.'
      },
      {
        id: 'phase-2-compilation',
        title: 'The Compilation: Text to Bytecode',
        content: `
### The Compilation: Text to Bytecode

You write \`class person: pass\`. To the C-Engine, this text is meaningless. Before execution can happen, the Parser must translate your high-level intent into a numbered command (Opcode) that the Interpreter's loop can switch on.
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_2_COMPILATION',
            xRayContent: "Input: ASCII text `class`.\nTransformation: Tokenizer -> AST -> Bytecode.\nResult: Opcode 71 (`LOAD_BUILD_CLASS`).\nStack: The string 'person' is pushed onto the evaluation stack."
        },
        instructions: 'Observe the text transforming into Opcode 71 and pushing data to the stack.'
      },
      {
        id: 'phase-3-allocation',
        title: 'C-Engine Construction: Allocation',
        content: `
### C-Engine Construction: Allocation

The Interpreter encounters Opcode 71. It triggers a hidden C-function to build the class. First, it must ask the OS for new memory on the Heap. Once allocated, it must define what this new object *is* by pointing it back to the Root Metaclass.
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_3_ALLOCATION',
            xRayContent: "Trigger: `builtin___build_class__`.\nSyscall: `malloc(sizeof(PyTypeObject))`.\nLocation: Heap Memory, Address `0x8000`.\nStruct Field: `ob_type` (Offset +8 bytes).\nAction: `ob_type` is set to `0x100A` (Address of `PyType_Type`)."
        },
        instructions: 'Watch the memory allocation and the link to the Root Metaclass.'
      },
      {
        id: 'phase-3-inheritance',
        title: 'C-Engine Construction: The Empty Pass',
        content: `
### C-Engine Construction: The Empty Pass

The user wrote \`pass\`, meaning the class body is empty. However, a Python object cannot function without blueprints for creation and initialization. The C-Engine solves this by copying the default behaviors from the base \`object\` type.
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_3_INHERITANCE',
            xRayContent: "Logic: No custom `__new__` or `__init__` defined.\nStruct Field: `tp_new` (Creator slot).\nStruct Field: `tp_init` (Initializer slot).\nAction: `tp_new` is set to `object_new`.\nAction: `tp_init` is set to `object_init`.\nNamespace: `tp_dict` created (Empty Hash Map)."
        },
        instructions: 'See how the empty class gets its default behaviors from the base object.'
      },
      {
        id: 'phase-4-instance',
        title: 'The Instance Handover',
        content: `
### The Instance Handover

The class is ready. The user calls \`person()\`. This triggers a two-step dance. First, the Metaclass uses the \`tp_new\` pointer to allocate memory for the instance (The Body). Second, it passes that memory address to \`tp_init\` to set it up (The Soul).
        `,
        widgetId: 'PythonInterpreterWidget',
        widgetProps: {
            phase: 'PHASE_4_INSTANCE',
            xRayContent: "Trigger: `PyObject_Call`.\nStep A (Allocation): `tp_new` (via `object_new`) calls `malloc`. Result: Instance at `0x9050` (Grey Box).\nStep B (Pass-through): Address `0x9050` is passed as `self` argument.\nStep C (Init): `tp_init` runs on `0x9050`. (No-op).\nResult: `ob_type` of `0x9050` points to `0x8000` (`person` class)."
        },
        instructions: 'Observe the instance creation and initialization process.'
      }
    ]
  }
];
