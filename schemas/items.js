// schemas/pet.js
export default {
  name: 'product',
  type: 'document',
  title: 'Products',
  initialValue: {
    status: 'active',
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Not Active', value: 'notActive'},
        ], // <-- predefined values
      },
    },
    {
      type: 'string',
      name: 'companyname',
      title: 'Brand',
      initialValue: 'type',
      options: {
        list: [
          {title: 'Prince', value: 'prince'},
          {title: 'Prince type A', value: 'princetype'},
          {title: 'Finolex', value: 'finolex'},
          {title: 'Finolex A', value: 'finolextype'},
          {title: 'Euro', value: 'euro'},
          {title: 'D.T Plastic KG', value: 'd.tplastic'},
          {title: 'Fusion', value: 'fusion'},
          {title: 'Apollo', value: 'Apollo'},
          {title: 'Ravindra', value: 'ravindra'},
          {title: 'Jindal', value: 'jindal'},
          {title: 'Kalsi', value: 'kalsi'},
          {title: 'K.V.S', value: 'k.v.s'},
          {title: 'Cromptan', value: 'cromptan'},
          {title: 'Taj', value: 'taj'},
          {title: 'Not Registered', value: 'notRegistered'},
        ],
      },
    },
    {
      title: 'Variants',
      type: 'array',
      name: 'variants',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          name: 'variant',
          fields: [
            {type: 'string', name: 'title', title: 'Title-Size-Quantity'},
            {
              type: 'string',
              name: 'type',
              title: 'Type',
              initialValue: '',
              options: {
                list: [
                  {title: 'PPR', value: 'ppr'},
                  {title: 'CPVC', value: 'cpvc'},
                  {title: 'PVC', value: 'pvc'},
                  {title: 'GI', value: 'gi'},
                  {title: 'MS', value: 'ms'},
                  {title: 'UPVC', value: 'upvc'},
                  {title: 'CI', value: 'ci'},
                  {title: 'Brass', value: 'brass'},
                  {title: 'Steel', value: 'steel'},
                  {title: 'Moter', value: 'moter'},
                  {title: 'Mini Hand Pump', value: 'miniHandpump'},
                  {title: 'Water Tank', value: 'waterTank'},
                  {title: 'Plasti Tap', value: 'plastitap'},
                  {title: 'CP Fitting', value: 'cpfitting'},
                  {title: 'Plastic Fitting', value: 'plasticfitting'},
                  {title: 'seat', value: 'seat'},
                ],
              },
            },

            {type: 'number', name: 'price', title: 'Price'},

            {
              title: 'Images',
              name: 'images',
              type: 'image',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
            //   { type: "string", name: "size", title:"Size",
            //   initialValue: 'size',
            //   options: {
            //     list: [
            //       { title: '15mm', value: '15mm' },
            //       { title: '20mm', value: '20mm' },
            //       { title: '25mm',  value: '25mm' },
            //       { title: '32mm',  value: '32mm' },
            //       { title: '40mm',  value: '40mm' },
            //       { title: '50mm',  value: '50mm' },
            //       { title: '20mm x 15mm', value: '20mm x 15mm' },
            //       { title: '25mm x 15mm', value: '25mm x 15mm' },
            //       { title: '25mm x 20mm',  value: '25mm x 20mm' },
            //       { title: '40mm x 25mm',  value: '40mm x 25mm' },
            //       { title: '50mm x 25mm',  value: '50mm x 25mm' },
            //       { title: '50mm x 40mm',   value: '50mm x 40mm' },
            //     ], // <-- predefined values
            //     //layout: 'radio' // <-- defaults to 'dropdown'
            //   }

            // }
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'companyname',
    },
  },
}
