
// This file will hold the curriculum data: Levels and Lessons.

export const courseContent = [
  {
    id: 'hidden-python',
    title: 'The Hidden Python Interpreter',
    description: 'Version 2.0.0 - Visual First',
    lessons: [
      {
        id: 'PHASE_1_BOOT',
        title: 'The Boot: Setting the Anchor',
        content: `
### The Boot: Setting the Anchor

**Scenario:** You double-click a Python script. The screen goes black. The Operating System is waking up.

**The Problem:** Your script needs memory to live in, but memory is a chaotic ocean of random bytes. How does Python find its footing in this chaos?

It needs a fixed point. A "North Star" that never moves.
        `,
        widgetId: 'InteractiveLesson',
        widgetProps: {
            challenge: {
                question: "Where does Python plant its first flag in memory?",
                options: ["The Heap (Dynamic)", "The Stack (Temporary)", "Static Data (Fixed)"],
                correctAnswer: "Static Data (Fixed)"
            },
            visual: {
                type: 'ANCHOR',
                title: "The Root Metaclass",
                description: "PyType_Type (0x100A)"
            },
            xRay: "The OS maps `python.exe` to a hard-coded address. `PyType_Type` is the only object in Python that isn't born—it just *is*."
        },
        instructions: 'Answer the challenge to reveal the architecture.'
      },
      {
        id: 'PHASE_2_COMPILATION',
        title: 'The Compilation: The Whistle',
        content: `
### The Compilation: The Whistle

**Scenario:** You write \`class person:\` and save the file.

**The Problem:** The CPU speaks binary, not English. It sees your code as meaningless graffiti. It needs a command to start the factory.

We need a translator to convert your high-level intent into a mechanical signal.
        `,
        widgetId: 'InteractiveLesson',
        widgetProps: {
            challenge: {
                question: "What does 'class person:' become before execution?",
                options: ["A Function", "Opcode 71", "A String"],
                correctAnswer: "Opcode 71"
            },
            visual: {
                type: 'GEAR',
                title: "LOAD_BUILD_CLASS",
                description: "Opcode 71"
            },
            xRay: "The Parser shreds your text into Bytecode. Opcode 71 is the specific signal that wakes up the Class-Building machinery."
        },
        instructions: 'Guess the translation output.'
      },
      {
        id: 'PHASE_3_ALLOCATION',
        title: 'Construction: Breaking Ground',
        content: `
### Construction: Breaking Ground

**Scenario:** The signal (Opcode 71) has been fired. The machinery starts rumbling.

**The Problem:** We need space to build this new class, and we need to define what it *is*.

The engine makes a phone call to the OS, demanding land. But land alone isn't enough—it needs a legal designation.
        `,
        widgetId: 'InteractiveLesson',
        widgetProps: {
            challenge: {
                question: "How does the new object know it is a Type?",
                options: ["It guesses", "It links to the Root", "It checks the filename"],
                correctAnswer: "It links to the Root"
            },
            visual: {
                type: 'CONSTRUCTION',
                title: "Memory Allocation",
                description: "Address 0x8000"
            },
            xRay: "We `malloc` a generic block at 0x8000. Then, we wire its `ob_type` field directly to the Root Metaclass at 0x100A. Now it's a Type."
        },
        instructions: 'Identify the source of identity.'
      },
      {
        id: 'PHASE_3_INHERITANCE',
        title: 'Construction: The Copy-Paste',
        content: `
### Construction: The Copy-Paste

**Scenario:** You wrote \`pass\`. Your blueprint is blank.

**The Problem:** A car factory can't build cars without blueprints. If you don't provide instructions for how to create or initialize the object, the factory stalls.

The solution? Industrial espionage. The engine steals the plans from the default models.
        `,
        widgetId: 'InteractiveLesson',
        widgetProps: {
            challenge: {
                question: "Where do the default behaviors come from?",
                options: ["The Base Object", "The Compiler", "Random Memory"],
                correctAnswer: "The Base Object"
            },
            visual: {
                type: 'BLUEPRINT',
                title: "Method Resolution",
                description: "Copying Defaults"
            },
            xRay: "Since `tp_new` is null, we copy the pointer from `object_new`. We fill the gaps with standard parts."
        },
        instructions: 'Determine the fallback strategy.'
      },
      {
        id: 'PHASE_4_INSTANCE',
        title: 'The Instance: Body & Soul',
        content: `
### The Instance: Body & Soul

**Scenario:** The factory is finished. You type \`p = person()\`.

**The Problem:** We need a concrete instance. This requires two distinct actions: building the physical container (Allocation) and giving it values (Initialization).

It's a two-step dance: Body first, Soul second.
        `,
        widgetId: 'InteractiveLesson',
        widgetProps: {
            challenge: {
                question: "Which step happens first?",
                options: ["__init__ (Soul)", "__new__ (Body)", "Garbage Collection"],
                correctAnswer: "__new__ (Body)"
            },
            visual: {
                type: 'FACTORY',
                title: "Instantiation",
                description: "The Call Cycle"
            },
            xRay: "1. `tp_new` calls malloc to create the Grey Box (Body). 2. `tp_init` is called to set properties (Soul). Only then is the object returned."
        },
        instructions: 'Order the creation events.'
      }
    ]
  }
];
