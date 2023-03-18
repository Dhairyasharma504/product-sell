// schemas/pet.js
export default {
  name: 'product',
  type: 'document',
	title: 'Products',






  initialValue: {
    status: "active"
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Not Active', value: 'notActive'}
        ], // <-- predefined values
      }
    },
    {
      title: "Variants",
      type: "array",
      name: "variants",
      validation: Rule => Rule.min(1),
      of: [
        {
          type: "object",
          name: "variant",
          fields: [
            { type: "string", name: "type", title:"Type",
            initialValue: 'type',
            options: {
              list: [
                { title: 'PPR', value: 'ppr' },
                { title: 'CPVC', value: 'cpvc' },
                { title: 'PVC',  value: 'pvc' },

              ],
            }
          },
            { type: "string", name: "companyname", title:"Company Name"  ,
            initialValue: 'type',
            options: {
              list: [
                { title: 'Prince', value: 'prince' },
                { title: 'Finolex', value: 'finolex' },
                { title: 'Euro',  value: 'euro' }, { title: 'Fusion',  value: 'fusion' }, { title: 'Apollo',  value: 'Apollo' },

              ],
            }

          },
            { type: "number", name: "price", title:"Price" },
            { type: "string", name: "size", title:"Size",
            initialValue: 'size',
            options: {
              list: [
                { title: '15mm', value: '15mm' },
                { title: '20mm', value: '20mm' },
                { title: '25mm',  value: '25mm' },
                { title: '32mm',  value: '32mm' },
                { title: '40mm',  value: '40mm' },
                { title: '50mm',  value: '50mm' },
                { title: '20mm x 15mm', value: '20mm x 15mm' },
                { title: '25mm x 15mm', value: '25mm x 15mm' },
                { title: '25mm x 20mm',  value: '25mm x 20mm' },
                { title: '40mm x 25mm',  value: '40mm x 25mm' },
                { title: '50mm x 25mm',  value: '50mm x 25mm' },
                { title: '50mm x 40mm',   value: '50mm x 40mm' },
              ], // <-- predefined values
              //layout: 'radio' // <-- defaults to 'dropdown'
            }

          }
          ]
        }
      ],


    }

  ]



}