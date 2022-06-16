import React from 'react';
import TreeMenu from 'react-simple-tree-menu';

const Main = () => {
  const treeData = {
    'first-level-node-1': {  
      label: 'Folder 1',
      index: 0,
      nodes: {
        'second-level-node-1': {
          label: 'Subfolder 1',
          index: 0,
              nodes: {
                'forth-level-node-1': {
                  label: 'File 1',
                  index: 0,
                },
                'forth-level-node-2': {
                  label: 'File 2',
                  index: 0,
                },
                'forth-level-node-3': {
                  label: 'File 3',
                  index: 0,
                },
                'forth-level-node-4': {
                  label: 'File 4',
                  index: 0,
                },
                'forth-level-node-5': {
                  label: 'File 5',
                  index: 0,
                },
                'forth-level-node-6': {
                  label: 'File 6',
                  index: 0,
                },
                'forth-level-node-7': {
                  label: 'File 7',
                  index: 0,
                },
              },  
        },
        'second-level-node-2': {
          label: 'Subfolder 2',
          index: 0,
          nodes: {
            'third-level-node-1': {
              label: 'File 1',
              index: 0,
            },
            'third-level-node-2': {
              label: 'File 2',
              index: 0,
            },
          },
        },
        'second-level-node-3': {
          label: 'Subfolder 3',
          index: 0,
          nodes: {
            'subfolder-3-node-1': {
              label: 'File 1',
              index: 0,
            },
            'subfolder-3-node-2': {
              label: 'File 2',
              index: 0,
            },
          },
        },
      },
    },
    'first-level-node-2': {
      label: 'Folder 2',
      index: 1,
      nodes: {
        'second-level-node-2': {
          label: 'Subfolder 2',
          index: 0,
        },
      },
    },
  };
  return (
    <>
     <TreeMenu data={treeData} />
    </>
  );
}

export default Main;
