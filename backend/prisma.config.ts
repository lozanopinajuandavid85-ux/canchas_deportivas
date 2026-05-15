import { defineConfig } from 'prisma/config'

export default defineConfig({
  datasource: {
    url: 'postgresql://postgres:postgres@localhost:5432/canchas_deportivas',
  },
})