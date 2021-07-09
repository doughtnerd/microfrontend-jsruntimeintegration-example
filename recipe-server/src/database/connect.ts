import { Knex, knex } from 'knex'

export async function connectDB(config: Knex.Config): Promise<Knex<any>> {
    const instance: Knex = knex(config)

    try { 
        const migrations = await instance.migrate.latest()
        console.log('Ran Migrations ', migrations)
    } catch(e) { 
        console.error(`Failed to start db connection: ${e.message}`)
        throw e
    }

    return instance
}