import { createPaths, pathsEnsureEndSlash } from '@/index'

const paths = pathsEnsureEndSlash(
  createPaths('api', {
    users: createPaths('users', {
      detail: createPaths('{id}', {
        info: 'info'
      })
    })
  })
)

test('Test Utils', () => {
  expect(paths.users.index).toBe('/api/users/')
  expect(paths.users.detail.index).toBe('/api/users/{id}/')
  expect(paths.users.detail.info).toBe('/api/users/{id}/info/')
})
