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
            { type: "string", name: "name", title:"Name" },
            { type: "number", name: "price", title:"Price" }
          ]
        }
      ],
    }
  ]
}