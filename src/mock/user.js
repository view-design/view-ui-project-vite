import Mock from 'mockjs'

Mock.mock(/\/userList/, 'get', {
  code: 200,
  data: [
    {
      id: '@id',
      name: '@name'
    }
  ]
})
