
// This file will hold the curriculum data: Levels and Lessons.

export const courseContent = [
  {
    id: 'level-1',
    title: 'Level 1 – Seeing Objects Everywhere',
    description: 'Goal: connect everyday objects → software objects.',
    lessons: [
      {
        id: 'what-is-object',
        title: 'What is an Object, Really?',
        content: `
### What is an Object, Really?

A cup on your table, a file on your computer, and a "user" in a website’s database all have three things in common:
**identity**, **properties**, and **actions**.

In object-oriented programming, an object is not some magic thing inside the CPU — it is a structured way of talking about "something" so the computer can store its properties and perform its actions.
        `,
        widgetId: 'ObjectIdentityWidget',
        instructions: 'Drag the labels "Identity", "Properties", and "Actions" onto the correct parts of the objects.'
      },
      {
        id: 'class-vs-object',
        title: 'Class vs Object – Blueprint vs House',
        content: `
### Class vs Object

A class is a design, an object is a built thing.

**Physical**: we can touch the house.
**Logical rule**: "HousePlan with 2 floors and 3 rooms" is an idea we use to build many houses.

In code, a **class** is the plan; each **object** (instance) is one actual house in memory.
        `,
        widgetId: 'BlueprintWidget',
        instructions: 'Click the blueprint to spawn new house objects into memory.'
      }
    ]
  },
  {
    id: 'level-2',
    title: 'Level 2 – Variables and Memory',
    description: 'Here we attack your variable confusion explicitly.',
    lessons: [
      {
        id: 'variables-math-vs-code',
        title: 'Variables in Math vs Variables in Code',
        content: `
### Variables in Math vs Code

In math, a variable often means "some unknown value":
$f(x) = x^2 + 2$ → "x could be anything".

In programming, a variable is different: it is a **name** attached to a specific **memory location** that currently holds a value.

*   The **name** is not physical. It’s a label in our source code.
*   The **memory cell** is physical: tiny electronic switches storing bits.
*   The **value** is the pattern of bits in that cell at this moment.

So a programming variable is our handle to a physical spot in memory, not some mysterious "unknown".
        `,
        widgetId: 'MemoryCellWidget',
        instructions: 'Click "Run" to see how the variable name maps to a physical memory address.'
      },
      {
        id: 'variables-as-references',
        title: 'A Variable is a Pointer',
        content: `
### A Variable is a Pointer

In many languages (like Python objects, or Java references), the variable doesn’t hold the object itself.
It holds a **reference**: a tiny value (like a memory address) that tells the CPU where the real object lives.

**Physical layer:**
*   Some bytes in RAM store the object’s data.
*   Some other bytes store the address of that object.

**Rule layer:**
We pretend the variable is the object, so code is easier to write and read.
        `,
        widgetId: 'ReferenceWidget',
        instructions: 'Reassign variable "x" and watch the reference arrow move.'
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
