
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
  }
];
