const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [{
    'kind': 'category',
    'name': 'LOGIC',
    'contents': [{
      'kind': 'block',
      'type': 'controls_repeat_ext',
      'inputs': {
        'TIMES': {
          'shadow': {
            'type': 'math_number',
            'fields': {
              'NUM': 5
            }
          }
        }
      }
    },
    ]
  },
    {
      'kind': 'category',
      'name': 'LOOPS',
      'contents': [{
        'kind': 'block',
        'type': 'controls_repeat_ext',
        'inputs': {
          'TIMES': {
            'shadow': {
              'type': 'math_number',
              'fields': {
                'NUM': 5
              }
            }
          }
        }
      },
      {
        'kind': 'block',
        'type': 'datatypes'//,
        // 'inputs': {
        //   'TIMES': {
        //     'shadow': {
        //       'type': 'math_number',
        //       'fields': {
        //         'NUM': 5
        //       }
        //     }
        //   }
        // }
      }
      ]
    }]
};
