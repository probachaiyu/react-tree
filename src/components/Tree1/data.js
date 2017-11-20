export const myTreeData = [
{
  name: 'Top Level',
  attributes: {
    keyA: 'val A',
    keyB: 'val B',
    keyC: 'val C',
  },
  children: [
  {
    name: 'Level 2: A',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
    {
      name: 'Level 3: A',
      attributes: {
        keyA: 'val A',
        keyB: 'val B',
        keyC: 'val C',
      },
      
    },
    {
      name: 'Level 3: B',
    },
    ]
  },
  {
    name: 'Level 2: B',
    children: [
    {
      name: 'Level 3: A',
      attributes: {
        keyA: 'val A',
        keyB: 'val B',
        keyC: 'val C',
      },
      children: [
      {
        name: 'Level 4: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        
      },
      {
        name: 'Level 4: B',
      },
      ]
      
    },
    {
      name: 'Level 3: B',
      children: [
      {
        name: 'Level 4: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        
      },
      {
        name: 'Level 4: B',
      },
      {
        name: 'Level 4: C',
      },
      {
        name: 'Level 4: D',
      },
      {
        name: 'Level 4: E',
      },
      ]
    },

    ]
  },
  ],
},
];