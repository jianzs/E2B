import { Sandbox } from 'e2b'

async function createSandbox() {
  const sandbox = await Sandbox.create({
    logger: {
      warn: console.warn,
      error: console.error,
    },
  })

  sandbox.process.startAndWait('sudo apt-get install -y sysbench && sysbench memory --memory-block-size=512M --memory-total-size=512MB --memory-oper=write run').catch(console.error).then(() => {
    // sandbox.close()
  })

  return sandbox
}

export function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

async function createBatch<T>(length: number, m: () => Promise<T>): Promise<T[]> {
  const sandboxes = Array.from({ length }, m)

  return (await Promise.allSettled(sandboxes))
    .map((result) => {
      if (result.status === 'fulfilled') {
        return result.value
      }

      console.error('ERROR:', result.reason)
    })
    .filter(notEmpty)
}

const batchSize = 150
const batchCount = 300

const sandboxes: Sandbox[] = []

for (let i = 0; i < batchCount; i++) {
  createBatch(batchSize, createSandbox).then((s) => {
    console.log(`> batch ${i + 1}: ${s.length} sandboxes created`)
    sandboxes.push(...s)
  })
  await wait(500)
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// for (const s of sandboxes) {
//   try {
//     s.close()

//     // Randomly kill some sandboxes
//     if (Math.random() > 0.5) {
//       await Sandbox.kill(s.id)
//       continue
//     }
//   } catch (error) {
//     console.error('ERROR:', error)
//   }
// }

while (true) {
  console.log('-------------------')
  console.log(`> from ${batchCount * batchSize} sandboxes, ${sandboxes.length} were created`)
}

// process.exit(0)